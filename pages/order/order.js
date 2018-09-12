
// pages/order/order.js
Page({
  data: {
    // 总价格
    wholePrice:50,
    // 渲染订单列表
    list:[
     { id: "1", price: "12.5", title: "脆皮手枪腿", sales: "265", img: "01.jpg",num:'3'},
     {id: "2", price: "12", title: "黄金鸡块5块装T", sales: "265", img: "02.jpg", num: '4'},
     { id: "3", price: "11", title: "两块新奥尔良烤翅T", sales: "265", img: "03.jpg", num: '5' }
    ],
    seller:{name:"肯德基宅急送(平西王站)", img: "seller.jpg"},
    chooseTableware:"未选择",
    itemList: ['不需要餐具', '1人', '2人','5人','8人','10人以上'],
    like:"口味、偏好等要求",
    time:'未选择',
    username:'',
    tel:'',
    sex:'',
    address:'',
    isShow:true
  },
  // 点击新增地址
  addNewAddress:function() {
      wx.navigateTo({
      url:"/pages/add/add"
    })
  
  },
  

  //点击出现餐具数量
  showTablewareNum:function() {
    wx.showActionSheet({
   itemList: ['不需要餐具', '1人', '2人','5人','8人','10人以上'],
    success: function(res) {
      console.log(res.tapIndex)
        
        var choose = this.data.itemList[res.tapIndex]
        this.setData({
          chooseTableware:choose
        })
     }.bind(this),
    fail: function(res) {

       console.log(res.errMsg);
       this.setData({
          chooseTableware:"未选择"
       })
    }.bind(this)
    })
  },
  // 点击口味偏好
  chooseLike:function() {
    wx.navigateTo({
      url:"/pages/more/more"
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options)
    var data = this.formatTime(new Date());
    // console.log(data);
    this.setData({
      time:data
    })
  },
  // 截取小时分钟
  formatTime: function (date) {
    var hour = date.getHours()
    // 分钟加40；
    var minute = date.getMinutes() + 40;
    if (minute>60) {
      minute = minute -60;
      hour+=1;
    }
  
    return [hour, minute].map(this.formatNumber).join(':')
  },
  formatNumber:function (n) {
    n = n.toString()
    return n[1] ? n : '0' + n
  },
  intoMessagePage: function(){
    wx.switchTab({
      url: '/pages/orderList/orderList',
    })
  },
  onShow:function() {
    wx.getStorage({
          key:"msg",
          success:function(res) {
            console.log(res.data)
            this.setData({
              tel:res.data.tel,
              username:res.data.username,
              sex:res.data.sex,
              address:res.data.address,
              isShow:false
          }) 

          }.bind(this)
        });
    wx.getStorage({
      key:"discro",
      success:function(res) {
        // console.log(res.data)
        this.setData({
          like:res.data
        })
      }.bind(this)
    })

  }
})