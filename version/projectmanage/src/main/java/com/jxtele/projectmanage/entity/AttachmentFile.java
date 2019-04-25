package com.jxtele.projectmanage.entity;

import java.util.Date;

public class AttachmentFile {
    private Integer id;

    private Integer refId;

    private String attachmentName;

    private String attachmentPath;

    private Date attachmentTime;

    private String attachmentType;

    private String attachmentModule;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getRefId() {
        return refId;
    }

    public void setRefId(Integer refId) {
        this.refId = refId;
    }

    public String getAttachmentName() {
        return attachmentName;
    }

    public void setAttachmentName(String attachmentName) {
        this.attachmentName = attachmentName == null ? null : attachmentName.trim();
    }

    public String getAttachmentPath() {
        return attachmentPath;
    }

    public void setAttachmentPath(String attachmentPath) {
        this.attachmentPath = attachmentPath == null ? null : attachmentPath.trim();
    }

    public Date getAttachmentTime() {
        return attachmentTime;
    }

    public void setAttachmentTime(Date attachmentTime) {
        this.attachmentTime = attachmentTime;
    }

    public String getAttachmentType() {
        return attachmentType;
    }

    public void setAttachmentType(String attachmentType) {
        this.attachmentType = attachmentType == null ? null : attachmentType.trim();
    }

    public String getAttachmentModule() {
        return attachmentModule;
    }

    public void setAttachmentModule(String attachmentModule) {
        this.attachmentModule = attachmentModule == null ? null : attachmentModule.trim();
    }
}