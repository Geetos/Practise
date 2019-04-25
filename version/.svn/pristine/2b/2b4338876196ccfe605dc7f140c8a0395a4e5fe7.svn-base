package com.jxtele.projectmanage.service;

import com.jxtele.projectmanage.entity.UserControl;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Map;

@Component
public interface IUserControlService {
    Map<String, Object> deleteByPrimaryKey(Integer id);

    Map<String, Object> insert(UserControl record);

    int insertSelective(UserControl record);

    UserControl selectByPrimaryKey(Integer id);

    Map<String, Object>  updateByPrimaryKeySelective(UserControl record);

    int updateByPrimaryKey(UserControl record);

    List<UserControl> findAllUserControl();

    Map<String, Object> findAll();
}
