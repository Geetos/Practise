package com.jxtele.projectmanage.dao;

import com.jxtele.projectmanage.entity.Weekreport;

import java.util.List;

public interface WeekreportMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(Weekreport record);

    int insertSelective(Weekreport record);

    Weekreport selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Weekreport record);

    int updateByPrimaryKey(Weekreport record);

    List<Weekreport> selectmyWeekreport(Integer projectId, Integer userId);

    List<Weekreport> selectByPojectKey(Integer projectId);
}