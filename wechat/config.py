# coding:utf-8
class Db_Config:
    HOST = 'localhost'
    DB = 'wechat'
    TABLE = 'msg_record'
    USER = 'gleamora'
    CHARSET = 'utf8mb4'
    PWD = 'rah8514621'


class App_Config:
    HOST = '0.0.0.0'
    PORT = 9997
    MAX_CONNEC = 5
    LOG_FILE = 'server.log'
    echo = False
    FriendList = [
        {
            "name": 'coco',
            "nickname": 'ジ'
        },
        {
            "name": 'keo',
            "nickname": '@K\xae'
        },
        {
            "name": 'Me',
            "nickname": '黄炜Chen'
        }
    ]


config = {
    'db': Db_Config,
    'app': App_Config
}
