package com.jxtele.projectmanage.service;

import com.jxtele.projectmanage.entity.RiskRecord;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Component
public interface IRiskRecordService {

    Map<String, Object> deleteByPrimaryKey(Integer id);

    Map<String, Object> insert(RiskRecord record);

    int insertSelective(RiskRecord record);

    RiskRecord selectByPrimaryKey(Integer id);

    HashMap<String, Object> updateByPrimaryKeySelective(RiskRecord record);

    int updateByPrimaryKey(RiskRecord record);

    List<RiskRecord> findRiskByRiskId(Integer riskid);

    int deleteByRiskId(Integer riskid);
}
