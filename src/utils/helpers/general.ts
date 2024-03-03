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
