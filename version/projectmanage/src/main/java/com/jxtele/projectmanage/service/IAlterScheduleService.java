package com.jxtele.projectmanage.service;

import com.jxtele.projectmanage.entity.AlterSchedule;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Component
public interface IAlterScheduleService {

    Map<String, Object> deleteByPrimaryKey(Integer id);

    Map<String, Object> insert(AlterSchedule record, MultipartFile file , String locatFolder);

    int insertSelective(AlterSchedule record);

    AlterSchedule selectByPrimaryKey(Integer id);

    HashMap<String, Object> updateByPrimaryKeySelective(AlterSchedule record, MultipartFile file , String locatFolder);

    int updateByPrimaryKey(AlterSchedule record);

    List<AlterSchedule> findAlterScheduleByctScheduleid(Integer ctScheduleid);

    List<AlterSchedule> findAlterScheduleBymoneyInfoid(Integer moneyinfoid);

    List<AlterSchedule> findAlterScheduleByProjId(Integer projid);
}
