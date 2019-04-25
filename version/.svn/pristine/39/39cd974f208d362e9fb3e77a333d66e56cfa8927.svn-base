package com.jxtele.projectmanage.controller;

import com.jxtele.projectmanage.annotation.Permission;
import com.jxtele.projectmanage.controller.base.BaseController;
import com.jxtele.projectmanage.entity.FileCheckItem;
import com.jxtele.projectmanage.entity.PermissionType;
import com.jxtele.projectmanage.service.FileCheckItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping("filecheckitem")
public class FileCheckItemController extends BaseController {
    @Autowired
    private FileCheckItemService fileCheckItemService;
    private static final String qxurl = "filecheckitem/list";

    @RequestMapping(value="/list/{fileId}",method = RequestMethod.GET)
    @Permission(url = qxurl,type = PermissionType.QUERY)
    public ModelAndView list(@PathVariable Integer fileId, ModelMap model){
        model.addAttribute("filecheckitems",fileCheckItemService.selectByFileId(fileId));
        model.addAttribute("fileId",fileId);
        return new ModelAndView("page/filecheckitem/list",model);
    }

    /*添加积分信息*/
    @RequestMapping(value="/add" ,method = RequestMethod.POST)
    @ResponseBody
    @Permission(url = qxurl,type = PermissionType.ADD)
    public Object add(@ModelAttribute FileCheckItem record){
//        record.setProjectId(this.getProjid());
        return fileCheckItemService.insert(record);
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
        return  fileCheckItemService.deleteByPrimaryKey(id);
    }

    /**
     * 更改积分信息
     * @return
     */
    @RequestMapping(value="/edit",method=RequestMethod.POST)
    @ResponseBody
    @Permission(url = qxurl,type = PermissionType.EDIT)
    public Object edit(@ModelAttribute FileCheckItem record){
        return fileCheckItemService.updateByPrimaryKeySelective(record);
    }
}
