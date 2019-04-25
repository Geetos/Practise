package com.jxtele.projectmanage.util;

import org.apache.commons.io.FilenameUtils;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.*;
import java.net.URLEncoder;
import java.util.UUID;

public class FileUploadUtil {

    public static String fileUpload(MultipartFile file, String path) throws IllegalStateException, IOException {

        //原文件名称orName
        String orName = file.getOriginalFilename();
        //生成一个新的文件名fileName
        String fileName = UUID.randomUUID().toString() + "."
                + FilenameUtils.getExtension(orName);
        File targetFile = new File(path);
        if(!targetFile.exists()){
            targetFile.mkdirs();
        }
        FileOutputStream out = null;
        out = new FileOutputStream(path+File.separator+fileName);
        out.write(file.getBytes());
        out.flush();
        out.close();
        return path+File.separator+fileName;
    }
    /**
     * 文件下载功能
     * @param request
     * @param response
     * @param name
     * @throws Exception
     */
    public static void fileDownload(HttpServletRequest request, HttpServletResponse response, String path ,String fileName) throws Exception{
        //需要下载的文件在controller层写
        // String fileName = request.getSession().getServletContext().getRealPath("/sql")+"/"+name;
        //获取输入流
        InputStream bis = new BufferedInputStream(new FileInputStream(new File(path)));
        //假如以中文名下载的话，转码，免得文件名中文乱码
        //String filename = URLEncoder.encode(new File(path).getName(),"UTF-8");

        response.setHeader("content-type", "application/octet-stream");
        //response.setContentType("multipart/form-data");
        response.setContentType("application/force-download");// 设置强制下载不打开
        // 下载文件能正常显示中文
        response.setHeader("Content-Disposition", "attachment;filename=" + URLEncoder.encode(fileName, "UTF-8"));
        BufferedOutputStream out = new BufferedOutputStream(response.getOutputStream());
        int len = 0;
        byte[] buf = new byte[1024];
        while((len = bis.read(buf, 0, 1024)) != -1){
            out.write(buf,0,len);
            out.flush();
        }
        out.close();
    }

}
