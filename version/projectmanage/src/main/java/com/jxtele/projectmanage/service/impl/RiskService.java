package com.jxtele.projectmanage.service.impl;

import com.jxtele.projectmanage.dao.RiskMapper;
import com.jxtele.projectmanage.dao.RiskRecordMapper;
import com.jxtele.projectmanage.entity.ResponseModel;
import com.jxtele.projectmanage.entity.Risk;
import com.jxtele.projectmanage.entity.RiskRecord;
import com.jxtele.projectmanage.service.IRiskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.interceptor.TransactionAspectSupport;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
@Service
public class RiskService implements IRiskService {

    @Autowired
    private RiskMapper riskMapper;

    @Autowired
    private RiskRecordMapper riskRecordMapper;

    @Override
    public Map<String, Object> deleteByPrimaryKey(Integer id) {
        try {
            if(id == null){
                return ResponseModel.getModel("你请求的是一个冒牌接口", "failed", null);
            }
            riskMapper.deleteByPrimaryKey(id);
        } catch (Exception e) {
            TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();
            e.printStackTrace();
            return ResponseModel.getModel("error", "falied", null);
        }
        return ResponseModel.getModel("ok", "success", null);
    }

    @Override
    public Map<String, Object> insert(Risk record) {
        try {
            riskMapper.insert(record);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseModel.getModel("error", "falied", null);
        }
        return ResponseModel.getModel("ok", "success", null);
    }

    @Override
    public int insertSelective(Risk record) {
        return 0;
    }

    @Override
    public Risk selectByPrimaryKey(Integer id) {
        return riskMapper.selectByPrimaryKey(id);
    }

    @Override
    public HashMap<String, Object> updateByPrimaryKeySelective(Risk record,Integer loginuserid) {
        try {
            Risk risk = riskMapper.selectByPrimaryKey(record.getId());
            RiskRecord riskRecord = new RiskRecord();
            if(!risk.getRiskaversion().equals(record.getRiskaversion()) || risk.getRisktype() != record.getRisktype() ){
                riskRecord.setChangetime(new Date());
                riskRecord.setChangeuser(loginuserid);
                riskRecord.setLastmark(riskRecordMapper.findRiskByRiskId(record.getId()).size()+1);
                riskRecord.setOldaversion(risk.getRiskaversion());
                riskRecord.setOlduptime(risk.getUptime());
                riskRecord.setOldtype(risk.getRisktype());
                riskRecord.setProjectId(risk.getProjectId());
                riskRecord.setOlduserId(risk.getUserId());
                riskRecord.setOlddealtime(risk.getDealtime());
                riskRecord.setOldresponsible(risk.getResponsible());
                riskRecord.setRiskId(risk.getId());
            }
            riskMapper.updateByPrimaryKeySelective(record);
            riskRecordMapper.insert(riskRecord);
        } catch (Exception e) {
            TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();
            e.printStackTrace();

            return ResponseModel.getModel("提交失败", "failed", null);
        }
        return ResponseModel.getModel("ok", "success", null);
    }

    @Override
    public int updateByPrimaryKey(Risk record) {
        return 0;
    }

    @Override
    public List<Risk> findRiskByProjId(Integer projid) {
        return riskMapper.findRiskByProjId(projid);
    }
}
