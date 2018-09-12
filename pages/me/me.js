const app = getApp()
Page({
  data: {
  },
  clickShare: function () {
    wx.navigateTo({
      url: '/pages/yqyj/yqyj',
    })
  },
  clickAddress: function(){
    wx.navigateTo({
      url: '/pages/first/first',
    })
  },
  clicktuichu: function () {
    wx.showActionSheet({
      itemList: ['确认退出?', '是', '否'],
      success: function (ree) {
        console.log(ree.tabIndex)

      },
      fail: function (ree) {
        console.log(ree.errMsg)
      }
    })
  },
  clicktel: function () {
    wx.showActionSheet({
      itemList: ['客服电话:101-097-77'],
      success: function (res) {
        var index = res.tapIndex;
        wx.makePhoneCall({
          phoneNumber: '101-097-77'
        })
      },
      fail: function (res) {
        console.log(res.errMsg)
      }
    })
  },
  onLoad: function () {


  },
})
