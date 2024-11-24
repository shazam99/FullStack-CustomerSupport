package com.assessment.SupplyHouse.entity;


import java.time.LocalDate;


public class SpecialHours {

    private Long id;
    private LocalDate date;
    private String openingTime;
    private String closingTime;
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

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
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

    public String getReason() {
        return reason;
    }

    public void setReason(String reason) {
        this.reason = reason;
    }
}
