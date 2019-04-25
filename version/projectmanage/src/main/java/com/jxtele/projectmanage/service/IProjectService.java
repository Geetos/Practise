package com.jxtele.projectmanage.service;

import com.jxtele.projectmanage.entity.Project;
import com.jxtele.projectmanage.util.ParameterMap;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpSession;
import java.util.List;
import java.util.Map;

@Component
public interface IProjectService {
    Map<String, Object> deleteProjectById(Integer id);

    Map<String, Object> insert(ParameterMap pm, HttpSession session);

    Project selectProjectById(Integer id);

    Map<String, Object> updateProjectByIdSelective(ParameterMap pm);

    List<Project> findProjectByUserid(Integer userid);

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
