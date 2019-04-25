package com.jxtele.projectmanage.dao;

import com.jxtele.projectmanage.entity.Integral;

import java.util.List;

public interface IntegralMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(Integral record);

    int insertSelective(Integral record);

    Integral selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Integral record);

    int updateByPrimaryKey(Integral record);

    List<Integral> findIntegralByProjId(Integer projid);
}