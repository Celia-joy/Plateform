import transporter from 'nodemailer'
import {EMAIL_USER, EMAIL_PASS} from '../config/env.js'

const sendWelcomeEmail = async (email, name) =>{
    await transporter.sendMail({
        from: EMAIL_USER,
        to:email,
        subject:'Welcome to Plateform 🍽️',
        html:`
            <h1>Welcome to Plateform 🍽️</h1>
            <p>Dear ${name},</p>
            <p>Thank you for joining us. We are excited to have you on board!</p>
            <p>Your account has been created successfully.</p>
            <p>You can now login and start managing your restaurant on Plateform</p>
            <p>Best regards,</p>
            <p>The Plateform Team</p>
        `
    })
}
export default sendWelcomeEmail