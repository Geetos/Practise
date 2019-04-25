package com.jxtele.projectmanage.dao;


import com.jxtele.projectmanage.entity.Menu;
import com.jxtele.projectmanage.util.ParameterMap;

import java.util.List;

public interface MenuDao {
	
	public List<Menu> getAllParentMenu(Object obj);
	public List<Menu> getSubMenuByParentId(long ParentId);
	public long getMaxIdByName();
	public void saveMenu(ParameterMap pm);
	/**
	 * 逻辑删除，实际是更新
	 * @param pm
	 */
	public void delMenu(String menuId);
	public void editMenu(ParameterMap pm);
	public ParameterMap findMenu(String menuId);
}
