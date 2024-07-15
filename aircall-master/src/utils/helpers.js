export function convertDuration(time) {
	const hours = Math.floor(time / 3600);
	const minutes = Math.floor(time / 60);
	const seconds = time % 60;
	const ifHours = hours > 0 ? `${hours} hours, ` : '';
	const ifMinutes = minutes > 0 ? `${minutes} minutes, and ` : '';
	return `${ifHours}${ifMinutes}${seconds} seconds`;
}
