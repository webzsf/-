// pages/add/add.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username:'',
    tel:"",
    address:'',
    mph:"",
    sex:""
  },
   radioChange: function(e) {
    this.setData({
      sex:e.detail.value
    })
},
  submitData:function(e) {
        this.setData({
          username:e.detail.value.username,
          tel:e.detail.value.tel,
          mhp:e.detail.value.mph,
          address:e.detail.value.address
        })
    wx.setStorage({
        key:"msg",
        data:this.data,
        success:function() {
          wx.navigateBack({
            url:"pages/order/order"
          })
        }
      })
  },
  onShow:function() {

}

})