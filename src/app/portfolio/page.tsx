import Carousel from "@/components/Carousel";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
import CustomDialog from "@/components/VideoDialog";

const Portfolio = () => {
	return (
		<div className='w-full'>
			<div className='text-black font-semibold text-2xl text-center my-4 underline'>
				My portfolio projects
			</div>
			<div className='text-black font-medium text-lg text-center my-4'>
				I have added five of my best projects in the slide show. Apart from them
				I am adding some links of other projects.
			</div>
			<Carousel />
			<div className='font-semibold text-2xl my-4 flex justify-center'>
				<Link
					href={"https://pca.justgo.com/Account.mvc/Login?ReturnUrl=%2f"}
					target='_blank'
					className='no-underline px-1 text-blue-500 flex items-center'
				>
					JustGo
					<FaExternalLinkAlt className='ms-2 text-xl' />
				</Link>
			</div>
			<div className='text-black font-medium text-lg text-center my-4'>
				This is a membership and event management system used by many National
				Government Bodies in the Sports industry of UK, Scotland and Australia.
				I have developed some cool resubale components for this project
			</div>
			<div className='flex justify-center mb-4'>
				<CustomDialog
					heading={"JustGo"}
					url={"https://www.youtube.com/embed/kwUIO1Dop6c?si=_0zjtTrR0ZOsla6c"}
				/>
			</div>
			<div className='font-semibold text-2xl my-4 flex justify-center'>
				<Link
					href={"https://platform.gigalogy.com/public/solutions"}
					target='_blank'
					className='no-underline px-1 text-blue-500 flex items-center'
				>
					Gigalogy
					<FaExternalLinkAlt className='ms-2 text-xl' />
				</Link>
			</div>
			<div className='text-black font-medium text-lg text-center my-4'>
				This company is creating a platform for AI solutions. I have worked in
				that platform and implmented the internatiozation/localization feature
				both in back and front end. I have also created two custom pugins for
				Editor.js.
			</div>
		</div>
	);
};

export default Portfolio;
