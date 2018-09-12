// pages/more/more.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      hobby:["不吃辣","少放辣","多放辣","不吃蒜","不吃香菜","不吃葱"],
      content:'',
      para:'',
      number:0
  },
    //点击跳转order
  gotoOrder:function() {
        
    wx.setStorage({
      key:'discro',
      data:this.data.para,
      success:function() {
         wx.navigateBack({
        url:"/pages/order/order"
      })
      }
    })
    

  },
  checkedCur:function(e) {
     
      var index = e.target.dataset.id;
      var content = this.data.hobby[index];
      var para = this.data.para + content ;
      console.log(para)
      this.setData({
        para:para
      })
  },
  bindWordLimit:function(e) {
    this.setData({
      number:e.detail.value.length,
      para:e.detail.value
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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