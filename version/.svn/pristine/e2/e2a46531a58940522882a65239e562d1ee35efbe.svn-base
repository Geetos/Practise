package com.jxtele.projectmanage.service;


import com.jxtele.projectmanage.entity.ProjectSchedule;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Component
public interface IProjectScheduleService {

    Map<String, Object> deleteByPrimaryKey(Integer id);

    Map<String, Object> insert(ProjectSchedule record);

    int insertSelective(ProjectSchedule record);

    ProjectSchedule selectByPrimaryKey(Integer id);

    HashMap<String, Object> updateByPrimaryKeySelective(ProjectSchedule record);

    int updateByPrimaryKey(ProjectSchedule record);

    List<ProjectSchedule> findProjectScheduleByProjId(Integer projid);
}
