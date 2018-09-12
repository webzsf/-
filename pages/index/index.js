//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
  	searchCity: "",
    list: [],
    mask: true,
    showView: false,

    height:"",
  	categoryList:[
      [
        { "src":"https://localhost/images/item/5.png","name":"美食"},
        {"src":"https://localhost/images/item/1.png","name":"美团超市"},
        {"src":"https://localhost/images/item/6.png","name":"生鲜果蔬"},
        {"src":"https://localhost/images/item/10.png","name":"美团转送"},
        {"src":"https://localhost/images/item/2.png","name":"跑腿代购"},
        {"src":"https://localhost/images/item/3.png","name":"晚餐优选"},
        {"src":"https://localhost/images/item/4.png","name":"甜点饮品"},
        {"src":"https://localhost/images/item/8.png","name":"家常菜"},
        {"src":"https://localhost/images/item/9.png","name":"龙虾烧烤"},
        {"src":"https://localhost/images/item/7.png","name":"块食简餐"}
      ],

      [
        {"src":"https://localhost/images/item/2.png","name":"品牌连锁"},
        {"src":"https://localhost/images/item/3.png","name":"异国料理"},
        {"src":"https://localhost/images/item/4.png","name":"无辣不欢"},
        {"src":"https://localhost/images/item/5.png","name":"浪漫鲜花"},
        {"src":"https://localhost/images/item/1.png","name":"甜蜜蛋糕"},
        {"src":"https://localhost/images/item/6.png","name":"暖胃粉面"},
        {"src":"https://localhost/images/item/10.png","name":"炸鸡零食"},
        {"src":"https://localhost/images/item/8.png","name":"包子粥铺"},
        {"src":"https://localhost/images/item/9.png","name":"龙虾烧烤"},
        {"src":"https://localhost/images/item/7.png","name":"送药上门"}
      ]

    ]
    
  },

 
  onLoad: function () {

    // shield.addEventListener("touchstart",function(e){
    //                 e.stopPropagation();
    //                 e.preventDefault();
    //             },false);
     var height= wx.getSystemInfoSync().windowHeight;
  	wx.request({
      url:'https://localhost/data/index1.json',
      success: function(res){
        
        if(res.data.success === true){
          this.setData({
            height:height,
            list: res.data.data.restaurant,
          })
        }
        console.log(this.data.list)
      }.bind(this)
    })  
    
  },
  linkShopDetail: function(){
    wx.navigateTo({
      url: '/pages/shopDetail/shopDetail',
    })
  },
  changeViewId: function(e){
    // console.log(e)
  },
 intoMask: function(){
    this.setData({
      mask: false,
      showView: true

    })
    // console.log(this.data.mask)
  },
  onShow: function(){
  	
  	
    
  },
  intoSearch: function(){
  	wx.navigateTo({
  		url: '/pages/address/address'
  	})

  },
  intoIndex: function(){
    this.setData({
      mask: true,
      showView: false
    })
  },
  stoppro: function(e){
    // console.log(111111)
    return
  }

})
