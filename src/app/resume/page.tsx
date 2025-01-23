const Resume = () => {
	return (
		<div className='w-full h-full'>
			<div className='w-full h-36 text-center p-4 mb-2'>
				<h2 className='text-black font-bold text-xl mb-2'>Resume</h2>
				<h1 className='text-black font-bold text-2xl mb-2'>
					Rajib Hossain Khan
				</h1>
				<div className='w-full text-black text-md'>
					<span className='px-2'>rajibkhan976@gmail.com</span>
					<span className='px-2'>|</span>
					<span className='px-2'>0480417262</span>
					<span className='px-2'>|</span>
					<span className='px-2'>23 Bullara Road, Craigie, WA 6025</span>
				</div>
			</div>
			<div className='w-full px-8'>
				<div className='text-black font-bold text-xl mb-2 uppercase border-b-2 border-gray-950'>
					Career objective
				</div>
				<div className='text-black text-justify'>
					I am an aspiring software developer with a strong foundation in
					programming, problem-solving, and system design, seeking a dynamic
					role in a forward-thinking organization. Passionate about leveraging
					technical expertise in front-end and/or full-stack development to
					build innovative and scalable solutions. Committed to continuous
					learning, collaboration, and contributing to the success of
					cutting-edge projects while enhancing organizational goals.
				</div>
			</div>
		</div>
	);
};

export default Resume;
