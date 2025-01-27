"use client";

import { useState } from "react";
import { Toaster, toaster } from "@/components/ui/toaster";
import { Tooltip } from "@/components/ui/tooltip";
import CustomDialog from "./VideoDialog";

const ContactForm = () => {
	const [subject, setSubject] = useState<{ value: string; error: boolean }>({
		value: "",
		error: false,
	});
	const [email, setEmail] = useState<{ value: string; error: boolean }>({
		value: "rajibkhan976@gmail.com",
		error: false,
	});
	const [message, setMessage] = useState<{ value: string; error: boolean }>({
		value: "",
		error: false,
	});

	const handleOnChange = (event: any): void => {
		if (event.target.id === "subject") {
			setSubject({
				value: event.target.value,
				error: false,
			});
		}
		if (event.target.id === "email") {
			setEmail({
				value: event.target.value,
				error: false,
			});
		}
		if (event.target.id === "message") {
			setMessage({
				value: event.target.value,
				error: false,
			});
		}
	};

	const handleSendMail = async () => {
		if (subject?.value.trim() && email?.value.trim() && message?.value.trim()) {
			const response = await fetch(window.location.origin + "/api/send-mail", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					sendTo: email?.value,
					subject: subject?.value,
					message: message?.value,
				}),
			});

			const data = await response.json();

			if (data?.info?.messageId) {
				toaster.create({
					title: `Email sent :)`,
					type: "success",
				});
			} else {
				toaster.create({
					title: `Email sending failed (:`,
					type: "error",
				});
			}
		}

		if (!subject?.value.trim()) {
			setSubject({
				...subject,
				error: true,
			});
		}

		if (!email?.value.trim()) {
			setEmail({
				...email,
				error: true,
			});
		}

		if (!message?.value.trim()) {
			setMessage({
				...message,
				error: true,
			});
		}
	};

	return (
		<div className='text-black p-4 w-full h-screen flex justify-center items-center flex-col'>
			<div className='text-black font-medium text-lg text-center mb-2'>
				Please click the button to watch a demo
			</div>
			<div className='flex justify-center mb-2'>
				<CustomDialog
					heading={"Sending mail using Node.js"}
					url={"https://www.youtube.com/embed/WGAdTis8Tps?si=t6nfQWXyCcSKYpgk"}
				/>
			</div>
			<div className='md:w-6/12 w-full flex flex-col bg-white shadow-2xl px-6 py-8 rounded-md'>
				<div className='font-semibold text-xl text-center mb-2'>Contact me</div>
				<div className='flex justify-between mt-2 mb-4'>
					<label
						className='me-4'
						htmlFor='subject'
					>
						Subject:
					</label>
					<div className='flex flex-col w-9/12'>
						<input
							id='subject'
							type='text'
							width={"400px"}
							className='bg-white ring-1 ring-gray-700 rounded-sm py-1 px-2'
							name='subject'
							placeholder='Subject'
							value={subject?.value}
							onChange={handleOnChange}
							required
						/>
						{subject?.error ? (
							<div className='text-red-600 mt-1'>Please add a subject</div>
						) : null}
					</div>
				</div>
				<div className='flex justify-between mb-4'>
					<Tooltip content='This is read only as email can only be sent to this id for test purpose'>
						<label
							className='me-4'
							htmlFor='email'
						>
							Email:
						</label>
					</Tooltip>

					<div className='flex flex-col w-9/12'>
						<input
							id='email'
							type='email'
							className='bg-white ring-1 ring-gray-700 rounded-sm py-1 px-2'
							name='email'
							placeholder='Email'
							value={email?.value}
							onChange={handleOnChange}
							required
							readOnly
						/>
						{email?.error ? (
							<div className='text-red-600 mt-2'>Please enter a email</div>
						) : null}
					</div>
				</div>
				<div className='flex justify-between mb-4'>
					<label
						className='me-4'
						htmlFor='message'
					>
						Message:
					</label>

					<div className='flex flex-col w-9/12'>
						<textarea
							id='message'
							className='bg-white ring-1 ring-gray-700 rounded-sm py-1 px-2'
							name='message'
							rows={3}
							placeholder='Message'
							value={message?.value}
							onChange={handleOnChange}
							required
						></textarea>
						{message?.error ? (
							<div className='text-red-600 mt-1'>Please enter your message</div>
						) : null}
					</div>
				</div>
				<div className='w-full flex justify-end mb-2'>
					<button
						className='bg-emerald-600 text-white rounded-md px-4 py-2 font-semibold'
						type='button'
						onClick={handleSendMail}
					>
						Send
					</button>
				</div>
			</div>
			<Toaster />
		</div>
	);
};

export default ContactForm;
