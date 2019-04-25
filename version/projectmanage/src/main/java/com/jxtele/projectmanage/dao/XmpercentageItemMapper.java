package com.jxtele.projectmanage.dao;

import com.jxtele.projectmanage.entity.XmpercentageItem;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface XmpercentageItemMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(XmpercentageItem record);

    int insertSelective(XmpercentageItem record);

    XmpercentageItem selectByPrimaryKey(Integer id);

    List<XmpercentageItem> selectByPercentId(Integer percentageId);

    int updateByPrimaryKeySelective(XmpercentageItem record);

    int updateByPrimaryKey(XmpercentageItem record);

    //按照提成表删除子表信息
    int deleteByPercentageKey(Integer percentageId);

    //添加附件插入
    int insert(XmpercentageItem record, MultipartFile file , String locatFolder);
}