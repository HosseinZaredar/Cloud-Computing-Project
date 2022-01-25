import mongoose from 'mongoose'
import config from './config.js'

const uri = "mongodb://" + config.db_user + ":" + config.db_pass + "@" + config.db_uri + "?authSource=admin"
console.log(uri)

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const connection = mongoose.connection

export default connection