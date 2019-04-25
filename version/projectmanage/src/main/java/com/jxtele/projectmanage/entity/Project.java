package com.jxtele.projectmanage.entity;

import java.util.Date;

public class Project {
    private Integer id;

    private String projectCode;

    private String projectName;

    private Date registerTime;

    private String projectNature;

    private String outsourceReason;

    private String projectType;

    private String projectIndustry;

    private String projectSubscriber;

    private String projectDepartmen;

    private String customerManager;

    private String projectManager;

    private Integer projectStatus;

    private Integer userId;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getProjectCode() {
        return projectCode;
    }

    public void setProjectCode(String projectCode) {
        this.projectCode = projectCode == null ? null : projectCode.trim();
    }

    public String getProjectName() {
        return projectName;
    }

    public void setProjectName(String projectName) {
        this.projectName = projectName == null ? null : projectName.trim();
    }

    public Date getRegisterTime() {
        return registerTime;
    }

    public void setRegisterTime(Date registerTime) {
        this.registerTime = registerTime;
    }

    public String getProjectNature() {
        return projectNature;
    }

    public void setProjectNature(String projectNature) {
        this.projectNature = projectNature == null ? null : projectNature.trim();
    }

    public String getOutsourceReason() {
        return outsourceReason;
    }

    public void setOutsourceReason(String outsourceReason) {
        this.outsourceReason = outsourceReason == null ? null : outsourceReason.trim();
    }

    public String getProjectType() {
        return projectType;
    }

    public void setProjectType(String projectType) {
        this.projectType = projectType == null ? null : projectType.trim();
    }

    public String getProjectIndustry() {
        return projectIndustry;
    }

    public void setProjectIndustry(String projectIndustry) {
        this.projectIndustry = projectIndustry == null ? null : projectIndustry.trim();
    }

    public String getProjectSubscriber() {
        return projectSubscriber;
    }

    public void setProjectSubscriber(String projectSubscriber) {
        this.projectSubscriber = projectSubscriber == null ? null : projectSubscriber.trim();
    }

    public String getProjectDepartmen() {
        return projectDepartmen;
    }

    public void setProjectDepartmen(String projectDepartmen) {
        this.projectDepartmen = projectDepartmen == null ? null : projectDepartmen.trim();
    }

    public String getCustomerManager() {
        return customerManager;
    }

    public void setCustomerManager(String customerManager) {
        this.customerManager = customerManager == null ? null : customerManager.trim();
    }

    public String getProjectManager() {
        return projectManager;
    }

    public void setProjectManager(String projectManager) {
        this.projectManager = projectManager == null ? null : projectManager.trim();
    }

    public Integer getProjectStatus() {
        return projectStatus;
    }

    public void setProjectStatus(Integer projectStatus) {
        this.projectStatus = projectStatus;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }
}