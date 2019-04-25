package com.jxtele.projectmanage.dao;

import com.jxtele.projectmanage.entity.Supplier;

import java.util.List;

public interface SupplierMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(Supplier record);

    int insertSelective(Supplier record);

    Supplier selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Supplier record);

    int updateByPrimaryKey(Supplier record);

    List<Supplier> findSupplierByProcurementId(Integer procurementId);
}