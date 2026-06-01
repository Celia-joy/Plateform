import transporter from '../config/mailer.js'
import { EMAIL_USER } from '../config/env.js'

const sendReservationConfirmationEmail = async (email, name, details) => {
  const { date, timeSlot, partySize, tableNumber } = details

  await transporter.sendMail({
    from: EMAIL_USER,
    to: email,
    subject: 'Reservation Confirmed — PlateForm 🍽️',
    html: `
      <h2>Your reservation is confirmed, ${name}!</h2>
      <p>Here are your booking details:</p>
      <ul>
        <li><strong>Date:</strong> ${new Date(date).toDateString()}</li>
        <li><strong>Time:</strong> ${timeSlot}</li>
        <li><strong>Table:</strong> #${tableNumber}</li>
        <li><strong>Guests:</strong> ${partySize}</li>
      </ul>
      <p>See you soon! 🍽️</p>
    `
  })
}

export default sendReservationConfirmationEmail