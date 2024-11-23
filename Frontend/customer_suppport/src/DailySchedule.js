const dailySchedule = {
    regularHours: {
        "Monday-Thursday": {openingTime: "8:00 AM", closingTime: "7:45 PM"},
        "Friday":          {openingTime: "9:00 AM", closingTime: "7:45 PM"},
        "Saturday-Sunday": {openingTime: "9:00 AM", closingTime: "5:45 PM"},
    },
    specialHours: [
        {
            date: "2024-12-25",
            openingTime: "10:00 AM",
            closingTime: "3:00 PM",
            reason: "Christmas",
        },
        {
            date: "2024-12-31",
            openingTime: "10:00 AM",
            closingTime: "3:00 PM",
            reason: "New Year",
        },
    ],
};

export default dailySchedule