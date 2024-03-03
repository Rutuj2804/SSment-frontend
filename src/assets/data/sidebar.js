import {
	BsColumnsGap,
	BsCollection,
	BsBarChartLine,
	BsAward,
	BsBook,
	BsXDiamond,
	BsBox,
} from "react-icons/bs";

export const sideBarData = [
	{
		title: "General",
		links: [
			{
				name: "Dashboard",
				link: "/dashboard",
				icon: <BsColumnsGap />,
				notifications: 0,
				matches: ["/dashboard", "/profile"],
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
        title: "INSTITUTE",
        links: [
            {
                name: "Terms",
                link: "/terms",
                icon: <BsBox />,
                notifications: 0,
                matches: ["/students"],
            },
			{
				name: "Batches",
				link: "/batches",
				icon: <BsCollection />,
				notifications: 0,
				matches: ["/lectures", "/lectures/add"],
			},
        ],
    },
    {
        title: "VENDOR",
        links: [
            {
                name: "Institutes",
                link: "/institutes",
                icon: <BsBook />,
                notifications: 0,
                matches: ["/students"],
            },
            {
                name: "Terms",
                link: "/terms",
                icon: <BsBox />,
                notifications: 0,
                matches: ["/students"],
            },
            {
                name: "Batches",
                link: "/a/batches",
                icon: <BsCollection />,
                notifications: 0,
                matches: ["/faculties"],
            },
        ],
    },
    {
        title: "Vendor Responsibilities",
        links: [
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
        title: "Institute Responsibilities",
        links: [
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
        title: "SSment Responsibilities",
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
