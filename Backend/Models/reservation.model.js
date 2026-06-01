import mongoose from 'mongoose'

const reservationSchema = new mongoose.Schema({
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  restaurant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Restaurant',
    required: true
  },
  table: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Table',
    required: true
  },
  date: {
    type: Date,
    required: [true, 'Reservation date is required']
  },
  timeSlot: {
    type: String,
    required: [true, 'Time slot is required']
  },
  partySize: {
    type: Number,
    required: [true, 'Party size is required'],
    min: 1
  },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'seated', 'completed', 'cancelled'],
    default: 'pending'
  },
  specialRequests: {
    type: String,
    trim: true,
    default: ''
  }
}, { timestamps: true })

const Reservation = mongoose.model('Reservation', reservationSchema)

export default Reservation