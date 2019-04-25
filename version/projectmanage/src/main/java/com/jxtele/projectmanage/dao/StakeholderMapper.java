package com.jxtele.projectmanage.dao;

import com.jxtele.projectmanage.entity.Stakeholder;

import java.util.List;

public interface StakeholderMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(Stakeholder record);

    int insertSelective(Stakeholder record);

    Stakeholder selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Stakeholder record);

    int updateByPrimaryKey(Stakeholder record);

    List<Stakeholder> findStakeholderByProjId(Integer projid);
}
