import { MailtrapClient } from "mailtrap";
import dotenv from "dotenv";

dotenv.config();

const TOKEN = process.env.MAILTRAP_TOKEN;

export const mailtrapClient = new MailtrapClient({

	token: process.env.MAILTRAP_TOKEN,
});


export const sender = {
  email: "mailtrap@demomailtrap.com",
  name: "LIC",
};
