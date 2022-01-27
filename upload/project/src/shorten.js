import express from 'express'
import { isUri } from 'valid-url'
import { nanoid } from 'nanoid'
import config from './config.js'
import Url from './model.js'

const router = express.Router()

const baseUrl = 'localhost:' + config.port 

router.post('/url', async (req, res) => {

    const longUrl = req.body.url

    // we create the url code
    const urlCode = nanoid(10)

    // check long url if valid using the isUri method
    if (isUri(longUrl)) {
        try {

            let url = await Url.findOne({longUrl})

            // url exist and return the respose
            if (url) {
                
                res.json({
                    'longUrl': url.longUrl,
                    'shortUrl': baseUrl + '/' + url.urlCode,
                    'creationDate': url.creationDate,
                    'expirationDate': url.expirationDate,
                })

            } else {

                // invoking the Url model and saving to the DB
                url = new Url({
                    longUrl,
                    urlCode,
                    creationDate: new Date(),
                    expirationDate: new Date(Date.now() + parseInt(config.expire))
                })

                await url.save()
                res.json({
                    'longUrl': url.longUrl,
                    'shortUrl': baseUrl + '/' + url.urlCode,
                    'creationDate': url.creationDate,
                    'expirationDate': url.expirationDate,
                })
            }
        }

        // exception handler
        catch (err) {
            console.log(err)
            res.status(500).json('Server Error')
        }

    } else {
        res.status(401).json('Invalid longUrl')
    }
})

export default router