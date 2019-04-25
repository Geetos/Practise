package com.jxtele.projectmanage.service;

import com.jxtele.projectmanage.entity.FileCheckItem;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Map;

@Component
public interface FileCheckItemService {
    Map<String, Object> deleteByPrimaryKey(Integer id);

    Map<String, Object> insert(FileCheckItem record);

    int insertSelective(FileCheckItem record);

    FileCheckItem selectByPrimaryKey(Integer id);

    Map<String, Object> updateByPrimaryKeySelective(FileCheckItem record);

    int updateByPrimaryKey(FileCheckItem record);

    List<FileCheckItem> selectByFileId(Integer fileId);
}
