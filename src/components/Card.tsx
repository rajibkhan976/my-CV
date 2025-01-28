import { Image } from "@chakra-ui/react";
import Link from "next/link";

const Card = (props: { customClass?: string }) => {
	const { customClass } = props;
	return (
		<div className={`${customClass} ring-1 ring-gray-400 rounded-sm`}>
			<Image
				className='h-[450px] w-full rounded-sm'
				src='/Resume-Home.jpeg'
				alt=''
			/>
			<div className='w-full h-11/12 flex flex-col justify-start md:ps-4 pe-2'>
				<div className='text-black text-lg font-semibold px-1 mt-1'>
					Rajib Hossain Khan
				</div>
				<div className='text-gray-700 px-1 mt-1 text-justify font-medium'>
					I have developed this application to demonstrate that I possess the
					skills, which I have mentioned in my CV. I have moved to Australia and
					struggling to get an opportunity as a software developer. I assume
					that employers are not sure about my skillset as I don't have any
					local experience or degree. Therefore, the idea of developing a web
					based resume came into my mind. I have used JavaScript, TypeScript,
					Tailwind CSS, Node.js, Next.js and/or React to develop this app. This
					app behaves responsively in mobile devices My resume can also be
					downloaded and/or printed through this app. It is also possible to
					send me an email and the email can only be sent to my email id
					<span className='text-cyan-500'>&nbsp;rajibkhan976@gmail.com</span> as
					it is only for demo purpose.
				</div>
				<Link
					href={"https://github.com/rajibkhan976/my-CV"}
					target='_blank'
					className='no-underline px-1 font-medium'
				>
					Github link of this project
				</Link>
				<div className='text-teal-600 px-1 my-1 font-medium'>
					Area of interest: cooking, coding, playing and watching games,
					listening music, travelling, watching movies, etc.
				</div>
			</div>
		</div>
	);
};

export default Card;
