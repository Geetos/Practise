package com.jxtele.projectmanage.service.impl;

import com.jxtele.projectmanage.dao.AttachmentFileMapper;
import com.jxtele.projectmanage.entity.AttachmentFile;
import com.jxtele.projectmanage.entity.ResponseModel;
import com.jxtele.projectmanage.service.IAttachmentFileService;
import com.jxtele.projectmanage.util.FileUploadUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.interceptor.TransactionAspectSupport;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
@Service
public class AttachmentFileService implements IAttachmentFileService {

    @Autowired
    private AttachmentFileMapper attachmentFileMapper;

    @Override
    public Map<String, Object> deleteByPrimaryKey(Integer id) {
        try {
            if(id == null){
                return ResponseModel.getModel("你请求的是一个冒牌接口", "failed", null);
            }
            File file = new File(attachmentFileMapper.selectByPrimaryKey(id).getAttachmentPath());
            if(file.isFile()){
                file.delete();
            }
            attachmentFileMapper.deleteByPrimaryKey(id);
        } catch (Exception e) {
            TransactionAspectSupport.currentTransactionStatus().setRollbackOnly();
            e.printStackTrace();
            return ResponseModel.getModel("error", "falied", null);
        }
        return ResponseModel.getModel("ok", "success", null);
    }

    @Override
    public Map<String, Object> insert(MultipartFile file,AttachmentFile record,String locatFolder) {

        String fileName = file.getOriginalFilename();
        try {
            String path = FileUploadUtil.fileUpload(file,locatFolder);
            record.setAttachmentPath(path);
            record.setAttachmentName(fileName);
            record.setAttachmentTime(new Date());
            attachmentFileMapper.insert(record);
        } catch (IOException e) {
            e.printStackTrace();
            return ResponseModel.getModel("error", "falied", null);
        }
        return ResponseModel.getModel("ok", "success", null);
      /*  try {
            attachmentFileMapper.insert(record);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseModel.getModel("error", "falied", null);
        }
        return ResponseModel.getModel("ok", "success", null);*/
    }

    @Override
    public int insertSelective(AttachmentFile record) {
        return 0;
    }

    @Override
    public AttachmentFile selectByPrimaryKey(Integer id) {
        return attachmentFileMapper.selectByPrimaryKey(id);
    }

    @Override
    public HashMap<String, Object> updateByPrimaryKeySelective(AttachmentFile record) {
        return null;
    }

    @Override
    public int updateByPrimaryKey(AttachmentFile record) {
        return 0;
    }

    @Override
    public List<AttachmentFile> findAttachmentFileByRefId(Integer refId, String attachmentModule) {
        return attachmentFileMapper.findAttachmentFileByRefId(refId,attachmentModule);
    }

    @Override
    public int deleteByrefid(Integer refid) {
        return attachmentFileMapper.deleteByrefid(refid);
    }


}
