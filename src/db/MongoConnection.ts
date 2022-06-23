import { config } from '../config/Constants'
import mongoose, { ConnectOptions } from 'mongoose'

export class MongoConnection {
  public async connect(): Promise<void> {
    try {
      await mongoose.connect(config.MONGO_URI, {})

      console.log('Database connected!')
    }catch(err: any) {
      console.error(err.message)
      process.exit(1)
    }
  }
}