import { Request, Response } from 'express'
import { config } from '../config/Constants'
import shortId from 'shortid'
import { urlModel } from '../db/model/Url'

export class URLController {
  public async shorten(req: Request, res: Response): Promise<void> {
    // Check if url already exists
    const { originURL } = req.body
    const url = await urlModel.findOne({ originURL })

    if(url) {
      res.json(url)
      return
    }

    // Create the hash to this url
    const hash = shortId.generate()
    const shortUrl = `${config.API_URL}/${hash}`

    // Save the url at the database
    const newUrl = await urlModel.create({ originURL, shortUrl, hash })

    // Return the url saved
    res.json(newUrl)
  }

  public async redirect(req: Request, res: Response): Promise<void> {
    // Get url hash and search for an existant url
    const { hash } = req.params
    const url = await urlModel.findOne({ hash })

    if(url) {
      res.redirect(url.originURL)
      return
    }

    res.status(400).json({ error: 'Url not found' })
  }
}