package com.jxtele.projectmanage.service;

import com.jxtele.projectmanage.entity.UserTemplet;
import com.jxtele.projectmanage.util.ParameterMap;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpSession;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Component
public interface IUserTempletService {

    Map<String, Object> deleteByPrimaryKey(Integer id);

    Map<String, Object> insert(ParameterMap pm,Integer userid);

    int insertSelective(UserTemplet record);

    UserTemplet selectByPrimaryKey(Integer id);

    HashMap<String, Object> updateByPrimaryKeySelective(UserTemplet record);

    int updateByPrimaryKey(UserTemplet record);

    List<UserTemplet> selectByUserId(Integer UserId);

    HashMap<String, Object> getProjectByUser(ParameterMap pm, Integer userid, HttpSession session);
}
