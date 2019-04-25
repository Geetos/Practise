package com.jxtele.projectmanage.service;

import com.jxtele.projectmanage.entity.IntegralItem;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Component
public interface IIntegralItemService {

    Map<String, Object> deleteByPrimaryKey(Integer id);

//    HashMap<String, Object> insert(IntegralItem record);

    int insertSelective(IntegralItem record);

    IntegralItem selectByPrimaryKey(Integer id);

    int updateByPrimaryKey(IntegralItem record);

    HashMap<String, Object> updateByPrimaryKeySelective(IntegralItem record, MultipartFile file, String locatFolder);


    List<IntegralItem> findIntegralByIntegralId(Integer integralId);

    Map<String, Object> insert(IntegralItem record, MultipartFile file , String locatFolder);

}
