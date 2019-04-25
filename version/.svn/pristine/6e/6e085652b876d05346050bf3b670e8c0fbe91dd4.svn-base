package com.jxtele.projectmanage.service.impl;

import com.jxtele.projectmanage.dao.FileCheckItemMapper;
import com.jxtele.projectmanage.entity.FileCheckItem;
import com.jxtele.projectmanage.entity.ResponseModel;
import com.jxtele.projectmanage.service.FileCheckItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class FileCheckItemServiceImpl implements FileCheckItemService {
    @Autowired
    private FileCheckItemMapper fileCheckItemMapper;
    @Override
    public Map<String, Object> deleteByPrimaryKey(Integer id) {
        try {
            fileCheckItemMapper.deleteByPrimaryKey(id);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseModel.getModel("error", "falied", null);
        }
        return ResponseModel.getModel("ok", "success", null);
    }

    @Override
    public Map<String, Object> insert(FileCheckItem record) {
        try {
            fileCheckItemMapper.insert(record);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseModel.getModel("error", "falied", null);
        }
        return ResponseModel.getModel("ok", "success", null);
    }

    @Override
    public int insertSelective(FileCheckItem record) {
        return fileCheckItemMapper.insertSelective(record);
    }

    @Override
    public FileCheckItem selectByPrimaryKey(Integer id) {
        return fileCheckItemMapper.selectByPrimaryKey(id);
    }

    @Override
    public Map<String, Object> updateByPrimaryKeySelective(FileCheckItem record) {
        try {
            fileCheckItemMapper.updateByPrimaryKeySelective(record);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseModel.getModel("error", "falied", null);
        }
        return ResponseModel.getModel("ok", "success", null);
    }

    @Override
    public List<FileCheckItem> selectByFileId(Integer fileId) {
        return fileCheckItemMapper.selectByFileId(fileId);
    }

    @Override
    public int updateByPrimaryKey(FileCheckItem record) {
        return fileCheckItemMapper.updateByPrimaryKey(record);
    }
}
