package com.jxtele.projectmanage.service.impl;

import com.jxtele.projectmanage.dao.UserControlMapper;
import com.jxtele.projectmanage.entity.ResponseModel;
import com.jxtele.projectmanage.entity.UserControl;
import com.jxtele.projectmanage.service.IUserControlService;
import com.jxtele.projectmanage.util.Tools;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.interceptor.TransactionAspectSupport;

import java.util.List;
import java.util.Map;
@Service
public class UserControlService implements IUserControlService {

    @Autowired
    private UserControlMapper userControlMapper;

    @Override
    public Map<String, Object> deleteByPrimaryKey(Integer id) {

        try {
            if(id == null){
                return ResponseModel.getModel("你请求的是一个冒牌接口", "failed", null);
            }
            userControlMapper.deleteByPrimaryKey(id);
        } catch (Exception e) {
            TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();
            e.printStackTrace();
            return ResponseModel.getModel("error", "falied", null);
        }
        return ResponseModel.getModel("ok", "success", null);
    }

    @Override
    public Map<String, Object> insert(UserControl record) {
        try {
            userControlMapper.insert(record);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseModel.getModel("error", "falied", null);
        }
        return ResponseModel.getModel("ok", "success", null);
    }

    @Override
    public int insertSelective(UserControl record) {
        return 0;
    }

    @Override
    public UserControl selectByPrimaryKey(Integer id) {
        return userControlMapper.selectByPrimaryKey(id);
    }

    @Override
    public Map<String, Object> updateByPrimaryKeySelective(UserControl record) {
        try {
            userControlMapper.updateByPrimaryKeySelective(record);
        } catch (Exception e) {
            TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();
            e.printStackTrace();

            return ResponseModel.getModel("提交失败", "failed", null);
        }
        return ResponseModel.getModel("ok", "success", null);
    }

    @Override
    public int updateByPrimaryKey(UserControl record) {
        return 0;
    }

    @Override
    public List<UserControl> findAllUserControl() {
        return userControlMapper.findAllUserControl();
    }

    @Override
    public Map<String, Object> findAll() {
        return ResponseModel.getModel("ok", "success", userControlMapper.findAllUserControl());
    }
}
