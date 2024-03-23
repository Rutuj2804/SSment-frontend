import React, { useEffect, useState } from "react";

const useKeyPress = () => {
	const [keyPressed, setKeyPressed] = useState(false);

	useEffect(() => {
		const handleKeyDown = () => {
			setKeyPressed(true);
		};

		const handleKeyUp = () => {
			setKeyPressed(false);
		};

		document.addEventListener("keydown", handleKeyDown);
		document.addEventListener("keyup", handleKeyUp);

		return () => {
			document.removeEventListener("keydown", handleKeyDown);
			document.removeEventListener("keyup", handleKeyUp);
		};
	}, []);

	return keyPressed;
};

export default useKeyPress;