package com.jxtele.projectmanage.service.impl;

import com.jxtele.projectmanage.dao.JournalMapper;
import com.jxtele.projectmanage.entity.AttachmentFile;
import com.jxtele.projectmanage.entity.Journal;
import com.jxtele.projectmanage.entity.ResponseModel;
import com.jxtele.projectmanage.service.IJournalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.interceptor.TransactionAspectSupport;
import org.springframework.web.multipart.MultipartFile;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class JournalServiceImpl implements IJournalService {
    @Autowired
    private JournalMapper journalMapper;
    @Autowired
    private AttachmentFileService attachmentFileService;
    @Override
    public int deleteByPrimaryKey(Integer id) {
        return journalMapper.deleteByPrimaryKey(id);
    }

    @Override
    public Map<String, Object> insert(Journal record) {
        try {
            journalMapper.insert(record);
        } catch (Exception e) {
            TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();
            e.printStackTrace();
            return ResponseModel.getModel("error", "falied", null);
        }
        return ResponseModel.getModel("ok", "success", null);
    }

    @Override
    public int insertSelective(Journal record) {
        return journalMapper.insert(record);
    }

    @Override
    public Journal selectByPrimaryKey(Integer id) {
        return journalMapper.selectByPrimaryKey(id);
    }

    @Override
    public Map<String, Object> updateByPrimaryKeySelective(Journal record) {
        try {
            journalMapper.updateByPrimaryKeySelective(record);
        } catch (Exception e) {
            TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();
            e.printStackTrace();
            return ResponseModel.getModel("error", "falied", null);
        }
        return ResponseModel.getModel("ok", "success", null);
    }
    public HashMap<String, Object> updateByPrimaryKeySelective(Journal record, MultipartFile file, String locatFolder){
        try {
            journalMapper.updateByPrimaryKeySelective(record);
            if(file!= null) {
                AttachmentFile attachmentFile = new AttachmentFile();
                attachmentFile.setRefId(record.getId());
                attachmentFile.setAttachmentModule(Journal.module);
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
    public int updateByPrimaryKey(Journal record) {
        return journalMapper.updateByPrimaryKey(record);
    }

    @Override
    public List<Journal> selectByPojectKey(Integer projectId) {
        return journalMapper.selectByPojectKey(projectId);
    }

    @Override
    public List<Journal> selectmyJournal(Integer projectId, Integer userId) {
        return journalMapper.selectmyJournal(projectId,userId);
    }
    @Override
    public Map<String, Object> insert(Journal record, MultipartFile file , String locatFolder) {
        try {
            Integer id = journalMapper.insertSelective(record);
            if (file != null) {
                AttachmentFile attachmentFile = new AttachmentFile();
                attachmentFile.setRefId(record.getId());
                attachmentFile.setAttachmentModule(Journal.module);
                attachmentFileService.insert(file, attachmentFile, locatFolder);
            }
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseModel.getModel("error", "falied", null);
        }
        return ResponseModel.getModel("ok", "success", null);
    }

}
