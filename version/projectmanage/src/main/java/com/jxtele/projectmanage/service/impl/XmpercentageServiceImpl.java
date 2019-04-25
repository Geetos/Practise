package com.jxtele.projectmanage.service.impl;

import com.jxtele.projectmanage.dao.XmpercentageMapper;
import com.jxtele.projectmanage.entity.ResponseModel;
import com.jxtele.projectmanage.entity.Xmpercentage;
import com.jxtele.projectmanage.service.XmpercentageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.interceptor.TransactionAspectSupport;

import java.util.HashMap;
import java.util.List;

@Service
public class XmpercentageServiceImpl implements XmpercentageService {
    @Autowired
    private XmpercentageMapper xmpercentageMapper;
    @Override
    public HashMap<String, Object> deleteByPrimaryKey(Integer id) {
        try {
            xmpercentageMapper.deleteByPrimaryKey(id);
        }catch (Exception e) {
            TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();
            e.printStackTrace();
            return ResponseModel.getModel("删除失败", "failed", null);
        }
        return ResponseModel.getModel("ok", "success", null);
    }

    @Override
    public HashMap<String, Object> insert(Xmpercentage record) {
        try {
            xmpercentageMapper.insert(record);
        }catch (Exception e) {
            e.printStackTrace();
            return ResponseModel.getModel("添加失败", "failed", null);
        }
        return ResponseModel.getModel("ok", "success", null);

    }

    @Override
    public int insertSelective(Xmpercentage record) {
        return xmpercentageMapper.insertSelective(record);
    }

    @Override
    public Xmpercentage selectByPrimaryKey(Integer id) {
        return xmpercentageMapper.selectByPrimaryKey(id);
    }

    @Override
    public HashMap<String, Object> updateByPrimaryKeySelective(Xmpercentage record) {
        try {
          xmpercentageMapper.updateByPrimaryKeySelective(record);
        }catch (Exception e) {
            TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();
            e.printStackTrace();
            return ResponseModel.getModel("提交失败", "failed", null);
        }
        return ResponseModel.getModel("ok", "success", null);
    }
    @Override
    public int updateByPrimaryKey(Xmpercentage record) {
        return xmpercentageMapper.updateByPrimaryKey(record);
    }

    @Override
    public List<Xmpercentage> selectAll(){return xmpercentageMapper.selectAll();}

    @Override
    public List<Xmpercentage> selectByProjectId(Integer projectId){
        return xmpercentageMapper.selectByProjectId(projectId);
    }
}

