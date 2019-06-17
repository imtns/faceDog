import { toast } from './index';

const domain = 'http://www.molineapp.cn';

const http = (method, ...props) => new Promise((resolve, reject) => {
    try {
        let url = props[0];
        let data = props[1];
        url = method === 'DELETE' ? url + '/' + data : url;
        if (typeof data === 'function') {
            resolve(data);
            data = {};
        }
        wx.showLoading && wx.showLoading({ title: '加载中', mask: true });
        let header = props[2] || {};
        if (wx.getStorageSync('token')) {
            Object.assign(header, {
                latitude: wx.getStorageSync('latitude'),
                longitude: wx.getStorageSync('longitude')
            });
            if (url !== '/api/auth/access_token?') {
                Object.assign(header, {
                    Authorization: `Bearer ${wx.getStorageSync('token')}`
                });
            }
        }
        wx.request({
            url: domain + url,
            data,
            method,
            dataType: 'json',
            header: {
                'content-type': 'application/json',
                ...header
            },
            success({ data }) {
                wx.hideLoading && wx.hideLoading();
                if (data.return_code === 0) {
                    resolve(data.data);
                } else {
                    toast(data.message || '服务器开小差了, 请稍后再试');
                }
            },
            fail(e) {
                wx.hideLoading && wx.hideLoading();
                reject(e);
            }
        });
    } catch (e) {
        console.log(e);
        reject(e);
        wx.hideLoading && wx.hideLoading();
    }
});
module.exports.get = (...props) => http('GET', ...props);
module.exports.post = (...props) => http('POST', ...props);
module.exports.put = (...props) => http('PUT', ...props);
module.exports.del = (...props) => http('DELETE', ...props);
