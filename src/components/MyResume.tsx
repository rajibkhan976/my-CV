"use client";

import { Tooltip } from "@/components/ui/tooltip";
import { useEffect, useState } from "react";
import { LuDownload } from "react-icons/lu";

const MyResume = () => {
	const [resumeData, setResumeData] = useState<any>(null);

	const saveAsPdf = async (): Promise<any> => {
		const response = await fetch(window.location.origin + "/api/save-pdf", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				url: window.location.origin + "/resume",
			}),
		});

		const fileBlob = await response.blob();

		if (fileBlob?.type === "application/pdf") {
			var link = document.createElement("a");
			link.href = window.URL.createObjectURL(fileBlob);
			link.click();
			link.remove();
		} else {
			window.print();
		}
	};

	useEffect(() => {
		fetch(window.location.origin + "/api/resume")
			.then((res) => res.json())
			.then((res) => setResumeData(res))
			.catch((error) => console.error(error));
	}, []);

	return (
		<div className='w-full h-full'>
			<div className='flex justify-end w-full'>
				<Tooltip content='Download resume as PDF'>
					<button
						type='button'
						className='bg-emerald-600 text-white font-semibold cursor-pointer rounded-md p-2 me-4 mt-4'
						onClick={saveAsPdf}
					>
						<LuDownload className='text-3xl' />
					</button>
				</Tooltip>
			</div>
			<div className='w-full h-36 p-4 mb-2'>
				<div className='text-black font-bold text-xl mb-2 flex justify-center'>
					Resume&nbsp;
				</div>
				<h1 className='text-black font-bold text-2xl mb-2 text-center'>
					{resumeData?.resume?.name}
				</h1>
				<div className='w-full text-black text-md text-center'>
					<span className='px-2'>Email: {resumeData?.resume?.email}</span>
					<span className='px-2'>|</span>
					<span className='px-2'>Mobile: {resumeData?.resume?.mobile}</span>
					<span className='px-2'>|</span>
					<span className='px-2'>{resumeData?.resume?.address}</span>
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
						{resumeData?.resume?.skills?.frontend}
					</li>
					<li className='py-1'>
						<span className='font-semibold'>Backend Development:&nbsp;</span>
						{resumeData?.resume?.skills?.backend}
					</li>
					<li className='py-1'>
						<span className='font-semibold'>Databases:&nbsp;</span>
						{resumeData?.resume?.skills?.databse}
					</li>
					<li className='py-1'>
						<span className='font-semibold'>DevOps & Tools:&nbsp;</span>
						{resumeData?.resume?.skills?.devops_tools}
					</li>
					<li className='py-1'>
						<span className='font-semibold'>Testing & Frameworks:&nbsp;</span>
						{resumeData?.resume?.skills?.testing_frameworks}
					</li>
				</ul>
			</div>
			<div className='w-full px-8'>
				<div className='text-black font-bold text-xl mb-2 uppercase border-b-2 border-gray-950'>
					Education
				</div>
				{resumeData?.resume?.education?.map((element: any, index: number) => {
					return (
						<div
							key={index}
							className='text-black text-justify flex justify-between py-1'
						>
							<div className='flex flex-col'>
								<div className='font-semibold'>{element?.degree}</div>
								<div className=''>{element?.institution}</div>
							</div>
							<div className='font-semibold'>{element?.year}</div>
						</div>
					);
				})}
			</div>
			<div className='w-full px-8'>
				<div className='text-black font-bold text-xl mb-2 uppercase border-b-2 border-gray-950'>
					Training & Development
				</div>
				{resumeData?.resume?.training_development?.map(
					(element: any, index: number) => {
						return (
							<div
								key={index}
								className='text-black text-justify flex justify-between py-1'
							>
								<div className='flex flex-col'>
									<div className='font-semibold'>{element?.degree}</div>
									<div className=''>{element?.institution}</div>
								</div>
								<div className='font-semibold'>{element?.year}</div>
							</div>
						);
					}
				)}
			</div>
			<div className='w-full px-8'>
				<div className='text-black font-bold text-xl mb-2 uppercase border-b-2 border-gray-950'>
					Employment history
				</div>

				{resumeData?.resume?.employment_history?.map(
					(element: any, index: number) => {
						return (
							<div
								key={index}
								className='text-black text-justify flex justify-between py-1'
							>
								<div className='flex flex-col w-9/12'>
									<div className='pb-1'>
										<span className='font-semibold'>
											{element?.designation}&nbsp;
										</span>
										{element?.employer}
									</div>
									<div className='pb-1'>{element?.role}</div>
									<div className='font-semibold pb-1'>
										Key responsibilities:
									</div>
									<ul className='list-disc list-inside m-2 text-black pb-1'>
										{element?.responsibilities?.map(
											(item: string, index: number) => {
												return <li key={index + 100}>{item}</li>;
											}
										)}
									</ul>
									{element?.achievements ? (
										<>
											<div className='font-semibold pb-1'>
												Key achievements:
											</div>
											<ul className='list-disc list-inside m-2 text-black pb-1'>
												{element?.achievements?.map(
													(item: string, index: number) => {
														return <li key={index + 200}>{item}</li>;
													}
												)}
											</ul>
										</>
									) : null}
								</div>
								<div className='font-semibold w-2/12'>{element?.duration}</div>
							</div>
						);
					}
				)}
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
