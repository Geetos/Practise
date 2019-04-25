package com.jxtele.projectmanage.controller;

import com.jxtele.projectmanage.annotation.Permission;
import com.jxtele.projectmanage.controller.base.BaseController;
import com.jxtele.projectmanage.entity.PermissionType;
import com.jxtele.projectmanage.service.IProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping("/project")
public class ProjectController extends BaseController {

    private final static String qxurl = "project/list";
    @Autowired
    private IProjectService projectService;

    @RequestMapping(value="/list",method = RequestMethod.GET)
    @Permission(url = qxurl,type = PermissionType.QUERY)
    public ModelAndView list(ModelMap model){
       // model.addAttribute("projects",projectService.findProjectByUserid(this.getLoginUserId()));
        model.addAttribute("projects",projectService.findAllProject());
        return new ModelAndView("page/project/list",model);
    }
    /**
     * 添加项目
     * @return
     */
    @RequestMapping(value="/add",method=RequestMethod.POST)
    @ResponseBody
    @Permission(url = qxurl,type = PermissionType.ADD)
    public Object add(){
        return projectService.insert(this.getParameterMap(),this.getSession());
    }

    /**
     * 删除项目
     * @return
     */
    @RequestMapping(value="/del/{id}",method=RequestMethod.GET)
    @ResponseBody
    @Permission(url = qxurl,type = PermissionType.DEL)
    public Object del(@PathVariable("id") Integer id){
        return projectService.deleteProjectById(id);
    }

    /**
     * 更改项目
     * @return
     */
    @RequestMapping(value="/edit",method=RequestMethod.POST)
    @ResponseBody
    @Permission(url = qxurl,type = PermissionType.EDIT)
    public Object edit(){
        return projectService.updateProjectByIdSelective(this.getParameterMap());
    }

    //根据团队建设查询人员项目
    @RequestMapping(value="/queryByUserId",method=RequestMethod.POST)
    @ResponseBody
    @Permission(url = qxurl,type = PermissionType.QUERY)
    public Object queryByUserId(){
        return projectService.findProjectByTeamBuild(this.getLoginUserId());
    }
    //查询所有在建项目
    @RequestMapping(value="/findAllProject",method=RequestMethod.POST)
    @ResponseBody
    @Permission(url = qxurl,type = PermissionType.QUERY)
    public Object findAllProject(){
        return projectService.findAllProject();
    }

}
