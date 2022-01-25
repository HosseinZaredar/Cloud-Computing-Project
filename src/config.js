var config = {}

config.port = "8080"
// config.port = process.env.PORT

config.expire = 60 * 1000 // milisec

config.db_uri = "mongodb://localhost:27017/urlshortener"
// config.db_uri = "mongodb://mongo/urlshortener"

config.db_user = ""
config.db_pass = ""

export default config