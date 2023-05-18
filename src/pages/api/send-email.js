import sgMail from "@sendgrid/mail";

export default async function handler(req, res) {
  if (req.method === "POST") {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const { name, email, message } = req.body;

    const msg = {
      to: "contact@ninety3.io",
      from: "contact@ninety3.io",
      replyTo: { email },
      subject: "New message from contact form",
      text: message,
      html: `
       <div>
        <p style="font-size: 24px;font-weight:bold">${name}</p>
        <p style="font-size: 20px;">
          ${message}
        </p>
        <p style="font-size: 20px;">Message from ${email}</p>
       </div>
    `,
    };
    try {
      await sgMail.send(msg);
      res.status(200).end();
    } catch (error) {
      console.error(error.response.body);
      res.status(500).end();
    }
  } else {
    res.status(405).end();
  }
}
