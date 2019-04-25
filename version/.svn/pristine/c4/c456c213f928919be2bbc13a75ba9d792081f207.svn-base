package com.jxtele.projectmanage.controller;

import com.jxtele.projectmanage.annotation.Permission;
import com.jxtele.projectmanage.controller.base.BaseController;
import com.jxtele.projectmanage.entity.PermissionType;
import com.jxtele.projectmanage.entity.UserControl;
import com.jxtele.projectmanage.service.IUserControlService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping(value="/usercontrol")
public class UserControlController extends BaseController {
    private final static String qxurl = "usercontrol/list";

    @Autowired
    private IUserControlService userControlService;

    @RequestMapping(value="/list",method = RequestMethod.GET)
    @Permission(url = qxurl,type = PermissionType.QUERY)
    public ModelAndView list(ModelMap model){
        model.addAttribute("usercontrols",userControlService.findAllUserControl());
        return new ModelAndView("page/usercontrols/list",model);
    }
    /**
     * 添加项目团队
     * @return
     */
    @RequestMapping(value="/add",method=RequestMethod.POST)
    @ResponseBody
    @Permission(url = qxurl,type = PermissionType.ADD)
    public Object add(@ModelAttribute UserControl record){
        return userControlService.insert(record);
    }

    /**
     * 删除项目团队
     * @return
     */
    @RequestMapping(value="/del/{id}",method= RequestMethod.GET)
    @ResponseBody
    @Permission(url = qxurl,type = PermissionType.DEL)
    public Object del(@PathVariable("id") Integer id){
        return userControlService.deleteByPrimaryKey(id);
    }

    /**
     * 更改项目团队
     * @return
     */
    @RequestMapping(value="/edit",method=RequestMethod.POST)
    @ResponseBody
    @Permission(url = qxurl,type = PermissionType.EDIT)
    public Object edit(@ModelAttribute UserControl record){
        return userControlService.updateByPrimaryKeySelective(record);
    }


    @RequestMapping(value="/findAll",method=RequestMethod.GET)
    @ResponseBody
    @Permission(url = qxurl,type = PermissionType.QUERY)
    public Object edit(){
        return userControlService.findAll();
    }

}
