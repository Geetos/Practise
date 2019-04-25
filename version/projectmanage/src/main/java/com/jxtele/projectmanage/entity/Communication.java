package com.jxtele.projectmanage.entity;

import java.util.Date;
import java.util.List;

public class Communication {
    public static final String module="commun";

    private Integer id;

    private Integer projectId;

    private String comtype;

    private Date comtime;

    private String comuser;

    private String materialform;

    private String comway;

    private String receivingstaf;

    private Integer userId;

    private List<AttachmentFile> communattachmentFiles;

    public List<AttachmentFile> getCommunattachmentFiles() {
        return communattachmentFiles;
    }

    public void setCommunattachmentFiles(List<AttachmentFile> communattachmentFiles) {
        this.communattachmentFiles = communattachmentFiles;
    }

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

    public String getComtype() {
        return comtype;
    }

    public void setComtype(String comtype) {
        this.comtype = comtype == null ? null : comtype.trim();
    }

    public Date getComtime() {
        return comtime;
    }

    public void setComtime(Date comtime) {
        this.comtime = comtime;
    }

    public String getComuser() {
        return comuser;
    }

    public void setComuser(String comuser) {
        this.comuser = comuser == null ? null : comuser.trim();
    }

    public String getMaterialform() {
        return materialform;
    }

    public void setMaterialform(String materialform) {
        this.materialform = materialform == null ? null : materialform.trim();
    }

    public String getComway() {
        return comway;
    }

    public void setComway(String comway) {
        this.comway = comway == null ? null : comway.trim();
    }

    public String getReceivingstaf() {
        return receivingstaf;
    }

    public void setReceivingstaf(String receivingstaf) {
        this.receivingstaf = receivingstaf == null ? null : receivingstaf.trim();
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }
}