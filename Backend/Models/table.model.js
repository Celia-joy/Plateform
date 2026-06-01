import mongoose from 'mongoose'

const tableSchema = new mongoose.Schema({
  restaurant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Restaurant',
    required: true
  },
  tableNumber: {
    type: Number,
    required: [true, 'Table number is required']
  },
  capacity: {
    type: Number,
    required: [true, 'Capacity is required'],
    min: 1
  },
  isAvailable: {
    type: Boolean,
    default: true
  }
}, { timestamps: true })

const Table = mongoose.model('Table', tableSchema)

export default Table