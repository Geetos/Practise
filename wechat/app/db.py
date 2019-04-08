import pymysql.cursors


class Db:
    def __init__(self):
        self.conn = None

    def redirect(self, config):
        if self.conn is not None:
            self.conn.close()
        self.conn = pymysql.connect(host=config.HOST,
                                    user=config.USER,
                                    password=config.PWD,
                                    db=config.DB,
                                    charset=config.CHARSET,
                                    cursorclass=pymysql.cursors.DictCursor)

    def execute(self, sql_string):
        try:
            with self.conn.cursor() as cursor:
                cursor.execute(sql_string)
            self.conn.commit()
        except OSError:
            print('Can\'t proceed the SQL statement！Make sure the connection that has been set properly')
            raise

    def close(self):
        self.conn.close()
