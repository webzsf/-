Page({
   
    data: {
        sex: "先生",
        shouhuo: ''
    },
	// 提交数据
	submitdata: function (e) {
		console.log(e)
		console.log(e.detail.value)
		wx.setStorage({
			key: 'key',
			data: e.detail.value,
			success: function() {
				wx.navigateTo({
					url: '/pages/first/first',
				})
			}
		})
	},
	address: function() {
		wx.chooseLocation({
			success: function (res) {
				console.log(res)
				this.setData({
					shouhuo: res.address
				})
			}.bind(this),
		})
	}
})
