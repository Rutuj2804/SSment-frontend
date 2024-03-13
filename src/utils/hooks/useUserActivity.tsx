import { useState, useEffect } from "react";

const useUserActivity = () => {
	const [isActive, setIsActive] = useState<boolean>(true);

	useEffect(() => {
		const handleVisibilityChange = () => {
			if (document.hidden) {
				setIsActive(false);
			} else {
				setIsActive(true);
			}
		};

		const handleBlur = () => {
			setIsActive(false);
		};

		const handleFocus = () => {
			setIsActive(true);
		};

		const handleNotification = () => {
			setIsActive(false); // Adjust this based on your requirements
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
