package com.jxtele.projectmanage.controller;

import com.jxtele.projectmanage.annotation.Permission;
import com.jxtele.projectmanage.controller.base.BaseController;
import com.jxtele.projectmanage.entity.PermissionType;
import com.jxtele.projectmanage.entity.ResponseModel;
import com.jxtele.projectmanage.entity.XmpercentageItem;
import com.jxtele.projectmanage.service.XmpercentageItemService;
import com.jxtele.projectmanage.service.impl.AttachmentFileService;
import com.jxtele.projectmanage.service.impl.UserService;
import com.jxtele.projectmanage.util.ParameterMap;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.thymeleaf.exceptions.TemplateInputException;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/xmpercentageItem")
public class XmpercentageItemController extends BaseController {
    @Autowired
    private XmpercentageItemService xmpercentageItemService;
    @Autowired
    AttachmentFileService attachmentFileService;
    @Autowired
    UserService userService;
    @Value("${upload.root.folder}")
    public String locatFolder;
    private static final String qxurl = "xmpercentageItem/list";

    /**
     * 查询提成详细数据列表
     */
    @RequestMapping(value="/list/{percentageId}",method=RequestMethod.GET)
    @Permission(url = qxurl,type = PermissionType.QUERY)
    public Object rcentageItemManageInfo(@PathVariable Integer percentageId, Model model){
        List<XmpercentageItem> xmlist = xmpercentageItemService.selectByPercentId(percentageId);
        model.addAttribute("percentageId", percentageId);
        model.addAttribute("xmlist", xmlist);
        return "page/xmpercentageItem/list";
    }
    @RequestMapping(value="/userlist",method=RequestMethod.GET)
    @Permission(url = qxurl,type = PermissionType.QUERY)
    public Object getAllUsers(){
        List<ParameterMap> ulist =  userService.getUserList();
        return ResponseModel.getModel("ok", "success", ulist);
    }
    /**
     * 删除某提成项目的分配某条详细数据
     * @param id
     * @return
     */
    @RequestMapping(value="/del/{id}",method=RequestMethod.GET)
    @Permission(url = qxurl,type = PermissionType.DEL)
    public Object del(@PathVariable Integer id){
        return xmpercentageItemService.deleteByPrimaryKey(id);
    }

    /**
     * 修改
     * @param record
     * @return
     */
    @RequestMapping(value="/edit",method=RequestMethod.POST)
    @Permission(url = qxurl,type = PermissionType.EDIT)
    public Object edit(@ModelAttribute XmpercentageItem record,@RequestParam(value = "file",required = false) MultipartFile file) throws TemplateInputException {
        return xmpercentageItemService.updateByPrimaryKeySelective(record,file,locatFolder);

    }

    /**
     * 上传附件
     * @param file
     * @param record
     * @return
     */
    @RequestMapping(value="/add" ,method = RequestMethod.POST)
    @Permission(url = qxurl,type = PermissionType.ADD)
    public Object add(@ModelAttribute XmpercentageItem record, @RequestParam(value = "file",required = false) MultipartFile file, Model model){
        Map<String, Object> add = xmpercentageItemService.insert(record,  file , locatFolder);
        return add;
    }
    @RequestMapping(value="/getAllfile/{id}",method=RequestMethod.GET)
    @Permission(url = qxurl,type = PermissionType.QUERY)
    public Object getAllfile(@PathVariable Integer id){
        return ResponseModel.getModel("ok", "success", attachmentFileService.findAttachmentFileByRefId(id, XmpercentageItem.module));
    }
}
