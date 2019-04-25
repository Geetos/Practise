package com.jxtele.projectmanage.dao;

import com.jxtele.projectmanage.entity.Procurement;

import java.util.List;

public interface ProcurementMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(Procurement record);

    int insertSelective(Procurement record);

    Procurement selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Procurement record);

    int updateByPrimaryKey(Procurement record);

    List<Procurement> findProcurementByProjId(Integer projid);
}