import mongoose from 'mongoose'
import config from './config.js'

mongoose.connect(config.db_uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const connection = mongoose.connection

export default connection