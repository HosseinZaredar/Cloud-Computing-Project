import mongoose from 'mongoose'

const URLSchema = new mongoose.Schema({
    longUrl: String,
    urlCode: String,
    creationDate: String,
    expirationDate: String
})

export default mongoose.model('Url', URLSchema)