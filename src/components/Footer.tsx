import { FaCopyright } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
	const date = new Date();

	return (
		<div className='bg-black w-full h-16 flex md:flex-row flex-col items-center'>
			<div className='flex text-white font-semibold md:w-5/12 w-full md:my-0 my-2'>
				<FaCopyright className='ms-4 text-2xl' />
				<span className='text-sm align-middle'>
					&nbsp;{date.getFullYear()} All rights reserved to Rajib Hossain Khan
				</span>
			</div>
			<div className='flex text-2xl md:w-5/12 w-full md:ms-0 ms-8 md:my-0 my-2'>
				<Link
					href={`https://github.com/rajibkhan976`}
					target='_blank'
				>
					<FaGithub className='me-4 cursor-pointer' />
				</Link>
				<Link
					href={`https://www.linkedin.com/in/rajib-hossain-khan/`}
					target='_blank'
				>
					<FaLinkedin className='me-4 cursor-pointer' />
				</Link>
			</div>
		</div>
	);
};

export default Footer;
