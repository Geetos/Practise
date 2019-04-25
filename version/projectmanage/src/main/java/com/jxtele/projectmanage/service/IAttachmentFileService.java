package com.jxtele.projectmanage.service;

import com.jxtele.projectmanage.entity.AttachmentFile;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Component
public interface IAttachmentFileService {

        Map<String, Object> deleteByPrimaryKey(Integer id);

        Map<String, Object> insert(MultipartFile file, AttachmentFile record, String locatFolder);

        int insertSelective(AttachmentFile record);

        AttachmentFile selectByPrimaryKey(Integer id);

        HashMap<String, Object> updateByPrimaryKeySelective(AttachmentFile record);

        int updateByPrimaryKey(AttachmentFile record);

        List<AttachmentFile> findAttachmentFileByRefId(Integer refId,String attachmentModule);

        int deleteByrefid(Integer refid);
}
