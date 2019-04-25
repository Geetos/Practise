package com.jxtele.projectmanage.service.impl;

import com.jxtele.projectmanage.dao.ProjectMapper;
import com.jxtele.projectmanage.entity.Project;
import com.jxtele.projectmanage.entity.ResponseModel;
import com.jxtele.projectmanage.service.IProjectService;
import com.jxtele.projectmanage.util.ParameterMap;
import com.jxtele.projectmanage.util.Tools;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.interceptor.TransactionAspectSupport;

import javax.servlet.http.HttpSession;
import java.util.Date;
import java.util.List;
import java.util.Map;

@Service
public class ProjectService implements IProjectService {

    @Autowired
    private ProjectMapper projectMapper;

    @Override
    public Map<String, Object> deleteProjectById(Integer id) {
        try {
            if(id == null){
                return ResponseModel.getModel("你请求的是一个冒牌接口", "failed", null);
            }
            projectMapper.deleteByPrimaryKey(id);
        } catch (Exception e) {
            TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();
            e.printStackTrace();
            return ResponseModel.getModel("error", "falied", null);
        }
        return ResponseModel.getModel("ok", "success", null);
    }


    public Map<String, Object> insert(ParameterMap pm, HttpSession session) {
        try {
           // pm.put("user_id",((User)session.getAttribute(Const.SESSION_USER)).getUserId());
            if(pm.get("register_time")==null||pm.get("register_time").equals("")) {
                pm.put("register_time", new Date());
            }
            projectMapper.insert(pm);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseModel.getModel("error", "falied", null);
        }
        return ResponseModel.getModel("ok", "success", null);

    }

    @Override
    public Project selectProjectById(Integer id) {
        return projectMapper.selectByPrimaryKey(id);
    }

    @Override
    public Map<String, Object> updateProjectByIdSelective(ParameterMap pm) {
        try {
            if(Tools.isEmpty(pm.getString("user_id"))){
                return ResponseModel.getModel("你请求的是冒牌接口", "falied", null);
            }
            projectMapper.updateByPrimaryKeySelective(pm);
        } catch (Exception e) {
            TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();
            e.printStackTrace();

            return ResponseModel.getModel("提交失败", "failed", null);
        }
        return ResponseModel.getModel("ok", "success", null);
    }

    //
    @Override
    public List<Project> findProjectByUserid(Integer userid) {
        return projectMapper.findProjectByUserid(userid);
    }
    //所有打开项目
    @Override
    public List<Project> findAllProject() {
        return projectMapper.findAllProject();
    }
    //查找所有相关项目
    @Override
    public List<Project> findProjectByTeamBuild(Integer userId) {
        return projectMapper.findProjectByTeamBuild(userId);
    }

    @Override
    public List<Project> findProjectByManagerTeamBuild(Integer userId) {
        return projectMapper.findProjectByManagerTeamBuild(userId);
    }

    @Override
    public List<Project> findProjectByEngineerTeamBuild(Integer userId) {
        return projectMapper.findProjectByEngineerTeamBuild(userId);
    }

    @Override
    public List<Project> findAllUserProject(Integer userId) {
        return projectMapper.findAllUserProject(userId);
    }

    @Override
    public List<Project> findAllManagerProject(Integer userId) {
        return projectMapper.findAllManagerProject(userId);
    }

    @Override
    public List<Project> findAllEngineerProject(Integer userId) {
        return projectMapper.findAllEngineerProject(userId);
    }

    @Override
    public List<Project> findProjectByUserAndTeam(Integer userId) {
        return projectMapper.findProjectByUserAndTeam(userId);
    }

    @Override
    public List<Project> findAllProjectByJC() {
        return projectMapper.findAllProjectByJC();
    }
}
