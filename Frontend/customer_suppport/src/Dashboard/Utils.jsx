export const DayName = ({ day }) => {
    const today = new Date();
    const futureDate = new Date(today);
    futureDate.setDate(today.getDate() + day);

    const options = { weekday: 'long' };
    const dayName = futureDate.toLocaleDateString('en-US', options);

    return dayName;
};



export const CurrentTime = () => {
    const currentDate = new Date();

    let hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;

    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;

    return `${hours}:${formattedMinutes} ${ampm}`;
};

export const ConvertTo24HourFormat = (time12h) => {
    // Return empty if input is empty
    if (!time12h) return '';

    // Regular expression to validate time format (hh:mm AM/PM)
    const timeRegex = /^(0?[1-9]|1[0-2]):([0-5][0-9]) (AM|PM)$/i;
    if (!timeRegex.test(time12h)) {
        return 'Invalid format. Use HH:MM AM/PM';
    }

    const [time, modifier] = time12h.split(' ');
    let [hours, minutes] = time.split(':');

    // Convert hours to number for easy manipulation
    hours = parseInt(hours, 10);

    if (modifier.toLowerCase() === 'pm' && hours < 12) {
        hours += 12;
    }
    if (modifier.toLowerCase() === 'am' && hours === 12) {
        hours = 0;
    }

    // Format hours and minutes to always show two digits
    const formattedHours = hours.toString().padStart(2, '0');
    const formattedMinutes = minutes.padStart(2, '0');

    return `${formattedHours}:${formattedMinutes}`;
};

