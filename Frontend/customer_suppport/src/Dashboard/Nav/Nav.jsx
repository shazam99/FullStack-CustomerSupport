import React, {useState} from 'react';
import './Nav.css'
import {formatTime} from "../Utils";

const Nav = ({setSchedule}) => {

    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const [formData, setFormData] = useState({
        date: '',
        openingTime: '',
        closingTime: '',
        reason: '',
    });


    const toggleDialog = () => {
        setIsDialogOpen(!isDialogOpen);
    };

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const todayDate = new Date().toISOString().split('T')[0];

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.date <= todayDate) {
            alert("Error: Special Day should be a future date!");
            return;
        }
        if (formData.closingTime <= formData.openingTime) {
            alert("Error: Opening Time should be less than Closing Time!");
            return;
        }
        if (formData.date === '' || formData.closingTime === '' || formData.openingTime === '' || formData.reason === '') {
            alert("Error: All fields are required.");
            return;
        }
        console.log('Form Data Submitted:', formData);

            setSchedule((prevSchedule) => ({
                ...prevSchedule,
                specialHours: [...prevSchedule.specialHours, {
                    date: formData.date,
                    openingTime: formatTime(formData.openingTime),
                    closingTime: formatTime(formData.closingTime),
                    reason: formData.reason,
                }
                ]
            }));

        setFormData({
            date: '',
            openingTime: '',
            closingTime: '',
            reason: ''
        });

        toggleDialog();

    };

    return (
        <div className="nav">
            <div className="nav_main">
                <div>
                    <p style={{margin: 0, padding: 0, fontWeight: '600'}}>
                        Customer Support
                    </p>
                </div>
                <button onClick={toggleDialog}>Add Special Day</button>
            </div>

            {isDialogOpen && (
                <div className="dialog">
                    <div className="dialog-content">
                        <h2>Add Special Day</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="dialog-element">
                                <label>Date:</label>
                                <input type="date" name="date" value={formData.date} onChange={handleChange}/>
                            </div>
                            <div className="dialog-element">
                                <label>Opening Time:</label>
                                <input type="time" name="openingTime" value={formData.startTime}
                                       onChange={handleChange}/>
                            </div>
                            <div className="dialog-element">
                                <label>Closing Time:</label>
                                <input type="time" name="closingTime" value={formData.closingTime}
                                       onChange={handleChange}/>
                            </div>
                            <div className="dialog-element">
                                <label>Reason:</label>
                                <input type="text" name="reason" placeholder="Reason for special hours"
                                       value={formData.reason} onChange={handleChange}/>
                            </div>
                            <div className="dialog-actions">
                                <button type="submit">Submit</button>
                                <button type="button" onClick={toggleDialog}>Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    )

}
export default Nav;