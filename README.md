# SupplyHouse FullStack App

This project is divided into 2 parts - [Frontend] and [Backend].

## Overview

### Frontend

* As mentioned in Assessment, Frontend utilizes hardcoded JSON - [DailySchedule.js](Frontend/customer_suppport/src/DailySchedule.js)
* It contains data for `Regular Hours` and `Special Hours` which will be displayed.
* Frontend shows a Customer Support page, with 3 sections-
    * Welcome section- Displays a `Welcome` message during active hours and a `Closed` message during inactive hours.

    * Contact Methods- Lists type of methods a user can utilise.
        * `Call` - shows available in green during active hours and grey during inactive hours.
        * `Text`  - shows available in green during active hours and grey during inactive hours
        * `Email` - Shows Active everytime and  displays "expected response by"  message with "2nd day from today.

    * Daily hours- It constains of 2 sections, "Special hours" and "Regular hours".

* If Today is considered as `Special day` then regular hours for today will be ignored and customer support will only be available for active hours mentioned for `Special day`.

* Also there is a button `Add special day` in the nav bar which helps to insert special hour for future date. A diagolue box will open in which contains a form where user can insert specail hours. 

`note- all fields are required and equipped with respective error message`.


### Backend

For the Spring Boot application there are mainly 3 apis.

| Api  Endpoint   | Method  | Description | Sample json | Response |
| :---:                    | :---:         | :---:              | :---:                | :---:  |
| `/api/customerSupport/hours/regularHours`         | GET   | Fetches the regular hours | - | [ { "id": 1, "daySet": "Monday-Thursday", "openingTime": "08:00 AM", "closingTime": "07:45 PM" }, { "id": 2, "daySet": "Friday", "openingTime": "09:00 AM", "closingTime": "07:45 PM" },{"id": 3, "daySet": "Saturday-Sunday", "openingTime": "09:00 AM", "closingTime": "05:45 PM" }] |
| `/api/customerSupport/hours/specialHours`         | GET   | Fetches the special hours | - | [{"id": 1,"date": "2024-12-25","openingTime": "10:00 AM","closingTime": "02:00 PM","reason": "Christmas Holiday"},{"id": 2,"date": "2024-12-31","openingTime": "11:00 AM","closingTime": "04:00 PM","reason": "New Year Holiday"} ] |
| `/api/customerSupport/hours/addSpecialHours` | POST | Add new special hour        | {"date": "2025-01-26","openingTime": "11:00 AM","closingTime": "05:00 PM","reason": "Republic Day"} | {"id":4,"date": "2025-01-26","openingTime": "11:00 AM","closingTime": "05:00 PM","reason": "Republic Day"} |


__JPA Entity Classes__

1.  Regular Hours

```java
@Entity
@Table(name = "regular_hours")
public class RegularHours {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "day_set", nullable = false) 
    private String daySet;

    @Column(name = "opening_time", nullable = false) 
    private String openingTime;

    @Column(name = "closing_time", nullable = false)
    private String closingTime;

    public RegularHours() {
    }

    public RegularHours(Long id, String daySet, String openingTime, String closingTime) {
        this.id = id;
        this.daySet = daySet;
        this.openingTime = openingTime;
        this.closingTime = closingTime;
    }

    // normal Getters and Setters to be used
    // implemented in code 
    }

```


2. Special Hours

```java
@Entity
@Table(name = "special_hours") 
public class SpecialHours  {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id") 
    private Long id;

    @Column(name = "date", nullable = false)
    private LocalDate date;

    @Column(name = "opening_time", nullable = false)
    private String openingTime;

    @Column(name = "closing_time", nullable = false)
    private String closingTime;

    @Column(name = "reason", length = 255) 
    private String reason;

    public SpecialHours() {
    }

    public SpecialHours(Long id, LocalDate date, String openingTime, String closingTime, String reason) {
        this.id = id;
        this.date = date;
        this.openingTime = openingTime;
        this.closingTime = closingTime;
        this.reason = reason;
    }

     // normal Getters and Setters to be used
    // implemented in code 
    }
```



* Service layer conatins these methods stubs-

    * List<RegularHours> getRegularHoursData();

    * List<SpecialHours> getSpecialHoursData();

    * SpecialHours createSpecialHour(SpecialHours specialHours);



## Run Apps

* To run [Frontend](Frontend/customer_suppport/), go to `Frontend/customer_suppport` directory and hit following command 
    * `npm install` which installs all node_modules.
    * `npm start` which starts the react app.
    * app will run on [http://localhost:3000](http://localhost:3000)

* To run [Backend](Backend/SupplyHouse/), load the directory and install all maven dependencies using `mvn` commands or and `ide`.
    * server will run on [http://localhost:8080](http://localhost:8080)