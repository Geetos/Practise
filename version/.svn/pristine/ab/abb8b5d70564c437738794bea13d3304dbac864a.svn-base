package com.jxtele.projectmanage.service;

import com.jxtele.projectmanage.entity.StandardDay;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Component
public interface IStandardDayService {

    Map<String, Object> deleteByPrimaryKey(Integer id);

    Map<String, Object> insert(StandardDay record);

    int insertSelective(StandardDay record);

    StandardDay selectByPrimaryKey(Integer id);

    HashMap<String, Object> updateByPrimaryKeySelective(StandardDay record);

    int updateByPrimaryKey(StandardDay record);

    List<StandardDay> findStandardDayByProjId(Integer projid);

    //显示所有项目工日
    List<StandardDay> findAllStandardDay();

    List<StandardDay> findStandardDayByProjIdAndType(Integer projectId, String stardtype);
}
