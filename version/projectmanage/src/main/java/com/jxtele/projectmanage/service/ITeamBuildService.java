package com.jxtele.projectmanage.service;


import com.jxtele.projectmanage.entity.Project;
import com.jxtele.projectmanage.entity.TeamBuild;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Component
public interface ITeamBuildService {

    Map<String, Object> deleteByPrimaryKey(Integer id);

    Map<String, Object> insert(TeamBuild record);

    int insertSelective(TeamBuild record);

    TeamBuild selectByPrimaryKey(Integer id);

    HashMap<String, Object> updateByPrimaryKeySelective(TeamBuild record);

    int updateByPrimaryKey(TeamBuild record);

    List<TeamBuild> findByProjId(Integer projid);

    public HashMap<String, Object> getUserList();

    public List<Project> getProjectList(Integer userid);

    public List<TeamBuild> findByProjIdandUserId(Integer projid,Integer userid);
}
