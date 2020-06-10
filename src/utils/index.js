import Dialog from '@/components/vant/dialog/dialog';
import { Event } from '@/utils/event.js';
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
function formatTimeShort(timestamp) {
	var date = new Date(timestamp * 1000);
	const year = date.getFullYear();
	const month = date.getMonth() + 1;
	const day = date.getDate();
	return `${[year, month, day].map(formatNumber).join('/')}`;
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
function toast(title, cb, time = 2500) {
	wx.hideLoading();
	wx.showToast({
		title,
		icon: 'none',
		duration: time,
		success: () => {
			cb && cb();
		}
	});
}

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
		} else if (curDate.getFullYear() == Y) {
			return zeroize(m) + '月' + zeroize(d) + '日 ' + zeroize(H) + ':' + zeroize(i);
		} else {
			return Y + '年' + zeroize(m) + '月' + zeroize(d) + '日 ' + zeroize(H) + ':' + zeroize(i);
		}
	}
};
// function formatDateFromSeconds(timestamp) {
// 	function zeroize(num) {
// 		return (String(num).length == 1 ? '0' : '') + num;
// 	}

// 	var curTimestamp = parseInt(new Date().getTime() / 1000); // 当前时间戳
// 	var timestampDiff = curTimestamp - timestamp; // 参数时间戳与当前时间戳相差秒数

// 	var curDate = new Date(curTimestamp * 1000); // 当前时间日期对象
// 	var tmDate = new Date(timestamp * 1000);  // 参数时间戳转换成的日期对象

// 	var Y = tmDate.getFullYear(), m = tmDate.getMonth() + 1, d = tmDate.getDate();
// 	var H = tmDate.getHours(), i = tmDate.getMinutes(), s = tmDate.getSeconds();

// 	if (timestampDiff < 60) { // 一分钟以内
// 		return '刚刚';
// 	} else if (timestampDiff < 3600) { // 一小时前之内
// 		return Math.floor(timestampDiff / 60) + '分钟前';
// 	} else if (curDate.getFullYear() == Y && curDate.getMonth() + 1 == m && curDate.getDate() == d) {
// 		return '今天' + zeroize(H) + ':' + zeroize(i);
// 	} else {
// 		var newDate = new Date((curTimestamp - 86400) * 1000); // 参数中的时间戳加一天转换成的日期对象
// 		if (newDate.getFullYear() == Y && newDate.getMonth() + 1 == m && newDate.getDate() == d) {
// 			return '昨天' + zeroize(H) + ':' + zeroize(i);
// 		} else if (newDate.getDate() - d >= 6) {
// 			return Number(zeroize(newDate.getDate() - d)) + '天前';
// 		} else if (curDate.getFullYear() == Y) {
// 			return newDate.getMonth() + 2 - zeroize(m) + '个月前';
// 		} else {
// 			return Y + '/' + zeroize(m) + '/' + zeroize(d);
// 		}
// 	}
// };
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
	var gapTime = interval || 300;//间隔时间，如果interval不传，则默认300ms
	return function () {
		var context = this;
		var backTime = new Date();//第一次函数return即触发的时间
		if (backTime - enterTime > gapTime) {
			fn.call(context, arguments);
			enterTime = backTime;//赋值给第一次触发的时间，这样就保存了第二次触发的时间
		}
	};
}



function pad(num) {
	return ("0" + parseInt(num)).substr(-2);
}
Date.prototype.addDays = function (days) {
	var date = new Date(this.valueOf());
	date.setDate(date.getDate() + days);
	return date;
}

function countDown(date, isFormat) {
	var start = new Date;
	var now = new Date;
	if (!date)
		start.setHours(6, '00', '00');
	else
		start.setHours(23, 59, 59);
	if (now > start) {
		start.setDate(start.getDate() + 1);
	}
	var remain = ((start - now) / 1000);
	var hh = pad((remain / 60 / 60) % 60);
	var mm = pad((remain / 60) % 60);
	var ss = pad(remain % 60);
	let time = hh + ":" + mm + ":" + ss;
	if (isFormat) {
		time = `${hh}小时${mm}分${ss}秒`
	}
	return time;
}

function contentCheck(content) {
	return new Promise((resolve, reject) => {
		wx.cloud
			.callFunction({
				name: 'securityCheck',
				data: { content, type: 2 }
			})
			.then(res => {
				console.log(res);
				if (res && res.result && res.result.errCode === 87014) {
					resolve(false);
				} else {
					resolve(true);
				}
			})
			.catch(err => {
				console.log(err);
				//只要检查失败，都算作没有安全风险
				resolve(true);
			});
	});
}
function VerifyControl(checkLevel, type) {
	let profile = wx.getStorageSync('profile');
	if (type) {
		Event.trigger('showVerify', true, type);
		return false;
	}
	if (profile.level == checkLevel || profile.progress == 'refuse') {
		Event.trigger('showVerify', true, 'needLevel');
		return false;
	}

	if (!profile.level) {
		Event.trigger('showVerify', true, 'unLevel');
		return false;
	}
	return true;
}
function* range(start, end, step = 1) {
	if (end === undefined) [end, start] = [start, 0];
	for (let n = start; n < end; n += step) yield n;
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
	formatTimeShort,
	removeDuplicates,
	getTmpFilePath,
	throttle,
	countDown,
	contentCheck,
	VerifyControl,
	range
};
