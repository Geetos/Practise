package com.jxtele.projectmanage.dao;

import com.jxtele.projectmanage.entity.RiskRecord;

import java.util.List;

public interface RiskRecordMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(RiskRecord record);

    int insertSelective(RiskRecord record);

    RiskRecord selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(RiskRecord record);

    int updateByPrimaryKey(RiskRecord record);

    List<RiskRecord> findRiskByRiskId(Integer riskid);

    int deleteByRiskId(Integer riskid);

}