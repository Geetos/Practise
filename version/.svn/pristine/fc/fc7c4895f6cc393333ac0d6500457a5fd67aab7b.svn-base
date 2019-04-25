package com.jxtele.projectmanage.service;

import com.jxtele.projectmanage.entity.Communication;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Component
public interface ICommunicationService {

    Map<String, Object> deleteByPrimaryKey(Integer id);

    Map<String, Object> insert(Communication record,MultipartFile file,String locatFolder);

    int insertSelective(Communication record);

    Communication selectByPrimaryKey(Integer id);

    HashMap<String, Object> updateByPrimaryKeySelective(Communication record, MultipartFile file, String locatFolder);

    int updateByPrimaryKey(Communication record);

    List<Communication> findCommunicationByProjId(Integer projid);
}
