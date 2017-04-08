// pages/content/content.js
Page({
  data:{
    title:"第一节课：小程序入门准备",
    introtext:"另外，我们也可以尝试让绝对定位元素在垂直方向上能够无限伸展。若某元素可能覆盖页脚，那么干脆为页脚添加一定的外边距，给该元素让出足够的空间。这样若是这个绝对定位元素下面没有任何其他元素的话，覆盖自然无从谈起，问题也得到了解决。",
    view:1000,
    likeIcon:"../../images/icon-heart.png",
    like:false,
    btnIcon:"../../images/icon-download.png"
  },
  
  onLoad:function(options){
    var _this = this;
    //获取屏幕宽高  
    wx.getSystemInfo({
      success: function (res) {
        var windowWidth = res.windowWidth;
        //video标签认宽度300px、高度225px，设置宽高需要通过wxss设置width和height。
        var videoHeight = (225 / 300) * windowWidth//屏幕高宽比  
        console.log('videoWidth: ' + windowWidth)
        console.log('videoHeight: ' + videoHeight)
        _this.setData({
          videoWidth: windowWidth,
          videoHeight: videoHeight
        })
      }
    })
  },
  zan : function(){
    if(this.data.like){
      this.setData({
        likeIcon:"../../images/icon-heart.png",
        like:false
      })
    }
    else{
      this.setData({
        likeIcon:"../../images/icon-heart-a.png",
        like:true
      })
    };
    console.log("四否点赞"+this.data.like)
  },

  onReady:function(res){
   
    this.videoContext = wx.createVideoContext('myVideo')
  },
  
  onShow:function(){
    
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})