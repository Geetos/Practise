package com.jxtele.projectmanage.entity;

import java.math.BigDecimal;
import java.util.Date;

public class AlterSchedule {

    public static final String module="alter";

    private Integer id;

    private Integer ctScheduleid;

    private String content;

    private Date alterdate;

    private Integer altertime;

    private BigDecimal lasttotaldays;

    private Date laststartdate;

    private Date lastenddate;

    private Date lastinitialdate;

    private Date lastfinaldate;

    private String lastwarrantyClaim;

    private Integer projectId;

    private Integer moneyinfoId;

    private BigDecimal lastcontractMoney;

    private BigDecimal lastcostMoney;

    private BigDecimal lastsubcontracting;

    private BigDecimal lastprofitMargin;

    private Integer alertsec;

    private Integer alertmon;

    private Integer alertstatus;

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

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content == null ? null : content.trim();
    }

    public Date getAlterdate() {
        return alterdate;
    }

    public void setAlterdate(Date alterdate) {
        this.alterdate = alterdate;
    }

    public Integer getAltertime() {
        return altertime;
    }

    public void setAltertime(Integer altertime) {
        this.altertime = altertime;
    }

    public BigDecimal getLasttotaldays() {
        return lasttotaldays;
    }

    public void setLasttotaldays(BigDecimal lasttotaldays) {
        this.lasttotaldays = lasttotaldays;
    }

    public Date getLaststartdate() {
        return laststartdate;
    }

    public void setLaststartdate(Date laststartdate) {
        this.laststartdate = laststartdate;
    }

    public Date getLastenddate() {
        return lastenddate;
    }

    public void setLastenddate(Date lastenddate) {
        this.lastenddate = lastenddate;
    }

    public Date getLastinitialdate() {
        return lastinitialdate;
    }

    public void setLastinitialdate(Date lastinitialdate) {
        this.lastinitialdate = lastinitialdate;
    }

    public Date getLastfinaldate() {
        return lastfinaldate;
    }

    public void setLastfinaldate(Date lastfinaldate) {
        this.lastfinaldate = lastfinaldate;
    }

    public String getLastwarrantyClaim() {
        return lastwarrantyClaim;
    }

    public void setLastwarrantyClaim(String lastwarrantyClaim) {
        this.lastwarrantyClaim = lastwarrantyClaim == null ? null : lastwarrantyClaim.trim();
    }

    public Integer getProjectId() {
        return projectId;
    }

    public void setProjectId(Integer projectId) {
        this.projectId = projectId;
    }

    public Integer getMoneyinfoId() {
        return moneyinfoId;
    }

    public void setMoneyinfoId(Integer moneyinfoId) {
        this.moneyinfoId = moneyinfoId;
    }

    public BigDecimal getLastcontractMoney() {
        return lastcontractMoney;
    }

    public void setLastcontractMoney(BigDecimal lastcontractMoney) {
        this.lastcontractMoney = lastcontractMoney;
    }

    public BigDecimal getLastcostMoney() {
        return lastcostMoney;
    }

    public void setLastcostMoney(BigDecimal lastcostMoney) {
        this.lastcostMoney = lastcostMoney;
    }

    public BigDecimal getLastsubcontracting() {
        return lastsubcontracting;
    }

    public void setLastsubcontracting(BigDecimal lastsubcontracting) {
        this.lastsubcontracting = lastsubcontracting;
    }

    public BigDecimal getLastprofitMargin() {
        return lastprofitMargin;
    }

    public void setLastprofitMargin(BigDecimal lastprofitMargin) {
        this.lastprofitMargin = lastprofitMargin;
    }

    public Integer getAlertsec() {
        return alertsec;
    }

    public void setAlertsec(Integer alertsec) {
        this.alertsec = alertsec;
    }

    public Integer getAlertmon() {
        return alertmon;
    }

    public void setAlertmon(Integer alertmon) {
        this.alertmon = alertmon;
    }

    public Integer getAlertstatus() {
        return alertstatus;
    }

    public void setAlertstatus(Integer alertstatus) {
        this.alertstatus = alertstatus;
    }
}