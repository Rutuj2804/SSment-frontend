import React from "react";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

const BarChart = () => {
	const options: ApexOptions = {
		series: [
			{
				data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380],
			},
		],
		chart: {
			type: "bar",
			height: 350,
		},
		plotOptions: {
			bar: {
				borderRadius: 4,
				horizontal: true,
			},
		},
		dataLabels: {
			enabled: false,
		},
		xaxis: {
			categories: [
				"South Korea",
				"Canada",
				"United Kingdom",
				"Netherlands",
				"Italy",
				"France",
				"Japan",
				"United States",
				"China",
				"Germany",
			],
		},
	};

	const series = [
		{
			data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380],
		},
	];

	return (
		<div>
			<Chart
				options={options}
				series={series}
				type="bar"
			/>
		</div>
	);
};

export default BarChart;
