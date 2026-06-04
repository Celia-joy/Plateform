import transporter from '../config/mailer.js'
import cron from 'node-cron'
import Reservation from "../Models/reservation.model.js"
import {EMAIL_USER} from "../config/env.js"

const sendReminderEmail = async(email, name, details) => {
    const {date, timeSlot, partySize, tableNumber} = details
    await transporter.sendMail({
        from: EMAIL_USER,
        to: email,
        subject: "Reminder: Your reservation is tomorrow - Plateform 🍽️ ",
        html:`
            <h2> See you tomorrow, ${name}👋</h2>
            <p>This is a friendly reminder about your upcoming reservation: </p>
            <ul>
                <li><strong>Date:</strong>${new Date(date).toDateString()}</li>
                <li><strong>Time:</strong>${timeSlot}</li>
                <li><strong>Table:</strong>#${tableNumber}</li>
                <li><strong>Guests:</strong>${partySize}</li>
            </ul>
            <p>If you need to cancel, please do so as soon as possible.</p>
            <p>See you soon! 🍽️</p>
        `
    })
}

const startReminderJob = () =>{
    cron.schedule('0 9 * * *', async() =>{
        console.log("Running daily reservation reminder job ...")

        try{
            const tomorrow = new Date()
            tomorrow.setDate(tomorrow.getDate() + 1)
            tomorrow.setHours(0, 0, 0, 0)

            const dayAfter = new Date(tomorrow)
            dayAfter.setDate(dayAfter.getDate() + 1)

            const reservations = await Reservation.find({
                date: {$gte: tomorrow, $lt: dayAfter},
                status: 'confirmed'
            })
            .populate('customer', 'name email')
            .populate('table', 'tableNumber')

            if(reservations.length === 0){
                console.log("No reservations to remind today.")
                return
            }
            for (const reservation of reservations){
                await sendReminderEmail(
                    reservation.customer.email,
                    reservation.customer.name,
                    {
                        date: reservation.date,
                        timeSlot: reservation.timeSlot,
                        partySize: reservation.partySize,
                        tableNumber: reservation.table.tableNumber
                    }
                )
                console.log(`Reminder sent to ${reservation.customer.email}`)
            }
            console.log(`Reminder job done  - ${reservations.length} email(s) sent`)
        }
        catch(error){
            console.error('Reminder job failed: ', error.message)
        }
    })
}
export default startReminderJob