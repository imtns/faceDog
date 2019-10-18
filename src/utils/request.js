import { toast } from './index';

const domain = 'https://www.facedog.cn';
// const domain = 'http://39.97.187.201:8082';

const http = (method, ...props) => new Promise((resolve, reject) => {
    try {
        let url = props[0];
        let data = props[1];
        url = method === 'DELETE' ? url + '/' + data : url;
        if (typeof data === 'function') {
            resolve(data);
            data = {};
        }
        if (data && data.loading) {
            wx.showLoading && wx.showLoading({ title: '加载中', mask: true });
        }
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
        // console.log('请求参数-》', data);
        wx.request({
            url: domain + url,
            data,
            method: method === 'DELETETEMP' ? 'DELETE' : method,
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
                    if (data.message == '用户未审核') {
                        toast('认证审核中，加急审核请联系客服微信：yanzc1023', null, 2500);
                    } else {
                        if (data.message !== '用户未完善资料' && data.message !== '未完善资料') { toast(data.message || '服务器开小差了, 请稍后再试'); }
                    }
                    reject(data.message);
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
module.exports.deltemp = (...props) => http('DELETETEMP', ...props);
