package com.jxtele.projectmanage.controller;

import com.jxtele.projectmanage.annotation.Permission;
import com.jxtele.projectmanage.controller.base.BaseController;
import com.jxtele.projectmanage.entity.AlterSchedule;
import com.jxtele.projectmanage.entity.PermissionType;
import com.jxtele.projectmanage.entity.ResponseModel;
import com.jxtele.projectmanage.service.IAlterScheduleService;
import com.jxtele.projectmanage.service.IAttachmentFileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping(value = "/alterschedule")
public class AlterScheduleController extends BaseController {

    private final static String qxurl = "alterschedule/list";


    @Value("${upload.root.folder}")
    public String locatFolder;

    @Autowired
    private IAlterScheduleService alterScheduleService;

    @Autowired
    private IAttachmentFileService attachmentFileService;

    @RequestMapping(value="/list",method = RequestMethod.GET)
    @Permission(url = qxurl,type = PermissionType.QUERY)
    public ModelAndView list(ModelMap model){
        model.addAttribute("alterschedules",alterScheduleService.findAlterScheduleByProjId(this.getProjid()));
        model.addAttribute("projectId",this.getProjid());
        return new ModelAndView("page/alterschedule/list",model);
    }

    /*添加资金信息*/
    @RequestMapping(value="/add" ,method = RequestMethod.POST)
    @ResponseBody
    @Permission(url = qxurl,type = PermissionType.ADD)
    public Object add(@ModelAttribute AlterSchedule record,@RequestParam(value = "file",required = false) MultipartFile file){
        record.setProjectId(this.getProjid());
        record.setAltertime(alterScheduleService.findAlterScheduleByProjId(this.getProjid()).size()+1);
        return alterScheduleService.insert(record,file,locatFolder);
    }

    /*删除资金信息*/
    @RequestMapping(value = "/del/{id}",method = RequestMethod.GET)
    @ResponseBody
    @Permission(url = qxurl,type = PermissionType.DEL)
    public Object del(@PathVariable Integer id){
        return  alterScheduleService.deleteByPrimaryKey(id);
    }

    /**
     * 更改资金信息
     * @return
     */
    @RequestMapping(value="/edit",method=RequestMethod.POST)
    @ResponseBody
    @Permission(url = qxurl,type = PermissionType.EDIT)
    public Object edit(@ModelAttribute AlterSchedule record,@RequestParam(value = "file",required = false) MultipartFile file){
        return alterScheduleService.updateByPrimaryKeySelective(record,file,locatFolder);
    }

    /**
     *
     * @param id 附件id
     * @return 附件列表
     */
    @RequestMapping(value="/getAllfile/{id}",method=RequestMethod.GET)
    @ResponseBody
    @Permission(url = qxurl,type = PermissionType.QUERY)
    public Object getAllfile(@PathVariable Integer id){
        return ResponseModel.getModel("ok", "success", attachmentFileService.findAttachmentFileByRefId(id, AlterSchedule.module));
    }

}
