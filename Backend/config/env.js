import { config } from 'dotenv'

const env = process.env.NODE_ENV || 'development'
config({ path: `.env.${env}.local` })

export const PORT = process.env.PORT || 5000
export const MONGO_URI = process.env.MONGO_URI
export const JWT_SECRET = process.env.JWT_SECRET
export const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '1d'
export const EMAIL_USER = process.env.EMAIL_USER
export const EMAIL_PASS = process.env.EMAIL_PASS