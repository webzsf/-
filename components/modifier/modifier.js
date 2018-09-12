// components/modifier/modifier.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    num: {
      type: String,
      value: "0",
      observer: function (newVal, oldVal, changedPath) {
        // console.log(newVal, oldVal, changedPath)
      }
    },
    typeId: {
      type: String,
      value: "",
      observer: function (newVal, oldVal, changedPath) {
        // console.log(newVal, oldVal, changedPath)
      }
    },
    productId: {
      type: String,
      value: "",
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
    addNum: function(e) {
      this.changeNum(e, "add")
    },
    reduceNum: function (e) {
      this.changeNum(e, "reduce")
    },
    changeNum: function(e, type) {
      console.log(e.target.dataset)
      var data = {
        type: type,
        data: e.target.dataset
      }
      this.triggerEvent("numEvent", data)
    }
  }
})
