import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendOTP = async (to, otp) => {
  const mailOptions = {
    from: `"Your App" <${process.env.EMAIL_USER}>`,
    to,
    subject: "Mã xác thực OTP",
    html: `
      <div style="font-family:sans-serif;">
        <h2>Xác thực tài khoản của bạn</h2>
        <p>Mã OTP của bạn là:</p>
        <h1 style="color:#4CAF50;">${otp}</h1>
        <p>Mã này có hiệu lực trong 5 phút.</p>
      </div>
    `,
  };

  await transporter.sendMail(mailOptions);
};
