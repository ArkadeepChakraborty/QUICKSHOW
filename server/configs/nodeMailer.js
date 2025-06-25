import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_PASS,
            },
});


const sendEmail = async ({ to, subject, body })=>{
const response = await transporter.sendMail({
    from: process.env.SENDER_EMAIL,
    to,
    subject,
    html: body,
    })
    return response
}

export default sendEmail;