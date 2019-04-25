package com.jxtele.projectmanage.controller;

import com.jxtele.projectmanage.annotation.Permission;
import com.jxtele.projectmanage.controller.base.BaseController;
import com.jxtele.projectmanage.entity.AlterSchedule;
import com.jxtele.projectmanage.entity.MoneyInfo;
import com.jxtele.projectmanage.entity.PermissionType;
import com.jxtele.projectmanage.service.IAlterScheduleService;
import com.jxtele.projectmanage.service.IMoneyInfoItemService;
import com.jxtele.projectmanage.service.IMoneyInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import java.util.ArrayList;
import java.util.Date;


@Controller
@RequestMapping("/moneyinfo")
public class MoneyInfoController extends BaseController {

    private static final String qxurl = "moneyinfo/list";

    @Autowired
    private IMoneyInfoService moneyInfoService;

    @Autowired
    private IAlterScheduleService alterScheduleService;

    @Autowired
    private IMoneyInfoItemService moneyInfoItemService;

    @RequestMapping(value="/list/{id}",method = RequestMethod.GET)
    @Permission(url = qxurl,type = PermissionType.QUERY)
    public ModelAndView list(@PathVariable Integer id,ModelMap model){
        model.addAttribute("moneyinfos",moneyInfoService.findMoneyInfoByProjId(id));
        model.addAttribute("projectId",id);
        return new ModelAndView("page/moneyinfo/list",model);
    }

    @RequestMapping(value="/query/{id}" ,method = RequestMethod.GET)
    @ResponseBody
//    @Permission(url = qxurl,type = PermissionType.QUERY)
    public Object query(@PathVariable("id")Integer id){
        ArrayList<MoneyInfo> moneyInfoList = new ArrayList<>();
        moneyInfoList.add((MoneyInfo)moneyInfoService.findMoneyInfoByProjId(id));
        return moneyInfoList;
    }

    /*添加资金信息*/
    //@RequestMapping(value="/add" ,method = RequestMethod.POST)

    @PostMapping(value="/add",produces = "application/json;charset=UTF-8")
    @ResponseBody
    @Permission(url = qxurl,type = PermissionType.ADD)
    public Object add(@RequestBody MoneyInfo record){
        return moneyInfoService.insert(record);
    }

    /*删除资金信息*/
    @RequestMapping(value = "/del/{id}",method = RequestMethod.GET)
    @ResponseBody
    @Permission(url = qxurl,type = PermissionType.DEL)
    public Object del(@PathVariable Integer id){
        return  moneyInfoService.deleteByPrimaryKey(id);
    }

     /**
     * 更改资金信息
     * @return
     */
    @RequestMapping(value="/edit",method=RequestMethod.POST)
    @ResponseBody
    @Permission(url = qxurl,type = PermissionType.EDIT)
    public Object edit(@ModelAttribute MoneyInfo record){
        return moneyInfoService.updateByPrimaryKeySelective(record);
    }

    @RequestMapping(value="/findproject/{id}",method = RequestMethod.GET)
    @ResponseBody
    @Permission(url = qxurl,type = PermissionType.QUERY)
    public Object findproject(@PathVariable("id")Integer id){
        return moneyInfoService.findMoneyInfoByProjId(id);
    }

    @RequestMapping(value="/monchange",method=RequestMethod.POST)
    @ResponseBody
    @Permission(url = qxurl,type = PermissionType.EDIT)
    public Object monchange(@ModelAttribute MoneyInfo record){
        AlterSchedule alterSchedule = alterScheduleService.selectByPrimaryKey(record.getMonid());
        MoneyInfo _record = moneyInfoService.selectByPrimaryKey(record.getId());
        alterSchedule.setMoneyinfoId(alterSchedule.getId());
        alterSchedule.setProjectId(alterSchedule.getProjectId());
        alterSchedule.setLastcontractMoney(_record.getContractMoney());
        alterSchedule.setLastcostMoney(_record.getCostMoney());
        alterSchedule.setLastprofitMargin(_record.getProfitMargin());
        alterSchedule.setLastsubcontracting( _record.getSubcontractingCost());
        alterSchedule.setAlterdate(new Date());
        /*alterSchedule.setAltertime(alterScheduleService.findAlterScheduleByProjId(alterSchedule.getProjectId()).size());*/
        alterSchedule.setAlertmon(0);
        alterScheduleService.updateByPrimaryKeySelective(alterSchedule,null,null);
        return moneyInfoService.updateByPrimaryKeySelective(record);
    }

}
