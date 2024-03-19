import { MenuRounded, SearchRounded } from "@mui/icons-material";
import { IconButton, Tooltip } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setSearch, setSidebar } from "../../store/layout/slice";
import { RootState } from "../../store";
import { Logo } from "../logo";
import { Select } from "../../library";
import { BsBox } from "react-icons/bs";
import Profile from "./Profile";
import Notification from "./Notification";
import { setCurrentTerm } from "../../store/term/slice";

const Navbar = () => {
	const layout = useSelector((state: RootState) => state.layout);

	const dispatch = useDispatch();

	const role = useSelector((state: RootState) => state.profile.user.role);

	const terms = useSelector((state: RootState) => state.term.display);

	const current = useSelector((state: RootState) => state.term.current);

	return (
		<div className="navbar__Wrapper">
			<div className="left">
				{!layout.sidebar && (
					<div className="logo">
						<Logo />
						{role === 201 || role === 101 ? (
							<>
								<div className="vr"></div>
								<div className="navbar__ChangeUniversity">
									<Select
										options={terms}
										name="name"
										value="_id"
										selected={current}
										startIcon={<BsBox />}
										className="p-0 m-0"
										onChange={(c) =>
											dispatch(setCurrentTerm(c))
										}
									/>
								</div>
							</>
						) : null}
					</div>
				)}
				<div className="navbar__ChangeUniversity">
					{layout.sidebar && (role === 201 || role === 101) ? (
						<Select
							options={terms}
							name="name"
							value="_id"
							selected={current}
							startIcon={<BsBox />}
							className="p-0 m-0"
							onChange={(c) => dispatch(setCurrentTerm(c))}
						/>
					) : null}
				</div>
			</div>
			<div className="right">
				<div className="search">
					<Tooltip title="Search">
						<IconButton
							onClick={() => dispatch(setSearch(!layout.search))}
						>
							<SearchRounded />
						</IconButton>
					</Tooltip>
				</div>
				<div className="notifications">
					<Notification />
				</div>
				<div className="profile">
					<Profile />
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
