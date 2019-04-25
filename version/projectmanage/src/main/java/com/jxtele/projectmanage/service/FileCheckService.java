package com.jxtele.projectmanage.service;

import com.jxtele.projectmanage.entity.FileCheck;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Map;

@Component
public interface FileCheckService {
    Map<String, Object> deleteByPrimaryKey(Integer id);

    Map<String, Object> insert(FileCheck record);

    int insertSelective(FileCheck record);

    FileCheck selectByPrimaryKey(Integer id);

    Map<String, Object> updateByPrimaryKeySelective(FileCheck record);

    int updateByPrimaryKey(FileCheck record);

    List<FileCheck> selectByProjectId(Integer projectId);

    FileCheck selectlastByProjectId(Integer projectId);
}
