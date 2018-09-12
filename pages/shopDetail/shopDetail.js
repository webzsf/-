// pages/shopDetail/shopDetail.js
Page({
  data:{
    qisong: 0,
    minutes: 0,
    distance: 0,
    message: "",
    //数据
    list: [],
    scrollViewHeight: "",
    //分类滚动视图高度
    typeScrollViewHeight: "",
    //商铺列表滚动视图高度
    shopScrollViewHeight: "",
    //分类选中的typeid
    chooseType: "",
    //总价格
    totalPrice: 0,
    //选中物品num
    chooseProductsNum: 0,
    //遮盖是否隐藏
    isMask: true,
    //选中的产品列表
    chooseProducts: {},
    //头部是否展示
    isHeaderHide: true
  },
  // 点击分类
  chooseTypeFn: function(e){
    var typeId = e.target.dataset.typeid;
    this.data.list.forEach(function (item, index) {
      if ((index + 1) == typeId) {
        return item.typeChoosed = 'choosed';
      }
      item.typeChoosed = '';
    })
    // 切换id
    this.setData({
      chooseType: typeId,
      list: this.data.list
    })
  },
  //监听子组件数量改变事件
  onNumEvent: function (e) {
    console.log(e.detail)
    var typeId = e.detail.data.typeid;
    var productId = e.detail.data.productid;
    //获取type索引值 //获取产品索引值
    var typeIndex = 0;
    var productIndex = 0;
    var list = this.data.list;
    for (let i in list) {
      if (e.detail.data.typeid == list[i].id) {
        typeIndex = i;
        for (let j in list[i].data) {
          if (+e.detail.data.productid == list[i].data[j].id) {
            productIndex = j;
            break;
          }
        }
      }
    }
    //获取当前更改数量的数据
    var currentData = this.data.list[typeIndex].data[productIndex];
    console.log(typeIndex, productIndex, currentData)
    //加法
    if (e.detail.type == "add") {
      currentData.num++;
      this.data.list[typeIndex].choosedNum++;
      this.data.totalPrice += +currentData.price;
    }
    else {//减法
      currentData.num--;
      this.data.list[typeIndex].choosedNum--;
      this.data.totalPrice -= +currentData.price;
    }
    this.setData({
      list: this.data.list,
      totalPrice: this.data.totalPrice
    })
    // 本地存储总价
    wx.setStorage({
      key: "totalPrice",
      data: this.data.totalPrice
    })
    // 本地存储选中产品
    wx.getStorage({
      key: "chooseProducts",
      success: function (res) {
        currentData.typeid = typeId;
        res.data['t' + typeId + 'p' + productId] = currentData;
        var totalNum = 0;
        for (var item in res.data) {
          totalNum += res.data[item].num
        }
        console.log(totalNum)
        if (totalNum == 0){
          this.setData({
            isMask: true
          })
        }
        // 存储数据
        wx.setStorage({
          key: 'chooseProducts',
          data: res.data,
        })
        this.setData({
          chooseProductsNum: totalNum,
          chooseProducts: res.data
        })
      }.bind(this),
      fail: function () {
        var storage = {};
        currentData.typeid = typeId;
        storage['t' + typeId + 'p' + productId] = currentData;
        // 存储数据
        wx.setStorage({
          key: 'chooseProducts',
          data: storage,
        })
        var totalNum = 0;
        for (var item in storage) {
          totalNum += storage[item].num
        }
        if (totalNum == 0) {
          this.setData({
            isMask: true
          })
        }
        this.setData({
          chooseProductsNum: totalNum,
          chooseProducts: storage
        })
      }.bind(this)
    })
  },
  //点击头部事件
  toggleMore: function(e){
    this.setData({
      isHeaderHide: false,
      isMask: false,
    })
  },
  //监听子组件的弹窗事件
  popModalEvent: function (e) {
    this.setData({
      isMask: false,
      chooseProducts: e.detail.data
    })
    console.log(e.detail)
  },
  //关闭mask
  toggleMask: function (e) {
    this.setData({
      isMask: true,
      isHeaderHide: true
    })
  },
  //监听清空购物车
  onclearCar: function (e) {
    wx.removeStorageSync("totalPrice")
    wx.removeStorageSync("chooseProducts")
    for (var i in this.data.list) {
      this.data.list[i].choosedNum = 0
      for (var j in this.data.list[i].data) {
        this.data.list[i].data[j].num = 0
      }
    }
    this.setData({
      isMask: true,
      list: this.data.list,
      totalPrice: 0,
      chooseProductsNum: 0,
      chooseProducts: {}
    })
  },
  //跳转页面
  skipOrderDetail: function(){
    wx.navigateTo({
      url: '/pages/order/order',
    })
  },
  onLoad: function(){
    wx.request({
      url: 'https://localhost/data/list.json',
      success: function(res){
        console.log(res.data.data)
        for (var i in res.data.data.list){
          res.data.data.list[i].choosedNum = 0;
        }
        this.setData({
          qisong: res.data.data.qisong,
          minutes: res.data.data.minutes,
          distance: res.data.data.distance,
          message: res.data.data.message,
          discount: res.data.data.discount,
          list: res.data.data.list
        })
      }.bind(this)
    })
    //获取scrollViewHeight
    var rate = wx.getSystemInfoSync().windowWidth / 750;
    var pageHeight = wx.getSystemInfoSync().windowHeight;
    var scrollViewHeight = pageHeight - 200 * rate - 100 * rate;
    this.setData({
      scrollViewHeight: scrollViewHeight
    })
  }
})