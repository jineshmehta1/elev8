"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(formData: any) {
  try {
    const {
      name,
      email,
      phone,
      eventType,
      eventDate,
      message,
    } = formData;

    const { error } = await resend.emails.send({
      from: "Elev8 Piano <onboarding@resend.dev>",
      to: ["elev8piano@gmail.com"],
      subject: `New Event Inquiry - ${name}`,
      replyTo: email,

      html: `
        <div style="font-family: Arial, sans-serif; max-width: 700px; margin: 0 auto;">
          
          <h1 style="color:#C5A059;">
            New Elev8 Inquiry
          </h1>

          <table style="width:100%; border-collapse: collapse;">
            <tr>
              <td style="padding:10px;"><strong>Name</strong></td>
              <td style="padding:10px;">${name}</td>
            </tr>

            <tr>
              <td style="padding:10px;"><strong>Email</strong></td>
              <td style="padding:10px;">${email}</td>
            </tr>

            <tr>
              <td style="padding:10px;"><strong>Phone</strong></td>
              <td style="padding:10px;">${phone}</td>
            </tr>

            <tr>
              <td style="padding:10px;"><strong>Event Type</strong></td>
              <td style="padding:10px;">${eventType}</td>
            </tr>

            <tr>
              <td style="padding:10px;"><strong>Proposed Date</strong></td>
              <td style="padding:10px;">${eventDate}</td>
            </tr>
          </table>

          <hr />

          <h3>Event Vision</h3>

          <p>
            ${message}
          </p>

        </div>
      `,
    });

    if (error) {
      return {
        success: false,
        error,
      };
    }

    return {
      success: true,
    };
  } catch (error) {
    return {
      success: false,
      error,
    };
  }
}