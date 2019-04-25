package com.jxtele.projectmanage.service.impl;


import com.jxtele.projectmanage.dao.MenuDao;
import com.jxtele.projectmanage.entity.Const;
import com.jxtele.projectmanage.entity.Menu;
import com.jxtele.projectmanage.entity.ResponseModel;
import com.jxtele.projectmanage.entity.User;
import com.jxtele.projectmanage.service.IMenuService;
import com.jxtele.projectmanage.util.DateUtil;
import com.jxtele.projectmanage.util.ParameterMap;
import com.jxtele.projectmanage.util.Tools;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpSession;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Service
public class MenuService implements IMenuService {

	@Autowired
	private MenuDao menuDao;
	
	private Logger log = Logger.getLogger(this.getClass());
	
	@Override
	public List<Menu> getAllParentMenuList() {
		return menuDao.getAllParentMenu(0);
	}

	@Override
	public List<Menu> getSubMenuListByParentId(long parentId) {
		return menuDao.getSubMenuByParentId(parentId);
	}

	@Override
	public List<Menu> getAllMenuList() {
		List<Menu> allMenu = this.getAllParentMenuList();
		for(Menu m:allMenu){
			List<Menu> subM = this.getSubMenuListByParentId(m.getMENU_ID());
			m.setSubMenu(subM);
		}
		return allMenu;
	}
	
	@Override
	public long getMaxId() {
		return menuDao.getMaxIdByName();
	}
	
	
	@Override
	public Map<String, Object> getSubMenuList(ParameterMap pm) {
		List<Menu> subms = null;
		try {
			long parentId = Integer.parseInt(pm.getString("parent_id"));
			subms = menuDao.getSubMenuByParentId(parentId);
		} catch (Exception e) {
			e.printStackTrace();
			log.error("get sub menu error", e);
			return ResponseModel.getModel("error", "falied", new ArrayList<>());
		}
		return ResponseModel.getModel("ok", "success", subms);
	}
	
	@Override
	public Map<String, Object> addMenu(ParameterMap pm,HttpSession session) {
		try {
			System.out.println("pm="+pm);
			long newId = menuDao.getMaxIdByName();
			String userId = ((User) session.getAttribute(Const.SESSION_USER)).getUserId();
			pm.put("menu_id", newId+1);
			pm.put("user_id", userId);
			pm.put("create_time", DateUtil.getTime());
			menuDao.saveMenu(pm);
		} catch (Exception e) {
			e.printStackTrace();
			log.error("add menu error", e);
			return ResponseModel.getModel("error", "falied", null);
		}
		return ResponseModel.getModel("ok", "success", null);
	}
	
	@Override
	public Map<String, Object> delMenu(String menuId) {
		try {
			if(Tools.isEmpty(menuId) || !Tools.isNumber(menuId)){
				return ResponseModel.getModel("你请求的是一个冒牌接口", "failed", null);
			}
			menuDao.delMenu(menuId);
		} catch (Exception e) {
			e.printStackTrace();
			log.error("add menu error", e);
			return ResponseModel.getModel("error", "falied", null);
		}
		return ResponseModel.getModel("ok", "success", null);
	}
	
	@Override
	public Map<String, Object> editMenu(ParameterMap pm) {
		try {
			String menuId = pm.getString("menu_id");
			if(Tools.isEmpty(menuId) || !Tools.isNumber(menuId)){
				return ResponseModel.getModel("你请求的是一个冒牌接口", "failed", null);
			}
			menuDao.editMenu(pm);
		} catch (Exception e) {
			e.printStackTrace();
			log.error("add menu error", e);
			return ResponseModel.getModel("error", "falied", null);
		}
		return ResponseModel.getModel("ok", "success", null);
	}
	
	@Override
	public Map<String, Object> findMenu(String menuId) {
		ParameterMap menu = null;
		try {
			if(Tools.isEmpty(menuId) || !Tools.isNumber(menuId)){
				return ResponseModel.getModel("你请求的是一个冒牌接口", "failed", null);
			}
			menu = menuDao.findMenu(menuId);
		} catch (Exception e) {
			e.printStackTrace();
			log.error("add menu error", e);
			return ResponseModel.getModel("error", "falied", null);
		}
		return ResponseModel.getModel("ok", "success", menu);
	}
}
