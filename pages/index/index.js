//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    text: '这是一条会滚动的文字滚来滚去的文字跑马灯，哈哈哈哈哈哈哈哈',
    marqueePace: 20,//滚动速度
    marqueeDistance: 25,//初始滚动距离
    marqueeDistance2: 0,
    marquee2copy_status: false,
    marquee2_margin: 60,
    size: 12,
    orientation: 'left',//滚动方向
    interval: 1 ,// 时间间隔
    
   imgUrls: [
      '../../images/banner-1.jpg',
      '../../images/banner-2.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 1500,
    duration: 500,
    listItems:[
      {
      "title":"第一节课：小程序开发准备",
      "content":"小程序入门,这个属性定义溢出元素内容区的内容会如何处理。如果值为 scroll，不论是否需要，用户代理都会提供一种滚动机制。因此，有可能即使元素框中可以放下所有内容也会出现滚动条。",
      "foot":"      主讲人：Vita",
      "title2":"第二节课，小程序开发准备",
      "title3":"第三节课，小程序开发准备",
      "title4":"第四节课，小程序开发准备",
      }
    ]
  },
item1:function(){
  console.log("item1")
  wx.navigateTo({
  url: '../content/content'
})
},
  
  onShow: function () 
  {
    // 页面显示
    var vm = this;
    var length = vm.data.text.length * vm.data.size;//文字长度
    var windowWidth = wx.getSystemInfoSync().windowWidth * 0.68;// 屏幕宽度
    vm.setData({
      length: length,
      windowWidth: windowWidth,
      marquee2_margin: length < windowWidth ? windowWidth - length : vm.data.marquee2_margin//当文字长度小于屏幕长度时，需要增加补白
    });
    
    vm.run2();// 第一个字消失后立即从右边出现
  },
  run2: function () {
    var vm = this;
    var interval = setInterval(function () {
      if (-vm.data.marqueeDistance2 < vm.data.length) {
        // 如果文字滚动到出现marquee2_margin=30px的白边，就接着显示
        vm.setData({
          marqueeDistance2: vm.data.marqueeDistance2 - vm.data.marqueePace,
          marquee2copy_status: vm.data.length + vm.data.marqueeDistance2 <= vm.data.windowWidth + vm.data.marquee2_margin,
        });
      } else {
        if (-vm.data.marqueeDistance2 >= vm.data.marquee2_margin) { // 当第二条文字滚动到最左边时
          vm.setData({
            marqueeDistance2: vm.data.marquee2_margin // 直接重新滚动
          });
          clearInterval(interval);
          vm.run2();
        } else 
        {
          clearInterval(interval);
          vm.setData({
            marqueeDistance2: -vm.data.windowWidth
          });
          vm.run2();
        }
      }
    }, vm.data.interval);
  },
 
  onLoad: function () {
    console.log('onLoad')
    
  }
})
