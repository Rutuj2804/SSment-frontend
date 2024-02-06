import {
	MenuRounded,
	NotificationsRounded,
	PersonRounded,
	SearchRounded,
	SettingsRounded,
} from "@mui/icons-material";
import { Badge, IconButton, Tooltip } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setSidebar } from "../../store/layout/slice";
import { RootState } from "../../store";
import { Logo } from "../logo";
import { Select } from "../../library";

const terms = [
	{ name: "2024 Term 1", value: 1 },
	{ name: "2023 Term 2", value: 2 },
	{ name: "2023 Term 1", value: 3 },
	{ name: "2022 Term 2", value: 4 },
	{ name: "2022 Term 1", value: 5 },
]

const Navbar = () => {
	const layout = useSelector((state: RootState) => state.layout);

	const dispatch = useDispatch();

	return (
		<div className="navbar__Wrapper">
			<div className="left">
				{!layout.sidebar && (
					<div className="logo">
						<Logo />
						<div className="vr"></div>
						<div className="navbar__ChangeUniversity">
							<Select options={terms} name="name" value="value" selected={1} />
						</div>
					</div>
				)}
				<div className="navbar__ChangeUniversity">
					{layout.sidebar &&  <Select options={terms} name="name" value="value" selected={1} />}
				</div>
			</div>
			<div className="right">
				<div className="search">
					<Tooltip title="Search">
						<IconButton>
							<SearchRounded />
						</IconButton>
					</Tooltip>
				</div>
				<div className="notifications">
					<Tooltip title="Notifications">
						<IconButton>
							<Badge variant="dot" color="primary">
								<NotificationsRounded />
							</Badge>
						</IconButton>
					</Tooltip>
					<div className="profile__Menu">
						{/* <NotificationMenu /> */}
					</div>
				</div>
				<div className="profile">
					<Tooltip title="Profile">
						<IconButton>
							<Badge variant="dot" color="primary">
								<PersonRounded />
							</Badge>
						</IconButton>
					</Tooltip>
					<div className="profile__Menu">
						{/* <ProfileMenu /> */}
					</div>
				</div>
				<div className="settings">
					<Tooltip title="Settings">
						<IconButton>
							<SettingsRounded />
						</IconButton>
					</Tooltip>
				</div>
				<div className="menu">
					<Tooltip title="Menu">
						<IconButton
							onClick={() =>
								dispatch(setSidebar(!layout.sidebar))
							}
						>
							<MenuRounded />
						</IconButton>
					</Tooltip>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
