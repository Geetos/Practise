package com.jxtele.projectmanage.service;

import com.jxtele.projectmanage.entity.ManagerTemplet;
import com.jxtele.projectmanage.util.ParameterMap;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpSession;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Component
public interface IManagerTempletService {

    Map<String, Object> deleteByPrimaryKey(Integer id);

    Map<String, Object> insert(ParameterMap pm, Integer userid);

    int insertSelective(ManagerTemplet record);

    ManagerTemplet selectByPrimaryKey(Integer id);

    HashMap<String, Object> updateByPrimaryKeySelective(ManagerTemplet record);

    int updateByPrimaryKey(ManagerTemplet record);

    List<ManagerTemplet> selectByUserId(Integer UserId);

    HashMap<String, Object> getProjectByUser(ParameterMap pm, Integer userid, HttpSession session);
}
