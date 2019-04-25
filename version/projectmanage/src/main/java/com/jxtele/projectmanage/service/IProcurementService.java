package com.jxtele.projectmanage.service;

import com.jxtele.projectmanage.entity.Procurement;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Component
public interface IProcurementService {

    Map<String, Object> deleteByPrimaryKey(Integer id);

    Map<String, Object> insert(Procurement record);

    int insertSelective(Procurement record);

    Procurement selectByPrimaryKey(Integer id);

    HashMap<String, Object> updateByPrimaryKeySelective(Procurement record);

    int updateByPrimaryKey(Procurement record);

    List<Procurement> findProcurementByProjId(Integer projid);
}
