"use client";

import { useState, useEffect } from "react";

const WeatherCard = (props: { customClass?: string }) => {
	const { customClass } = props;

	const [weatherData, setWeatherData] = useState<any>(null);

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
					.then((res) => setWeatherData(res))
					.catch((error) => console.error(error));
			}
		}

		function error(err: any) {
			console.warn(`ERROR(${err.code}): ${err.message}`);
		}
		navigator.geolocation.getCurrentPosition(success, error, options);
	}, []);

	console.log(weatherData);

	return <div className={`${customClass}`}>&npsb;</div>;
};

export default WeatherCard;
