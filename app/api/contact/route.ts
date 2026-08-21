import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const { name, email, eventType, date, location, textures, message } = await req.json()

    if (!name || !email) {
      return NextResponse.json({ error: "Name and email are required" }, { status: 400 })
    }

    await resend.emails.send({
      from: "Enquiries <onboarding@resend.dev>", // replace once your domain is verified
      to: "elev8piano@gmail.com",
      replyTo: email,
      subject: `New Enquiry from ${name}`,
      html: `
        <h2>New Booking Enquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${eventType ? `<p><strong>Event Type:</strong> ${eventType}</p>` : ""}
        ${date ? `<p><strong>Date:</strong> ${date}</p>` : ""}
        ${location ? `<p><strong>Location:</strong> ${location}</p>` : ""}
        ${textures?.length ? `<p><strong>Sonic Textures:</strong> ${textures.join(", ")}</p>` : ""}
        ${message ? `<p><strong>Vision:</strong><br/>${message.replace(/\n/g, "<br/>")}</p>` : ""}
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: "Failed to send enquiry" }, { status: 500 })
  }
}