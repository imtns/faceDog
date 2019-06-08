import Dialog from '@/components/vant/dialog/dialog';
function formatNumber(n) {
    n = n.toString();
    return n[1] ? n : `0${n}`;
}

function formatTime(date) {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    return `${[year, month, day].map(formatNumber).join('/')} ${[hour, minute, second].map(formatNumber).join(':')}`;
}
function sleep(s) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('promise resolved');
        }, s * 1000);
    });
}
function formatDate(date) {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${[year, month, day].map(formatNumber).join('-')}`;
}
function dialog(...props) {
    return new Promise((resolve, reject) => {
        Dialog.confirm(...props).then(() => {
            resolve();
        }).catch(() => {
            reject();
        });
    });
}
function isArray(val) {
    return Array.isArray(val);
}
function getAge(str) {
    var r = str.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
    if (r == null) return false;
    var d = new Date(r[1], r[3] - 1, r[4]);
    if (d.getFullYear() == r[1] && (d.getMonth() + 1) == r[3] && d.getDate() == r[4]) {
        var Y = new Date().getFullYear();
        return (Y - r[1]);
    }
    return ('输入的日期格式错误！');
}
function isObject(val) {
    return Object.prototype.toString.call(val) === '[object Object]';
}

function toast(title, cb) {
    wx.showToast({
        title,
        icon: 'none',
        duration: 2000,
        success: () => {
            cb && cb();
        }
    });
}
module.exports = {
    formatDate,
    formatTime,
    toast,
    isArray,
    isObject,
    dialog,
    getAge,
    sleep
};
