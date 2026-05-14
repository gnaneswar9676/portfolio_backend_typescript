import nodemailer from "nodemailer";

// =======================================
// NODEMAILER TRANSPORTER
// =======================================

const transporter =
  nodemailer.createTransport({
    service: "gmail",

    auth: {
      user:
        process.env.EMAIL_USER,

      pass:
        process.env.EMAIL_PASS,
    },
  });

// =======================================
// SEND RESET EMAIL
// =======================================

export const sendResetEmail =
  async (
    email: string,
    resetLink: string
  ): Promise<void> => {

    await transporter.sendMail({
      from:
        process.env.EMAIL_USER,

      to: email,

      subject:
        "FinTrack Password Reset",

      html: `
        <h2>Password Reset</h2>

        <p>
          Click below to reset password:
        </p>

        <a href="${resetLink}">
          Reset Password
        </a>
      `,
    });
  };