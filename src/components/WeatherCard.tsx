"use client";

import { useState, useEffect } from "react";
import { Tooltip } from "@/components/ui/tooltip";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { WiSunrise } from "react-icons/wi";
import { TbSunset2 } from "react-icons/tb";
import { TbUvIndex } from "react-icons/tb";
import { TbTemperaturePlus } from "react-icons/tb";
import { TbTemperatureMinus } from "react-icons/tb";
import { FcCalendar } from "react-icons/fc";
import { Alert } from "@chakra-ui/react";

const WeatherCard = (props: { customClass?: string }) => {
	const { customClass } = props;

	const [weatherData, setWeatherData] = useState<any>(null);
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

	useEffect(() => {
		const options = {
			enableHighAccuracy: true,
			timeout: 5000,
			maximumAge: 0,
		};

		function success(pos: any) {
			const crd = pos.coords;

			console.log("Your current position is:");
			console.log(`Latitude : ${crd.latitude}`);
			console.log(`Longitude: ${crd.longitude}`);
			console.log(`More or less ${crd.accuracy} meters.`);
			if (crd.latitude && crd.longitude) {
				fetch(
					`https://api.open-meteo.com/v1/forecast?latitude=${crd?.latitude}&longitude=${crd?.longitude}&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max`
				)
					.then((res) => res.json())
					.then((res) => {
						let weatherDataArr = [];
						for (let i = 0; i < 7; i++) {
							weatherDataArr.push({
								date: res?.daily?.time[i],
								max_temp: res?.daily?.temperature_2m_max[i],
								min_temp: res?.daily?.temperature_2m_min[i],
								sunrise: res?.daily?.sunrise[i],
								sunset: res?.daily?.sunset[i],
								uv_index: res?.daily?.uv_index_max[i],
							});
						}
						setWeatherData(weatherDataArr);
					})
					.catch((error) => console.error(error));
			}
		}

		function error(err: any) {
			console.warn(`ERROR(${err.code}): ${err.message}`);
		}
		navigator.geolocation.getCurrentPosition(success, error, options);
	}, []);

	const formatDate = (date: string): string => {
		const formattedDate = new Date(date);
		return `${weekDays[formattedDate.getDay()]}, ${formattedDate.getDate()}
        ${months[formattedDate.getMonth()]}, ${formattedDate.getFullYear()}`;
	};

	const formatTime = (date: string): string => {
		const formattedDate = new Date(date);
		return `${formattedDate.getHours()}:${formattedDate.getMinutes()}`;
	};

	return (
		<div className={`${customClass} flex flex-col bg-emerald-600 rounded-md`}>
			<div className='text-center text-white font-semibold text-2xl pt-2 flex justify-center items-center'>
				<TiWeatherPartlySunny className='me-2 text-2xl' />
				<Tooltip content='Please allow accessing location to see the weather info'>
					<span>Weather</span>
				</Tooltip>
			</div>
			<div className='flex text-emerald-600 font-medium flex-wrap p-2'>
				{weatherData ? (
					weatherData?.map((element: any, index: number) => {
						return (
							<div
								key={index}
								className='flex p-2 flex-col font-semibold bg-white flex-grow m-1 rounded-md'
							>
								<div className='p-1 rounded-sm flex justify-center items-center'>
									<FcCalendar className='text-lg me-1' />
									{formatDate(element?.date)}
								</div>
								<div className='flex justify-between'>
									<div className='p-1 flex flex-grow'>
										<WiSunrise className='text-lg me-1' />
										Sunrise: {formatTime(element?.sunrise)}
									</div>
									<div className='p-1 flex-grow flex justify-end'>
										<TbSunset2 className='text-lg me-1' />
										Sunset: {formatTime(element?.sunset)}
									</div>
								</div>
								<div className='flex justify-between'>
									<div className='p-1 flex'>
										<TbTemperaturePlus className='text-lg me-1' />
										Max temp: {element?.max_temp} &#176; C
									</div>
									<div className='p-1 flex'>
										<TbTemperatureMinus className='text-lg me-1' />
										Min temp: {element?.min_temp} &#176; C
									</div>
								</div>
								<div className='flex justify-center p-1'>
									<TbUvIndex className='text-lg me-1' />
									UV Index: {element?.uv_index}
								</div>
							</div>
						);
					})
				) : (
					<Alert.Root
						status='info'
						title='This is the alert title'
					>
						<Alert.Indicator />
						<Alert.Title>
							Please refresh the page and allow access to your location to get
							the weather data based on your current location
						</Alert.Title>
					</Alert.Root>
				)}
			</div>
		</div>
	);
};

export default WeatherCard;
