// pages/myaddress/myaddress.js
Page({

    /**
     * 页面的初始数据
     */
	data: {

	},
	btn: function () {
		console.log("进入新增地址页面")
		wx.navigateTo({
			url: '/pages/second/second',
		})
	},
	// 修改页面
	amend: function () {
		console.log("进入编辑页面")
		wx.navigateTo({
			url: '/pages/third/third',
		})
	},
	onLoad: function () {

	},
	onReady: function () {
		wx.getStorage({
			key: 'key',
			success: function (res) {
				console.log("数据传送过来了")
				this.setData(res.data)
			}.bind(this),
		})
	}
})