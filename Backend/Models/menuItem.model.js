import mongoose from 'mongoose'

const menuItemSchema = new mongoose.Schema({
  restaurant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Restaurant',
    required: true
  },
  name: {
    type: String,
    required: [true, 'Item name is required'],
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
    min: 0
  },
  category: {
    type: String,
    enum: ['appetizer', 'main', 'dessert', 'drink'],
    required: [true, 'Category is required']
  },
  isAvailable: {
    type: Boolean,
    default: true
  }
}, { timestamps: true })

const MenuItem = mongoose.model('MenuItem', menuItemSchema)

export default MenuItem