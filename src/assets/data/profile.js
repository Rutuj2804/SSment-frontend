import { BsFillPersonFill, BsKeyFill, BsPersonFillGear } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";

export const getProfileData = (username) => {
	return [
		{ icon: <BsFillPersonFill />, name: "My Profile", path: `/${username}` },
		{
			icon: <BsPersonFillGear />,
			name: "Edit Profile",
			path: `/edit/${username}`,
		},
		{
			icon: <BsKeyFill />,
			name: "Reset Password",
			path: "/reset-password",
		},
		{ icon: <BiLogOut />, name: "Logout", path: "/logout" },
	];
};
