package com.jxtele.projectmanage.dao;

import com.jxtele.projectmanage.entity.Xmpercentage;

import java.util.List;

public interface XmpercentageMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(Xmpercentage record);

    int insertSelective(Xmpercentage record);

    Xmpercentage selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Xmpercentage record);

    int updateByPrimaryKey(Xmpercentage record);

    //根据项目id显示某项目的提成分配信息
    List<Xmpercentage> selectByProjectId(Integer projectId);

    List<Xmpercentage> selectAll();
}