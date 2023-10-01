import { NextResponse, type NextRequest } from "next/server"
import nodemailer from "nodemailer"
import Mail from "nodemailer/lib/mailer"
import WelcomeEmail from "@/utilities/emailTemplate"
import { render } from "@react-email/render"

export async function POST(request: NextRequest) {
    const { email, message, fullname, phoneNumber } = await request.json()
    const propsObject = {
        message,
        email,
        phoneNumber,
        fullname
    }

    const transport = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.GMAIL,
            pass: process.env.GMAILPASSWORD,
        },
    })

    const emailHtml = render(WelcomeEmail(propsObject))

    const options: Mail.Options = {
        from: process.env.GMAIL,
        to: process.env.GMAIL,
        subject: 'Possible future client.',
        html: emailHtml,
    };

    try {
        await transport.sendMail(options)
        return NextResponse.json({ message: "Success!", status: 200 })
    } catch (err) {
        return NextResponse.json({ message: "Failed!", status: 500 })
    }
}
