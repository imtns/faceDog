Component({
	options: {
		addGlobalClass: true,
	},
	/**
	 * 组件的属性列表
	 */
	properties: {
		pageName: String,
		showNav: {
			type: Boolean,
			value: true
		},
		showHome: {
			type: Boolean,
			value: true
		},
		tab: {
			type: String,
			value:"1"
		}
	},

	/**
	 * 组件的初始数据
	 */
	data: {
		tabIndex:1
	},
	lifetimes: {
		attached: function () {
			this.setData({
				navH: wx.getStorageSync('navHeight')
			})
		}
	},
	/**
	 * 组件的方法列表
	 */
	methods: {
		tabSelect(tab) {
			let tabIndex = tab.currentTarget.dataset.tab;
			console.log(tabIndex)
			this.setData({
				tabIndex
			})	
		},
		//回退
		navBack: function () {
			wx.navigateBack({
				delta: 1
			})
		},
		//回主页
		toIndex: function () {
			wx.navigateTo({
				url: '/pages/admin/home/index/index'
			})
		},
	}
})
