package com.jxtele.projectmanage.controller;

import com.jxtele.projectmanage.annotation.Permission;
import com.jxtele.projectmanage.controller.base.BaseController;
import com.jxtele.projectmanage.entity.IntegralItem;
import com.jxtele.projectmanage.entity.Journal;
import com.jxtele.projectmanage.entity.PermissionType;
import com.jxtele.projectmanage.entity.ResponseModel;
import com.jxtele.projectmanage.service.IJournalService;
import com.jxtele.projectmanage.service.IStandardDayService;
import com.jxtele.projectmanage.service.impl.AttachmentFileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping(value = "/journal")
public class JournalController extends BaseController {
    private static final String qxurl = "journal/list";
    @Autowired
    private IJournalService journalService;
    @Autowired
    private AttachmentFileService attachmentFileService;
    @Autowired
    private IStandardDayService standardDayService;
    @Value("${upload.root.folder}")
    public String locatFolder;
    @RequestMapping(value="/list",method = RequestMethod.GET)
    @Permission(url = qxurl,type = PermissionType.QUERY)
    public ModelAndView list(ModelMap model){
        model.addAttribute("journals",journalService.selectByPojectKey(this.getProjid()));
        model.addAttribute("projectId",this.getProjid());
        model.addAttribute("standays",standardDayService.findStandardDayByProjId(this.getProjid()));
        model.addAttribute("projectName",this.getProjName());
        return new ModelAndView("page/journal/list",model);
    }

    /**
     * 查询自己的工作日志
     *
     */
    @RequestMapping(value="/ownlist",method = RequestMethod.GET)
    @Permission(url = qxurl,type = PermissionType.QUERY)
    public ModelAndView ownlist(ModelMap model){
        model.addAttribute("journals",journalService.selectmyJournal(this.getProjid(),this.getLoginUserId()));
        model.addAttribute("projectId",this.getProjid());
//        model.addAttribute("projectName",this.getProjName());
        return new ModelAndView("page/journal/list",model);
    }
    /*删除信息*/
    @RequestMapping(value = "/del/{id}",method = RequestMethod.GET)
    @ResponseBody
    @Permission(url = qxurl,type = PermissionType.DEL)
    public Object del(@PathVariable Integer id){
        return  journalService.deleteByPrimaryKey(id);
    }

    /**
     * 更改
     */
    @RequestMapping(value="/edit",method=RequestMethod.POST)
    @ResponseBody
    @Permission(url = qxurl,type = PermissionType.EDIT)
    public Object edit(@ModelAttribute Journal record,@RequestParam(value = "file",required = false) MultipartFile file){
        return journalService.updateByPrimaryKeySelective(record,file,locatFolder);
    }
    /**
     *
     * 批量删除
     */
    @RequestMapping(value = "/delAll",method = RequestMethod.GET)
    @ResponseBody
    @Permission(url = qxurl,type = PermissionType.DEL)
    public Object del(Integer[] str){
        for(Integer id:str) {
            journalService.deleteByPrimaryKey(id);
        }
        return ResponseModel.getModel("删除成功", "success", null);
    }
    /**
     * 上传附件
     * @param file
     * @param record
     * @return
     */
    @RequestMapping(value="/add" ,method = RequestMethod.POST)
    @ResponseBody
    @Permission(url = qxurl,type = PermissionType.ADD)
    public Object add(@ModelAttribute Journal record, @RequestParam(value = "file",required = false) MultipartFile file, Model model){
        return journalService.insert(record,  file , locatFolder);
    }
    @RequestMapping(value="/getAllfile/{id}",method=RequestMethod.GET)
    @Permission(url = qxurl,type = PermissionType.QUERY)
    public Object getAllfile(@PathVariable Integer id){
        return ResponseModel.getModel("ok", "success", attachmentFileService.findAttachmentFileByRefId(id, IntegralItem.module));
    }
}
