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
			<div className='w-full px-8 mt-4'>
				<div className='text-black font-bold text-xl mb-2 uppercase border-b-2 border-gray-950'>
					KEY SKILLS
				</div>
				<ul className='list-disc list-inside m-2 text-black'>
					<li className='py-1'>
						<span className='font-semibold'>Frontend Development:&nbsp;</span>
						JavaScript (ES6+), React, Redux, Next.js, TypeScript, Angular,
						Vue.js, HTML5, CSS3, Tailwind CSS, Bootstrap, SCSS, GSAP
					</li>
					<li className='py-1'>
						<span className='font-semibold'>Backend Development:&nbsp;</span>
						Node.js, Express, NestJS, Python, Django, Flask, PHP, Laravel,
						ASP.NET MVC, ASP.NET Web API, C#, Java, Spring Boot, Maven
					</li>
					<li className='py-1'>
						<span className='font-semibold'>Databases:&nbsp;</span>
						SQL, PostgreSQL, Microsoft SQL Server, MongoDB, MySQL, GraphQL
					</li>
					<li className='py-1'>
						<span className='font-semibold'>DevOps & Tools:&nbsp;</span>
						Docker, AWS (EC2, S3), Git (GitHub, GitLab, Bitbucket), Jira, npm,
						Webpack, Babel, Azure
					</li>
					<li className='py-1'>
						<span className='font-semibold'>Testing & Frameworks:&nbsp;</span>
						Jest, Mocha, Cypress, Storybook, Microservices, RabbitMQ, Redis,
						Stripe API, OOP, REST APIs, Agile, Scrum
					</li>
				</ul>
			</div>
			<div className='w-full px-8'>
				<div className='text-black font-bold text-xl mb-2 uppercase border-b-2 border-gray-950'>
					Education
				</div>
				<div className='text-black text-justify flex justify-between py-1'>
					<div className='flex flex-col'>
						<div className='font-semibold'>Master of Information Systems </div>
						<div className=''>
							Linnaeus University, Växjö, Sweden (Completed 90 credits)
						</div>
					</div>
					<div className='font-semibold'>2019</div>
				</div>
				<div className='text-black text-justify flex justify-between py-1'>
					<div className='flex flex-col'>
						<div className='font-semibold'>Master of Information Science</div>
						<div className=''>University of Dhaka, Dhaka, Bangladesh</div>
					</div>
					<div className='font-semibold'>2014</div>
				</div>
				<div className='text-black text-justify flex justify-between py-1'>
					<div className='flex flex-col'>
						<div className='font-semibold'>Bachelor of Information Science</div>
						<div className=''>University of Dhaka, Dhaka, Bangladesh</div>
					</div>
					<div className='font-semibold'>2013</div>
				</div>
			</div>
		</div>
	);
};

export default Resume;
