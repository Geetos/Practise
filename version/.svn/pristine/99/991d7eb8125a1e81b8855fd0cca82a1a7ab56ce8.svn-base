package com.jxtele.projectmanage.dao;

import com.jxtele.projectmanage.entity.Journal;

import java.util.List;

public interface JournalMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(Journal record);

    int insertSelective(Journal record);

    Journal selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Journal record);

    int updateByPrimaryKey(Journal record);

    List<Journal> selectByPojectKey(Integer projectId);

    List<Journal> selectmyJournal(Integer projectId, Integer userId);
}