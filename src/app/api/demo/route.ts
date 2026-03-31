import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: NextRequest) {
  const { name, email, company, message } = await req.json()

  if (!name || !email || !company) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  try {
    // Use Gmail SMTP — reads credentials from env
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.DEMO_EMAIL_USER || 'james@2ndststrategy.com',
        pass: process.env.DEMO_EMAIL_PASS,
      },
    })

    await transporter.sendMail({
      from: `"PinpointIQ Demo" <${process.env.DEMO_EMAIL_USER || 'james@2ndststrategy.com'}>`,
      to: 'james@2ndststrategy.com',
      subject: `Demo Request: ${name} at ${company}`,
      html: `
        <h2>New Demo Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>
        ${message ? `<p><strong>Message:</strong> ${message}</p>` : ''}
      `,
      replyTo: email,
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Email send error:', err)
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
}
