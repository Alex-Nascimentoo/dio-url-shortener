import { Schema, model, connect } from 'mongoose'

interface IUrl {
  originURL: string,
  shortUrl: string,
  hash: string
}

const urlSchema = new Schema<IUrl>({
  originURL: { type: String, required: true },
  shortUrl: { type: String, required: true },
  hash: { type: String, required: true }
})

export const urlModel = model<IUrl>('url-shortener', urlSchema)
