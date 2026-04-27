import emailjs from "@emailjs/browser";

type SendEmailParams = {
  name: string;
  email: string;
  phone: string;
  message: string;
  title: string;
};

export const sendEmail = async ({
  name,
  email,
  phone,
  message,
  title,
}: SendEmailParams) => {
  try {
    await emailjs.send(
      process.env.NEXT_PUBLIC_SERVICE_ID!,
      process.env.NEXT_PUBLIC_TEMPLATE_ID!,
      {
        name,
        email,
        phone,
        message,
        title,
      },
      process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY!,
    );
  } catch (err) {
    throw new Error("Error while sending email");
  }
};

type SendEmailOnlyParams = {
  email: string;
  title: string;
};

export const sendEmailOnly = async ({ email, title }: SendEmailOnlyParams) => {
  try {
    await emailjs.send(
      process.env.NEXT_PUBLIC_SERVICE_ID!,
      process.env.NEXT_PUBLIC_TEMPLATE_ID!,
      {
        email,
        title,
      },
      process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY!,
    );
  } catch (err) {
    throw new Error("Error while sending email");
  }
};
