# coding:utf-8
# server
import socket, os, threading, queue, logging, time, datetime, json, itchat

server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
server.setblocking(False) 

client_list = []

logger = logging.getLogger(__name__)
event = threading.Event()
q = queue.Queue()


def start(db, config):
    init_wechat(config)
    # print(config.FriendList)
    t_service = threading.Thread(target=conn, args=(db, config))
    t_service.start()

    t_wechat = threading.Thread(target=wechat, args=(db, config))
    t_wechat.start()


def conn(db, config):
    server.bind((config.HOST, config.PORT))
    server.listen(config.MAX_CONNEC)
    logger.setLevel(level=logging.INFO)
    handler = logging.FileHandler(os.getcwd() + '/' + config.LOG_FILE)
    handler.setLevel(logging.INFO)
    formatter = logging.Formatter('%(asctime)s - %(message)s')
    handler.setFormatter(formatter)
    logger.addHandler(handler)
    cur_connection = 0
    logger.info("App initialized!")
    while True:
        try:
            if cur_connection >= config.MAX_CONNEC:
                time.sleep(1)
                pass
            connection, addr = server.accept()
            client_list.append((connection, addr))
            cur_connection += 1
            logger.info("new connection built:{}".format(addr))

        except BlockingIOError:
            time.sleep(1)
            pass
        readySndMsg = ''

        if event.is_set():
            readySndMsg = q.get()
            event.clear()

        for client_socket, client_addr in client_list:
            client_socket.send(bytes(readySndMsg, 'utf8'))
            try:
                client_recv = client_socket.recv(1024)
                if client_recv:
                    # recv = client_recv.decode('utf8')
                    # print("receive:{}>>>{}".format(client_addr, client_recv.decode('gbk')))
                    recv = json.loads(client_recv.decode('utf8'))
                    for f in config.FriendList:
                        if f['name'] == recv['name']:
                            itchat.send(recv['msg'], toUserName=f['userName'])
                            db.execute(get_sql(recv['msg'], 'me', recv['name']))
                            break
                else:
                    client_socket.close()
                    cur_connection -= 1
                    logger.info("downline:{}".format(client_addr))
                    client_list.remove((client_socket, client_addr))

            except (BlockingIOError, ConnectionResetError):
                pass


def init_wechat(config):
    itchat.auto_login(enableCmdQR=2)
    for f in config.FriendList:
        re = itchat.search_friends(nickName=f['nickname'])
        if len(re) == 0:
            logger.info('Cannot get ' + f.name + '!')
        else:
            f['userName'] = re[0].UserName


def wechat(db, config):
    @itchat.msg_register('Text', isFriendChat=True, isGroupChat=False)
    def text_reply(msg):
        u_from = getNickName(msg.fromUserName, config)
        u_to = getNickName(msg.ToUserName, config)
        if u_from != None and u_to != None:
            db.execute(get_sql(msg.text, u_from, u_to))
            if u_from == "Me" and not config.echo:
                return
            q.put(get_time(onlyTime=True) + '\n' + u_from + ':' + msg.text + '\n')
            event.set()
    itchat.run()

def getNickName(username, config):
    for f in config.FriendList:
        if username == f['userName']:
            return f['name']
    return None

def get_time(onlyTime=False):
    ds = datetime.datetime.now()
    if onlyTime:
        return str(ds.hour) + ':' + str(ds.minute) + ':' + str(ds.second)
    return str(ds.year) + '-' + str(ds.month) + '-' + str(ds.day) + ' ' + str(ds.hour) + ':' + str(ds.minute) + ':' + str(ds.second)


def get_sql(msg, u_from, u_to):
    msg = msg.replace('\'',r'\'')
    sql = 'insert into msg_record (`msg`,`from`,`to`,`date`) values ' \
          '(\'' + msg + '\',\'' + u_from + '\',\'' + u_to + '\',\'' + get_time() + '\')'
    print(sql)
    return sql
