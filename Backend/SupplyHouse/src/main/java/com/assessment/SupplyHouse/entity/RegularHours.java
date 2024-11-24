package com.assessment.SupplyHouse.entity;


public class RegularHours {

    private Long id;
    private String daySet;
    private String openingTime;
    private String closingTime;

    public RegularHours() {
    }

    public RegularHours(Long id, String daySet, String openingTime, String closingTime) {
        this.id = id;
        this.daySet = daySet;
        this.openingTime = openingTime;
        this.closingTime = closingTime;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDaySet() {
        return daySet;
    }

    public void setDaySet(String daySet) {
        this.daySet = daySet;
    }

    public String getOpeningTime() {
        return openingTime;
    }

    public void setOpeningTime(String openingTime) {
        this.openingTime = openingTime;
    }

    public String getClosingTime() {
        return closingTime;
    }

    public void setClosingTime(String closingTime) {
        this.closingTime = closingTime;
    }
}


