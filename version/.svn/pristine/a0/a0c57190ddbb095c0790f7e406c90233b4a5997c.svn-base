package com.jxtele.projectmanage.service.impl;

import com.jxtele.projectmanage.dao.FileCheckMapper;
import com.jxtele.projectmanage.entity.FileCheck;
import com.jxtele.projectmanage.entity.ResponseModel;
import com.jxtele.projectmanage.service.FileCheckService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class FileCheckServiceImpl implements FileCheckService {
    @Autowired
    private FileCheckMapper fileCheckMapper;
    @Override
    public Map<String, Object> deleteByPrimaryKey(Integer id) {
        try {
            fileCheckMapper.deleteByPrimaryKey(id);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseModel.getModel("error", "falied", null);
        }
        return ResponseModel.getModel("ok", "success", null);
    }

    @Override
    public Map<String, Object> insert(FileCheck record) {
        try {
            fileCheckMapper.insert(record);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseModel.getModel("error", "falied", null);
        }
        return ResponseModel.getModel("ok", "success", null);
    }

    @Override
    public int insertSelective(FileCheck record) {
        return fileCheckMapper.insertSelective(record);
    }

    @Override
    public FileCheck selectByPrimaryKey(Integer id) {
        return fileCheckMapper.selectByPrimaryKey(id);
    }

    @Override
    public Map<String, Object> updateByPrimaryKeySelective(FileCheck record) {
        try {
            fileCheckMapper.updateByPrimaryKeySelective(record);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseModel.getModel("error", "falied", null);
        }
        return ResponseModel.getModel("ok", "success", null);
    }

    @Override
    public int updateByPrimaryKey(FileCheck record) {
        return fileCheckMapper.updateByPrimaryKey(record);
    }

    @Override
    public List<FileCheck> selectByProjectId(Integer projectId) {
        return fileCheckMapper.selectByProjectId(projectId);
    }

    @Override
    public FileCheck selectlastByProjectId(Integer projectId) {
        return fileCheckMapper.selectlastByProjectId(projectId);
    }
}
