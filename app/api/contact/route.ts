import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json()

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Please enter a valid email address" }, { status: 400 })
    }

    // Check if environment variables are set
    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      console.error("Missing email configuration environment variables")
      return NextResponse.json(
        {
          error: "Email service is not configured. Please contact me directly at poojaryvarshith98@gmail.com",
        },
        { status: 500 },
      )
    }

    console.log("Creating email transporter...")

    // Create transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    })

    console.log("Verifying transporter connection...")

    // Verify the connection
    try {
      await transporter.verify()
      console.log("Email transporter verified successfully")
    } catch (verifyError) {
      console.error("Email transporter verification failed:", verifyError)
      return NextResponse.json(
        {
          error: "Email service configuration error. Please contact me directly at poojaryvarshith98@gmail.com",
        },
        { status: 500 },
      )
    }

    // Email to you (notification)
    const mailToYou = {
      from: process.env.GMAIL_USER,
      to: "poojaryvarshith98@gmail.com",
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #6366f1; border-bottom: 2px solid #6366f1; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #334155; margin-top: 0;">Contact Details:</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
          </div>
          
          <div style="background-color: #fff; padding: 20px; border-left: 4px solid #6366f1; margin: 20px 0;">
            <h3 style="color: #334155; margin-top: 0;">Message:</h3>
            <p style="line-height: 1.6; color: #475569;">${message.replace(/\n/g, "<br>")}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; color: #64748b; font-size: 14px;">
            <p>This message was sent from your portfolio contact form.</p>
            <p>Reply directly to this email to respond to ${name}.</p>
          </div>
        </div>
      `,
      replyTo: email,
    }

    // Auto-reply to sender
    const autoReply = {
      from: process.env.GMAIL_USER,
      to: email,
      subject: "Thank you for contacting me!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #6366f1; border-bottom: 2px solid #6366f1; padding-bottom: 10px;">
            Thank You for Reaching Out!
          </h2>
          
          <p style="font-size: 16px; line-height: 1.6; color: #334155;">
            Hi ${name},
          </p>
          
          <p style="font-size: 16px; line-height: 1.6; color: #334155;">
            Thank you for contacting me through my portfolio website. I've received your message about 
            "<strong>${subject}</strong>" and I appreciate you taking the time to reach out.
          </p>
          
          <div style="background-color: #f1f5f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0; color: #475569;">
              <strong>What happens next?</strong><br>
              I typically respond to all inquiries within 24 hours. I'll review your message carefully 
              and get back to you with a detailed response soon.
            </p>
          </div>
          
          <p style="font-size: 16px; line-height: 1.6; color: #334155;">
            In the meantime, feel free to:
          </p>
          
          <ul style="color: #334155; line-height: 1.6;">
            <li>Check out my latest projects</li>
          </ul>
          
          <p style="font-size: 16px; line-height: 1.6; color: #334155;">
            Looking forward to our conversation!
          </p>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
            <p style="color: #334155; margin-bottom: 5px;"><strong>Best regards,</strong></p>
            <p style="color: #6366f1; font-weight: bold; margin: 0;">Varshith V Poojary</p>
            <p style="color: #64748b; font-size: 14px; margin: 5px 0 0 0;">Full-Stack Developer</p>
            <p style="color: #64748b; font-size: 14px; margin: 5px 0;">📧 poojaryvarshith98@gmail.com</p>
            <p style="color: #64748b; font-size: 14px; margin: 5px 0;">📱 +91 7349027705</p>
          </div>
        </div>
      `,
    }

    console.log("Sending emails...")

    // Send both emails
    try {
      await Promise.all([transporter.sendMail(mailToYou), transporter.sendMail(autoReply)])

      console.log("Emails sent successfully")
      return NextResponse.json({ message: "Email sent successfully!" }, { status: 200 })
    } catch (sendError) {
      console.error("Error sending emails:", sendError)
      return NextResponse.json(
        {
          error: "Failed to send email. Please contact me directly at poojaryvarshith98@gmail.com",
        },
        { status: 500 },
      )
    }
  } catch (error) {
    console.error("Unexpected error in contact API:", error)
    return NextResponse.json(
      {
        error: "An unexpected error occurred. Please contact me directly at poojaryvarshith98@gmail.com",
      },
      { status: 500 },
    )
  }
}
