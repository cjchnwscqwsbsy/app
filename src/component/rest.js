import React from 'react';
import $ from 'jquery';

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