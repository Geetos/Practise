package com.jxtele.projectmanage.dao;

import com.jxtele.projectmanage.entity.StandardDay;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface StandardDayMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(StandardDay record);

    int insertSelective(StandardDay record);

    StandardDay selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(StandardDay record);

    int updateByPrimaryKey(StandardDay record);

    List<StandardDay> findStandardDayByProjId(Integer projid);

    StandardDay selectStandardDayByid(Integer id);
    //显示所有项目工日
    List<StandardDay> findAllStandardDay();
    //按类型查询某个项目的工日
    List<StandardDay> findStandardDayByProjIdAndType(@Param("project_id")Integer project_id, @Param("stardtype")String stardtype);
}
