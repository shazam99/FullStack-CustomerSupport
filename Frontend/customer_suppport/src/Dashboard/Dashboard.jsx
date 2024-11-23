import React, {useState} from 'react';
import Nav from "./Nav/Nav";
import './Dashboard.css'
import {IoCallOutline} from "react-icons/io5";
import {RiMessage2Line} from "react-icons/ri";
import {HiOutlineMail} from "react-icons/hi";
import {GoDotFill} from "react-icons/go";
import {DayName, ConvertTo24HourFormat} from "./Utils";
import dailySchedule from "../DailySchedule";


const Dashboard = () => {
    const [schedule, setSchedule] = useState(dailySchedule);
    const todayDate = new Date().toISOString().split('T')[0];

console.log(schedule);
    const getDayName = (date) => {
        const daysList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        return daysList[date.getDay()];
    };

    const formatDate = (date) => {
        return date.toISOString().split('T')[0];
    };

    const isOpenNow = () => {
        const now = new Date();
        const currentTime = now.toLocaleTimeString('en-US', {hour12: false});
        const todayDate = formatDate(now);
        const today = getDayName(now);

        const currentTime24 = currentTime

        const specialHoursToday = schedule.specialHours.find(item => item.date === todayDate);
        const continueSpecialHour = Boolean(specialHoursToday);
        if (continueSpecialHour) {

            const openingTime24 = ConvertTo24HourFormat(specialHoursToday.openingTime);
            const closingTime24 = ConvertTo24HourFormat(specialHoursToday.closingTime);
            return currentTime24 >= openingTime24 && currentTime24 <= closingTime24;
        }

        let scheduleKey;
        if (['Monday', 'Tuesday', 'Wednesday', 'Thursday'].includes(today)) {
            scheduleKey = 'Monday-Thursday';
        } else if (today === 'Friday') {
            scheduleKey = 'Friday';
        } else {
            scheduleKey = 'Saturday-Sunday';
        }

        const openingTime24 = ConvertTo24HourFormat(schedule.regularHours[scheduleKey].openingTime);
        const closingTime24 = ConvertTo24HourFormat(schedule.regularHours[scheduleKey].closingTime);

        return currentTime24 >= openingTime24 && currentTime24 <= closingTime24;
    }


    return(
        <div className="dashboard">
            <nav>
                <Nav setSchedule={setSchedule}/>
            </nav>
            <section className="intro">
                <div className="main">
                    <img src="customersupport.png" alt="agent icon"></img>
                    {isOpenNow() && <p>Welcome to SupplyHouse Customer Support Portal</p>}
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
                    {schedule.regularHours && (
                        <div className="scheduleHoursDiv">
                            {schedule.specialHours && schedule.specialHours.map((specialDay, index) => {
                                return specialDay.date === todayDate ? (
                                    <div key={index} style={{color: "red"}}>
                                        <div className="scheduleDay">
                                            <span><b>Special Hours</b></span><br/>
                                            <span>{specialDay.reason}</span>
                                        </div>
                                        <div className="scheduleTime" style={{fontSize: "12px"}}>
                                            {specialDay.openingTime} - {specialDay.closingTime}
                                        </div>
                                    </div>
                                ) : null;
                            })}

                            {Object.entries(schedule.regularHours).map(([day, times], index) => (
                                <div key={index}>
                                    <div className="scheduleDay">
                                        <span><b>{day}</b></span>
                                    </div>
                                    <div className="scheduleTime" style={{fontSize: "12px"}}>
                                        {times.openingTime} - {times.closingTime}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </div>
    )
}

export default Dashboard;
