package com.jxtele.projectmanage.service.impl;

import com.jxtele.projectmanage.dao.UserDao;
import com.jxtele.projectmanage.dao.UserTempletMapper;
import com.jxtele.projectmanage.entity.*;
import com.jxtele.projectmanage.service.IProjectService;
import com.jxtele.projectmanage.service.IUserTempletService;
import com.jxtele.projectmanage.util.ParameterMap;
import com.jxtele.projectmanage.util.Tools;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.interceptor.TransactionAspectSupport;

import javax.servlet.http.HttpSession;
import java.util.*;

@Service
public class UserTempletService implements IUserTempletService {

    @Autowired
    private UserTempletMapper userTempletMapper;

    @Autowired
    private UserDao userDao;

    @Autowired
    private IProjectService projectService;

    @Override
    public Map<String, Object> deleteByPrimaryKey(Integer id) {
        try {
            if(id == null){
                return ResponseModel.getModel("你请求的是一个冒牌接口", "failed", null);
            }
            userTempletMapper.deleteByPrimaryKey(id);
        } catch (Exception e) {
            TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();
            e.printStackTrace();
            return ResponseModel.getModel("error", "falied", null);
        }
        return ResponseModel.getModel("ok", "success", null);
    }

    @Override
    public Map<String, Object> insert(ParameterMap pm,Integer userid) {
        try {
            String ids = pm.getString("ids");
            List<ParameterMap> parame = null;
            if(Tools.notEmpty(ids)){
                parame = new ArrayList<>();
                String[] roleIds = ids.split(",");
                for(String roleId:roleIds){
                    ParameterMap data = new ParameterMap();
                    data.put("user_id", userid);
                    data.put("project_id", roleId);
                    data.put("project_name",projectService.selectProjectById(Integer.parseInt(roleId)).getProjectName());
                    data.put("createtime",new Date());
                    data.put("manager",projectService.selectProjectById(Integer.parseInt(roleId)).getProjectManager());
                    parame.add(data);
                }
            }
            if(parame != null && parame.size() > 0){
                userTempletMapper.bathSave(parame);
            }

        } catch (Exception e) {
            e.printStackTrace();
            TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();
            return ResponseModel.getModel("更新失败", "failed", null);
        }
        return ResponseModel.getModel("ok", "success", null);
    }

    @Override
    public int insertSelective(UserTemplet record) {
        return 0;
    }

    @Override
    public UserTemplet selectByPrimaryKey(Integer id) {
        return userTempletMapper.selectByPrimaryKey(id);
    }

    @Override
    public HashMap<String, Object> updateByPrimaryKeySelective(UserTemplet record) {
        try {
            userTempletMapper.updateByPrimaryKeySelective(record);
        } catch (Exception e) {
            TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();
            e.printStackTrace();

            return ResponseModel.getModel("提交失败", "failed", null);
        }
        return ResponseModel.getModel("ok", "success", null);
    }

    @Override
    public int updateByPrimaryKey(UserTemplet record) {
        return 0;
    }

    @Override
    public List<UserTemplet> selectByUserId(Integer UserId) {
        return userTempletMapper.selectByUserId(UserId);
    }

    @Override
    public HashMap<String, Object> getProjectByUser(ParameterMap pm, Integer userid, HttpSession session) {
        pm.put("user_id",userid);
        UserRole userRole = ((User)session.getAttribute(Const.SESSION_USER)).getUserRole();
        if(userRole.getLevel() >= 300){
            return ResponseModel.getModel("ok", "success", projectService.findAllUserProject(userid));
        }else{
            return ResponseModel.getModel("ok", "success", projectService.findProjectByTeamBuild(userid));
        }
    }
}
