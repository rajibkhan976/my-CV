import { List } from "@chakra-ui/react";

const About = () => {
	return (
		<div className='f-full text-black p-4 flex flex-col'>
			<div className='text-black font-semibold text-2xl my-4'>About me</div>
			<div className='w-full flex md:flex-row flex-col'>
				<div className='text-black font-semibold text-lg'>
					Communication Skills
				</div>
				<ul className='list-disc list-inside m-2'>
					<li>
						Ability to explain technical concepts to non-technical stakeholders.
					</li>
					<li>Clear and concise written and verbal communication.</li>
					<li>Active listening to understand requirements and feedback.</li>
				</ul>
				<div className='text-black font-semibold text-lg'>
					Problem-Solving Skills
				</div>
				<ul className='list-disc list-inside m-2'>
					<li>Analytical thinking to identify and resolve issues.</li>
					<li>Creativity in designing innovative solutions.</li>
					<li>Resilience to troubleshoot and debug complex problems.</li>
				</ul>
				<div className='text-black font-semibold text-lg'>
					Teamwork and Collaboration
				</div>
				<ul className='list-disc list-inside m-2'>
					<li>Prioritizing tasks to meet project deadlines.</li>
					<li>Multitasking across different projects or modules.</li>
					<li>Staying organized in fast-paced development environments.</li>
				</ul>
				<div className='text-black font-semibold text-lg'>
					Time Management and Organization
				</div>
				<ul className='list-disc list-inside m-2'>
					<li>Prioritizing tasks to meet project deadlines.</li>
					<li>Multitasking across different projects or modules.</li>
					<li>Staying organized in fast-paced development environments.</li>
				</ul>
				<div className='text-black font-semibold text-lg'>
					Adaptability and Learning Agility
				</div>
				<ul className='list-disc list-inside m-2'>
					<li>Openness to new tools, frameworks, and methodologies.</li>
					<li>
						Flexibility to adapt to changing project requirements or
						technologies.
					</li>
					<li>Commitment to continuous improvement and upskilling.</li>
				</ul>
				<div className='text-black font-semibold text-lg'>
					Attention to Detail
				</div>
				<ul className='list-disc list-inside m-2'>
					<li>Ensuring precision in code and project requirements.</li>
					<li>
						Testing thoroughly to identify potential bugs or inefficiencies.
					</li>
				</ul>

				<div className='text-black font-semibold text-lg'>
					Empathy and User-Centric Thinking
				</div>
				<ul className='list-disc list-inside m-2'>
					<li>
						Understanding user’s needs to create intuitive software solutions.
					</li>
					<li>Considering accessibility and inclusivity in designs.</li>
				</ul>

				<div className='text-black font-semibold text-lg'>
					Critical Thinking
				</div>
				<ul className='list-disc list-inside m-2'>
					<li>
						Evaluating the impact of decisions on system performance and
						scalability.
					</li>
					<li>Making informed decisions based on data and analysis.</li>
				</ul>
			</div>
		</div>
	);
};

export default About;
