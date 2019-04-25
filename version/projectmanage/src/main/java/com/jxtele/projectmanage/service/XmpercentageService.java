package com.jxtele.projectmanage.service;

import com.jxtele.projectmanage.entity.Xmpercentage;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.List;

@Component
public interface XmpercentageService {

    HashMap<String, Object> deleteByPrimaryKey(Integer id);

    HashMap<String, Object> insert(Xmpercentage record);

    int insertSelective(Xmpercentage record);

    Xmpercentage selectByPrimaryKey(Integer id);

    HashMap<String, Object> updateByPrimaryKeySelective(Xmpercentage record);

    int updateByPrimaryKey(Xmpercentage record);

    //根据项目id显示某项目的提成分配信息
    List<Xmpercentage> selectByProjectId(Integer projectId);

    List<Xmpercentage> selectAll();
}
