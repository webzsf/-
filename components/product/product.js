// components/product/product.js
Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /**
   * 组件的属性列表
   */
  properties: {
    product: {
      type: Object,
      value: {},
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
    }
  },
  /**
   * 组件的初始数据
   */
  data: {

  },
  changeNumEvent: function (e) {
    console.log(e)
  },
  /**
   * 组件的方法列表
   */
  methods: {
    onNumEvent: function (e) {
      console.log(e.detail)
      this.triggerEvent("numEvent", e.detail)
    }
  }
})
