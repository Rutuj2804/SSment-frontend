import { useState, useEffect } from "react";

const useUserActivity = () => {
	const [isActive, setIsActive] = useState<boolean>(false);

	useEffect(() => {
		const handleVisibilityChange = () => {
			if (document.hidden) {
				setIsActive(true);
			} else {
				setIsActive(false);
			}
		};

		const handleBlur = () => {
			setIsActive(true);
		};

		const handleFocus = () => {
			setIsActive(false);
		};

		const handleNotification = () => {
			setIsActive(true); // Adjust this based on your requirements
		};

		document.addEventListener("visibilitychange", handleVisibilityChange);
		window.addEventListener("blur", handleBlur);
		window.addEventListener("focus", handleFocus);
		window.addEventListener("notification", handleNotification); // This is a hypothetical event; adjust as needed

		return () => {
			document.removeEventListener(
				"visibilitychange",
				handleVisibilityChange
			);
			window.removeEventListener("blur", handleBlur);
			window.removeEventListener("focus", handleFocus);
			window.removeEventListener("notification", handleNotification);
		};
	}, []);

	return isActive;
};

export default useUserActivity;
