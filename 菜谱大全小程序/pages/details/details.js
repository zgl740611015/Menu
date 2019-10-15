// pages/details/details.js
let search = require("../search/search.js")
Page({

  /**
   * 页面的初始数据
   */
  data: { 
    result:null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let id=options.id
    wx:wx.request({
      url: 'http://apis.juhe.cn/cook/queryid',
      data:{
        id:id,
        key:'72b40902ca22dcb83b69ecd3c64cb363'
      },
      success:(res)=> {
        let result=res.data.result.data[0]
        console.log(result)
        this.setData({
          result
        })
      },
    })
  }
})