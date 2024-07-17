export function convertDuration(time) {
	const hours = Math.floor(time / 3600);
	const minutes = Math.floor(time / 60);
	const seconds = time % 60;
	const ifHours = hours > 0 ? `${hours} hours, ` : '';
	const ifMinutes = minutes > 0 ? `${minutes} minutes, and ` : '';
	return `${ifHours}${ifMinutes}${seconds} seconds`;
}

export function formatDate(date) {
	const theDate = new Date(date);
	const formattedDate = theDate.toLocaleDateString();
	return formattedDate;
}

export function formatLongDate(date) {
	const theDate = new Date(date);
	const formattedDate = theDate.toLocaleDateString([], {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	});
	return formattedDate;
}

export function formatPhoneNumber(phoneNumber) {
	const cleaned = ('' + phoneNumber).replace(/\D/g, '');
	const match = cleaned.match(/^1?(\d{3})(\d{3})(\d{4})$/);

	if (match) {
		return `+1 (${match[1]}) ${match[2]}-${match[3]}`;
	}

	return phoneNumber;
}

export function formatDateTime(date) {
	const d = date.split('T');
	const theDate = new Date(d.toString());
	const timeOnly = theDate.toLocaleTimeString([], {
		hour: 'numeric',
		minute: 'numeric',
	});
	return timeOnly;
}
