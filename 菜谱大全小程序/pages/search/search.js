// pages/search/search.js
Page({

  data: {
    searchIcon: false,
    menu: '',
    result: [],
  },

  focus: function() {
    this.setData({
      searchIcon: true
    })
  },

  blur: function() {
    if (!this.data.menu) {
      this.setData({
        searchIcon: false
      })
    }
  },

  // 输入需要搜索的菜谱
  input: function(e) {

    this.setData({
      menu: e.detail.value
    })
  },

  // 进行搜索，并将菜谱呈现出来
  searchTap: function() {

    if (this.data.menu == '') {
      wx: wx.showToast({
        title: '请输入需要查询的菜谱名称',
        icon: 'none',
      })
      return
    }
    wx: wx.request({
      url: 'http://apis.juhe.cn/cook/query.php',
      data: {
        key: '72b40902ca22dcb83b69ecd3c64cb363',
        menu: this.data.menu
      },
      success: (res) => {
        let {error_code,data,reason} = res
        let result = data.result.data
        console.log(result)
        if (res.data.error_code == 0) {
          this.setData({
            result
          })
        } else {
          wx: wx.showToast({
            title: res.data.reason,
            icon: 'none',
          })
          return
        }
      },
    })
  }
})