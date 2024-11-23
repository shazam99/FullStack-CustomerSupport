import React from 'react';
import Nav from "./Nav/Nav";
import './Dashboard.css'
import {IoCallOutline} from "react-icons/io5";
import {RiMessage2Line} from "react-icons/ri";
import {HiOutlineMail} from "react-icons/hi";
import {GoDotFill} from "react-icons/go";
import {DayName, ConvertTo24HourFormat} from "./Utils";

const todayDate = new Date().toISOString().split('T')[0];

const dailySchedule = {
    regularHours: {
        "Monday-Thursday": {openingTime: "8:00 AM", closingTime: "7:45 PM"},
        "Friday": {openingTime: "9:00 AM", closingTime: "7:45 PM"},
        "Saturday-Sunday": {openingTime: "9:00 AM", closingTime: "3:45 PM"},
    },
    specialHours: [
        {
            date: "2024-12-25",
            openingTime: "10:00 AM",
            closingTime: "3:00 PM",
            reason: "Christmas Holiday",
        },
        {
            date: "2024-11-23",
            openingTime: "10:00 AM",
            closingTime: "5:00 PM",
            reason: "New Year's Eve",
        },
    ],
};

const getDayName = (date) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[date.getDay()];
};

const formatDate = (date) => {
    return date.toISOString().split('T')[0]; // Returns YYYY-MM-DD format
};

const isOpenNow = () => {
    // Get current date and time
    const now = new Date();
    const currentTime = now.toLocaleTimeString('en-US', { hour12: false });
    const todayDate = formatDate(now);
    const today = getDayName(now);

    // Convert current time to 24-hour format
    const currentTime24 = currentTime

    // First check special hours
    const specialHoursToday = dailySchedule.specialHours.find(item => item.date === todayDate);
    const continueSpecialHour = Boolean(specialHoursToday);
    if (continueSpecialHour) {

        const openingTime24 = ConvertTo24HourFormat(specialHoursToday.openingTime);
        const closingTime24 = ConvertTo24HourFormat(specialHoursToday.closingTime);
        return currentTime24 >= openingTime24 && currentTime24 <= closingTime24;
    }

    // If no special hours, check regular hours based on day
    let scheduleKey;
    if (['Monday', 'Tuesday', 'Wednesday', 'Thursday'].includes(today)) {
        scheduleKey = 'Monday-Thursday';
    } else if (today === 'Friday') {
        scheduleKey = 'Friday';
    } else {
        scheduleKey = 'Saturday-Sunday';
    }

    const openingTime24 = ConvertTo24HourFormat(dailySchedule.regularHours[scheduleKey].openingTime);
    const closingTime24 = ConvertTo24HourFormat(dailySchedule.regularHours[scheduleKey].closingTime);

    return currentTime24 >= openingTime24 && currentTime24 <= closingTime24;
};


const Dashboard = () => (
    <div className="dashboard">
        <nav>
            <Nav/>
        </nav>
        <section className="intro">
            <div className="main">
                <img src="customersupport.png" alt="agent icon"></img>
                {isOpenNow() && <p>Welcome to Customer Support Portal</p>}
                {!isOpenNow() && <p>Our Customer Support is closed now. we apologize for any inconvenience </p>}
            </div>
        </section>
        <section className="contact">

            <div className="contactType" style={{color: !isOpenNow() ? 'grey' : ''}}>
                <div className="contactMethod">
                    <span><b><IoCallOutline/> Call</b></span> 80808080808088
                </div>
                <div className="contactAvailability" style={{color: !isOpenNow() ? 'grey' : 'green'}}>
                    <GoDotFill style={{color: !isOpenNow() ? 'grey' : 'green', fontSize: '16px'}}/> Available
                </div>
            </div>

            <div className="contactType" style={{color: !isOpenNow() ? 'grey' : ''}}>
                <div className="contactMethod">
                    <span><b><RiMessage2Line/> Text</b></span> 80808080808088
                </div>
                <div className="contactAvailability" style={{color: !isOpenNow() ? 'grey' : 'green'}}>
                    <GoDotFill style={{color: !isOpenNow() ? 'grey' : 'green', fontSize: '16px'}}/> Available
                </div>
            </div>

            <div className="contactType">
                <div className="contactMethod">
                    <span><b><HiOutlineMail/> Email</b></span> 80808080808088
                </div>
                <div className="contactAvailability">
                    <GoDotFill style={{color: 'green', fontSize: '16px'}}/> Response by <DayName day={2}/>
                </div>
            </div>

        </section>
        <section className="scheduleHours">
            <div className="main">
                {dailySchedule.regularHours && (
                    <div className="scheduleHoursDiv">
                        {dailySchedule.specialHours && isOpenNow() && dailySchedule.specialHours.map((special, index) => {
                            return special.date === todayDate ? (
                                <div key={index} style={{color:"red"}}>
                                    <div className="scheduleDay">
                                        <span><b>Special Hours</b></span><br />
                                        <span>{special.reason}</span>
                                    </div>
                                    <div className="scheduleTime" style={{fontSize: "12px"}}>
                                        {special.openingTime} - {special.closingTime}
                                    </div>
                                </div>
                            ) : null;
                        })}

                        {Object.entries(dailySchedule.regularHours).map(([day, times], index) => (
                            <div key={index}>
                                <div className="scheduleDay">
                                    <span><b>{day}</b></span>
                                </div>
                                <div className="scheduleTime" style={{ fontSize: "12px" }}>
                                    {times.openingTime} - {times.closingTime}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    </div>
);

export default Dashboard;
