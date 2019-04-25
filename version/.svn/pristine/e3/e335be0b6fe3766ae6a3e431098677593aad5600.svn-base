package com.jxtele.projectmanage.dao;

import com.jxtele.projectmanage.entity.Communication;

import java.util.List;

public interface CommunicationMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(Communication record);

    int insertSelective(Communication record);

    Communication selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Communication record);

    int updateByPrimaryKey(Communication record);

    List<Communication> findCommunicationByProjId(Integer projid);
}