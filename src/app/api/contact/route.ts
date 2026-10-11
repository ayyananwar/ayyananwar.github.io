import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, details, source, honeypot } = body;

    // 1. Bot spam protection (honeypot trap)
    // If a bot filled out the hidden field, return success immediately without dispatching email
    if (honeypot) {
      return NextResponse.json({ success: true, message: "Inquiry received." });
    }

    // 2. Validate mandatory fields
    if (!firstName || typeof firstName !== "string" || !firstName.trim()) {
      return NextResponse.json(
        { success: false, error: "First name is required." },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string" || !email.trim()) {
      return NextResponse.json(
        { success: false, error: "Email address is required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // 3. Environment configuration
    const brevoApiKey = process.env.BREVO_API_KEY;
    const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || "info@globuselevators.com";
    const senderEmail = process.env.BREVO_SENDER_EMAIL || receiverEmail;
    const senderName = process.env.BREVO_SENDER_NAME || "Globus Elevators Web";

    if (!brevoApiKey) {
      console.error("[Brevo Error] Missing BREVO_API_KEY environment variable.");
      return NextResponse.json(
        {
          success: false,
          error: "Email delivery service is currently not configured. Please contact us directly at " + receiverEmail,
        },
        { status: 500 }
      );
    }

    const cleanFirstName = firstName.trim();
    const cleanLastName = (lastName || "").toString().trim();
    const fullName = cleanLastName ? `${cleanFirstName} ${cleanLastName}` : cleanFirstName;
    const cleanPhone = (phone || "").toString().trim();
    const cleanDetails = (details || "").toString().trim();
    const inquirySource = (source || "Website Consultation Form").toString().trim();
    const submissionTime = new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" }) + " (IST)";

    // 4. Construct Transactional Email Payload for Brevo API (v3)
    const emailPayload = {
      sender: {
        name: senderName,
        email: senderEmail,
      },
      to: [
        {
          email: receiverEmail,
          name: "Globus Elevators Team",
        },
      ],
      replyTo: {
        email: email.trim(),
        name: fullName,
      },
      subject: `[Lead Notification] ${fullName} - ${inquirySource}`,
      htmlContent: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Inquiry Notification</title>
        </head>
        <body style="margin: 0; padding: 24px; background-color: #000000; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #ffffff;">
          <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; background-color: #0a0a0a; border: 1px solid #262626; padding: 32px;">
            <tr>
              <td>
                <div style="border-bottom: 1px solid #262626; padding-bottom: 20px; margin-bottom: 28px;">
                  <span style="font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; color: #888888; display: block; margin-bottom: 6px;">
                    Globus Elevators // Architectural Systems
                  </span>
                  <h1 style="margin: 0; font-size: 24px; font-weight: 700; letter-spacing: -0.02em; color: #ffffff;">
                    New Technical Inquiry
                  </h1>
                </div>

                <table width="100%" border="0" cellpadding="0" cellspacing="0" style="margin-bottom: 28px;">
                  <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #1a1a1a; width: 140px; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.15em; color: #737373;">
                      Source
                    </td>
                    <td style="padding: 10px 0; border-bottom: 1px solid #1a1a1a; font-size: 15px; color: #ffffff; font-weight: 500;">
                      ${inquirySource}
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #1a1a1a; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.15em; color: #737373;">
                      Client Name
                    </td>
                    <td style="padding: 10px 0; border-bottom: 1px solid #1a1a1a; font-size: 15px; color: #ffffff; font-weight: 600;">
                      ${fullName}
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #1a1a1a; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.15em; color: #737373;">
                      Email Address
                    </td>
                    <td style="padding: 10px 0; border-bottom: 1px solid #1a1a1a; font-size: 15px; color: #ffffff;">
                      <a href="mailto:${email.trim()}" style="color: #ffffff; text-decoration: underline;">
                        ${email.trim()}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #1a1a1a; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.15em; color: #737373;">
                      Phone Number
                    </td>
                    <td style="padding: 10px 0; border-bottom: 1px solid #1a1a1a; font-size: 15px; color: #ffffff;">
                      ${cleanPhone || "<span style='color: #555555;'>Not provided</span>"}
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 10px 0; border-bottom: 1px solid #1a1a1a; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.15em; color: #737373;">
                      Timestamp
                    </td>
                    <td style="padding: 10px 0; border-bottom: 1px solid #1a1a1a; font-size: 13px; color: #a3a3a3;">
                      ${submissionTime}
                    </td>
                  </tr>
                  <tr>
                    <td colspan="2" style="padding-top: 20px;">
                      <span style="font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.15em; color: #737373; display: block; margin-bottom: 8px;">
                        Project Specifications / Notes
                      </span>
                      <div style="background-color: #141414; border: 1px solid #262626; padding: 16px; font-size: 14px; line-height: 1.6; color: #d4d4d4; white-space: pre-wrap;">
                        ${cleanDetails || "No additional specifications provided."}
                      </div>
                    </td>
                  </tr>
                </table>

                <div style="border-top: 1px solid #262626; padding-top: 16px; font-size: 11px; color: #525252; line-height: 1.5;">
                  Hit &quot;Reply&quot; in your email client to respond directly to ${email.trim()}.<br />
                  Generated via Globus Elevators Platform on Vercel.
                </div>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
      textContent: `
GLOBUS ELEVATORS // NEW INQUIRY

Source: ${inquirySource}
Client Name: ${fullName}
Email: ${email.trim()}
Phone: ${cleanPhone || "Not provided"}
Time: ${submissionTime}

Project Specifications:
${cleanDetails || "No additional specifications provided."}

---
Generated by Globus Elevators web platform. Reply directly to this email to contact the client.
      `.trim(),
    };

    // 5. Send HTTP Request to Brevo v3 API
    const brevoResponse = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        accept: "application/json",
        "api-key": brevoApiKey,
        "content-type": "application/json",
      },
      body: JSON.stringify(emailPayload),
    });

    if (!brevoResponse.ok) {
      const errorData = await brevoResponse.json().catch(() => null);
      console.error("[Brevo Error]", brevoResponse.status, errorData);
      return NextResponse.json(
        {
          success: false,
          error: errorData?.message || "Failed to dispatch notification through Brevo.",
        },
        { status: brevoResponse.status }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Inquiry received. Our engineering team will contact you shortly.",
    });
  } catch (error: any) {
    console.error("[Contact API Exception]", error);
    return NextResponse.json(
      {
        success: false,
        error: "An unexpected error occurred while processing your inquiry.",
      },
      { status: 500 }
    );
  }
}
