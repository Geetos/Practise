package com.jxtele.projectmanage.service.impl;

import com.jxtele.projectmanage.dao.XmpercentageItemMapper;
import com.jxtele.projectmanage.entity.AttachmentFile;
import com.jxtele.projectmanage.entity.ResponseModel;
import com.jxtele.projectmanage.entity.XmpercentageItem;
import com.jxtele.projectmanage.service.IAttachmentFileService;
import com.jxtele.projectmanage.service.XmpercentageItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.interceptor.TransactionAspectSupport;
import org.springframework.web.multipart.MultipartFile;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class XmpercentageItemServiceImpl implements XmpercentageItemService {
    @Autowired
    private XmpercentageItemMapper xmpercentageItemMapper;
    @Autowired
    private IAttachmentFileService attachmentFileService;
    @Override
    public HashMap<String, Object> deleteByPrimaryKey(Integer id) {
        try {
            xmpercentageItemMapper.deleteByPrimaryKey(id);
        }catch (Exception e) {
            TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();
            e.printStackTrace();
            return ResponseModel.getModel("删除失败", "failed", null);
        }
        return ResponseModel.getModel("ok", "success", null);
    }

    @Override
    public HashMap<String, Object> insert(XmpercentageItem record) {
        try {
            xmpercentageItemMapper.insert(record);
        }catch (Exception e) {
            e.printStackTrace();
            return ResponseModel.getModel("提交失败", "failed", null);
        }
        return ResponseModel.getModel("ok", "success", null);
    }

    @Override
    public int insertSelective(XmpercentageItem record) {
        return xmpercentageItemMapper.insertSelective(record);
    }

    @Override
    public XmpercentageItem selectByPrimaryKey(Integer id) {
        return xmpercentageItemMapper.selectByPrimaryKey(id);
    }

    @Override
    public List<XmpercentageItem> selectByPercentId(Integer percentageId){
        return xmpercentageItemMapper.selectByPercentId(percentageId);
    }

    @Override
    public HashMap<String, Object> updateByPrimaryKeySelective(XmpercentageItem record,MultipartFile file,String locatFolder){
        try {
           xmpercentageItemMapper.updateByPrimaryKeySelective(record);
            if(file!= null) {
                AttachmentFile attachmentFile = new AttachmentFile();
                attachmentFile.setRefId(record.getId());
                attachmentFile.setAttachmentModule(XmpercentageItem.module);
                attachmentFileService.insert(file, attachmentFile,locatFolder);
            }
        }catch (Exception e) {
            TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();
            e.printStackTrace();
            return ResponseModel.getModel("提交失败", "failed", null);
        }
            return ResponseModel.getModel("ok", "success", null);
    }

    @Override
    public int updateByPrimaryKey(XmpercentageItem record){
            return xmpercentageItemMapper.updateByPrimaryKey(record);
    }

    @Override
    public HashMap<String, Object> deleteByPercentageKey(Integer percentageId){
        try {
            xmpercentageItemMapper.deleteByPercentageKey(percentageId);
        }catch (Exception e) {
            TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();
            e.printStackTrace();
            return ResponseModel.getModel("删除失败", "failed", null);
        }
        return ResponseModel.getModel("ok", "success", null);
    }

    @Override
    public Map<String, Object> insert(XmpercentageItem record, MultipartFile file , String locatFolder) {
        try {
            Integer id = xmpercentageItemMapper.insertSelective(record);
            if(file!= null) {
                AttachmentFile attachmentFile = new AttachmentFile();
                attachmentFile.setRefId(record.getId());
                attachmentFile.setAttachmentModule(XmpercentageItem.module);
                attachmentFileService.insert(file, attachmentFile,locatFolder);
            }
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseModel.getModel("error", "falied", null);
        }
        return ResponseModel.getModel("ok", "success", null);
    }

}
