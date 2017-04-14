// pages/login/login.js
Page({
  data:{
    item1:'../../images/logo.png',
    title1:"小程序课堂",
    logininfo:"请输入登陆信息",
    qq:null,
    pw:null,
 },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
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
  getQQ :function(e){
    this.setData({
      qq:e.detail.value
    })
  },
  getpw:function(e){
    this.setData({
      pw:e.detail.value
    })
  },
  login:function(){
    var that = this;
    if(this.data.qq==null||this.data.pw==null){
        that.showModal("密码和QQ号不能为空")
    }else{
      wx.request({
        url: 'https://zhangdetalk.com/class/login.php',
        data: {
          qq:this.data.qq,
          pw:this.data.pw
        },
        method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
        header: {   "content-type":"application/x-www-form-urlencoded"
        }, // 设置请求的 header
        success: function(res){
          if(res.data.code==0){
            wx.setStorageSync('login_key', 1);
            wx.switchTab({
              url: "/pages/index/index",
            })
          }else if(res.data.code==1){
            that.showModal("密码不正确");
          }else{
            that.showModal("您不是会员");
          }
        }
      })
    }
  },
    showModal :function (content)
  {
        wx.showModal({
          title:"提示",
          content:content,
          showCancel:false
        })
  }

  
})