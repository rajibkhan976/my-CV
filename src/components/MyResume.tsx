"use client";

import { Tooltip } from "@/components/ui/tooltip";

const MyResume = () => {
	const saveAsPdf = async (): Promise<any> => {
		const response = await fetch(window.location.origin + "/api/save-pdf", {
			method: "POST", // Method put is to create
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				url: window.location.origin + "/resume",
			}),
		});

		if (response) {
			const fileBlob = await response.blob();
			var link = document.createElement("a");
			link.href = window.URL.createObjectURL(fileBlob);
			link.click();
			link.remove();
		} else {
			window.print();
		}
	};

	return (
		<div className='w-full h-full'>
			<div className='flex justify-end w-full'></div>

			<div className='w-full h-36 text-center p-4 mb-2'>
				<div className='text-black font-bold text-xl mb-2 flex justify-center'>
					Resume&nbsp;
					<Tooltip content='Download resume as PDF'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 24 24'
							fill='currentColor'
							className='size-6 text-black cursor-pointer ms-2'
							onClick={saveAsPdf}
						>
							<path
								fillRule='evenodd'
								d='M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z'
								clipRule='evenodd'
							/>
						</svg>
					</Tooltip>
				</div>
				<h1 className='text-black font-bold text-2xl mb-2'>
					Rajib Hossain Khan
				</h1>
				<div className='w-full text-black text-md'>
					<span className='px-2'>Email: rajibkhan976@gmail.com</span>
					<span className='px-2'>|</span>
					<span className='px-2'>Mobile: +61480417262</span>
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
						<div className='font-semibold'>Master of Information Systems</div>
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
			<div className='w-full px-8'>
				<div className='text-black font-bold text-xl mb-2 uppercase border-b-2 border-gray-950'>
					Training & Development
				</div>
				<div className='text-black text-justify flex justify-between py-1'>
					<div className='flex flex-col'>
						<div className='font-semibold'>
							Certificate IV in Cyber Security
						</div>
						<div className=''>North Metropolitan TAFE, Perth, WA</div>
					</div>
					<div className='font-semibold'>2026</div>
				</div>
				<div className='text-black text-justify flex justify-between py-1'>
					<div className='flex flex-col'>
						<div className='font-semibold'>
							Professional Diploma in Frontend Developmen
						</div>
						<div className=''>EC Utbildning, Växjö, Sweden</div>
					</div>
					<div className='font-semibold'>2020</div>
				</div>
				<div className='text-black text-justify flex justify-between py-1'>
					<div className='flex flex-col'>
						<div className='font-semibold'>
							Professional Diploma in Web Development
						</div>
						<div className=''>IDB-BISEW, Dhaka, Bangladesh</div>
					</div>
					<div className='font-semibold'>2016</div>
				</div>
			</div>
			<div className='w-full px-8'>
				<div className='text-black font-bold text-xl mb-2 uppercase border-b-2 border-gray-950'>
					Employment history
				</div>
				<div className='text-black text-justify flex justify-between pb-1'>
					<div className='flex flex-col w-9/12'>
						<div className='pb-1'>
							<span className='font-semibold'>Admin Assistant;&nbsp;</span>
							Australian Islamic College, Henley Brook, Perth, WA 6055
						</div>
						<div className='pb-1'>
							Provide administrative assistance to the AIC henley brook branch
						</div>
						<div className='font-semibold pb-1'>Key responsibilities:</div>
						<ul className='list-disc list-inside m-2 text-black pb-1'>
							<li>Helping parents with IT stuff</li>
							<li>
								Maintaing & handling students records across multiple systems
							</li>
							<li>Supporting academic staff with IT tools</li>
						</ul>
					</div>
					<div className='font-semibold w-2/12'>January, 2025 - Current</div>
				</div>
				<div className='text-black text-justify flex justify-between pb-1'>
					<div className='flex flex-col pb-1 w-9/12'>
						<div className=' pb-1'>
							<span className='font-semibold'>
								Parcel Post Officer (Christmas Casual);&nbsp;
							</span>
							Australia Post, Perth, WA
						</div>
						<div className='pb-1'>
							This role was created to handle a large volume of parcels during
							the Christmas period.
						</div>
						<div className='font-semibold pb-1'>Key responsibilities:</div>
						<ul className='list-disc list-inside m-2 text-black pb-1'>
							<li>Parcel processing & sorting</li>
						</ul>
					</div>
					<div className='font-semibold w-2/12'>
						October, 2024 - January, 2025
					</div>
				</div>

				<div className='text-black text-justify flex justify-between py-1'>
					<div className='flex flex-col w-9/12'>
						<div className='pb-1'>
							<span className='font-semibold'>
								{" "}
								Software Developer (Work From Home/Remote);&nbsp;
							</span>
							Tier5 Technology Solutions Pvt Ltd, Calcutta, India
						</div>
						<div className='pb-1'>
							Development of software for the employer using React, TypeScript,
							Node.js, JavaScript, HTML5, CSS3, SCSS, MongoDB, Git, AWS
						</div>
						<div className='font-semibold pb-1'>Key responsibilities:</div>
						<ul className='list-disc list-inside m-2 text-black pb-1'>
							<li>
								Work on an organic marketing platform Friender and Gym
								management software
							</li>
							<li>Development of web portal</li>
							<li>API integration & performance optimization</li>
						</ul>
						<div className='font-semibold pb-1'>Key achievements:</div>
						<ul className='list-disc list-inside m-2 text-black pb-1'>
							<li>Behind-the-Scenes Wonder Award - January, 2024</li>
						</ul>
					</div>
					<div className='font-semibold w-2/12'>July, 2023 - July, 2024</div>
				</div>

				<div className='text-black text-justify flex justify-between py-1'>
					<div className='flex flex-col w-9/12'>
						<div className='pb-1'>
							<span className='font-semibold'>
								{" "}
								Software Developer (Freelance project);&nbsp;
							</span>
							Alphabyte Inc., 3-1-36 Aoyama Marutake Building, 6th Floor, Minami
							Aoyama, Minato-ku, Tokyo 107-0062, Japan
						</div>
						<div className='pb-1'>
							Development of product page by using Next.js, TypeScript, React
							Query, Node.js, NestJS, PostgreSQL, Git, JavaScript, TypeScript,
							HTML5, CSS3, Tailwind CSS, OOP, Docker
						</div>
						<div className='font-semibold pb-1'>Key responsibilities:</div>
						<ul className='list-disc list-inside m-2 text-black pb-1'>
							<li>Work on Retreat portal</li>
							<li>
								Development of product page with purchase options for the
								attendees
							</li>
							<li>Stripe API integration</li>
						</ul>
						<div className='font-semibold pb-1'>Key achievements:</div>
						<ul className='list-disc list-inside m-2 text-black pb-1'>
							<li>
								Completion of the product page development in a very short time
								that made the client super happy
							</li>
						</ul>
					</div>
					<div className='font-semibold w-2/12'>February 2024</div>
				</div>

				<div className='text-black text-justify flex justify-between py-1'>
					<div className='flex flex-col w-9/12'>
						<div className='pb-1'>
							<span className='font-semibold'>Frontend Developer;&nbsp;</span>
							JustGo Technologies Ltd, Bangla Motor, Dhaka, Bangladesh
						</div>
						<div className='pb-1'>
							Development of membership & event management system by using
							React, React Query, TypeScript, Storybook, Zustand, Tailwind CSS,
							ASP.NET MVC, C#, Microsoft SQL, Azure, Stripe, Git, npm, Jest
						</div>
						<div className='font-semibold pb-1'>Key responsibilities:</div>
						<ul className='list-disc list-inside m-2 text-black pb-1'>
							<li>Work on membership management system JustGo</li>
							<li>Implementation of new Figma design for better UX</li>
							<li>Third-party API integration</li>
						</ul>
						<div className='font-semibold pb-1'>Key achievements:</div>
						<ul className='list-disc list-inside m-2 text-black pb-1'>
							<li>Integrated Stripe API</li>
							<li>Designed custom reusable Calendar component</li>
						</ul>
					</div>
					<div className='font-semibold w-2/12'>June, 2022 – May, 2023</div>
				</div>

				<div className='text-black text-justify flex justify-between py-1'>
					<div className='flex flex-col w-9/12'>
						<div className='pb-1'>
							<span className='font-semibold'>Software Engineer;&nbsp;</span>
							Gigalogy, Mirpur DOHS, Dhaka, Bangladesh
						</div>
						<div className='pb-1'>
							Development of company website & AI platform by using Vue.js,
							Vuetify, Python, Flask, Node.js, PostgreSQL, Git, Redis,
							JavaScript, HTML5, CSS3, Cypress, Docker, OOP, AWS
						</div>
						<div className='font-semibold pb-1'>Key responsibilities:</div>
						<ul className='list-disc list-inside m-2 text-black pb-1'>
							<li>
								Work on Gigalogy AI platform & company website for a Japanese
								client
							</li>
							<li>Implementation of new features</li>
							<li>API creation and modification</li>
						</ul>
						<div className='font-semibold pb-1'>Key achievements:</div>
						<ul className='list-disc list-inside m-2 text-black pb-1'>
							<li>Implemented internationalization/localization</li>
							<li>Customized editor.js</li>
						</ul>
					</div>
					<div className='font-semibold w-2/12'>January, 2022 – July, 2022</div>
				</div>

				<div className='text-black text-justify flex justify-between py-1'>
					<div className='flex flex-col w-9/12'>
						<div className='pb-1'>
							<span className='font-semibold'>
								Creative Developer (JavaScript);&nbsp;
							</span>
							Service Engine BPO, 8 Abbas Garden, Dhaka, Bangladesh
						</div>
						<div className='pb-1'>
							Development of animated web banners by using GSAP, JavaScript,
							jQuery, HTML5, CSS3, Git
						</div>
						<div className='font-semibold pb-1'>Key responsibilities:</div>
						<ul className='list-disc list-inside m-2 text-black pb-1'>
							<li>Develop marketing solutions for Flashtalking</li>
							<li>Creating interactive web banners</li>
							<li>Implementing animations with GSAP</li>
						</ul>
						<div className='font-semibold pb-1'>Key achievements:</div>
						<ul className='list-disc list-inside m-2 text-black pb-1'>
							<li>Worked as a mentor</li>
						</ul>
					</div>
					<div className='font-semibold w-2/12'>
						March, 2021 – December, 2021
					</div>
				</div>

				<div className='text-black text-justify flex justify-between py-1'>
					<div className='flex flex-col w-9/12'>
						<div className='pb-1'>
							<span className='font-semibold'>Software Engineer;&nbsp;</span>
							MESOLshare Ltd., Dhaka, Bangladesh
						</div>
						<div className='pb-1'>
							Development of company software by using React, Material UI,
							Redux, Angular, JavaScript, HTML5, CSS3, Git, Bootstrap, Python,
							Django, PostgreSQL
						</div>
						<div className='font-semibold pb-1'>Key responsibilities:</div>
						<ul className='list-disc list-inside m-2 text-black pb-1'>
							<li>Work on in-house software SOLGrid 2 dashboard</li>
							<li>Converting Figma designs to UI</li>
							<li>API integration</li>
						</ul>
						<div className='font-semibold pb-1'>Key achievements:</div>
						<ul className='list-disc list-inside m-2 text-black pb-1'>
							<li>Implemented Payment, SolBox & Customer module</li>
						</ul>
					</div>
					<div className='font-semibold w-2/12'>
						October, 2020 – March, 2021
					</div>
				</div>

				<div className='text-black text-justify flex justify-between py-1'>
					<div className='flex flex-col w-9/12'>
						<div className='pb-1'>
							<span className='font-semibold'>Software Developer;&nbsp;</span>
							Visma Labs AB, Växjö, Sweden
						</div>
						<div className='pb-1'>
							Development of HRPlus8 software by using React, Redux, React
							Virtualized, Bootstrap, ASP.NET Web API, C#, Microsoft SQL, Git,
							RabbitMQ, SCSS, Gulp, Webpack, Babel, Docker, OOP, Azure, Java,
							Spring, Maven
						</div>
						<div className='font-semibold pb-1'>Key responsibilities:</div>
						<ul className='list-disc list-inside m-2 text-black pb-1'>
							<li>Work on HRPlus8 software</li>
							<li>Development of delegation and employment module</li>
						</ul>
						<div className='font-semibold pb-1'>Key achievements:</div>
						<ul className='list-disc list-inside m-2 text-black pb-1'>
							<li>
								Successfully completed assigned tasks & proposed further
								enhancements
							</li>
						</ul>
					</div>
					<div className='font-semibold w-2/12'>
						September, 2019 – June, 2020
					</div>
				</div>

				<div className='text-black text-justify flex justify-between py-1'>
					<div className='flex flex-col w-9/12'>
						<div className='pb-1'>
							<span className='font-semibold'>
								Junior Software Engineer & Intern;&nbsp;
							</span>
							bGlobal Interactive Ltd., Dhaka, Bangladesh
						</div>
						<div className='pb-1'>
							Development & maintenance of INGRAM MICRO websites by using HTML5,
							CSS3, jQuery, JavaScript, PHP, Laravel, WordPress, Git, MySQL
						</div>
						<div className='font-semibold pb-1'>Key responsibilities:</div>
						<ul className='list-disc list-inside m-2 text-black pb-1'>
							<li>Develop and maintain Ingram Micro websites</li>
							<li>Customization of existing features</li>
						</ul>
						<div className='font-semibold pb-1'>Key achievements:</div>
						<ul className='list-disc list-inside m-2 text-black pb-1'>
							<li>Customized WordPress plugin</li>
						</ul>
					</div>
					<div className='font-semibold w-2/12'>August, 2016 – March, 2017</div>
				</div>
			</div>
			<div className='w-full px-8'>
				<div className='text-black font-bold text-xl mb-2 uppercase border-b-2 border-gray-950'>
					Referees
				</div>
				<div className='text-black text-justify'>Available upon request</div>
				<br />
				<br />
			</div>
		</div>
	);
};

export default MyResume;
