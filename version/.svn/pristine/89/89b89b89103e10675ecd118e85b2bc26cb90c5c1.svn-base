package com.jxtele.projectmanage.service;


import com.jxtele.projectmanage.entity.FactSchedule;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Component
public interface IFactScheduleService {

    Map<String, Object> deleteByPrimaryKey(Integer id);

    Map<String, Object> insert(FactSchedule record);

    int insertSelective(FactSchedule record);

    FactSchedule selectByPrimaryKey(Integer id);

    HashMap<String, Object> updateByPrimaryKeySelective(FactSchedule record);

    int updateByPrimaryKey(FactSchedule record);

    List<FactSchedule> findFactScheduleleByctScheduleid(Integer ctScheduleid);

    List<FactSchedule> findFactScheduleleByProjid(Integer projid);
}
