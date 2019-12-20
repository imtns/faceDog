
"use strict";

var app = getApp();

Component({
	options: {
		multipleSlots: true,
		addGlobalClass: true
	},
	properties: {
		backImage: {
			type: String,
			value: '/static/icon/icon_back.svg'
		},
		homeImage: {
			type: String,
			value: '/static/icon/icon_home.png'
		},
		extClass: {
			type: String,
			value: ''
		},
		showHome: {
			type: Boolean,
			value: false
		},
		title: {
			type: String,
			value: '123'
		},
		background: {
			type: String,
			value: '#ffffff'
		},
		color: {
			type: String,
			value: '#000000'
		},
		dbclickBackTop: {
			type: Boolean,
			value: true
		},
		border: {
			type: Boolean,
			value: false
		},
		loading: {
			type: Boolean,
			value: false
		},
		show: {
			type: Boolean,
			value: true,
			observer: '_showChange'
		},
		left: {
			type: Boolean,
			value: false
		},
		center: {
			type: Boolean,
			value: false
		},

	},
	data: {
		displayStyle: '',
		showBack: false
	},
	attached: function attached() {
		var _this = this;
		//动态计算导航栏尺寸
		var isSupport = !!wx.getMenuButtonBoundingClientRect;
		var rect = wx.getMenuButtonBoundingClientRect ? wx.getMenuButtonBoundingClientRect() : null;
		wx.getSystemInfo({
			success: function success(res) {
				var ios = !!(res.system.toLowerCase().search('ios') + 1);
				var statusBarHeight = res.statusBarHeight;
				var topBarHeight = ios ? (44 + statusBarHeight) : (48 + statusBarHeight);

				_this.setData({
					ios: ios,
					topBarHeight: topBarHeight,
					statusBarHeight: statusBarHeight,
					innerWidth: isSupport ? 'width:' + rect.left + 'px' : '',
					innerPaddingRight: isSupport ? 'padding-right:' + (res.windowWidth - rect.left) + 'px' : '',
					leftWidth: isSupport ? 'width:' + (res.windowWidth - rect.left) + 'px' : ''
				});

				_this.triggerEvent('getBarInfo', { topBarHeight, statusBarHeight });
			}
		});

		//back箭头处理的显示
		var pages = getCurrentPages()
		if (pages.length > 1) {
			this.setData({ showBack: true })
		}
	},
	methods: {
		_showChange: function _showChange(show) {
			var displayStyle = 'opacity: ' + (show ? '1' : '0') + ';-webkit-transition:opacity 0.5s;transition:opacity 0.5s;';
			this.setData({
				displayStyle: displayStyle
			});
		},
		//点击back事件处理
		goBack: function () {
			wx.navigateBack();
			this.triggerEvent('back');
		},
		//返回首页
		goHome: function () {
			wx.reLaunch({
				url: '/pages/index/index'
			})
		},
		//双击返回顶部
		doubleClick(e) {
			if (!this.data.dbclickBackTop) { return }
			if (this.timeStamp && (e.timeStamp - this.timeStamp < 300)) {
				this.timeStamp = 0
				wx.pageScrollTo({
					scrollTop: 0,
					duration: 300
				})
			} else {
				this.timeStamp = e.timeStamp
			}
		}
	}
});
