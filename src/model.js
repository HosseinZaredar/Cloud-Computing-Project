import mongoose from 'mongoose'

import config from './config.js'

const URLSchema = new mongoose.Schema({
    longUrl: String,
    urlCode: String,
    creationDate: String,
    expirationDate: String
})

export default mongoose.model('Url', URLSchema)