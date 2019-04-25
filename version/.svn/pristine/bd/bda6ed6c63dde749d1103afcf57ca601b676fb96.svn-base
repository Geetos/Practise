package com.jxtele.projectmanage.service;

import com.jxtele.projectmanage.entity.CommunicationRecord;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Component
public interface ICommunicationRecordService {

    Map<String, Object> deleteByPrimaryKey(Integer id);

    Map<String, Object> insert(CommunicationRecord record, MultipartFile file , String locatFolder);

    int insertSelective(CommunicationRecord record);

    CommunicationRecord selectByPrimaryKey(Integer id);

    HashMap<String, Object> updateByPrimaryKeySelective(CommunicationRecord record,MultipartFile file,String locatFolder);

    int updateByPrimaryKey(CommunicationRecord record);

    List<CommunicationRecord> findCommunicationRecordByProjId(Integer projid);

}
