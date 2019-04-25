package com.jxtele.projectmanage.service;


import com.jxtele.projectmanage.entity.MoneyInfo;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Component
public interface IMoneyInfoService {

    Map<String, Object> deleteByPrimaryKey(Integer id);

    Map<String, Object> insert(MoneyInfo record);

    int insertSelective(MoneyInfo record);

    MoneyInfo selectByPrimaryKey(Integer id);

    HashMap<String, Object> updateByPrimaryKeySelective(MoneyInfo record);

    int updateByPrimaryKey(MoneyInfo record);

    MoneyInfo findMoneyInfoByProjId(Integer projid);
}
