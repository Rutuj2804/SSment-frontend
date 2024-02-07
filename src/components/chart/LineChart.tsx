import React from "react";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

const LineChart = () => {
	const options: ApexOptions = {
		chart: {
			type: "area",
			stacked: false,
			height: 350,
			zoom: {
				type: "x",
				enabled: true,
				autoScaleYaxis: true,
			},
			toolbar: {
				autoSelected: "zoom",
			},
		},
		dataLabels: {
			enabled: false,
		},
		markers: {
			size: 0,
		},
		title: {
			text: "Stock Price Movement",
			align: "left",
		},
		fill: {
			type: "gradient",
			gradient: {
				shadeIntensity: 1,
				inverseColors: false,
				opacityFrom: 0.5,
				opacityTo: 0,
				stops: [0, 90, 100],
			},
		},
		yaxis: {
			labels: {
				formatter: function (val) {
					return (val / 1000000).toFixed(0);
				},
			},
			title: {
				text: "Price",
			},
		},
		xaxis: {
			type: "datetime",
		},
		tooltip: {
			shared: false,
			y: {
				formatter: function (val) {
					return (val / 1000000).toFixed(0);
				},
			},
		},
	};

	const series = [
		{
			data: [
				[1327359600000, 30.95],
				[1327446000000, 31.34],
				[1327532400000, 31.18],
				[1327618800000, 31.05],
				[1327878000000, 31.0],
				[1327964400000, 30.95],
				[1328050800000, 31.24],
				[1328137200000, 31.29],
				[1328223600000, 31.85],
				[1328482800000, 31.86],
				[1328569200000, 32.28],
				[1328655600000, 32.1],
				[1328742000000, 32.65],
				[1328828400000, 32.21],
				[1329087600000, 32.35],
				[1329174000000, 32.44],
				[1329260400000, 32.46],
				[1329346800000, 32.86],
				[1329433200000, 32.75],
				[1329778800000, 32.54],
				[1329865200000, 32.33],
				[1329951600000, 32.97],
				[1330038000000, 33.41],
				[1330297200000, 33.27],
				[1330383600000, 33.27],
				[1330470000000, 32.89],
				[1330556400000, 33.1],
				[1330642800000, 33.73],
			],
		},
	];

	return (
		<div>
			<Chart
				options={options}
				series={series}
				type="area"
			/>
		</div>
	);
};

export default LineChart;
