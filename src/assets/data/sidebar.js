import {
	BsGrid,
	BsCollection,
	BsBarChartLine,
	BsAward,
} from "react-icons/bs";

export const sideBarData = [
	{
		title: "",
		links: [
			{
				name: "Dashboard",
				link: "/dashboard",
				icon: <BsGrid />,
				notifications: 0,
				matches: ["/dashboard", "/profile"],
			},
			{
				name: "Batches",
				link: "/batches",
				icon: <BsCollection />,
				notifications: 0,
				matches: ["/lectures", "/lectures/add"],
			},
			{
				name: "Tests",
				link: "/tests",
				icon: <BsBarChartLine />,
				notifications: 0,
				matches: ["/demand-letters", "/demand-letters/add"],
			},
			{
				name: "Results",
				link: "/results",
				icon: <BsAward />,
				notifications: 0,
				matches: ["/demand-letters", "/demand-letters/add"],
			},
		],
	},
];
