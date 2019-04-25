package com.jxtele.projectmanage.controller;

import com.jxtele.projectmanage.annotation.Permission;
import com.jxtele.projectmanage.controller.base.BaseController;
import com.jxtele.projectmanage.entity.Evaluation;
import com.jxtele.projectmanage.entity.PermissionType;
import com.jxtele.projectmanage.service.EvaluationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping("enaluation")
public class Evaluationcontroller extends BaseController {
    @Autowired
    private EvaluationService evaluationService;
    private static final String qxurl = "enaluation/list";
    @RequestMapping(value="/list",method = RequestMethod.GET)
    @Permission(url = qxurl,type = PermissionType.QUERY)
    public ModelAndView list(ModelMap model){
        Evaluation en = evaluationService.selectByProjectKey(this.getProjid()).get(0);
        model.addAttribute("evaluations",en);
        model.addAttribute("projectId",this.getProjid());
        return new ModelAndView("page/enaluation/list",model);
    }

    /*添加积分信息*/
    @RequestMapping(value="/add" ,method = RequestMethod.POST)
    @ResponseBody
    @Permission(url = qxurl,type = PermissionType.ADD)
    public Object add(@ModelAttribute Evaluation record){
//        record.setProjectId(this.getProjid());
        return evaluationService.insert(record);
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
        return  evaluationService.deleteByPrimaryKey(id);
    }
    /**
     * 更改积分信息
     * @return
     */
    @RequestMapping(value="/edit",method=RequestMethod.POST)
    @ResponseBody
    @Permission(url = qxurl,type = PermissionType.EDIT)
    public Object edit(@ModelAttribute Evaluation record){
        return evaluationService.updateByPrimaryKeySelective(record);
    }
}
