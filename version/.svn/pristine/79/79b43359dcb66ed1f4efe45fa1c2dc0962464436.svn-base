package com.jxtele.projectmanage.controller;

import com.jxtele.projectmanage.annotation.Permission;
import com.jxtele.projectmanage.controller.base.BaseController;
import com.jxtele.projectmanage.entity.PermissionType;
import com.jxtele.projectmanage.entity.StandardApply;
import com.jxtele.projectmanage.service.IStandardApplyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import java.util.Map;

@Controller
@RequestMapping(value = "/standardapply")
public class StandardApplyController extends BaseController {

    private static final String qxurl = "standardapply/list";

    @Autowired
    private IStandardApplyService standardApplyService;

    @RequestMapping(value="/list/{id}",method = RequestMethod.GET)
    @Permission(url = qxurl,type = PermissionType.QUERY)
    public ModelAndView list(@PathVariable("id")Integer id, ModelMap model){
        model.addAttribute("standardapplys",standardApplyService.findStandardApplyByProjId(id));
        return new ModelAndView("page/standardapply/list",model);
    }

    /*添加资金信息*/
    @RequestMapping(value="/add" ,method = RequestMethod.POST)
    @ResponseBody
    @Permission(url = qxurl,type = PermissionType.ADD)
    public Object add(@ModelAttribute StandardApply record, ModelMap model){
        Map<String, Object> incount = standardApplyService.insert(record);
        if("success".equals(incount.get("status"))){
            list(record.getProjectId(),model);
        }
        return incount;
    }

    /*删除资金信息*/
    @RequestMapping(value = "/del/{id}",method = RequestMethod.GET)
    @ResponseBody
    @Permission(url = qxurl,type = PermissionType.DEL)
    public Object del(@PathVariable Integer id){
        return  standardApplyService.deleteByPrimaryKey(id);
    }

    /**
     * 更改资金信息
     * @return
     */
    @RequestMapping(value="/edit",method=RequestMethod.POST)
    @ResponseBody
    @Permission(url = qxurl,type = PermissionType.EDIT)
    public Object edit(@ModelAttribute StandardApply record,ModelMap model){
        Integer upd = standardApplyService.updateByPrimaryKey(record);
        if(upd>0){
            list(record.getProjectId(), model);
        }
        return upd;
    }
}
