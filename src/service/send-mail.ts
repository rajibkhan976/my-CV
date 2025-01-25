"use server";

// Import the Nodemailer library
import nodemailer from "nodemailer";

// Create a transporter object
const transporter = nodemailer.createTransport({
	host: "live.smtp.mailtrap.io",
	port: 587,
	tls: {
		rejectUnauthorized: false,
	},
	auth: {
		user: "smtp@mailtrap.io",
		pass: "da3272117bae94eba380871e1b1e21a4",
	},
});

export async function sendMail({
	email,
	sendTo,
	subject,
	message,
	html,
}: {
	email?: string;
	sendTo?: string;
	subject: string;
	message: string;
	html?: string;
}) {
	try {
		const isVerified = await transporter.verify();
	} catch (error) {
		console.error("Something Went Wrong", error);
		return;
	}
	const info = await transporter.sendMail({
		from: email ? email : "rajib@demomailtrap.com",
		to: sendTo,
		subject: subject,
		text: message,
		html: html ? html : "",
	});
	console.log("Message Sent", info.messageId);
	console.log("Mail sent to", sendTo);
	return info;
}
