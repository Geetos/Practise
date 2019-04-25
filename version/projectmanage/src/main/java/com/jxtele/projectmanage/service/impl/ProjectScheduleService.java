package com.jxtele.projectmanage.service.impl;

import com.jxtele.projectmanage.dao.ProjectScheduleMapper;
import com.jxtele.projectmanage.entity.AlterSchedule;
import com.jxtele.projectmanage.entity.ProjectSchedule;
import com.jxtele.projectmanage.entity.ResponseModel;
import com.jxtele.projectmanage.service.IAlterScheduleService;
import com.jxtele.projectmanage.service.IProjectScheduleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.interceptor.TransactionAspectSupport;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class ProjectScheduleService implements IProjectScheduleService {

    @Autowired
    private ProjectScheduleMapper  projectScheduleMapper;


    @Override
    public Map<String, Object> deleteByPrimaryKey(Integer id) {
        try {
            if(id == null){
                return ResponseModel.getModel("你请求的是一个冒牌接口", "failed", null);
            }
            projectScheduleMapper.deleteByPrimaryKey(id);
        } catch (Exception e) {
            TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();
            e.printStackTrace();
            return ResponseModel.getModel("error", "falied", null);
        }
        return ResponseModel.getModel("ok", "success", null);
    }

    @Override
    public Map<String, Object> insert(ProjectSchedule record) {
        try {
            projectScheduleMapper.insert(record);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseModel.getModel("error", "falied", null);
        }
        return ResponseModel.getModel("ok", "success", null);

    }

    @Override
    public int insertSelective(ProjectSchedule record) {
        return 0;
    }

    @Override
    public ProjectSchedule selectByPrimaryKey(Integer id) {
        return projectScheduleMapper.selectByPrimaryKey(id);
    }

    @Override
    public HashMap<String, Object> updateByPrimaryKeySelective(ProjectSchedule record) {
        try {
            projectScheduleMapper.updateByPrimaryKeySelective(record);
        } catch (Exception e) {
            TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();
            e.printStackTrace();

            return ResponseModel.getModel("提交失败", "failed", null);
        }
        return ResponseModel.getModel("ok", "success", null);
    }

    @Override
    public int updateByPrimaryKey(ProjectSchedule record) {
        return 0;
    }

    @Override
    public List<ProjectSchedule> findProjectScheduleByProjId(Integer projid) {
        return projectScheduleMapper.findProjectScheduleByProjId(projid);
    }
}
