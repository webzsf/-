// components/carModal/carModal.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    hide: {
      type: Boolean,
      value: true,
      observer: function (newVal, oldVal, changedPath) {
        // console.log(newVal, oldVal, changedPath)
      }
    },
    chooseProductsNum: {
      type: Number,
      value: 0,
      observer: function (newVal, oldVal, changedPath) {
        // console.log(newVal, oldVal, changedPath)
      }
    },
    chooseProducts: {
      type: Object,
      value: {},
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
    onNumEvent: function(e){
      console.log(e.detail)
      this.triggerEvent("numEvent", e.detail)
    },
    clearCar: function(e) {
      this.triggerEvent("clearCar")
    }
  }
})
