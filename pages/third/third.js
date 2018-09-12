// pages/third/third.js
Page({
    
    /**
     * 页面的初始数据
     */
    data: {
		shouhuo: ''
    },
    delete: function() {
        wx.showModal({
			title: '删除此地址',
			content: '确认删除',
			success: function(res) {
				if(res.cancel) {

				}else {
					wx.removeStorage({
						key: 'key',
						success: function(res) {
							console.log("删除成功")
							wx.navigateTo({
								url: '/pages/first/first',
							})
						},
					})
				}
			}
		})
    },
    submitdata: function(e) {
        console.log(e)
		wx.setStorage({
			key: 'key',
			data: e.detail.value,
			success: function() {
				wx.navigateTo({
					url: '/pages/first/first',
				})
			}
		})
        console.log("编辑页面保存返回首页")
    },
  
    
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
		wx.getStorage({
			key: 'key',
			success: function (res) {
				console.log(res.data)
				this.setData(res.data)
			}.bind(this),
			fail: function () {
				wx.navigateTo({
					url: '/pages/index/index',
				})
			}
		})
    },
    
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
    
    },
    
    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
		
    },
	Address: function () {
		wx.chooseLocation({
			success: function (res) {
				console.log(res)
				this.setData({
					shouhuo: res.address
				})
				console.log(2)
			}.bind(this),
		})
	},
    
    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {
    
    },
    
    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {
    
    },
    
    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {
    
    },
    
    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {
    
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {
    
    }
})