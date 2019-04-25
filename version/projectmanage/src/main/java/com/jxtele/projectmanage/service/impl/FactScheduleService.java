package com.jxtele.projectmanage.service.impl;

import com.jxtele.projectmanage.dao.FactScheduleMapper;
import com.jxtele.projectmanage.entity.FactSchedule;
import com.jxtele.projectmanage.entity.ResponseModel;
import com.jxtele.projectmanage.service.IFactScheduleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.interceptor.TransactionAspectSupport;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class FactScheduleService implements IFactScheduleService {

    @Autowired
    private FactScheduleMapper factScheduleMapper;

    @Override
    public Map<String, Object> deleteByPrimaryKey(Integer id) {
        try {
            if(id == null){
                return ResponseModel.getModel("你请求的是一个冒牌接口", "failed", null);
            }
            factScheduleMapper.deleteByPrimaryKey(id);
        } catch (Exception e) {
            TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();
            e.printStackTrace();
            return ResponseModel.getModel("error", "falied", null);
        }
        return ResponseModel.getModel("ok", "success", null);
    }

    @Override
    public Map<String, Object> insert(FactSchedule record) {
        try {
            factScheduleMapper.insert(record);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseModel.getModel("error", "falied", null);
        }
        return ResponseModel.getModel("ok", "success", null);
    }

    @Override
    public int insertSelective(FactSchedule record) {
        return 0;
    }

    @Override
    public FactSchedule selectByPrimaryKey(Integer id) {
        return factScheduleMapper.selectByPrimaryKey(id);
    }

    @Override
    public HashMap<String, Object> updateByPrimaryKeySelective(FactSchedule record) {
        try {
            factScheduleMapper.updateByPrimaryKeySelective(record);
        } catch (Exception e) {
            TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();
            e.printStackTrace();

            return ResponseModel.getModel("提交失败", "failed", null);
        }
        return ResponseModel.getModel("ok", "success", null);
    }

    @Override
    public int updateByPrimaryKey(FactSchedule record) {
        return 0;
    }

    @Override
    public List<FactSchedule> findFactScheduleleByctScheduleid(Integer ctScheduleid) {
        return factScheduleMapper.findFactScheduleleByctScheduleid(ctScheduleid);
    }

    @Override
    public List<FactSchedule> findFactScheduleleByProjid(Integer projid) {
        return factScheduleMapper.findFactScheduleleByProjid(projid);
    }
}
