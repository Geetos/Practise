package com.jxtele.projectmanage.controller;

import com.jxtele.projectmanage.annotation.Permission;
import com.jxtele.projectmanage.controller.base.BaseController;
import com.jxtele.projectmanage.entity.FactSchedule;
import com.jxtele.projectmanage.entity.PermissionType;
import com.jxtele.projectmanage.service.IFactScheduleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping(value="/factschedule")
public class FactScheduleleController extends BaseController {

    private final static String qxurl = "factschedule/list";

    @Autowired
    private IFactScheduleService factScheduleService;

    @RequestMapping(value="/list",method = RequestMethod.GET)
    @Permission(url = qxurl,type = PermissionType.QUERY)
    public ModelAndView list(ModelMap model){
        model.addAttribute("factschedules",factScheduleService.findFactScheduleleByProjid(this.getProjid()));
        /*model.addAttribute("ctScheduleid",id);*/
        model.addAttribute("projectId",this.getProjid());
        return new ModelAndView("page/factschedule/list",model);
    }

    /*添加资金信息*/
    @RequestMapping(value="/add" ,method = RequestMethod.POST)
    @ResponseBody
    @Permission(url = qxurl,type = PermissionType.ADD)
    public Object add(@ModelAttribute FactSchedule record){
        record.setProjectId(this.getProjid());
        return factScheduleService.insert(record);
    }

    /*删除资金信息*/
    @RequestMapping(value = "/del/{id}",method = RequestMethod.GET)
    @ResponseBody
    @Permission(url = qxurl,type = PermissionType.DEL)
    public Object del(@PathVariable Integer id){
        return  factScheduleService.deleteByPrimaryKey(id);
    }

    /**
     * 更改资金信息
     * @return
     */
    @RequestMapping(value="/edit",method=RequestMethod.POST)
    @ResponseBody
    @Permission(url = qxurl,type = PermissionType.EDIT)
    public Object edit(@ModelAttribute FactSchedule record){
        return factScheduleService.updateByPrimaryKeySelective(record);
    }



}
