import nodemailer from 'nodemailer';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  // Configure your transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    const siteUrl = req.headers.origin || 'http://localhost:3000';
    await transporter.sendMail({
      from: 'rishabsainiupw165@gmail.com',
      to: 'rishabsainiupw165@gmail.com',
      subject: `New Contact Form Submission from ${name} (via Portfolio Site)` ,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}\n\nSubmitted from: ${siteUrl}`,
    });
    return res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'Failed to send email', error });
  }
}
