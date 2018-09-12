// components/shopCar/shopCar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    num: {
      type: Number,
      value: 0,
      observer: function (newVal, oldVal, changedPath) {
        // console.log(newVal, oldVal, changedPath)
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    popModal: function(e){
      if(this.data.num > 0){
        wx.getStorage({
          key: 'chooseProducts',
          success: function(res) {
            this.triggerEvent("popModal", res)
          }.bind(this)
        })  
      }
    }
  }
})
