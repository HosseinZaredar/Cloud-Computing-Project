var config = {}

config.port = process.env.PORT
config.expire = process.env.EXPIRE
config.db_uri = process.env.DB
config.db_user = process.env.DB_USER
config.db_pass = process.env.DB_PASS

export default config