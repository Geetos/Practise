package com.jxtele.projectmanage.service;

import com.jxtele.projectmanage.entity.XmpercentageItem;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Component
public interface XmpercentageItemService {
    HashMap<String, Object> deleteByPrimaryKey(Integer id);

    HashMap<String, Object> insert(XmpercentageItem record);

    int insertSelective(XmpercentageItem record);

    XmpercentageItem selectByPrimaryKey(Integer id);

    HashMap<String, Object> updateByPrimaryKeySelective(XmpercentageItem record,MultipartFile file,String locatFolder);

    int updateByPrimaryKey(XmpercentageItem record);

    List<XmpercentageItem> selectByPercentId(Integer percentageId);

    HashMap<String, Object> deleteByPercentageKey(Integer percentageId);

    //添加附件插入
    public Map<String, Object> insert(XmpercentageItem record, MultipartFile file , String locatFolder);
}
