package com.jxtele.projectmanage.controller;

import com.jxtele.projectmanage.annotation.Permission;
import com.jxtele.projectmanage.controller.base.BaseController;
import com.jxtele.projectmanage.entity.AttachmentFile;
import com.jxtele.projectmanage.entity.Communication;
import com.jxtele.projectmanage.entity.CommunicationRecord;
import com.jxtele.projectmanage.entity.PermissionType;
import com.jxtele.projectmanage.service.IAttachmentFileService;
import com.jxtele.projectmanage.service.ICommunicationRecordService;
import com.jxtele.projectmanage.service.ICommunicationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import java.util.ArrayList;
import java.util.List;

@Controller
@RequestMapping("communfiles")
public class CommunicationFileManageController extends BaseController {
    @Autowired
    private ICommunicationService communicationService;
    @Autowired
    private IAttachmentFileService attachmentFileService;
    @Autowired
    private ICommunicationRecordService communicationRecordService;
    private static final String qxurl = "communfiles/list";
    @RequestMapping("list")
    @Permission(url = qxurl,type = PermissionType.QUERY)
    public ModelAndView list(ModelMap model){
        model.addAttribute("communfiles",manageList());
        return new ModelAndView("page/communfiles/list");
    }
    //处理
    public List<AttachmentFile> manageList(){
        List<AttachmentFile> allfiles = new ArrayList<AttachmentFile>();
        List<Communication>  comms = communicationService.findCommunicationByProjId(this.getProjid());
        List<CommunicationRecord> commcos = communicationRecordService.findCommunicationRecordByProjId(this.getProjid());
        for(Communication com:comms){
            allfiles.addAll(attachmentFileService.findAttachmentFileByRefId(com.getId(),Communication.module));
        }
        for(CommunicationRecord comm:commcos){
            allfiles.addAll(attachmentFileService.findAttachmentFileByRefId(comm.getId(),CommunicationRecord.module));
        }
        return allfiles;
    }
}
