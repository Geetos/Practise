package com.jxtele.projectmanage.entity;

import java.math.BigDecimal;
import java.util.Date;

public class FactSchedule {
    private Integer id;

    private Integer ctScheduleid;

    private Float alreadyStartday;

    private Date factStartdate;

    private Date factEnddate;

    private Date factInitialdate;

    private Date factFinaldata;

    private Date warrantyStarttime;

    private BigDecimal scheduleShpercent;

    private BigDecimal scheduleFcpercent;

    private String scheduleJudement;

    private BigDecimal scheduleControl;

    private String scheduleDescription;

    private String scheduleCtdescription;

    private String scheduleStatus;

    private Integer projectId;

    public Integer getProjectId() {
        return projectId;
    }

    public void setProjectId(Integer projectId) {
        this.projectId = projectId;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getCtScheduleid() {
        return ctScheduleid;
    }

    public void setCtScheduleid(Integer ctScheduleid) {
        this.ctScheduleid = ctScheduleid;
    }

    public Float getAlreadyStartday() {
        return alreadyStartday;
    }

    public void setAlreadyStartday(Float alreadyStartday) {
        this.alreadyStartday = alreadyStartday;
    }

    public Date getFactStartdate() {
        return factStartdate;
    }

    public void setFactStartdate(Date factStartdate) {
        this.factStartdate = factStartdate;
    }

    public Date getFactEnddate() {
        return factEnddate;
    }

    public void setFactEnddate(Date factEnddate) {
        this.factEnddate = factEnddate;
    }

    public Date getFactInitialdate() {
        return factInitialdate;
    }

    public void setFactInitialdate(Date factInitialdate) {
        this.factInitialdate = factInitialdate;
    }

    public Date getFactFinaldata() {
        return factFinaldata;
    }

    public void setFactFinaldata(Date factFinaldata) {
        this.factFinaldata = factFinaldata;
    }

    public Date getWarrantyStarttime() {
        return warrantyStarttime;
    }

    public void setWarrantyStarttime(Date warrantyStarttime) {
        this.warrantyStarttime = warrantyStarttime;
    }

    public BigDecimal getScheduleShpercent() {
        return scheduleShpercent;
    }

    public void setScheduleShpercent(BigDecimal scheduleShpercent) {
        this.scheduleShpercent = scheduleShpercent;
    }

    public BigDecimal getScheduleFcpercent() {
        return scheduleFcpercent;
    }

    public void setScheduleFcpercent(BigDecimal scheduleFcpercent) {
        this.scheduleFcpercent = scheduleFcpercent;
    }

    public String getScheduleJudement() {
        return scheduleJudement;
    }

    public void setScheduleJudement(String scheduleJudement) {
        this.scheduleJudement = scheduleJudement == null ? null : scheduleJudement.trim();
    }

    public BigDecimal getScheduleControl() {
        return scheduleControl;
    }

    public void setScheduleControl(BigDecimal scheduleControl) {
        this.scheduleControl = scheduleControl;
    }

    public String getScheduleDescription() {
        return scheduleDescription;
    }

    public void setScheduleDescription(String scheduleDescription) {
        this.scheduleDescription = scheduleDescription == null ? null : scheduleDescription.trim();
    }

    public String getScheduleCtdescription() {
        return scheduleCtdescription;
    }

    public void setScheduleCtdescription(String scheduleCtdescription) {
        this.scheduleCtdescription = scheduleCtdescription == null ? null : scheduleCtdescription.trim();
    }

    public String getScheduleStatus() {
        return scheduleStatus;
    }

    public void setScheduleStatus(String scheduleStatus) {
        this.scheduleStatus = scheduleStatus == null ? null : scheduleStatus.trim();
    }
}