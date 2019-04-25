package com.jxtele.projectmanage.controller;

import com.jxtele.projectmanage.annotation.Permission;
import com.jxtele.projectmanage.controller.base.BaseController;
import com.jxtele.projectmanage.entity.PermissionType;
import com.jxtele.projectmanage.entity.TeamBuild;
import com.jxtele.projectmanage.service.ITeamBuildService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping("/teambuild")
public class TeamBuildController extends BaseController {

    private final static String qxurl = "teambuild/list";

    @Autowired
    private ITeamBuildService  teamBuildService;

    @RequestMapping(value="/list/{id}",method = RequestMethod.GET)
    @Permission(url = qxurl,type = PermissionType.QUERY)
    public ModelAndView list(@PathVariable Integer id,ModelMap model){
        model.addAttribute("teambuids",teamBuildService.findByProjId(id));
        model.addAttribute("projectId",id);
        return new ModelAndView("page/teambuild/list",model);
    }
    /**
     * 添加项目团队
     * @return
     */
    @RequestMapping(value="/add",method=RequestMethod.POST)
    @ResponseBody
    @Permission(url = qxurl,type = PermissionType.ADD)
    public Object add(@ModelAttribute TeamBuild record){
        return teamBuildService.insert(record);
    }

    /**
     * 删除项目团队
     * @return
     */
    @RequestMapping(value="/del/{id}",method=RequestMethod.GET)
    @ResponseBody
    @Permission(url = qxurl,type = PermissionType.DEL)
    public Object del(@PathVariable("id") Integer id){
        return teamBuildService.deleteByPrimaryKey(id);
    }

    /**
     * 更改项目团队
     * @return
     */
    @RequestMapping(value="/edit",method=RequestMethod.POST)
    @ResponseBody
    @Permission(url = qxurl,type = PermissionType.EDIT)
    public Object edit(@ModelAttribute TeamBuild record){
        return teamBuildService.updateByPrimaryKeySelective(record);
    }

    @RequestMapping(value="/getAllUser",method=RequestMethod.GET)
    @ResponseBody
    @Permission(url = qxurl,type = PermissionType.EDIT)
    public Object userList(){
        return teamBuildService.getUserList();
    }

    @RequestMapping(value="/getProject",method=RequestMethod.GET)
    @ResponseBody
    @Permission(url = qxurl,type = PermissionType.EDIT)
    public Object projectList(){
        return teamBuildService.getProjectList(this.getLoginUserId());
    }
}
