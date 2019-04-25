package com.jxtele.projectmanage.service.impl;

import com.jxtele.projectmanage.dao.SupplierMapper;
import com.jxtele.projectmanage.entity.ResponseModel;
import com.jxtele.projectmanage.entity.Supplier;
import com.jxtele.projectmanage.service.ISupplierService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.interceptor.TransactionAspectSupport;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class SupplierService implements ISupplierService {

    @Autowired
    private SupplierMapper supplierMapper;

    @Override
    public Map<String, Object> deleteByPrimaryKey(Integer id) {
        try {
            if(id == null){
                return ResponseModel.getModel("你请求的是一个冒牌接口", "failed", null);
            }
            supplierMapper.deleteByPrimaryKey(id);
        } catch (Exception e) {
            TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();
            e.printStackTrace();
            return ResponseModel.getModel("error", "falied", null);
        }
        return ResponseModel.getModel("ok", "success", null);
    }

    @Override
    public Map<String, Object> insert(Supplier record) {
        try {
            supplierMapper.insert(record);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseModel.getModel("error", "falied", null);
        }
        return ResponseModel.getModel("ok", "success", null);
    }

    @Override
    public int insertSelective(Supplier record) {
        return 0;
    }

    @Override
    public Supplier selectByPrimaryKey(Integer id) {
        return supplierMapper.selectByPrimaryKey(id);
    }

    @Override
    public HashMap<String, Object> updateByPrimaryKeySelective(Supplier record) {
        try {
            supplierMapper.updateByPrimaryKeySelective(record);
        } catch (Exception e) {
            TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();
            e.printStackTrace();

            return ResponseModel.getModel("提交失败", "failed", null);
        }
        return ResponseModel.getModel("ok", "success", null);
    }

    @Override
    public int updateByPrimaryKey(Supplier record) {
        return 0;
    }

    @Override
    public List<Supplier> findSupplierByProcurementId(Integer procurementId) {
        return supplierMapper.findSupplierByProcurementId(procurementId);
    }
}
