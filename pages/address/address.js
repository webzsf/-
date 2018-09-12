var city = require('../..//utils/city.js');
console.log(city)

Page({

  /**
   * 页面的初始数据
   */
  data: {
    chooseCity: "北京",
    currentCity:"北京",
    hidden1: false,
    hidden2: true,
    address: "北京",
    nowaddress: "",
    menu:[
        {"city":"国风美唐景观"},
        {"city":"公园悦府"},
        {"city":"中顺大厦"},
        {"city":"和谐家园"},
        {"city":"龙锦苑-一区"},
        {"city":"平西府【地铁站】"},
        {"city":"田园风光雅苑东区"},
        {"city":"回龙观"},
        {"city":"龙锦苑-一区"},
        {"city":"平西府【地铁站】"},
        {"city":"田园风光雅苑东区"},
        {"city":"回龙观"}


    ],
    searchLetter: [],
    letterHeight: 0,
    height: 0,
    chooseLetter: ''
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     var height = wx.getSystemInfoSync().windowHeight;
       
        var letterHeight = (height - 60) / city.searchLetter.length;
        // console.log(letterHeight)
        // console.log(height)
        this.setData({
            cityList: city.cityList,
            hotCity: city.hotCity,
            searchLetter: city.searchLetter,
            letterHeight: letterHeight,
            height: height
        })
  
  },
  chooseCity: function(){
    this.setData({
     hidden1:!this.data.hidden1,
     hidden2:!this.data.hidden2

    })

  },
  backIndex: function(e){
    // console.log(e)
    let pages = getCurrentPages();
    let prevPage = pages[pages.length-2];
    prevPage.setData({
      searchCity:e.target.id
    })
    // wx.navigateBack({
    //   url: '/pages/index/index'
    // })
    wx.navigateBack({
     delta: 1
   })
   
  },
     chooseCityMethod: function(e) {
        // console.log(e)
      
        this.setData({
            chooseCity: e.target.dataset.city
        })
    },
   
    toggleLetter: function(e) {
        // console.log(e)
        this.setData({
            chooseLetter: e.target.dataset.letter
        })
    },

    moveToggleLetter: function(e) {
       
        var touchHeight = e.touches[0].pageY;

        var realHeight = touchHeight - 60;
     
        var index = parseInt(realHeight / this.data.letterHeight);
    
        var letter = this.data.searchLetter[index];
  
        if (letter !== this.data.chooseLetter) {
        
            this.setData({
                chooseLetter: letter
            })
           
        }
    },
    getAdd: function(e){
    let pages = getCurrentPages();
    let prevPage = pages[pages.length-2];
    
    // console.log(111111)
     wx.chooseLocation({
        success: function(res) {
          let  curaddress = res.address;

          console.log(res)
          // console.log(curaddress)
          this.setData({
             address: res.name

          })
          prevPage.setData({
         searchCity:curaddress
          })
            
            }.bind(this)
        })
     // wx.getLocation({
     //  success: function(res){
     //    console.log(res)
     //  }
     // })
  }
})
