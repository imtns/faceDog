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
function removeDuplicates(originalArray, prop) {
    var newArray = [];
    var lookupObject = {};

    for (var i in originalArray) {
        lookupObject[originalArray[i][prop]] = originalArray[i];
    }

    for (i in lookupObject) {
        newArray.push(lookupObject[i]);
    }
    return newArray;
}
function toast(title, cb, time = 2000) {
    wx.showToast({
        title,
        icon: 'none',
        duration: time,
        success: () => {
            cb && cb();
        }
    });
}

// function formatDateFromSeconds(timestamp) {
//     function zeroize(num) {
//         return (String(num).length == 1 ? '0' : '') + num;
//     }

//     var curTimestamp = parseInt(new Date().getTime() / 1000); // 当前时间戳
//     var timestampDiff = curTimestamp - timestamp; // 参数时间戳与当前时间戳相差秒数

//     var curDate = new Date(curTimestamp * 1000); // 当前时间日期对象
//     var tmDate = new Date(timestamp * 1000);  // 参数时间戳转换成的日期对象

//     var Y = tmDate.getFullYear(), m = tmDate.getMonth() + 1, d = tmDate.getDate();
//     var H = tmDate.getHours(), i = tmDate.getMinutes(), s = tmDate.getSeconds();

//     if (timestampDiff < 60) { // 一分钟以内
//         return '刚刚';
//     } else if (timestampDiff < 3600) { // 一小时前之内
//         return Math.floor(timestampDiff / 60) + '分钟前';
//     } else if (curDate.getFullYear() == Y && curDate.getMonth() + 1 == m && curDate.getDate() == d) {
//         return '今天' + zeroize(H) + ':' + zeroize(i);
//     } else {
//         var newDate = new Date((curTimestamp - 86400) * 1000); // 参数中的时间戳加一天转换成的日期对象
//         if (newDate.getFullYear() == Y && newDate.getMonth() + 1 == m && newDate.getDate() == d) {
//             return '昨天' + zeroize(H) + ':' + zeroize(i);
//         } else if (curDate.getFullYear() == Y) {
//             return zeroize(m) + '月' + zeroize(d) + '日 ' + zeroize(H) + ':' + zeroize(i);
//         } else {
//             return Y + '年' + zeroize(m) + '月' + zeroize(d) + '日 ' + zeroize(H) + ':' + zeroize(i);
//         }
//     }
// };
function formatDateFromSeconds(timestamp) {
    function zeroize(num) {
        return (String(num).length == 1 ? '0' : '') + num;
    }

    var curTimestamp = parseInt(new Date().getTime() / 1000); // 当前时间戳
    var timestampDiff = curTimestamp - timestamp; // 参数时间戳与当前时间戳相差秒数

    var curDate = new Date(curTimestamp * 1000); // 当前时间日期对象
    var tmDate = new Date(timestamp * 1000);  // 参数时间戳转换成的日期对象

    var Y = tmDate.getFullYear(), m = tmDate.getMonth() + 1, d = tmDate.getDate();
    var H = tmDate.getHours(), i = tmDate.getMinutes(), s = tmDate.getSeconds();

    if (timestampDiff < 60) { // 一分钟以内
        return '刚刚';
    } else if (timestampDiff < 3600) { // 一小时前之内
        return Math.floor(timestampDiff / 60) + '分钟前';
    } else if (curDate.getFullYear() == Y && curDate.getMonth() + 1 == m && curDate.getDate() == d) {
        return '今天' + zeroize(H) + ':' + zeroize(i);
    } else {
        var newDate = new Date((curTimestamp - 86400) * 1000); // 参数中的时间戳加一天转换成的日期对象
        if (newDate.getFullYear() == Y && newDate.getMonth() + 1 == m && newDate.getDate() == d) {
            return '昨天' + zeroize(H) + ':' + zeroize(i);
        } else if (newDate.getDate() - d >= 6) {
            return zeroize(newDate.getDate() - d) + '天前';
        } else if (curDate.getFullYear() == Y) {
            return newDate.getMonth() + 2  - zeroize(m) + '个月前';
        } else {
            return Y + '/' + zeroize(m) + '/' + zeroize(d);
        }
    }
};
// 下载网络图片到本地
function getTmpFilePath(url) {
    return new Promise((resolve, reject) => {
        wx.downloadFile({
            url,
            success(res) {
                resolve(res.tempFilePath);
            },
            fail(err) {
                reject(err);
            }
        });
    });
}
function throttle(fn, interval) {
	var enterTime = 0;//触发的时间
	var gapTime = interval || 300 ;//间隔时间，如果interval不传，则默认300ms
	return function() {
	  var context = this;
	  var backTime = new Date();//第一次函数return即触发的时间
	  if (backTime - enterTime > gapTime) {
		fn.call(context,arguments);
		enterTime = backTime;//赋值给第一次触发的时间，这样就保存了第二次触发的时间
	  }
	};
  }
module.exports = {
    formatDate,
    formatTime,
    toast,
    isArray,
    isObject,
    dialog,
    getAge,
    sleep,
    formatDateFromSeconds,
    removeDuplicates,
	getTmpFilePath,
	throttle
};
