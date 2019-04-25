package com.jxtele.projectmanage.service;

import com.jxtele.projectmanage.entity.Supplier;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Component
public interface ISupplierService {
    Map<String, Object> deleteByPrimaryKey(Integer id);

    Map<String, Object> insert(Supplier record);

    int insertSelective(Supplier record);

    Supplier selectByPrimaryKey(Integer id);

    HashMap<String, Object> updateByPrimaryKeySelective(Supplier record);

    int updateByPrimaryKey(Supplier record);

    List<Supplier> findSupplierByProcurementId(Integer procurementId);
}
