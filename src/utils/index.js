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
function formatDate(date) {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${[year, month, day].map(formatNumber).join('-')}`;
}
function isArray(val) {
    return Array.isArray(val);
}

function isObject(val) {
    return Object.prototype.toString.call(val) === '[object Object]';
}

function toast(title) {
    wx.showToast({
        title,
        icon: 'none',
        duration: 1500
    });
}
module.exports = {
    formatDate,
    formatTime,
    toast,
    isArray,
    isObject
};
