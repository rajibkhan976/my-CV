"use client";

import { useEffect, useState, useRef } from "react";
import { Tooltip } from "@/components/ui/tooltip";

const TimeCard = (props: { customClass?: string }) => {
	const { customClass } = props;
	const months = [
		"January",
		"Februrary",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];
	const weekDays = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	];
	let time = new Date();

	const timeRef = useRef<any>(null);
	const [currentTime, setCurrentTime] = useState("");

	const UpdateTime = () => {
		const time = new Date().toLocaleTimeString();
		setCurrentTime(time);
	};

	useEffect(() => {
		timeRef.current = setInterval(UpdateTime);
		() => clearInterval(timeRef.current);
	}, []);

	return (
		<div
			className={`${customClass} text-lg font-medium flex flex-col bg-emerald-600 text-white rounded-md p-1 shadow-2xl`}
		>
			<div className='text-center flex justify-center p-1'>
				<Tooltip content='Local time'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth={1.5}
						stroke='currentColor'
						className='size-6'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
						/>
					</svg>
				</Tooltip>
				&nbsp;
				{currentTime}
			</div>
			<div className='flex justify-around p-1 rounded-sm'>
				<Tooltip content='Calendar'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth={1.5}
						stroke='currentColor'
						className='size-6 me-2'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z'
						/>
					</svg>
				</Tooltip>
				{`${weekDays[time.getDay()]},`}&nbsp;{time.getDate()}&nbsp;
				{`${months[time.getMonth()]},`}&nbsp;{time.getFullYear()}
			</div>
		</div>
	);
};

export default TimeCard;
