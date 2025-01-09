const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const nodemailer = require('nodemailer')
require('dotenv').config()

const app = express()

// Middleware
app.use(cors())
app.use(bodyParser.json())

// Nodemailer Transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD, // Use the app password here
    },
    tls: {
        rejectUnauthorized: false, // Optional, for certain secure connections
    },
})

app.get('/', (req, res) => {
    res.send('Backend is running!')
})

// Email Sending Route
app.post('/send-email', async (req, res) => {
    const { name, email, subject, message, phone } = req.body

    const mailOptions = {
        from: email, // Sender's email (from form input)
        to: process.env.EMAIL, // Your email
        subject: `New Contact Form Submission from your Portfolio: ${subject}`,
        text: `You have a new message from:
        Name: ${name}
        Email: ${email}
        Message: ${message}
        Phone: ${phone}`,
    }

    try {
        await transporter.sendMail(mailOptions)
        res.status(200).json({ message: 'Email sent successfully!' })
    } catch (error) {
        console.error('Error sending email:', error)
        res.status(500).json({ message: 'Failed to send email', error })
    }
})

// Start the Server
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
