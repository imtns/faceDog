import wepy from 'wepy';
import { get, put, del } from '@/utils/request';
import { toast } from '@/utils';
import { PROFILE, HANDLE_PICTURE } from '@/utils/url';
export default class Mixin extends wepy.mixin {
    data = {
        profile: {}
    }
    methods = {
        redirect(url) {
            wx.navigateTo({
                url
            });
        }
    }
    // 设置默认头像
    async changeAvatar(param, noToast) {
        const data = await put(HANDLE_PICTURE, {
            ...param
        });
        console.log(data);
        if (!noToast) { toast('修改成功'); }
    }
    // 修改个人资料
    async submit(param, back = true) {
        const data = await put(PROFILE, {
            ...param
        });
        Object.assign(this.profile, param);
        wepy.setStorageSync('profile', this.profile);
        console.log(data);
        toast('修改成功');
        if (!back) return;
        setTimeout(() => {
            wx.navigateBack({
                delta: 1
            });
        }, 1500);
    }
    // 删除个人资料照片
    async del(id) {
        const data = await del(HANDLE_PICTURE, id);
        console.log(data);
        toast('删除成功');
    }
    switchOrder(d) {
        var r = [];
        d.forEach(e => {
            if (e['is_avatar']) r.unshift(e);
            else r.push(e);
        });
        console.log(r);
        return r;
    }
    async getProfile(noLoading) {
        const data = await get(PROFILE, noLoading);
        data.images = this.switchOrder(data.images);
        if (data.images.length === 1) {
            this.changeAvatar({
                image_id: data.images[0]._id
            }, true);
        }
        this.profile = data;
        wepy.setStorageSync('profile', this.profile);
        this.$apply();
    }
    onShow() {
        this.getProfile();
    }

    onLoad() {

    }
}
