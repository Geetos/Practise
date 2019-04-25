package com.jxtele.projectmanage.service.impl;

import com.jxtele.projectmanage.dao.WeekreportMapper;
import com.jxtele.projectmanage.entity.AttachmentFile;
import com.jxtele.projectmanage.entity.ResponseModel;
import com.jxtele.projectmanage.entity.Weekreport;
import com.jxtele.projectmanage.service.IWeekreportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.interceptor.TransactionAspectSupport;
import org.springframework.web.multipart.MultipartFile;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class WeekreportServiceImpl implements IWeekreportService {
    @Autowired
    private WeekreportMapper weekreportMapper;
    @Autowired
    private AttachmentFileService attachmentFileService;
    @Override
    public int deleteByPrimaryKey(Integer id) {
        return weekreportMapper.deleteByPrimaryKey(id);
    }

    @Override
    public Map<String, Object> insert(Weekreport record) {
        try {
            weekreportMapper.insert(record);
        } catch (Exception e) {
            TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();
            e.printStackTrace();
            return ResponseModel.getModel("error", "falied", null);
        }
        return ResponseModel.getModel("ok", "success", null);
    }

    @Override
    public int insertSelective(Weekreport record) {
        return weekreportMapper.insert(record);
    }

    @Override
    public Weekreport selectByPrimaryKey(Integer id) {
        return weekreportMapper.selectByPrimaryKey(id);
    }

    @Override
    public Map<String, Object> updateByPrimaryKeySelective(Weekreport record) {
        try {
            weekreportMapper.updateByPrimaryKeySelective(record);
        } catch (Exception e) {
            TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();
            e.printStackTrace();
            return ResponseModel.getModel("error", "falied", null);
        }
        return ResponseModel.getModel("ok", "success", null);
    }
    public HashMap<String, Object> updateByPrimaryKeySelective(Weekreport record, MultipartFile file, String locatFolder){
        try {
            weekreportMapper.updateByPrimaryKeySelective(record);
            if(file!= null) {
                AttachmentFile attachmentFile = new AttachmentFile();
                attachmentFile.setRefId(record.getId());
                attachmentFile.setAttachmentModule(Weekreport.module);
                attachmentFileService.insert(file, attachmentFile,locatFolder);
            }
        } catch (Exception e) {
            TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();
            e.printStackTrace();
            return ResponseModel.getModel("error", "falied", null);
        }
        return ResponseModel.getModel("ok", "success", null);
    }

    @Override
    public int updateByPrimaryKey(Weekreport record) {
        return weekreportMapper.updateByPrimaryKey(record);
    }

    @Override
    public List<Weekreport> selectByPojectKey(Integer projectId) {
        return weekreportMapper.selectByPojectKey(projectId);
    }

    @Override
    public List<Weekreport> selectmyWeekreport(Integer projectId, Integer userId) {
        return weekreportMapper.selectmyWeekreport(projectId,userId);
    }
    @Override
    public Map<String, Object> insert(Weekreport record, MultipartFile file , String locatFolder) {
        try {
            Integer id = weekreportMapper.insertSelective(record);
            if (file != null) {
                AttachmentFile attachmentFile = new AttachmentFile();
                attachmentFile.setRefId(record.getId());
                attachmentFile.setAttachmentModule(Weekreport.module);
                attachmentFileService.insert(file, attachmentFile, locatFolder);
            }
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseModel.getModel("error", "falied", null);
        }
        return ResponseModel.getModel("ok", "success", null);
    }

}
