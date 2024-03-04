import { Avatar, Badge, IconButton, Tooltip } from "@mui/material";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setNotifications } from "../../store/layout/slice";
import { RootState } from "../../store";
import { useOutsideClick } from "../../utils/hooks";
import { NotificationsRounded } from "@mui/icons-material";

const data = [
	{
		avatar: <Avatar />,
		text: "A lecture scheduled at 4:30pm on 12 Jun, 2023",
		time: "a while ago",
	},
	{
		avatar: <Avatar />,
		text: "A lecture scheduled at 4:30pm on 12 Jun, 2023",
		time: "a while ago",
	},
	{
		avatar: <Avatar />,
		text: "A lecture scheduled at 4:30pm on 12 Jun, 2023",
		time: "a while ago",
	},
	{
		avatar: <Avatar />,
		text: "A lecture scheduled at 4:30pm on 12 Jun, 2023",
		time: "a while ago",
	},
	{
		avatar: <Avatar />,
		text: "A lecture scheduled at 4:30pm on 12 Jun, 2023",
		time: "a while ago",
	},
	{
		avatar: <Avatar />,
		text: "A lecture scheduled at 4:30pm on 12 Jun, 2023",
		time: "a while ago",
	},
	{
		avatar: <Avatar />,
		text: "A lecture scheduled at 4:30pm on 12 Jun, 2023",
		time: "a while ago",
	},
	{
		avatar: <Avatar />,
		text: "A lecture scheduled at 4:30pm on 12 Jun, 2023",
		time: "a while ago",
	},
	{
		avatar: <Avatar />,
		text: "A lecture scheduled at 4:30pm on 12 Jun, 2023",
		time: "a while ago",
	},
	{
		avatar: <Avatar />,
		text: "A lecture scheduled at 4:30pm on 12 Jun, 2023",
		time: "a while ago",
	},
	{
		avatar: <Avatar />,
		text: "A lecture scheduled at 4:30pm on 12 Jun, 2023",
		time: "a while ago",
	},
	{
		avatar: <Avatar />,
		text: "A lecture scheduled at 4:30pm on 12 Jun, 2023",
		time: "a while ago",
	},
];

const Notification = () => {
	const notification = useSelector(
		(state: RootState) => state.layout.notifications
	);

	const dispatch = useDispatch();

	const notificationRef = useRef<HTMLDivElement>(null);

	const closeNotifications = () => {
		dispatch(setNotifications(false));
	};

	useOutsideClick(notificationRef, closeNotifications);

	return (
		<div ref={notificationRef}>
			<Tooltip title="Notifications">
				<IconButton onClick={() => dispatch(setNotifications(!notification))}>
					<Badge variant="dot" color="primary">
						<NotificationsRounded />
					</Badge>
				</IconButton>
			</Tooltip>
			<div className="profile__Menu">
				<div
					className={`profileMenu__Wrapper ${
						notification && "active"
					}`}
				>
					<div className="profileMenu__Options">
						{data.map((d, i) => (
							<div key={i} className="notificationMenu__NavLink">
								{/* <Avatar /> */}
								<div className="details">
									<h6>{d.text}</h6>
									<p>{d.time}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Notification;
