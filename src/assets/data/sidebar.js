import {
	BsGrid,
	BsCollection,
	BsBarChartLine,
	BsAward,
	BsPerson,
	BsPersonCheck,
	BsXDiamond,
} from "react-icons/bs";

export const sideBarData = [
	{
		title: "General",
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
    {
        title: "ADMINISTRATION",
        links: [
            {
                name: "Terms",
                link: "/terms",
                icon: <BsPerson />,
                notifications: 0,
                matches: ["/students"],
            },
            {
                name: "Batches",
                link: "/batches",
                icon: <BsPersonCheck />,
                notifications: 0,
                matches: ["/faculties"],
            },
        ],
    },
    {
        title: "Responsibilities",
        links: [
            {
                name: "Roles Definition",
                link: "/roles",
                icon: <BsXDiamond />,
                notifications: 0,
                matches: ["/roles", "/roles/add"],
            },
            {
                name: "Roles Assigned",
                link: "/assignments",
                icon: <BsAward />,
                notifications: 0,
                matches: ["/assigned"],
            },
        ],
    },
	{
		title: "Explore",
		links: [
			{
				name: "Tests",
				link: "/tests",
				icon: <BsBarChartLine />,
				notifications: 0,
				matches: ["/demand-letters", "/demand-letters/add"],
			},
			{
				name: "Questions",
				link: "/questions",
				icon: <BsAward />,
				notifications: 0,
				matches: ["/demand-letters", "/demand-letters/add"],
			},
		],
	},
];
