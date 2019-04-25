package com.jxtele.projectmanage.controller;

import com.jxtele.projectmanage.annotation.Permission;
import com.jxtele.projectmanage.controller.base.BaseController;
import com.jxtele.projectmanage.entity.PermissionType;
import com.jxtele.projectmanage.entity.TeamBuild;
import com.jxtele.projectmanage.entity.Xmpercentage;
import com.jxtele.projectmanage.entity.XmpercentageItem;
import com.jxtele.projectmanage.service.XmpercentageItemService;
import com.jxtele.projectmanage.service.XmpercentageService;
import com.jxtele.projectmanage.service.impl.ProjectService;
import com.jxtele.projectmanage.service.impl.TeamBuildService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;

@Controller
@RequestMapping("/percentage")
public class XmpercentageController extends BaseController {

    private static final String qxurl = "percentage/list";
    @Autowired
    private XmpercentageService xmpercentageService;
    @Autowired
    private TeamBuildService teamBuildService;
    @Autowired
    private XmpercentageItemService xmpercentageItemService;
    @Autowired
    private ProjectService projectService;
    /**
     *增加项目提成单
     * @param recode
     * @return
     */
    @RequestMapping(value="/add",method= RequestMethod.POST)
    @ResponseBody
    @Permission(url = qxurl,type = PermissionType.ADD)
    public Object add(@ModelAttribute Xmpercentage recode,Model model){
        return xmpercentageService.insert(recode);
    }
    /**
     * 查询提成分配数据
     * @return
     */
    @RequestMapping(value="/list",method=RequestMethod.GET)
    @Permission(url = qxurl,type = PermissionType.QUERY)
    public ModelAndView list(Model model){
        model.addAttribute("xmlist", xmpercentageService.selectByProjectId(this.getProjid()));
        model.addAttribute("projectId",this.getProjid());
        return new ModelAndView("page/percentage/list");
    }

    /**
     * 查询提成详细数据列表
     */
    @RequestMapping(value="/itemlist/{percentageId}",method=RequestMethod.GET)
    @Permission(url = qxurl,type = PermissionType.QUERY)
    public ModelAndView itemlist(@PathVariable("percentageId") Integer percentageId, Model model){
        List<XmpercentageItem> xmItemlist = xmpercentageItemService.selectByPercentId(percentageId);
        model.addAttribute("xmItemlist", xmItemlist);
        model.addAttribute("percentageId", percentageId);//添加时默认数据
        return new ModelAndView("page/xmpercentageItem/list");
    }
    /**
     * 删除提成项目
     * @param id
     * @return
     */
    @RequestMapping(value="/del/{id}",method=RequestMethod.GET)
    @ResponseBody
    @Permission(url = qxurl,type = PermissionType.DEL)
    public Object del(@PathVariable Integer id,Model model){
        if(id!=null){
            xmpercentageItemService.deleteByPercentageKey(id);
        }
        return xmpercentageService.deleteByPrimaryKey(id);
    }

    /**
     * 修改
     * @param record
     * @return
     */
    @RequestMapping(value="/edit",method=RequestMethod.POST)
    @ResponseBody
    @Permission(url = qxurl,type = PermissionType.EDIT)
    public Object edit(@ModelAttribute Xmpercentage record,Model model){
        return xmpercentageService.updateByPrimaryKeySelective(record);
    }

    public void XmPercentageList(Integer id,Integer perId){
        //创建项目提成分配时，根据项目参与人员自动添加项目提成明细列表
        List<TeamBuild> teams = teamBuildService.findByProjId(id);
        for(TeamBuild team:teams){
            XmpercentageItem item =new XmpercentageItem();
            item.setUserId(team.getSysUserid());
            item.setStartTime(item.getStartTime());
            item.setEndTime(item.getEndTime());
            item.setPercentageId(perId);
            xmpercentageItemService.insert(item);
        }
    }

}
