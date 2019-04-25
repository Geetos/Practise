package com.jxtele.projectmanage.controller;

import com.jxtele.projectmanage.annotation.Permission;
import com.jxtele.projectmanage.controller.base.BaseController;
import com.jxtele.projectmanage.entity.FileCheck;
import com.jxtele.projectmanage.entity.FileCheckItem;
import com.jxtele.projectmanage.entity.PermissionType;
import com.jxtele.projectmanage.entity.ResponseModel;
import com.jxtele.projectmanage.service.FileCheckItemService;
import com.jxtele.projectmanage.service.FileCheckService;
import com.jxtele.projectmanage.util.CheckItemUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import java.util.Map;

@Controller
@RequestMapping("/filecheck")
public class FileCheckController extends BaseController {
    @Autowired
    private FileCheckService fileCheckService;
    @Autowired
    private FileCheckItemService fileCheckItemService;
    private static final String qxurl = "filecheck/list";

    @RequestMapping(value="/list",method = RequestMethod.GET)
    @Permission(url = qxurl,type = PermissionType.QUERY)
    public ModelAndView list(ModelMap model){
        model.addAttribute("filechecks",fileCheckService.selectByProjectId(this.getProjid()));
        model.addAttribute("projectId",this.getProjid());
        model.addAttribute("projectName",this.getProjName());
        model.addAttribute("check",fileCheckService.selectlastByProjectId(this.getProjid()));
        return new ModelAndView("page/filecheck/list",model);
    }

    /*添加积分信息*/
    @RequestMapping(value="/add" ,method = RequestMethod.POST)
    @ResponseBody
    @Permission(url = qxurl,type = PermissionType.ADD)
    public Object add(@ModelAttribute FileCheck record){
        record.setProjectId(this.getProjid());
        Map<String, Object> map =  fileCheckService.insert(record);
        if(map.get("msg").equals("ok")){
            for(FileCheckItem item:CheckItemUtil.getItems(record.getId())){
                fileCheckItemService.insert(item);
            }
        }
        return ResponseModel.getModel("ok", "success", null);
    }

    /**
     * 删除积分信息
     * @param id
     * @return
     */
    @RequestMapping(value = "/del/{id}",method = RequestMethod.GET)
    @ResponseBody
    @Permission(url = qxurl,type = PermissionType.DEL)
    public Object del(@PathVariable Integer id){
        return  fileCheckService.deleteByPrimaryKey(id);
    }

    /**
     * 更改积分信息
     * @return
     */
    @RequestMapping(value="/edit",method=RequestMethod.POST)
    @ResponseBody
    @Permission(url = qxurl,type = PermissionType.EDIT)
    public Object edit(@ModelAttribute FileCheck record){
        return fileCheckService.updateByPrimaryKeySelective(record);
    }
}
