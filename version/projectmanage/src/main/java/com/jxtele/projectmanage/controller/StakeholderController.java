package com.jxtele.projectmanage.controller;

import com.jxtele.projectmanage.annotation.Permission;
import com.jxtele.projectmanage.controller.base.BaseController;
import com.jxtele.projectmanage.entity.PermissionType;
import com.jxtele.projectmanage.entity.Stakeholder;
import com.jxtele.projectmanage.service.IStakeholderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping(value = "/stakeholder")
public class StakeholderController extends BaseController {

    private static final String qxurl = "stakeholder/list";

    @Autowired
    private IStakeholderService stakeholderService;

    /**
     *
     * @param model
     * @return 项目干系人列表
     */
    @RequestMapping(value="/list",method = RequestMethod.GET)
    @Permission(url = qxurl,type = PermissionType.QUERY)
    public ModelAndView list(ModelMap model){
        model.addAttribute("stakeholders",stakeholderService.findStandardApplyByProjId(this.getProjid()));
        model.addAttribute("projectId",this.getProjid());
        return new ModelAndView("page/stakeholder/list",model);
    }

    /**
     *
     * @param record 干系人对象
     * @return Map<String, Object> 添加结果
     */
    @RequestMapping(value="/add" ,method = RequestMethod.POST)
    @ResponseBody
    @Permission(url = qxurl,type = PermissionType.ADD)
    public Object add(@ModelAttribute Stakeholder record){
        record.setProjectId(this.getProjid());
        return stakeholderService.insert(record);
    }

    /**
     *
     * @param id 干系人主键
     * @return Map<String, Object> 删除结果
     */
    @RequestMapping(value = "/del/{id}",method = RequestMethod.GET)
    @ResponseBody
    @Permission(url = qxurl,type = PermissionType.DEL)
    public Object del(@PathVariable Integer id){
        return  stakeholderService.deleteByPrimaryKey(id);
    }

    /**
     *
     * @param record
     * @return Map<String, Object> 修改结果
     */
    @RequestMapping(value="/edit",method=RequestMethod.POST)
    @ResponseBody
    @Permission(url = qxurl,type = PermissionType.EDIT)
    public Object edit(@ModelAttribute Stakeholder record){
        return stakeholderService.updateByPrimaryKeySelective(record);
    }
}
