package com.jxtele.projectmanage.service.impl;

import com.jxtele.projectmanage.dao.ProcurementItemMapper;
import com.jxtele.projectmanage.entity.ProcurementItem;
import com.jxtele.projectmanage.entity.ResponseModel;
import com.jxtele.projectmanage.service.IProcurementItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.interceptor.TransactionAspectSupport;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class ProcurementItemService implements IProcurementItemService {

    @Autowired
    private ProcurementItemMapper procurementItemMapper;

    @Override
    public Map<String, Object> deleteByPrimaryKey(Integer id) {
        try {
            if(id == null){
                return ResponseModel.getModel("你请求的是一个冒牌接口", "failed", null);
            }
            procurementItemMapper.deleteByPrimaryKey(id);
        } catch (Exception e) {
            TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();
            e.printStackTrace();
            return ResponseModel.getModel("error", "falied", null);
        }
        return ResponseModel.getModel("ok", "success", null);
    }

    @Override
    public Map<String, Object> insert(ProcurementItem record) {
        try {
            procurementItemMapper.insert(record);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseModel.getModel("error", "falied", null);
        }
        return ResponseModel.getModel("ok", "success", null);
    }

    @Override
    public int insertSelective(ProcurementItem record) {
        return 0;
    }

    @Override
    public ProcurementItem selectByPrimaryKey(Integer id) {
        return procurementItemMapper.selectByPrimaryKey(id);
    }

    @Override
    public HashMap<String, Object> updateByPrimaryKeySelective(ProcurementItem record) {
        try {
            procurementItemMapper.updateByPrimaryKeySelective(record);
        } catch (Exception e) {
            TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();
            e.printStackTrace();

            return ResponseModel.getModel("提交失败", "failed", null);
        }
        return ResponseModel.getModel("ok", "success", null);
    }

    @Override
    public int updateByPrimaryKey(ProcurementItem record) {
        return 0;
    }

    @Override
    public List<ProcurementItem> findProcurementItemByProcurementId(Integer procurementId) {
        return procurementItemMapper.findProcurementItemByProcurementId(procurementId);
    }

    @Override
    public int deleteByProcurementId(Integer procurementId) {
        return procurementItemMapper.deleteByProcurementId(procurementId);
    }
}
