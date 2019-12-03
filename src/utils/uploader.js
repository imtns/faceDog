/*eslint-disable */
import wepy from 'wepy';

let baseUrl = wepy.$appConfig.baseUrl;
let uploadUrl = `${baseUrl}/api/user/profile`;
import { toast } from './index';
module.exports.uploader = (tempFilePath, ...props) => {
    let [params, callback] = props;
    if (params && params.isVideo) uploadUrl = `${baseUrl}/api/user/certify/video`;
	if (params && params.profile) uploadUrl = `${baseUrl}/api/user/image`;
    if (typeof params === 'function') {
        callback = params;
        params = {};
    }

    const formData = params && params.data || {};
    console.log(formData);
    const name = params && params.name || '';
    !params.noLoading && wx.showLoading && wx.showLoading({ title: '上传中', mask: true });
    console.warn(formData);
    return wx.uploadFile({
        url: uploadUrl,
        name,
        formData,
        header: {
            Authorization: `Bearer ${wx.getStorageSync('token')}`,
            "Content-Type": "multipart/form-data"
        },
        filePath: tempFilePath,
        success({ data }) {
            console.log(data);
            data = JSON.parse(data);
            if (data.return_code == 0) {
                !params.noLoading && wx.hideLoading && wx.hideLoading();
                callback('ok');
            } else {
                // toast(data.message || '上传失败');
                callback(data.message);

                !params.noLoading && wx.hideLoading && wx.hideLoading();
            }
        },
        fail() {
            callback('上传失败');
        },
        // complete() {
        //     wx.hideLoading && wx.hideLoading();
        // },
    });
};
