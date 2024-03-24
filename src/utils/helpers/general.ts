export const formatNumber = (num: number) => {
	const suffixes = ["", "k", "m", "b", "t"];
	if (num < 1000) {
		return num.toString();
	}
	let magnitude = 0;
	while (Math.abs(num) >= 1000) {
		magnitude++;
		num /= 1000.0;
	}
	return num.toFixed(1) + suffixes[magnitude];
};

export const goFullScreen = () => {
	const element: any = document.documentElement;

	if (element.requestFullscreen) {
		element.requestFullscreen();
	} else if (element.mozRequestFullScreen) {
		/* Firefox */
		element.mozRequestFullScreen();
	} else if (element.webkitRequestFullscreen) {
		/* Chrome, Safari & Opera */
		element.webkitRequestFullscreen();
	} else if (element.msRequestFullscreen) {
		/* IE/Edge */
		element.msRequestFullscreen();
	}
};

export const fileSize = (bytes: number) => {
	var sizes = ["Bytes", "KB", "MB", "GB", "TB"];
	var i = Math.floor(Math.log(bytes) / Math.log(1024));
	var size = bytes / Math.pow(1024, i);
	return {
		size: size.toFixed(2) + " " + sizes[i],
		isValid: bytes < 10485760
	}
};
