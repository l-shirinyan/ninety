import sgMail from "@sendgrid/mail";

export default async function handler(req, res) {
  if (req.method === "POST") {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const { name, email, message } = req.body;

    const msg = {
      to: process.env.NEXT_PUBLIC_EMAIL,
      from: process.env.NEXT_PUBLIC_EMAIL,
      replyTo: { email },
      subject: "New message from contact form",
      text: message,
      html: `
      <div style="display: flex; justify-content: center; align-items: center; height: 100%; margin: 0 auto; width:50vw">
        <div style="background: linear-gradient(126.39deg, #2ae7bc 4.16%, #09a6f0 45.29%, #9669fd 87.92%), #2ae7bc; padding: 20px; border-radius: 10px;width:100%">
         <p style="font-size: 24px; font-weight: 900; color: #ffffff; margin-bottom: 10px;text-align: center;">${name}</p>
         <p style="font-size: 20px; color: #ffffff; margin-bottom: 20px;">${message}</p>
         <p style="font-size: 15px; color: #ffffff;text-align: right;">From  <span style="font-size: 15px; color: blue;text-align: right;margin-left:5px">${email}</span>
         </p>
        </div>
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
