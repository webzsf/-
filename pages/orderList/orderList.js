// pages/message/message.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        list: [],
        order: []
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        //   请求数据
        wx.request({
            url: 'https://localhost:/data/orders.json',
            // 监听返回
            success: function (res) {
                // console.log(res)
                // 请求成功，存储数据
                if (res.data.errno === 0) {
                    var orders = [];
                    for (var i = 0; i < res.data.data.length; i++) {
                        orders.push(res.data.data[i].info)
                    }
                    this.setData({
                        list: res.data.data,
                        order: orders
                    });

                    console.log(orders)
                }
                console.log(res.data.data)
            }.bind(this)
        }),
            this.setData({

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