import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: NextRequest) {
    const body = await req.json()
    const { name, business_name, email, phone, product_category, message } = body

    // Validate required fields
    if (!name || !email || !phone) {
        return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 })
    }

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.SMTP_EMAIL,
            pass: process.env.SMTP_APP_PASSWORD,
        },
    })

    const mailOptions = {
        from: `"Grownext Contact Form" <${process.env.SMTP_EMAIL}>`,
        to: 'contact@grownext.in',
        replyTo: email,
        subject: `🚀 New Enquiry — ${name} (${business_name || 'N/A'})`,
        html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <style>
    body { font-family: 'Helvetica Neue', Arial, sans-serif; background: #f9f9f9; padding: 40px 0; }
    .card { max-width: 600px; margin: 0 auto; background: #fff; border-radius: 24px; overflow: hidden; box-shadow: 0 4px 24px rgba(0,0,0,0.07); }
    .header { background: #FF6A00; padding: 32px 40px; }
    .header h1 { color: #fff; font-size: 22px; font-weight: 900; letter-spacing: -0.5px; margin: 0; }
    .header p { color: rgba(255,255,255,0.8); font-size: 14px; margin: 6px 0 0; }
    .body { padding: 36px 40px; }
    .row { display: flex; gap: 16px; margin-bottom: 20px; }
    .field { flex: 1; background: #f4f4f4; border-radius: 14px; padding: 16px 20px; }
    .field-label { font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 1.5px; color: #FF6A00; margin-bottom: 4px; }
    .field-value { font-size: 15px; font-weight: 600; color: #2B2B2B; }
    .message-box { background: #f4f4f4; border-radius: 14px; padding: 20px; margin-top: 4px; }
    .footer { background: #f4f4f4; padding: 20px 40px; }
    .footer p { font-size: 12px; color: #888; margin: 0; }
  </style>
</head>
<body>
  <div class="card">
    <div class="header">
      <h1>New Export Enquiry</h1>
      <p>Submitted via grownext.in contact form</p>
    </div>
    <div class="body">
      <div class="row">
        <div class="field">
          <div class="field-label">Full Name</div>
          <div class="field-value">${name}</div>
        </div>
        <div class="field">
          <div class="field-label">Business Name</div>
          <div class="field-value">${business_name || '—'}</div>
        </div>
      </div>
      <div class="row">
        <div class="field">
          <div class="field-label">Email</div>
          <div class="field-value"><a href="mailto:${email}" style="color:#FF6A00;text-decoration:none;">${email}</a></div>
        </div>
        <div class="field">
          <div class="field-label">Phone</div>
          <div class="field-value"><a href="tel:${phone}" style="color:#FF6A00;text-decoration:none;">${phone}</a></div>
        </div>
      </div>
      <div class="row">
        <div class="field">
          <div class="field-label">Product Category</div>
          <div class="field-value">${product_category || '—'}</div>
        </div>
      </div>
      ${message ? `
      <div class="field-label" style="font-size:11px;font-weight:800;text-transform:uppercase;letter-spacing:1.5px;color:#FF6A00;margin-bottom:8px;">Export Goals</div>
      <div class="message-box">
        <div style="font-size:15px;color:#2B2B2B;line-height:1.7;">${message.replace(/\n/g, '<br/>')}</div>
      </div>` : ''}
    </div>
    <div class="footer">
      <p>Sent automatically from the Grownext website contact form. Reply directly to respond to ${name}.</p>
    </div>
  </div>
</body>
</html>
        `.trim(),
    }

    try {
        await transporter.sendMail(mailOptions)
        return NextResponse.json({ success: true })
    } catch (err: any) {
        console.error('SMTP Error:', err)
        return NextResponse.json({ error: err.message || 'Failed to send email.' }, { status: 500 })
    }
}
