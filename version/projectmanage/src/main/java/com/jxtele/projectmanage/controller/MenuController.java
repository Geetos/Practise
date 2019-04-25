package com.jxtele.projectmanage.controller;


import com.jxtele.projectmanage.annotation.Permission;
import com.jxtele.projectmanage.controller.base.BaseController;
import com.jxtele.projectmanage.entity.PermissionType;
import com.jxtele.projectmanage.service.IMenuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/menu")
public class MenuController extends BaseController {
	
	private final static String qxurl = "menu/list";
	
	@Autowired
	private IMenuService menuService;
	
	@RequestMapping("/list")
	public String list(Model model){
		model.addAttribute("menus",menuService.getAllParentMenuList());
		return "page/menu/list";
	}
	
	@RequestMapping(value="/add",method=RequestMethod.POST)
	@ResponseBody
	@Permission(url = qxurl,type = PermissionType.ADD)
	public Object add(){
		return menuService.addMenu(this.getParameterMap(),this.getSession());
	}

	@RequestMapping(value="/del/{menu_id}",method=RequestMethod.GET)
	@ResponseBody
	@Permission(url = qxurl,type = PermissionType.DEL)
	public Object del(@PathVariable("menu_id") String menuId){
		return menuService.delMenu(menuId);
	}
	
	@RequestMapping(value="/edit",method=RequestMethod.POST)
	@ResponseBody
	@Permission(url = qxurl,type = PermissionType.EDIT)
	public Object edit(){
		return menuService.editMenu(this.getParameterMap());
	}

	@RequestMapping(value="/query/{menu_id}",method=RequestMethod.GET)
	@ResponseBody
	@Permission(url = qxurl,type = PermissionType.QUERY)
	public Object find(@PathVariable("menu_id") String menuId){
		return menuService.findMenu(menuId);
	}
	
	@RequestMapping("/getSubMenu")
	@ResponseBody
	@Permission(url = qxurl,type = PermissionType.QUERY)
	public Object getSubMenu(){
		return menuService.getSubMenuList(this.getParameterMap());
	}
}
