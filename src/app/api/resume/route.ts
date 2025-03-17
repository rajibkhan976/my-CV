import { NextResponse } from "next/server";

const resume = {
	name: "Rajib Hossain Khan",
	email: "rajibkhan976@gmail.com",
	mobile: "0480417262",
	address: "Craigie, WA 6025",
	skills: {
		frontend:
			"JavaScript (ES6+), React, Redux, Next.js, TypeScript, Angular, Vue.js, HTML5, CSS3, Tailwind CSS, Bootstrap, SCSS, GSAP",
		backend:
			"Node.js, Express, NestJS, Python, Django, Flask, PHP, Laravel, ASP.NET MVC, ASP.NET Web API, C#, Java, Spring Boot, Maven",
		databse: "SQL, PostgreSQL, Microsoft SQL Server, MongoDB, MySQL, GraphQL",
		devops_tools:
			"Docker, AWS (EC2, S3), Git (GitHub, GitLab, Bitbucket), Jira, npm, Webpack, Babel, Azure",
		testing_frameworks:
			"Jest, Mocha, Cypress, Storybook, Microservices, RabbitMQ, Redis, Stripe API, OOP, REST APIs, Agile, Scrum",
	},
	education: [
		{
			degree: "Master of Information Systems",
			institution: "Linnaeus University, Växjö, Sweden (Completed 90 credits)",
			year: "2019",
		},
		{
			degree: "Master of Information Science",
			institution: "University of Dhaka, Dhaka, Bangladesh",
			year: "2014",
		},
		{
			degree: "Bachelor of Information Science",
			institution: "University of Dhaka, Dhaka, Bangladesh",
			year: "2013",
		},
	],
	training_development: [
		{
			degree: "Cloud Engineering for Intermediate Roles Skill Set",
			institution: "North Metropolitan TAFE, Perth, WA",
			year: "2025",
		},
		{
			degree: "Certificate IV in Cyber Security (Part time)",
			institution: "North Metropolitan TAFE, Joondalup, WA",
			year: "2026",
		},
		{
			degree: "Professional Diploma in Frontend Development",
			institution: "EC Utbildning, Växjö, Sweden",
			year: "2020",
		},
		{
			degree: "Professional Diploma in Web Development",
			institution: "IDB-BISEW IT Scholarship Project, Dhaka, Bangladesh",
			year: "2016",
		},
	],
	employment_history: [
		{
			designation: "Data Entry Operator",
			employer:
				"PERSOLKELLY, WAEC - Central Vote Processing, 30 Beaufort Street, 6000",
			duration: "5th March, 2025 - 15th March, 2025",
			role: null,
			responsibilities: [
				"Declaration processing for WAEC during the state election 2025",
				"Legislative assembly & legislative council ballot counting",
				"Data entry operations in EMSWA Vote processing software",
			],
			achievements: null,
		},
		{
			designation: "Admin Assistant",
			employer: "Australian Islamic College, Henley Brook, Perth, WA 6055",
			duration: "28th January, 2025 - 14th February, 2025",
			role: "Provide administrative assistance to the AIC henley brook branch",
			responsibilities: [
				"Helping parents with IT stuff",
				"Maintaining & handling students records across multiple systems",
				"Supporting academic staff with IT tools",
			],
			achievements: null,
		},
		{
			designation: "Parcel Post Officer (Christmas Casual)",
			employer: "Australia Post, Perth, WA",
			duration: "October, 2024 - January, 2025",
			role: "This role was created to handle a large volume of parcels during the Christmas period.",
			responsibilities: ["Parcel processing & sorting"],
			achievements: null,
		},
		{
			designation: "Software Developer (Work From Home/Remote)",
			employer: "Tier5 Technology Solutions Pvt Ltd, Calcutta, India",
			duration: "July, 2023 - July, 2024",
			role: "Development of software for the employer using React, TypeScript, Node.js, JavaScript, HTML5, CSS3, SCSS, MongoDB, Git, AWS",
			responsibilities: [
				"Work on an organic marketing platform Friender and Gym management software",
				"Development of web portal",
				"API integration & performance optimization",
			],
			achievements: ["Behind-the-Scenes Wonder Award - January, 2024"],
		},
		{
			designation: "Software Developer (Freelance project)",
			employer:
				"Alphabyte Inc., 3-1-36 Aoyama Marutake Building, 6th Floor, Minami Aoyama, Minato-ku, Tokyo 107-0062, Japan",
			duration: "February 2024",
			role: "Development of product page by using Next.js, TypeScript, React Query, Node.js, NestJS, PostgreSQL, Git, JavaScript, TypeScript, HTML5, CSS3, Tailwind CSS, OOP, Docker",
			responsibilities: [
				"Work on Retreat portal",
				"Development of product page with purchase options for the attendees",
				"Stripe API integration",
			],
			achievements: [
				"Completion of the product page development in a very short time that made the client super happy",
			],
		},
		{
			designation: "Frontend Developer",
			employer: "JustGo Technologies Ltd, Bangla Motor, Dhaka, Bangladesh",
			duration: "June, 2023 - May, 2024",
			role: "Development of membership & event management system by using React, React Query, TypeScript, Storybook, Zustand, Tailwind CSS, ASP.NET MVC, C#, Microsoft SQL, Azure, Stripe, Git, npm, Jest",
			responsibilities: [
				"Work on membership management system JustGo",
				"Implementation of new Figma design for better UX",
				"Third-party API integration",
			],
			achievements: [
				"Integrated Stripe API",
				"Designed custom reusable Calendar component",
			],
		},
		{
			designation: "Software Engineer",
			employer: "Gigalogy, Mirpur DOHS, Dhaka, Bangladesh",
			duration: "January, 2022 – July, 2022",
			role: "Development of company website & AI platform by using Vue.js, Vuetify, Python, Flask, Node.js, PostgreSQL, Git, Redis, JavaScript, HTML5, CSS3, Cypress, Docker, OOP, AWS",
			responsibilities: [
				"Work on Gigalogy AI platform & company website for a Japanese client",
				"Implementation of new features",
				"API creation and modification",
			],
			achievements: [
				"Implemented internationalization/localization",
				"Customized editor.js",
			],
		},
		{
			designation: "Creative Developer (JavaScript)",
			employer: "Service Engine BPO, 8 Abbas Garden, Dhaka, Bangladesh",
			duration: "March, 2021 – December, 2021",
			role: "Development of animated web banners by using GSAP, JavaScript, jQuery, HTML5, CSS3, Git",
			responsibilities: [
				"Develop marketing solutions for Flashtalking",
				"Creating interactive web banners",
				"Implementing animations with GSAP",
			],
			achievements: ["Worked as a mentor and guided junior developers"],
		},
		{
			designation: "Software Engineer",
			employer: "MESOLshare Ltd., Dhaka, Bangladesh",
			duration: "October, 2020 – March, 2021",
			role: "Development of company software by using React, Material UI, Redux, Angular, JavaScript, HTML5, CSS3, Git, Bootstrap, Python, Django, PostgreSQL",
			responsibilities: [
				"Work on in-house software SOLGrid 2 dashboard",
				"Converting Figma designs to UI",
				"API integration",
			],
			achievements: ["Implemented Payment, SolBox & Customer module"],
		},
		{
			designation: "Software Developer",
			employer: "Visma Labs AB, Växjö, Sweden",
			duration: "September, 2019 – June, 2020",
			role: "Development of HRPlus8 software by using React, Redux, React Virtualized, Bootstrap, ASP.NET Web API, C#, Microsoft SQL, Git, RabbitMQ, SCSS, Gulp, Webpack, Babel, Docker, OOP, Azure, Java, Spring, Maven",
			responsibilities: [
				"Work on HRPlus8 software",
				"Development of delegation and employment module",
			],
			achievements: [
				"Successfully completed assigned tasks & proposed further enhancements",
			],
		},
		{
			designation: "Junior Software Engineer & Intern",
			employer: "bGlobal Interactive Ltd., Dhaka, Bangladesh",
			duration: "August, 2016 – March, 2017",
			role: "Development & maintenance of INGRAM MICRO websites by using HTML5, CSS3, jQuery, JavaScript, PHP, Laravel, WordPress, Git, MySQL",
			responsibilities: [
				"Develop and maintain Ingram Micro websites",
				"Customization of existing features",
			],
			achievements: ["Customized WordPress plugin Dynamic Tag Cloud"],
		},
	],
};

export async function GET() {
	try {
		return NextResponse.json(
			{ resume },
			{
				status: 200,
				headers: { "Content-Type": "application/json" },
			}
		);
	} catch (error) {
		console.error("Something Went Wrong", error);
		return NextResponse.json(
			{ error: "Internal server error" },
			{
				status: 500,
				headers: { "Content-Type": "application/json" },
			}
		);
	}
}
