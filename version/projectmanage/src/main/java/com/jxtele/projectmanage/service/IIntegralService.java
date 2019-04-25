package com.jxtele.projectmanage.service;

import com.jxtele.projectmanage.entity.Integral;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Component
public interface IIntegralService {
    Map<String, Object> deleteByPrimaryKey(Integer id);

    Map<String, Object> insert(Integral record);

    int insertSelective(Integral record);

    Integral selectByPrimaryKey(Integer id);

    HashMap<String, Object> updateByPrimaryKeySelective(Integral record);

    int updateByPrimaryKey(Integral record);

    List<Integral> findIntegralByProjId(Integer projid);
}
