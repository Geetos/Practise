package com.jxtele.projectmanage.service.impl;

import com.jxtele.projectmanage.dao.RiskRecordMapper;
import com.jxtele.projectmanage.entity.ResponseModel;
import com.jxtele.projectmanage.entity.RiskRecord;
import com.jxtele.projectmanage.service.IRiskRecordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.interceptor.TransactionAspectSupport;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class RiskRecordService implements IRiskRecordService {

    @Autowired
    private RiskRecordMapper riskRecordMapper;
    @Override
    public Map<String, Object> deleteByPrimaryKey(Integer id) {
        try {
            if(id == null){
                return ResponseModel.getModel("你请求的是一个冒牌接口", "failed", null);
            }
            riskRecordMapper.deleteByPrimaryKey(id);
        } catch (Exception e) {
            TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();
            e.printStackTrace();
            return ResponseModel.getModel("error", "falied", null);
        }
        return ResponseModel.getModel("ok", "success", null);
    }

    @Override
    public Map<String, Object> insert(RiskRecord record) {
        try {
            riskRecordMapper.insert(record);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseModel.getModel("error", "falied", null);
        }
        return ResponseModel.getModel("ok", "success", null);
    }

    @Override
    public int insertSelective(RiskRecord record) {
        return 0;
    }

    @Override
    public RiskRecord selectByPrimaryKey(Integer id) {
        return riskRecordMapper.selectByPrimaryKey(id);
    }

    @Override
    public HashMap<String, Object> updateByPrimaryKeySelective(RiskRecord record) {
        try {
            riskRecordMapper.updateByPrimaryKeySelective(record);
        } catch (Exception e) {
            TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();
            e.printStackTrace();

            return ResponseModel.getModel("提交失败", "failed", null);
        }
        return ResponseModel.getModel("ok", "success", null);
    }

    @Override
    public int updateByPrimaryKey(RiskRecord record) {
        return 0;
    }

    @Override
    public List<RiskRecord> findRiskByRiskId(Integer riskid) {
        return riskRecordMapper.findRiskByRiskId(riskid);
    }

    @Override
    public int deleteByRiskId(Integer riskid) {
        return riskRecordMapper.deleteByRiskId(riskid);
    }
}
