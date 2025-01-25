"use client";

const ContactCard = () => {
	return (
		<div className='text-black p-4 w-full h-screen flex justify-center items-center'>
			<div className='md:w-6/12 w-full flex flex-col bg-white shadow-xl px-6 py-8 rounded-md'>
				<div className='font-semibold text-xl text-center mb-2'>Contact me</div>
				<div className='flex justify-between mt-2 mb-4'>
					<label
						className='me-4'
						htmlFor='subject'
					>
						Subject:
					</label>
					<input
						id='subject'
						type='text'
						width={"400px"}
						className='bg-white ring-1 ring-gray-700 rounded-sm py-1 px-2 w-9/12'
						name='subject'
						placeholder='Subject'
						required
					/>
				</div>
				<div className='flex justify-between mb-4'>
					<label
						className='me-4'
						htmlFor='email'
					>
						Email:
					</label>
					<input
						id='email'
						type='email'
						className='bg-white ring-1 ring-gray-700 rounded-sm py-1 px-2 w-9/12'
						name='email'
						placeholder='Email'
						required
					/>
				</div>
				<div className='flex justify-between mb-4'>
					<label
						className='me-4'
						htmlFor='message'
					>
						Message:
					</label>
					<textarea
						id='message'
						className='bg-white ring-1 ring-gray-700 rounded-sm py-1 px-2 w-9/12'
						name='message'
						rows={3}
						placeholder='Message'
						required
					></textarea>
				</div>
				<div className='w-full flex justify-end mb-2'>
					<button
						className='bg-green-700 text-white rounded-md px-4 py-2'
						type='button'
					>
						Send
					</button>
				</div>
			</div>
		</div>
	);
};

export default ContactCard;
