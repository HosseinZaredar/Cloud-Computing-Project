import express from 'express'
import config from './config.js'
import connection from './db.js'
import shorten_router from './shorten.js'
import redirect_router from './redirect.js'

const app = express()
app.use(express.json());


// database config
connection.once('open', () => console.log('DB connected'))
connection.on('error', () => console.log('Error in DB connection'))

// redirect route
app.use('/', redirect_router)

// shorten route
app.use('/shorten', shorten_router)

app.listen(config.port, () => {
    console.log(`app listening at ${config.port}`)
})