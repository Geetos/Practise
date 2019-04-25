package com.jxtele.projectmanage.dao;

import com.jxtele.projectmanage.entity.FileCheck;

import java.util.List;

public interface FileCheckMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(FileCheck record);

    int insertSelective(FileCheck record);

    FileCheck selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(FileCheck record);

    int updateByPrimaryKey(FileCheck record);

    List<FileCheck> selectByProjectId(Integer projectId);

    FileCheck selectlastByProjectId(Integer projectId);
}