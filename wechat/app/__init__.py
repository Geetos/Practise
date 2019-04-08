# coding:utf-8
from .server import start
from .db import Db
from config import config


def init():
    _db = Db()
    _db.redirect(config['db'])
    start(_db, config['app'])

