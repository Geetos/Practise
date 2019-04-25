package com.jxtele.projectmanage.dao;

import com.jxtele.projectmanage.entity.TeamBuild;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface TeamBuildMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(TeamBuild record);

    int insertSelective(TeamBuild record);

    TeamBuild selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(TeamBuild record);

    int updateByPrimaryKey(TeamBuild record);

    List<TeamBuild> findByProjId(Integer projid);

    public List<TeamBuild> findByProjIdandUserId(@Param("project_id")Integer project_id, @Param("sys_userid")Integer sys_userid);
}