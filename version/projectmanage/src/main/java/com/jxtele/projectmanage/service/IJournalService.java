package com.jxtele.projectmanage.service;

import com.jxtele.projectmanage.entity.Journal;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Component
public interface IJournalService {

    int deleteByPrimaryKey(Integer id);

    Map<String, Object> insert(Journal record);

    int insertSelective(Journal record);

    Journal selectByPrimaryKey(Integer id);

    Map<String, Object> updateByPrimaryKeySelective(Journal record);

    int updateByPrimaryKey(Journal record);

    List<Journal> selectByPojectKey(Integer projectId);

    List<Journal> selectmyJournal(Integer projectId,Integer userId);

    HashMap<String, Object> updateByPrimaryKeySelective(Journal record, MultipartFile file, String locatFolder);

    Map<String, Object> insert(Journal record, MultipartFile file , String locatFolder);
}
