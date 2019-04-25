package com.jxtele.projectmanage.service;

import com.jxtele.projectmanage.entity.Weekreport;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Component
public interface IWeekreportService {

    int deleteByPrimaryKey(Integer id);

    Map<String, Object> insert(Weekreport record);

    int insertSelective(Weekreport record);

    Weekreport selectByPrimaryKey(Integer id);

    Map<String, Object> updateByPrimaryKeySelective(Weekreport record);

    int updateByPrimaryKey(Weekreport record);

    List<Weekreport> selectByPojectKey(Integer projectId);

    List<Weekreport> selectmyWeekreport(Integer projectId, Integer userId);

    HashMap<String, Object> updateByPrimaryKeySelective(Weekreport record, MultipartFile file, String locatFolder);

    Map<String, Object> insert(Weekreport record, MultipartFile file, String locatFolder);
}
