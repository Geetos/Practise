package com.jxtele.projectmanage.dao;


import com.jxtele.projectmanage.entity.User;
import com.jxtele.projectmanage.entity.Role;
import com.jxtele.projectmanage.util.ParameterMap;

import java.util.List;

public interface UserDao {
	public User getUserInfo(ParameterMap pm);
	public List<Role> getUserRoleList(ParameterMap pm);
	public List<ParameterMap> getUserList();
	public void saveLoginTime(String userId);
	public void saveUser(ParameterMap pm);
	public void bathSaveUserRole(List<ParameterMap> parame);
	public void editUser(ParameterMap pm);
	public void delUser(String userId);
	public void delUserRole(String userId);
}
