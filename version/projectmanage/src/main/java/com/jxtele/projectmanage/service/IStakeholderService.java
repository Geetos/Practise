package com.jxtele.projectmanage.service;

import com.jxtele.projectmanage.entity.Stakeholder;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Component
public interface IStakeholderService {

    Map<String, Object> deleteByPrimaryKey(Integer id);

    Map<String, Object> insert(Stakeholder record);

    int insertSelective(Stakeholder record);

    Stakeholder selectByPrimaryKey(Integer id);

    HashMap<String, Object> updateByPrimaryKeySelective(Stakeholder record);

    int updateByPrimaryKey(Stakeholder record);

    List<Stakeholder> findStandardApplyByProjId(Integer projid);
}