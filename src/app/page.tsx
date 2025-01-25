import { Image } from "@chakra-ui/react";

const Home = () => (
	<div className='w-full p-4 flex justify-center'>
		<div className='md:w-4/12 w-full ring-1 ring-gray-400 rounded-sm mt-4 sm:flex-col sm:justify-start'>
			<Image
				className='h-[350px] w-full rounded-sm'
				src='/Resume-Home.jpeg'
				alt=''
			/>
			<div className='w-full h-11/12 flex flex-col justify-start md:ps-4 pe-2'>
				<div className='text-black text-lg font-semibold px-1 mt-1'>
					Rajib Hossain Khan
				</div>
				<div className='text-gray-600 px-1 mt-1 text-justify'>
					I am an aspiring software developer with a strong foundation in
					programming, problem-solving, and system design, seeking a dynamic
					role in a forward-thinking organization. Passionate about leveraging
					technical expertise in front-end and/or full-stack development to
					build innovative and scalable solutions. Committed to continuous
					learning, collaboration, and contributing to the success of
					cutting-edge projects while enhancing organizational goals.
				</div>
				<div className='text-teal-600 px-1 my-1'>
					Area of interest: cooking, coding, playing and watching games,
					listening music, travelling, watching movies, etc.
				</div>
			</div>
		</div>
	</div>
);

export default Home;
