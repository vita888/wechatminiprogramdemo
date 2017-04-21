// pages/content/content.js
Page({
  data:{
    classInfo:null,
    likeIcon:"../../images/icon-heart.png",
    like:false,
    btnIcon:"../../images/icon-download.png"
  },
  
  onLoad:function(options){
    console.log(options);
    var login_key = wx.getStorageSync('login_key');
    if(login_key!=1){
      wx.redirectTo({
        url: '../login/login',
      })
    }//登陆验证
    var that = this;
    wx.request({
    url:'https://zhangdetalk.com/class/content.php',
      data: {
        cl_id:options.cl_id
      },
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
       header: {
         'content-type':'application/json'
       }, // 设置请求的 header
      success: function(res){
        console.log(res);
        that.setData({
          classInfo:res.data.list
        })
      },
    })

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
  },
  btn : function(){
    wx.downloadFile({
  url: 'https://zhangdetalk.com/class/images/1.pdf',
  success: function (res) {
    var filePath = res.tempFilePath
    wx.openDocument({
      filePath: filePath,
      success: function (res) {
        console.log('打开文档成功')
      }
    })
  }
})
  }
})