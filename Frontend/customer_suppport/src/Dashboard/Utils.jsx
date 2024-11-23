export const DayName = ({ day }) => {
    const today = new Date();
    const futureDate = new Date(today);
    futureDate.setDate(today.getDate() + day);

    const options = { weekday: 'long' };
    const dayName = futureDate.toLocaleDateString('en-US', options);

    return dayName;
};


export const ConvertTo24HourFormat = (time12h) => {
    if (!time12h) return '';

    const timeRegex = /^(0?[1-9]|1[0-2]):([0-5][0-9]) (AM|PM)$/i;
    if (!timeRegex.test(time12h)) {
        return 'Invalid format. Use HH:MM AM/PM';
    }

    const [time, modifier] = time12h.split(' ');
    let [hours, minutes] = time.split(':');

    hours = parseInt(hours, 10);

    if (modifier.toLowerCase() === 'pm' && hours < 12) {
        hours += 12;
    }
    if (modifier.toLowerCase() === 'am' && hours === 12) {
        hours = 0;
    }

    const formattedHours = hours.toString().padStart(2, '0');
    const formattedMinutes = minutes.padStart(2, '0');

    return `${formattedHours}:${formattedMinutes}`;
};

export const formatTime = (time) => {
    const [hour, minute] = time.split(':');
    const period = hour >= 12 ? 'PM' : 'AM';
    const formattedHour = hour % 12 || 12;
    return `${formattedHour}:${minute} ${period}`;
};