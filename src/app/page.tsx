import Card from "@/components/Card";
import WeatherCard from "@/components/WeatherCard";

const Home = () => {
	return (
		<div className='flex w-full md:flex-row flex-col'>
			<Card customClass='md:w-6/12 w-full md:m-4' />
			<WeatherCard customClass='md:w-6/12 w-full md:m-4' />
		</div>
	);
};

export default Home;
