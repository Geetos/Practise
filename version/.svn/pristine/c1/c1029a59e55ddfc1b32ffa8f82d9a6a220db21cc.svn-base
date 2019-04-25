package com.jxtele.projectmanage.service.impl;

import com.jxtele.projectmanage.dao.ProjectMapper;
import com.jxtele.projectmanage.dao.TeamBuildMapper;
import com.jxtele.projectmanage.dao.UserDao;
import com.jxtele.projectmanage.entity.Project;
import com.jxtele.projectmanage.entity.ResponseModel;
import com.jxtele.projectmanage.entity.TeamBuild;
import com.jxtele.projectmanage.service.ITeamBuildService;
import com.jxtele.projectmanage.util.ParameterMap;
import com.jxtele.projectmanage.util.Tools;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.interceptor.TransactionAspectSupport;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class TeamBuildService implements ITeamBuildService {

    @Autowired
    private ProjectMapper projectMapper;

    @Autowired
    private TeamBuildMapper teamBuildMapper;

    @Autowired
    private UserDao userDao;

    @Override
    public Map<String, Object> deleteByPrimaryKey(Integer id) {
        try {
            if(id == null){
                return ResponseModel.getModel("你请求的是一个冒牌接口", "failed", null);
            }
            teamBuildMapper.deleteByPrimaryKey(id);
        } catch (Exception e) {
            TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();
            e.printStackTrace();
            return ResponseModel.getModel("error", "falied", null);
        }
        return ResponseModel.getModel("ok", "success", null);
    }

    @Override
    public Map<String, Object> insert(TeamBuild record) {
        try {
            teamBuildMapper.insert(record);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseModel.getModel("error", "falied", null);
        }
        return ResponseModel.getModel("ok", "success", null);
    }

    @Override
    public int insertSelective(TeamBuild record) {
        return 0;
    }

    @Override
    public TeamBuild selectByPrimaryKey(Integer id) {
        return teamBuildMapper.selectByPrimaryKey(id);
    }

    @Override
    public HashMap<String, Object> updateByPrimaryKeySelective(TeamBuild record) {
        try {
            List<ParameterMap> list = userDao.getUserList();
            if(!list.isEmpty()&& !Tools.isEmpty(record.getSysUserid().toString())){
                for(int i= 0 ; i< list.size();i++){
                    if(list.get(i).get("user_id").equals(record.getSysUserid())){
                        record.setName(list.get(i).get("nick_name").toString());
                    }
                }
            }
            teamBuildMapper.updateByPrimaryKeySelective(record);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseModel.getModel("提交失败", "failed", null);
        }
        return ResponseModel.getModel("ok", "success", null);
    }

    @Override
    public int updateByPrimaryKey(TeamBuild record) {
        return 0;
    }

    @Override
    public List<TeamBuild> findByProjId(Integer projid) {
        return teamBuildMapper.findByProjId(projid);
    }

    public HashMap<String, Object> getUserList(){
        return ResponseModel.getModel("ok", "success", userDao.getUserList());
    }

    public List<Project> getProjectList(Integer userid){
            return projectMapper.findProjectByUserid(userid);
    }

    @Override
    public List<TeamBuild> findByProjIdandUserId(Integer projid,Integer userid) {
        return teamBuildMapper.findByProjIdandUserId(projid,userid);
    }

}
