package com.jxtele.projectmanage.controller;

import com.jxtele.projectmanage.controller.base.BaseController;
import com.jxtele.projectmanage.entity.*;
import com.jxtele.projectmanage.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

@Controller
public class IndexController extends BaseController {
	
	@Value("${admin.name}")
	private String adminName;

	@Autowired
	private IUserService userService;

	@Autowired
	private IUserTempletService userTempletService;

	@Autowired
	private IManagerTempletService managerTempletService;

	@Autowired
	private IEngineerTempletService engineerTempletService;

	@Autowired
	private IProjectService projectService;
	
	/**
	 * 入口
	 * @return
	 */
	@RequestMapping(value={"/","/toLogin"},method=RequestMethod.GET)
	public String toLogin(){
		return "login";
	}
	
	/**
	 * 首页
	 * @param model
	 * @return
	 */
	@SuppressWarnings("unchecked")
	@RequestMapping("/index")
	public String index(Model model,Integer projectid,String projectName,Integer level,String type){
		try {
			this.getSession().setAttribute(Const.SESSION_ROLE,level);
			this.getSession().setAttribute(Const.SESSION_ProjectId,projectid);
			if(projectid!=null) {
				this.getSession().setAttribute(Const.SESSION_ProjectName, projectService.selectProjectById(projectid).getProjectName());
			}
			this.getSession().setAttribute(Const.SESSION_TYPE,type);
			List<Menu>  list = new ArrayList<Menu>();
			List<Menu> allMenu = (List<Menu>) this.getSession().getAttribute(Const.SESSION_ALL_MENU);
			if("jg".equals(type)){
				for(Iterator it = allMenu.iterator(); it.hasNext();){
					Menu menu = (Menu) it.next();
					if(menu.getMENU_NAME().equals("项目监管")){
						list.add(menu);
					}
				}
			}else if("bb".equals(type)){
				for(Iterator it = allMenu.iterator();it.hasNext();){
					Menu menu = (Menu) it.next();
					if(menu.getMENU_NAME().equals("项目报表")){
						list.add(menu);
					}
				}
			}else if("rz".equals(type)){
				for(Iterator it = allMenu.iterator();it.hasNext();){
					Menu menu = (Menu) it.next();
					if(menu.getMENU_NAME().equals("日志管理")){
						list.add(menu);
					}
				}
			}else if("in".equals(type)){
				for(Iterator it = allMenu.iterator();it.hasNext();){
					Menu menu = (Menu) it.next();
					if(menu.getMENU_NAME().equals("系统管理")){
						list.add(menu);
					}
					if(menu.getMENU_NAME().equals("项目信息")){
						list.add(menu);
					}
				}
			} else if("gl".equals(type)){
				for(Iterator it = allMenu.iterator();it.hasNext();){
					Menu menu = (Menu) it.next();
					if(menu.getMENU_NAME().equals("项目管理")){
						list.add(menu);
					}
				}
			}
			if(allMenu != null){
				model.addAttribute("menus", list);
			}
			model.addAttribute("adminName", adminName);
			model.addAttribute("userName", ((User)this.getSession().getAttribute(Const.SESSION_USER)).getNickName());
			model.addAttribute("userPath", ((User)this.getSession().getAttribute(Const.SESSION_USER)).getPicPath());
			model.addAttribute("userStatus", "在线");
		} catch (Exception e) {
			e.printStackTrace();
		}
		return "index";
	}

	@RequestMapping("/chooseproject")
	public ModelAndView chooseproject(ModelMap model){
		UserRole userRole = ((User)this.getSession().getAttribute(Const.SESSION_USER)).getUserRole();
		model.addAttribute("usertemplets",userTempletService.selectByUserId(this.getLoginUserId()));
		model.addAttribute("managertemplets",managerTempletService.selectByUserId(this.getLoginUserId()));
		model.addAttribute("engineertemplets",engineerTempletService.selectByUserId(this.getLoginUserId()));
		return new ModelAndView("/chooseproject",model);
	}

	@RequestMapping("/jg")
	@ResponseBody
	public Object jg(ModelMap model){
		UserRole userRole = ((User)this.getSession().getAttribute(Const.SESSION_USER)).getUserRole();
		if(userRole.getLevel()>=300){
			return ResponseModel.getModel("ok", "success", projectService.findAllProjectByJC());
		}else{
			return ResponseModel.getModel("ok", "success", projectService.findProjectByUserAndTeam(this.getLoginUserId()));
		}
		/*model.addAttribute("usertemplets",userTempletService.selectByUserId(this.getLoginUserId()));
		model.addAttribute("managertemplets",managerTempletService.selectByUserId(this.getLoginUserId()));
		model.addAttribute("engineertemplets",engineerTempletService.selectByUserId(this.getLoginUserId()));
		return new ModelAndView("/chooseproject",model);*/
	}

	
	
	/**
	 * 用户登录
	 * @return
	 */
	@RequestMapping(value={"/login"},method=RequestMethod.POST)
	@ResponseBody
	public Object login(){
		return userService.login(this.getParameterMap(), this.getSession());
	}
	
	/**
	 * 用户注销
	 * @return
	 */
	@RequestMapping("/logout")
	public String logout(){
		return userService.logout(this.getSession());
	}
	
	
}
