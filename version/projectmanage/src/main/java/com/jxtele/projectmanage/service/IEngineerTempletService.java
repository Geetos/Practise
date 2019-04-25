package com.jxtele.projectmanage.service;

import com.jxtele.projectmanage.entity.EngineerTemplet;
import com.jxtele.projectmanage.util.ParameterMap;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpSession;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Component
public interface IEngineerTempletService {

    Map<String, Object> deleteByPrimaryKey(Integer id);

    Map<String, Object> insert(ParameterMap pm, Integer userid);

    int insertSelective(EngineerTemplet record);

    EngineerTemplet selectByPrimaryKey(Integer id);

    HashMap<String, Object> updateByPrimaryKeySelective(EngineerTemplet record);

    int updateByPrimaryKey(EngineerTemplet record);

    List<EngineerTemplet> selectByUserId(Integer UserId);

    HashMap<String, Object> getProjectByUser(ParameterMap pm, Integer userid, HttpSession session);
}
