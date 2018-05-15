// pages/enterThePage/enterThePage.js
// Page({
//   content:function() {
//     wx.navigateTo({
//       url: '/pages/address/address'
//     })
//   },
//   content1: function () {
//     wx.navigateTo({
//       url: '/pages/submitOrder/submitOrder'
//     })
//   },
//   data: {
//     focus: false,
//     inputValue: ''
//   }
// })

var app = getApp()
Page({
  data: {
    date: '2016-11-08',
    time: '12:00',
    array1: ['北区', '东区', '南区', '西区'],
    array2: ['顺丰快递', '韵达快递', '圆通快递', '中通快递']
  },

  onLoad: function () {
  },

  selectSchool: function (e) {
    this.setData({
      index: e.detail.value
    })
  },
  selectExpress: function (e) {
    this.setData({
      index: e.detail.value
    })
  },
  content: function () {
    wx.navigateTo({
      url: '/pages/address/address'
    })
  },
  content1: function () {
    wx.navigateTo({
      url: '/pages/submitOrder/submitOrder'
    })
  },
})