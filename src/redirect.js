import express from 'express'
import config from './config.js'
import Url from './model.js'

const router = express.Router()

router.get('/:code', async (req, res) => {

    try {

        // find a document match to the code in req.params.code
        const url = await Url.findOne({urlCode: req.params.code})

        if (url) {
            
            // check if it is expired
            if (Date.now() < new Date(url.expirationDate).getTime()) {
                return res.redirect(url.longUrl)
            } else {
                await Url.deleteOne({"_id": url._id})
                return res.status(404).json('URL not found')
            }

        } else {
            return res.status(404).json('URL not found')
        }

    } catch (err) {
        console.error(err)
        res.status(500).json('Server error')
    }

})

export default router