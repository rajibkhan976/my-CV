import { List } from "@chakra-ui/react";

const About = () => {
	return (
		<div className='f-full text-black p-4'>
			<div className='text-black font-semibold text-2xl text-center my-4'>
				About me
			</div>
			<div className='text-black font-semibold text-lg'>
				Communication Skills
			</div>
			<ul className='list-disc list-inside m-2 ps-4'>
				<li>
					Ability to explain technical concepts to non-technical stakeholders.
				</li>
				<li>Clear and concise written and verbal communication.</li>
				<li>Active listening to understand requirements and feedback.</li>
			</ul>
			<div className='text-black font-semibold text-lg'>
				Problem-Solving Skills
			</div>
			<ul className='list-disc list-inside m-2 ps-4'>
				<li>Analytical thinking to identify and resolve issues.</li>
				<li>Creativity in designing innovative solutions.</li>
				<li>Resilience to troubleshoot and debug complex problems.</li>
			</ul>
			<div className='text-black font-semibold text-lg ps-4'>
				Teamwork and Collaboration
			</div>
			<ul className='list-disc list-inside m-2'>
				<li>Prioritizing tasks to meet project deadlines.</li>
				<li>Multitasking across different projects or modules.</li>
				<li>Staying organized in fast-paced development environments.</li>
			</ul>
		</div>
	);
};

export default About;
