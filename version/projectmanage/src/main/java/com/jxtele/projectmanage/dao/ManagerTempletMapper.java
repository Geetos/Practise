package com.jxtele.projectmanage.dao;

import com.jxtele.projectmanage.entity.ManagerTemplet;
import com.jxtele.projectmanage.util.ParameterMap;

import java.util.List;

public interface ManagerTempletMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(ManagerTemplet record);

    int insertSelective(ManagerTemplet record);

    ManagerTemplet selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(ManagerTemplet record);

    int updateByPrimaryKey(ManagerTemplet record);

    List<ManagerTemplet> selectByUserId(Integer UserId);

    void bathSave(List<ParameterMap> parame);
}