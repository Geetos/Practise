# client
# coding:utf-8
import socket
import time
import threading
import queue
import re, json

q = queue.Queue()
event = threading.Event()

def conn():
    client = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    client.connect(('localhost', 9993))
    client.setblocking(False)
    while True:
        try:
            recv = client.recv(1024)
            print(recv.decode('utf8'))
        except BlockingIOError:
            pass
        if event.is_set():
            msg = q.get()
            if msg == "\q":
                print("[+] Down line......")
                time.sleep(2)
                client.close()
                break
            else:
                client.send(bytes(msg, 'utf8'))
                event.clear()
        time.sleep(1)


def type_msg():
    sendTo = 'somebody'
    while True:
        msg = input('('+sendTo+')')
        if len(msg.strip()) > 0:
            if msg[:1] == '@':
                sendTo = msg[1:]
                pass
            else:
                q.put('{"name":\"' + sendTo + '\","msg":\"' + msg + '\"}')
                event.set()
        else:
            print("(Empty Message)")


if __name__ == '__main__':
    t_service = threading.Thread(target=conn)
    t_service.start()

    t_wechat = threading.Thread(target=type_msg)
    t_wechat.start()
