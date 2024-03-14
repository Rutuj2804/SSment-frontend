import React, { useEffect, useState } from "react";

interface TimerInterface {
	minutes: number;
}

const Timer = ({ minutes: mins }: TimerInterface) => {
	const [seconds, setSeconds] = useState(0);
	const [minutes, setMinutes] = useState(0);
	const [hours, setHours] = useState(2);

	useEffect(() => {
		const hoursAndMinutes = (totalMinutes: number) => {
			const hours = Math.floor(totalMinutes / 60);
			const minutes = totalMinutes % 60;
			return { hours, minutes };
		};

		const hoursAndMins = hoursAndMinutes(mins);

		setMinutes(hoursAndMins.minutes);
		setHours(hoursAndMins.hours);
	}, [mins]);

	useEffect(() => {
		const timer = setInterval(() => {
			if (hours === 0 && minutes === 0 && seconds === 0) {
				clearInterval(timer);
			} else {
				if (seconds === 0) {
                    console.log("seconds 1", seconds)
					if (minutes === 0) {
						if (hours === 0) {
							clearInterval(timer);
						} else {
							setHours((prevHours) => prevHours - 1);
							setMinutes(m=>59);
							setSeconds(s=>59);
						}
					} else {
						setMinutes((prevMinutes) => prevMinutes - 1);
						setSeconds(s=>59);
					}
				} else {
					setSeconds((prevSeconds) => prevSeconds - 1);
				}
			}
		}, 1000);

		return () => clearInterval(timer);
	}, [hours, seconds, minutes]);

	const formatTime = (num: number): string => {
		return num.toString().padStart(2, "0");
	};

	return (
		<div className="timer">
			<div className="element">
				<p>{formatTime(hours)}</p>
				<span>hour</span>
			</div>
			:
			<div className="element">
				<p>{formatTime(minutes)}</p>
				<span>minute</span>
			</div>
			:
			<div className="element">
				<p>{formatTime(seconds)}</p>
				<span>seconds</span>
			</div>
		</div>
	);
};

export default Timer;
