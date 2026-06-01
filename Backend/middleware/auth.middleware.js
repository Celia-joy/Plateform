import jwt from 'jsonwebtoken'
import { JWT_SECRET } from '../config/env.js'
import User from '../Models/user.model.js'

export const authorize = async (req, res, next) => {
  try {
    let token
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
      token = req.headers.authorization.split(' ')[1]
    }

    if (!token) {
      return res.status(401).json({ message: 'Unauthorized' })
    }

    const decoded = jwt.verify(token, JWT_SECRET)
    const user = await User.findById(decoded.userId)

    if (!user) {
      return res.status(401).json({ message: 'Unauthorized' })
    }

    req.user = user
    next()
  } catch (error) {
    res.status(401).json({
      message: 'Unauthorized',
      error: error.message
    })
  }
}

export const requireRole = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({
        success: false,
        message: `Access denied — required role: ${roles.join(' or ')}`
      })
    }
    next()
  }
}