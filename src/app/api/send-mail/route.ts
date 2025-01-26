import { NextRequest, NextResponse } from "next/server";
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

export async function POST(request: NextRequest) {
	try {
		const data = await request.json();
		let info = null;
		const { email, sendTo, subject, message, html } = data;
		const isVerified = await transporter.verify();

		if (isVerified) {
			info = await transporter.sendMail({
				from: email ? email : "rajib@demomailtrap.com",
				to: sendTo,
				subject: subject,
				text: message,
				html: html ? html : "",
			});
		}

		return NextResponse.json(
			{ info: info },
			{
				status: 200,
				headers: { "Content-Type": "application/json" },
			}
		);
	} catch (error) {
		console.error("Something Went Wrong", error);
		return NextResponse.json(
			{ error: "Failed to send email" },
			{
				status: 500,
				headers: { "Content-Type": "application/json" },
			}
		);
	}
}
