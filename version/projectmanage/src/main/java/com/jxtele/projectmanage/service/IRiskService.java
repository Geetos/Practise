package com.jxtele.projectmanage.service;

import com.jxtele.projectmanage.entity.Risk;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Component
public interface IRiskService {

    Map<String, Object> deleteByPrimaryKey(Integer id);

    Map<String, Object> insert(Risk record);

    int insertSelective(Risk record);

    Risk selectByPrimaryKey(Integer id);

    HashMap<String, Object> updateByPrimaryKeySelective(Risk record,Integer loginuserid);

    int updateByPrimaryKey(Risk record);

    List<Risk> findRiskByProjId(Integer projid);

}
