package com.jxtele.projectmanage.service;

import com.jxtele.projectmanage.entity.Evaluation;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Map;

@Component
public interface EvaluationService {
    Map<String, Object> deleteByPrimaryKey(Integer id);

    Map<String, Object> insert(Evaluation record);

    int insertSelective(Evaluation record);

    Evaluation selectByPrimaryKey(Integer id);

    Map<String, Object> updateByPrimaryKeySelective(Evaluation record);

    int updateByPrimaryKey(Evaluation record);

    List<Evaluation> selectByProjectKey(Integer projectId);
}
