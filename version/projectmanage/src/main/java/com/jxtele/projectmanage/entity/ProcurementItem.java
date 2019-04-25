package com.jxtele.projectmanage.entity;

import java.util.Date;

public class ProcurementItem {
    private Integer id;

    private Integer projectId;

    private Integer procurementId;

    private String devicename;

    private String devicetype;

    private String devicequantity;

    private Date warrantytime;

    private String supplier;

    private String suppliercontact;

    private String supplierphone;

    private String supplieremail;

    private String companydock;

    private Date starttime;

    private Date contractime;

    private String suppliercondition;

    private Date arrivaltime;

    private String paymentterms;

    private String warranty;

    private Date endtime;

    private Integer assessment;

    private Integer contractsigned;

    private String remark;

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

    public Integer getProcurementId() {
        return procurementId;
    }

    public void setProcurementId(Integer procurementId) {
        this.procurementId = procurementId;
    }

    public String getDevicename() {
        return devicename;
    }

    public void setDevicename(String devicename) {
        this.devicename = devicename == null ? null : devicename.trim();
    }

    public String getDevicetype() {
        return devicetype;
    }

    public void setDevicetype(String devicetype) {
        this.devicetype = devicetype == null ? null : devicetype.trim();
    }

    public String getDevicequantity() {
        return devicequantity;
    }

    public void setDevicequantity(String devicequantity) {
        this.devicequantity = devicequantity == null ? null : devicequantity.trim();
    }

    public Date getWarrantytime() {
        return warrantytime;
    }

    public void setWarrantytime(Date warrantytime) {
        this.warrantytime = warrantytime;
    }

    public String getSupplier() {
        return supplier;
    }

    public void setSupplier(String supplier) {
        this.supplier = supplier == null ? null : supplier.trim();
    }

    public String getSuppliercontact() {
        return suppliercontact;
    }

    public void setSuppliercontact(String suppliercontact) {
        this.suppliercontact = suppliercontact == null ? null : suppliercontact.trim();
    }

    public String getSupplierphone() {
        return supplierphone;
    }

    public void setSupplierphone(String supplierphone) {
        this.supplierphone = supplierphone == null ? null : supplierphone.trim();
    }

    public String getSupplieremail() {
        return supplieremail;
    }

    public void setSupplieremail(String supplieremail) {
        this.supplieremail = supplieremail == null ? null : supplieremail.trim();
    }

    public String getCompanydock() {
        return companydock;
    }

    public void setCompanydock(String companydock) {
        this.companydock = companydock == null ? null : companydock.trim();
    }

    public Date getStarttime() {
        return starttime;
    }

    public void setStarttime(Date starttime) {
        this.starttime = starttime;
    }

    public Date getContractime() {
        return contractime;
    }

    public void setContractime(Date contractime) {
        this.contractime = contractime;
    }

    public String getSuppliercondition() {
        return suppliercondition;
    }

    public void setSuppliercondition(String suppliercondition) {
        this.suppliercondition = suppliercondition == null ? null : suppliercondition.trim();
    }

    public Date getArrivaltime() {
        return arrivaltime;
    }

    public void setArrivaltime(Date arrivaltime) {
        this.arrivaltime = arrivaltime;
    }

    public String getPaymentterms() {
        return paymentterms;
    }

    public void setPaymentterms(String paymentterms) {
        this.paymentterms = paymentterms == null ? null : paymentterms.trim();
    }

    public String getWarranty() {
        return warranty;
    }

    public void setWarranty(String warranty) {
        this.warranty = warranty == null ? null : warranty.trim();
    }

    public Date getEndtime() {
        return endtime;
    }

    public void setEndtime(Date endtime) {
        this.endtime = endtime;
    }

    public Integer getAssessment() {
        return assessment;
    }

    public void setAssessment(Integer assessment) {
        this.assessment = assessment;
    }

    public Integer getContractsigned() {
        return contractsigned;
    }

    public void setContractsigned(Integer contractsigned) {
        this.contractsigned = contractsigned;
    }

    public String getRemark() {
        return remark;
    }

    public void setRemark(String remark) {
        this.remark = remark == null ? null : remark.trim();
    }
}