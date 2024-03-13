import { useState, useEffect } from "react";

const useFullScreenChange = () => {
	const [isFullScreen, setIsFullScreen] = useState<boolean>(false);

	useEffect(() => {
		const handleFullScreenChange = () => {
			setIsFullScreen(!!document.fullscreenElement);
		};

		document.addEventListener("fullscreenchange", handleFullScreenChange);
		document.addEventListener(
			"webkitfullscreenchange",
			handleFullScreenChange
		);
		document.addEventListener(
			"mozfullscreenchange",
			handleFullScreenChange
		);
		document.addEventListener("MSFullscreenChange", handleFullScreenChange);

		return () => {
			document.removeEventListener(
				"fullscreenchange",
				handleFullScreenChange
			);
			document.removeEventListener(
				"webkitfullscreenchange",
				handleFullScreenChange
			);
			document.removeEventListener(
				"mozfullscreenchange",
				handleFullScreenChange
			);
			document.removeEventListener(
				"MSFullscreenChange",
				handleFullScreenChange
			);
		};
	}, []);

	return isFullScreen;
};

export default useFullScreenChange;
