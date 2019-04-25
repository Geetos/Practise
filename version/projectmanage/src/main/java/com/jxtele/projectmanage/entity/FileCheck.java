package com.jxtele.projectmanage.entity;

import java.util.Date;

public class FileCheck {
    private Integer id;

    private String projectName;

    private Integer projectId;

    private String projectDiscription;

    private String checker;

    private Date checkTime;

    private String valueScore;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getProjectName() {
        return projectName;
    }

    public void setProjectName(String projectName) {
        this.projectName = projectName == null ? null : projectName.trim();
    }

    public Integer getProjectId() {
        return projectId;
    }

    public void setProjectId(Integer projectId) {
        this.projectId = projectId;
    }

    public String getProjectDiscription() {
        return projectDiscription;
    }

    public void setProjectDiscription(String projectDiscription) {
        this.projectDiscription = projectDiscription == null ? null : projectDiscription.trim();
    }

    public String getChecker() {
        return checker;
    }

    public void setChecker(String checker) {
        this.checker = checker == null ? null : checker.trim();
    }

    public Date getCheckTime() {
        return checkTime;
    }

    public void setCheckTime(Date checkTime) {
        this.checkTime = checkTime;
    }

    public String getValueScore() {
        return valueScore;
    }

    public void setValueScore(String valueScore) {
        this.valueScore = valueScore == null ? null : valueScore.trim();
    }
}