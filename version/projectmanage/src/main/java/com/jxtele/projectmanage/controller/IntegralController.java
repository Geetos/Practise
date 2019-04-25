package com.jxtele.projectmanage.controller;

import com.jxtele.projectmanage.annotation.Permission;
import com.jxtele.projectmanage.controller.base.BaseController;
import com.jxtele.projectmanage.entity.Integral;
import com.jxtele.projectmanage.entity.PermissionType;
import com.jxtele.projectmanage.service.IIntegralService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping(value = "/integral")
public class IntegralController extends BaseController {
    private static final String qxurl = "integral/list";

    @Autowired
    private IIntegralService integralService;

    @RequestMapping(value="/list",method = RequestMethod.GET)
    @Permission(url = qxurl,type = PermissionType.QUERY)
    public ModelAndView list(ModelMap model){
        model.addAttribute("integrals",integralService.findIntegralByProjId(this.getProjid()));
        model.addAttribute("projectId",this.getProjid());
        return new ModelAndView("page/integral/list",model);
    }

    /*添加积分信息*/
    @RequestMapping(value="/add" ,method = RequestMethod.POST)
    @ResponseBody
    @Permission(url = qxurl,type = PermissionType.ADD)
    public Object add(@ModelAttribute Integral record){
        record.setProjectId(this.getProjid());
        return integralService.insert(record);
    }

    /*删除积分信息*/
    @RequestMapping(value = "/del/{id}",method = RequestMethod.GET)
    @ResponseBody
    @Permission(url = qxurl,type = PermissionType.DEL)
    public Object del(@PathVariable Integer id){
        return  integralService.deleteByPrimaryKey(id);
    }

    /**
     * 更改积分信息
     * @return
     */
    @RequestMapping(value="/edit",method=RequestMethod.POST)
    @ResponseBody
    @Permission(url = qxurl,type = PermissionType.EDIT)
    public Object edit(@ModelAttribute Integral record){
        return integralService.updateByPrimaryKeySelective(record);
    }
}
