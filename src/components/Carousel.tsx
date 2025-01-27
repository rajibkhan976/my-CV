"use client";

import Carousel from "react-bootstrap/Carousel";
import { FcPrevious } from "react-icons/fc";
import { FcNext } from "react-icons/fc";
import { useState } from "react";

const CustomCarousel = () => {
	const carouselData = [
		"https://www.youtube.com/embed/0Vff2EoFeXY?si=JESqgIB3PUxEIsea",
		"https://www.youtube.com/embed/R1b8psxrUUc?si=-rkpw4Gw0BrX040A",
		"https://www.youtube.com/embed/K0sj51FH8AY?si=wru610VfXI7P2zM0",
		"https://www.youtube.com/embed/a8TytBqkK78?si=k44jORSm5D-Hw3Ea",
		"https://www.youtube.com/embed/cbw6gT2Mjb4?si=WsY97BY1VL0qJ2tG",
	];

	const [index, setIndex] = useState<number>(0);

	const handleSelect = (selectedIndex: number) => {
		setIndex(selectedIndex);
	};

	return (
		<div className='w-full h-screen flex justify-center'>
			<Carousel
				className='md:w-7/12 w-11/12'
				activeIndex={index}
				onSelect={handleSelect}
				prevIcon={<FcPrevious className='text-3xl' />}
				nextIcon={<FcNext className='text-3xl' />}
			>
				{carouselData?.map((element: string, index: number) => {
					return (
						<Carousel.Item key={index}>
							<iframe
								className='w-full h-[500px]'
								src={element}
								allowFullScreen
							/>
						</Carousel.Item>
					);
				})}
			</Carousel>
		</div>
	);
};

export default CustomCarousel;
