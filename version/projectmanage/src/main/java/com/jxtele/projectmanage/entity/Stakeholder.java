package com.jxtele.projectmanage.entity;

public class Stakeholder {
    private Integer id;

    private Integer projectId;

    private String name;

    private String unit;

    private String address;

    private String roomnumber;

    private String position;

    private String phone;

    private String email;

    private String projectduty;

    private String commethod;

    private Integer frequency;

    private Integer decisionmaker;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getProjectId() {
        return projectId;
    }

    public void setProjectId(Integer projectId) {
        this.projectId = projectId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name == null ? null : name.trim();
    }

    public String getUnit() {
        return unit;
    }

    public void setUnit(String unit) {
        this.unit = unit == null ? null : unit.trim();
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address == null ? null : address.trim();
    }

    public String getRoomnumber() {
        return roomnumber;
    }

    public void setRoomnumber(String roomnumber) {
        this.roomnumber = roomnumber == null ? null : roomnumber.trim();
    }

    public String getPosition() {
        return position;
    }

    public void setPosition(String position) {
        this.position = position == null ? null : position.trim();
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone == null ? null : phone.trim();
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email == null ? null : email.trim();
    }

    public String getProjectduty() {
        return projectduty;
    }

    public void setProjectduty(String projectduty) {
        this.projectduty = projectduty == null ? null : projectduty.trim();
    }

    public String getCommethod() {
        return commethod;
    }

    public void setCommethod(String commethod) {
        this.commethod = commethod == null ? null : commethod.trim();
    }

    public Integer getFrequency() {
        return frequency;
    }

    public void setFrequency(Integer frequency) {
        this.frequency = frequency;
    }

    public Integer getDecisionmaker() {
        return decisionmaker;
    }

    public void setDecisionmaker(Integer decisionmaker) {
        this.decisionmaker = decisionmaker;
    }
}