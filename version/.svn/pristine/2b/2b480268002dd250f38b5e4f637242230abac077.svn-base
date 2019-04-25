package com.jxtele.projectmanage.service.impl;

import com.jxtele.projectmanage.dao.EvaluationMapper;
import com.jxtele.projectmanage.entity.Evaluation;
import com.jxtele.projectmanage.entity.ResponseModel;
import com.jxtele.projectmanage.service.EvaluationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class EvaluationServiceImpl implements EvaluationService {
    @Autowired
    private EvaluationMapper evaluationMapper;
    @Override
    public Map<String, Object> deleteByPrimaryKey(Integer id) {
        try {
            evaluationMapper.deleteByPrimaryKey(id);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseModel.getModel("error", "falied", null);
        }
        return ResponseModel.getModel("ok", "success", null);
    }

    @Override
    public Map<String, Object> insert(Evaluation record) {
        try {
            evaluationMapper.insert(record);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseModel.getModel("error", "falied", null);
        }
        return ResponseModel.getModel("ok", "success", null);
    }

    @Override
    public int insertSelective(Evaluation record) {
        return evaluationMapper.insertSelective(record);
    }

    @Override
    public Evaluation selectByPrimaryKey(Integer id) {
        return evaluationMapper.selectByPrimaryKey(id);
    }

    @Override
    public Map<String, Object> updateByPrimaryKeySelective(Evaluation record) {
        try {
            evaluationMapper.updateByPrimaryKeySelective(record);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseModel.getModel("error", "falied", null);
        }
        return ResponseModel.getModel("ok", "success", null);
    }

    @Override
    public List<Evaluation> selectByProjectKey(Integer projectId) {
        return evaluationMapper.selectByProjectKey(projectId);
    }

    @Override
    public int updateByPrimaryKey(Evaluation record) {
        return evaluationMapper.updateByPrimaryKey(record);
    }
}
