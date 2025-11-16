import { env } from "~/env";

/**
 * Generates a random 6-digit verification code
 */
export function generateVerificationCode(): string {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

/**
 * Sends a verification code email to the user
 * For production, you should use a proper email service like Resend, SendGrid, etc.
 */
export async function sendVerificationEmail(email: string, code: string): Promise<void> {
  // In development, just log the code
  if (env.NODE_ENV === "development") {
    console.log(`\n📧 Verification code for ${email}: ${code}\n`);
    return;
  }

  // For production, use Resend or SMTP
  if (env.RESEND_API_KEY) {
    await sendWithResend(email, code);
  } else if (env.SMTP_HOST && env.SMTP_USER && env.SMTP_PASSWORD) {
    await sendWithSMTP(email, code);
  } else {
    // Fallback: log in production if no email service is configured
    console.log(`📧 Verification code for ${email}: ${code}`);
    console.warn("⚠️  No email service configured. Verification code logged above.");
  }
}

async function sendWithResend(email: string, code: string): Promise<void> {
  try {
    // Dynamic import for Resend to avoid requiring it if not used
    const { Resend } = await import("resend");
    const resend = new Resend(env.RESEND_API_KEY);

    await resend.emails.send({
      from: env.SMTP_FROM ?? "onboarding@resend.dev",
      to: email,
      subject: "Your Verification Code",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #333;">Email Verification</h1>
          <p>Your verification code is:</p>
          <div style="background-color: #f4f4f4; padding: 20px; text-align: center; font-size: 32px; font-weight: bold; letter-spacing: 8px; margin: 20px 0;">
            ${code}
          </div>
          <p style="color: #666;">This code will expire in 10 minutes.</p>
          <p style="color: #666;">If you didn't request this code, please ignore this email.</p>
        </div>
      `,
    });
  } catch (error) {
    console.error("Failed to send email with Resend:", error);
    throw new Error("Failed to send verification email");
  }
}

async function sendWithSMTP(email: string, code: string): Promise<void> {
  try {
    // Dynamic import for nodemailer
    const nodemailer = await import("nodemailer");

    const transporter = nodemailer.createTransport({
      host: env.SMTP_HOST,
      port: parseInt(env.SMTP_PORT ?? "587"),
      secure: env.SMTP_PORT === "465",
      auth: {
        user: env.SMTP_USER,
        pass: env.SMTP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: env.SMTP_FROM ?? env.SMTP_USER,
      to: email,
      subject: "Your Verification Code",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #333;">Email Verification</h1>
          <p>Your verification code is:</p>
          <div style="background-color: #f4f4f4; padding: 20px; text-align: center; font-size: 32px; font-weight: bold; letter-spacing: 8px; margin: 20px 0;">
            ${code}
          </div>
          <p style="color: #666;">This code will expire in 10 minutes.</p>
          <p style="color: #666;">If you didn't request this code, please ignore this email.</p>
        </div>
      `,
    });
  } catch (error) {
    console.error("Failed to send email with SMTP:", error);
    throw new Error("Failed to send verification email");
  }
}
