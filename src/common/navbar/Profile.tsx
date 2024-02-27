import { Avatar, IconButton, Tooltip } from "@mui/material";
import { useRef } from "react";
import { getProfileData } from "../../assets/data/profile";
import { useDispatch, useSelector } from "react-redux";
import { setProfile } from "../../store/layout/slice";
import { RootState } from "../../store";
import { useNavigate } from "react-router-dom";
import { useOutsideClick } from "../../utils/hooks";
import { PersonRounded } from "@mui/icons-material";
import { location, username } from "../../utils/helpers";

const Profile = () => {
	const profile = useSelector((state: RootState) => state.layout.profile);

	const user = useSelector((state: RootState) => state.profile.user)

	const dispatch = useDispatch();

	const navigate = useNavigate();

	const profileRef = useRef<HTMLDivElement>(null);

	const onNavigationClick = (s: string) => {
		navigate(s);
		dispatch(setProfile(false));
	};

	useOutsideClick(profileRef, () => dispatch(setProfile(false)));

	return (
		<div ref={profileRef}>
			<Tooltip title="Profile">
				<IconButton onClick={() => dispatch(setProfile(!profile))}>
					<PersonRounded />
				</IconButton>
			</Tooltip>
			<div className="profile__Menu">
				<div className={`profileMenu__Wrapper ${profile && "active"}`}>
					<div className="profileMenu__Avatar">
						<Avatar sx={{ height: 50, width: 50 }} />
						<h6>{username(user)}</h6>
						<p>{location(user)}</p>
					</div>
					<div className="profileMenu__Options">
						{getProfileData(user.email)?.map((d, i) => (
							<div
								key={i}
								className="profileMenu__NavLink"
								onClick={() => onNavigationClick(d.path)}
							>
								{d.icon}
								<h6>{d.name}</h6>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Profile;
