import {
	BsColumnsGap,
	BsCollection,
	BsBarChartLine,
	BsAward,
	BsBook,
	BsXDiamond,
	BsBox,
} from "react-icons/bs";

export const getSideBarData = (role = 1) => {

	const isAdmin = role === 901, isVendor = role === 401, isVendorHelper = role === 301, isInstitutionOwner = role === 201, isInstitutionFaculty = role === 101, isUser = role === 1;
	
	const sideBarData = [
		{
			title: "General",
			links: [
                {
                    name: "Dashboard",
                    link: "/dashboard",
                    icon: <BsColumnsGap />,
                    notifications: 0,
                    matches: ["/dashboard", "/profile"],
                }
            ],
		}
	];

	if (isAdmin || isVendor || isVendorHelper || isInstitutionOwner || isInstitutionFaculty) {
		sideBarData[0].links.push(
			{
				name: "Tests",
				link: "/a/tests",
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
			}
		);
	}

	if(isUser) {
		sideBarData[0].links.push(
			{
				name: "Tests",
				link: "/tests",
				icon: <BsBarChartLine />,
				notifications: 0,
				matches: ["/demand-letters", "/demand-letters/add"],
			}
		);
	}

	if(isAdmin || isVendor || isVendorHelper || isInstitutionOwner || isInstitutionFaculty) {
		sideBarData.push({ title: "Administration", links: [] })
		sideBarData.push({ title: "Responsibilities", links: [
			{
                name: "Roles Assigned",
                link: "/assignments",
                icon: <BsAward />,
                notifications: 0,
                matches: ["/assigned"],
            }
		] })
	}

	if(isAdmin || isVendor || isVendorHelper) {
		sideBarData[1].links.push(
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
		)
	}

	if(isInstitutionOwner || isInstitutionFaculty) {
		sideBarData[1].links.push(
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
		)
	}

	if(isAdmin) {
		sideBarData[2].links.push(
            {
                name: "Roles Definition",
                link: "/roles",
                icon: <BsXDiamond />,
                notifications: 0,
                matches: ["/roles", "/roles/add"],
            }
		)
	}

	return sideBarData;
};
