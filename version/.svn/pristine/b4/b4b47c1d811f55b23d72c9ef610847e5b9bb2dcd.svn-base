package com.jxtele.projectmanage.dao;

import com.jxtele.projectmanage.entity.Project;
import com.jxtele.projectmanage.util.ParameterMap;

import java.util.List;

public interface ProjectMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(ParameterMap pm);

    int insertSelective(Project record);

    Project selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(ParameterMap pm);

    int updateByPrimaryKey(Project record);

    List<Project> findProjectByUserid(Integer userId);

    List<Project> findAllProject();
    /*<!--根据用户id查询用户相关项目，且不在关注模板中-->*/
    List<Project> findProjectByTeamBuild(Integer userId);
   /* <!--根据用户id查询岗位为项目经理的项目，且项目不在项目经理模板中-->*/
    List<Project> findProjectByManagerTeamBuild(Integer userId);
    /*<!--根据用户id查询岗位为项目工程师的项目且项目不在支撑模板中-->*/
    List<Project> findProjectByEngineerTeamBuild(Integer userId);
    /*<!--查询用户项目关注模板之外的所有项目-->*/
    List<Project> findAllUserProject(Integer userId);
    /*<!--查询用户项目项目经理模板之外的所有项目-->*/
    List<Project> findAllManagerProject(Integer userId);
    /*<!--查询用户项目工程师模板之外的所有项目-->*/
    List<Project> findAllEngineerProject(Integer userId);
    /*查询用户所有相关项目*/
    List<Project> findProjectByUserAndTeam(Integer userId);
  /* 查询所有在建项目*/
    List<Project> findAllProjectByJC();



}