import React from 'react';
import $ from 'jquery';
import axios from 'axios';

export const restAxios = (url,type,data,request) => {
  return axios({
    method:type,
    baseURL:'http://192.168.64.43:9000/xrk/',
    url:url,
    params:'',
    data:data,
    timeout: 1000,
    withCredentials: true,    //跨域请求使用的凭证
    responseType: 'json', // 表示服务器响应的数据类型,默认(json)
    onUploadProgress: (progressEvent) => {
      // 对原生进度事件的处理
    },
    onDownloadProgress: (progressEvent) => {
      // 对原生进度事件的处理
    },
    maxContentLength: 2000,  //定义允许的响应内容的最大尺寸
  });
};

export const GET = (url,data,request) => {
  return restAxios(url,'get',data,request);
};

export const POST = (url,data,request) => {
  return restAxios(url,'post',data,request);
};

export const PUT = (url,data,request) => {
  return restAxios(url,'put',data,request);
};

export const DELETE = (url,data,request) => {
  return restAxios(url,'delete',data,request);
};

export const restAjax = (url,type,data,request) => {
    return new Promise((resolve,reject) => {
        $.ajax({
            contentType: 'application/json;charset=utf-8',
            url: url,
            data: '',
            cache: false,
            xhrFields: {
                withCredentials: true,
            },
            ...request,
            // beforeSend: (xhr) => {
            //     xhr.setRequestHeader('X-SESSION-TOKEN', cache.getSessionId());
            // },
            type,
            error: (xhr, status, err) => {
                // if (xhr.getResponseHeader('WWW-Authenticate') && xhr.status === 401) {
                //     authorityCheck(xhr.getResponseHeader('WWW-Authenticate'));
                //     //cache.clear();
                //     //window.location.reload();
                // }
                // reject(xhr.responseJSON || err || status);
            },
            success: (result, status, xhr) => {
                console.log('xrk:',result);
                resolve(result);
                // if (xhr.getResponseHeader('WWW-Authenticate') && xhr.status === 401) {
                //     authorityCheck(xhr.getResponseHeader('WWW-Authenticate'));
                //     //cache.clear();
                //     //window.location.reload();
                //     //reject();
                // } else {
                //     resolve(result);
                // }
            },
        });
    });
};

export const get = (url,data,request) => {
    return restAjax(url,'get',data,request);
};

export const post = (url,data,request) => {
  return restAjax(url,'post',data,request);
};

export const put = (url,data,request) => {
  return restAjax(url,'put',data,request);
};

export const del = (url,data,request) => {
  return restAjax(url,'delete',data,request);
};
