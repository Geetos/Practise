package com.jxtele.projectmanage.dao;

import com.jxtele.projectmanage.entity.ProcurementItem;

import java.util.List;

public interface ProcurementItemMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(ProcurementItem record);

    int insertSelective(ProcurementItem record);

    ProcurementItem selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(ProcurementItem record);

    int updateByPrimaryKey(ProcurementItem record);

    List<ProcurementItem> findProcurementItemByProcurementId(Integer procurementId);

    int deleteByProcurementId(Integer procurementId);
}