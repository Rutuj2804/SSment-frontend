import { BsFillPersonFill, BsKeyFill, BsGearFill } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";

export const getProfileData = (username) => {
	return [
		{ icon: <BsFillPersonFill />, name: "My Profile", path: `/${username}` },
		{
			icon: <BsGearFill />,
			name: "Settings",
		},
		{
			icon: <BsKeyFill />,
			name: "Reset Password",
			path: "/reset-password",
		},
		{ icon: <BiLogOut />, name: "Logout", path: "/logout" },
	];
};
