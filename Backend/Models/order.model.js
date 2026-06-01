import mongoose from 'mongoose'

const orderItemSchema = new mongoose.Schema({
  menuItem: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'MenuItem',
    required: true
  },
  quantity: {
    type: Number,
    required: true,
    min: 1
  },
  notes: {
    type: String,
    default: ''
  }
})

const orderSchema = new mongoose.Schema({
  reservation: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Reservation',
    required: true
  },
  items: {
    type: [orderItemSchema],
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'preparing', 'served', 'paid'],
    default: 'pending'
  },
  totalAmount: {
    type: Number,
    required: true,
    min: 0
  }
}, { timestamps: true })

const Order = mongoose.model('Order', orderSchema)

export default Order