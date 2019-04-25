package com.jxtele.projectmanage.dao;

import com.jxtele.projectmanage.entity.AttachmentFile;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface AttachmentFileMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(AttachmentFile record);

    int insertSelective(AttachmentFile record);

    AttachmentFile selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(AttachmentFile record);

    int updateByPrimaryKey(AttachmentFile record);

    List<AttachmentFile> findAttachmentFileByRefIdrecord(Integer refId);

    List<AttachmentFile> findAttachmentFileByRefIdcommun(Integer refId);

    List<AttachmentFile> findAttachmentFileByRefId(@Param("ref_id")Integer ref_id, @Param("attachment_module")String attachment_module);

    int deleteByrefid(Integer refid);


}