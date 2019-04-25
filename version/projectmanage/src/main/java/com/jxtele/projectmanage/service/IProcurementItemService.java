package com.jxtele.projectmanage.service;

import com.jxtele.projectmanage.entity.ProcurementItem;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Component
public interface IProcurementItemService {
    Map<String, Object> deleteByPrimaryKey(Integer id);

    Map<String, Object> insert(ProcurementItem record);

    int insertSelective(ProcurementItem record);

    ProcurementItem selectByPrimaryKey(Integer id);

    HashMap<String, Object> updateByPrimaryKeySelective(ProcurementItem record);

    int updateByPrimaryKey(ProcurementItem record);

    List<ProcurementItem> findProcurementItemByProcurementId(Integer procurementId);

    int deleteByProcurementId(Integer procurementId);
}
