import {
    BsFillPersonFill,
    BsKeyFill,
    BsPersonFillGear,
} from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";

export const data = [
    { icon: <BsFillPersonFill />, name: "My Profile", path: "/:username" },
    {
        icon: <BsPersonFillGear />,
        name: "Edit Profile",
        path: "/edit/:username",
    },
    { icon: <BsKeyFill />, name: "Reset Password", path: "/change-password" },
    { icon: <BiLogOut />, name: "Logout", path: "/logout" },
];
