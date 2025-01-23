import { Image } from "@chakra-ui/react";

const Home = () => (
	<div className='w-full p-4 flex justify-center h-[500px]'>
		<div className='w-7/12 h-5/6 flex ring-1 ring-gray-400 rounded-sm mt-12'>
			<Image
				className='rounded-sm'
				src='/Resume-Home.jpeg'
				alt=''
			/>
			<div className='h-5/6 flex flex-col justify-between'>
				<div className='text-black text-lg font-semibold ps-4 mt-4'>
					Rajib Hossain Khan
				</div>
				<div className='text-gray-600 ps-4 mt-4'>
					I am an aspiring software developer with a strong foundation in
					programming, problem-solving, and system design, seeking a dynamic
					role in a forward-thinking organization. Passionate about leveraging
					technical expertise in front-end and/or full-stack development to
					build innovative and scalable solutions. Committed to continuous
					learning, collaboration, and contributing to the success of
					cutting-edge projects while enhancing organizational goals.
				</div>
				<div className='text-teal-600 ps-4 mt-4'>
					Area of interest: cooking, coding, playing and watching games,
					listening music, travelling, watching movies, etc.
				</div>
			</div>
		</div>
	</div>
);

export default Home;
