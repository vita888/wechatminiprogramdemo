//index.js
//获取应用实例
var app = getApp()
var scroll=['first','second','third','first']
Page({
  
  data: {
    toView: 'first',
    scrollTop:0,
   imgUrls: [
      '../../images/banner-1.jpg',
      '../../images/banner-2.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 1500,
    duration: 500,
    listItems:null,
  },

  
  onShow: function () 
  {
    var that =this;
    console.log(this.data.toView);
    clearInterval;
    var k=setInterval(turn,3000);
    function turn(){
      for(var i=0;i<scroll.length;i++){
        if(that.data.toView==scroll[i]){
          that.setData({
           toView:scroll[i+1]
            })
        break;
        }
      }
     }
    // 页面显示
  },
 
  onLoad: function () {
    var that = this;
    wx.request({
      url: 'https://zhangdetalk.com/class/index.php',
      data: {

      },
      method: 'GET', 
      header: {
        'content-type':'application/json'
      }, // 设置请求的 header
      success: function(res){
        console.log(res);
        that.setData({
          listItems:res.data.list
        })
      }
    })
  },
})
