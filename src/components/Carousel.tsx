"use client";

const Carousel = () => {
	let slideIndex = 1;

	// Next/previous controls
	const plusSlides = (n: number) => {
		showSlides((slideIndex += n));
	};

	// Thumbnail image controls
	const currentSlide = (n: number) => {
		showSlides((slideIndex = n));
	};

	const showSlides = (n: number) => {
		let i;
		let slides: any = document?.getElementsByClassName("mySlides");
		let dots = document?.getElementsByClassName("dot");
		if (n > slides.length) {
			slideIndex = 1;
		}
		if (n < 1) {
			slideIndex = slides.length;
		}
		for (i = 0; i < slides.length; i++) {
			slides[i].style.display = "none";
		}
		for (i = 0; i < dots.length; i++) {
			dots[i].className = dots[i].className.replace(" active", "");
		}
		slides[slideIndex - 1].style.display = "block";
		dots[slideIndex - 1].className += " active";
	};

	return (
		<div className='w-full'>
			<div
				className='slideshow-container w-11/12'
				onLoad={() => showSlides(slideIndex)}
			>
				{/* <!-- Full-width images with number and caption text --> */}
				<div className='mySlides fade mt-12'>
					<div className='numbertext'>1 / 5</div>
					<iframe
						className='w-full h-full'
						src='https://www.youtube.com/embed/0Vff2EoFeXY?si=JESqgIB3PUxEIsea'
						allowFullScreen
					/>
				</div>

				<div className='mySlides fade mt-12'>
					<div className='numbertext'>2 / 5</div>
					<iframe
						className='w-full h-full'
						src='https://www.youtube.com/embed/R1b8psxrUUc?si=-rkpw4Gw0BrX040A'
						allowFullScreen
					/>
				</div>

				<div className='mySlides fade mt-12'>
					<div className='numbertext'>3 / 5</div>
					<iframe
						className='w-full h-full'
						src='https://www.youtube.com/embed/K0sj51FH8AY?si=wru610VfXI7P2zM0'
						allowFullScreen
					/>
				</div>

				<div className='mySlides fade mt-12'>
					<div className='numbertext'>4 / 5</div>
					<iframe
						className='w-full h-full'
						src='https://www.youtube.com/embed/a8TytBqkK78?si=k44jORSm5D-Hw3Ea'
						allowFullScreen
					/>
				</div>

				<div className='mySlides fade mt-12'>
					<div className='numbertext'>5 / 5</div>
					<iframe
						className='w-full h-full'
						src='https://www.youtube.com/embed/cbw6gT2Mjb4?si=WsY97BY1VL0qJ2tG'
						allowFullScreen
					/>
				</div>

				{/* <!-- Next and previous buttons --> */}
				<a
					className='prev'
					onClick={() => plusSlides(-1)}
				>
					&#10094;
				</a>
				<a
					className='next'
					onClick={() => plusSlides(1)}
				>
					&#10095;
				</a>
			</div>
			<br />

			{/* <!-- The dots/circles --> */}
			<div className='text-center'>
				<span
					className='dot'
					onClick={() => currentSlide(1)}
				></span>
				<span
					className='dot'
					onClick={() => currentSlide(2)}
				></span>
				<span
					className='dot'
					onClick={() => currentSlide(3)}
				></span>
				<span
					className='dot'
					onClick={() => currentSlide(4)}
				></span>
				<span
					className='dot'
					onClick={() => currentSlide(5)}
				></span>
			</div>
		</div>
	);
};

export default Carousel;
