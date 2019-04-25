package com.jxtele.projectmanage.service;

import com.jxtele.projectmanage.entity.StandardApply;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Component
public interface IStandardApplyService {

    Map<String, Object> deleteByPrimaryKey(Integer id);

    Map<String, Object> insert(StandardApply record);

    int insertSelective(StandardApply record);

    StandardApply selectByPrimaryKey(Integer id);

    HashMap<String, Object> updateByPrimaryKeySelective(StandardApply record);

    int updateByPrimaryKey(StandardApply record);

    List<StandardApply> findStandardApplyByProjId(Integer projid);

    List<StandardApply> findStandardDayId(Integer dayid);
}
