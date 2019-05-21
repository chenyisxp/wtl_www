<template>
  <div class="registerMain">
      <!-- <div class="global-bg-line"></div>
      <div class="register">
        <h3>测试页</h3>
          <div class="bindOperation" v-on:click="testAndroidset()">测试SharedPreferences存储方法</div>
          <div class="bindOperation" v-on:click="testAndroidget()">测试SharedPreferences取值方法</div>
          <div class="bindOperation" v-on:click="testSqliteset()">测试sqlite存储方法</div>
          <div class="bindOperation" v-on:click="testSqliteget()">测试sqlite取值方法</div>
          <div class="bindOperation" v-on:click="testSqliteupdate()">测试sqlite更新方法</div>
          <div class="bindOperation" v-on:click="testSqlitedelete()">测试sqlite删除方法</div>
       </div>
       <div class="msgmsg">
         {{returnmsg}}
       </div> -->
       <!-- <video preload='auto' id='my-video'  src='../assets/video/app_video.mp4'  webkit-playsinline='true' playsinline='true' x-webkit-airplay='true' x5-video-player-type='h5' x5-video-player-fullscreen='true' x5-video-ignore-metadata='true'  width='100%' height='100%'><p> 不支持video</p> </video> -->
   <!-- <video :class="{'hid':hidFlag}" preload='auto' muted=“muted”  webkit-playsinline='true' playsinline='true' x-webkit-airplay='true' x5-video-player-type='h5' x5-video-player-fullscreen='true' x5-video-ignore-metadata='true'    autoplay="autoplay"  width='100%' height='100%'>
      <source src="../assets/video/app_video.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video> -->
  </div>
</template>

<script>
//引入远程访问service
import { InterfaceService } from '../lib/service'
import { MessageBox ,Popup,Toast ,Indicator } from 'mint-ui'
export default {
  name: 'register',
  components: {
   MessageBox
  },
  data () {
    return {
      // featurePopupResultBean:{contentText:'<span style="color:red">1111</span><img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2200166214,500725521&fm=27&gp=0.jpg">',routeId:'goIndex|goIndex',displayType:"2",buttonText:"前往左边|前往右边",imgUrl:'http://120.55.176.236/greenlandfs_admin/attachGet?path=/productFile/popupAttach/20170106193704827/wechat_20170106_01.png'},//弹层bean
      featurePopupResultBean:{},//弹层bean
      mobilePhone:'',
      countDown:'',
      countDownFlag:false,
      phoneCode:'',
      phoneCodeLimit:false,//60秒倒计时是否结束
      timer:null,//定时器
      show:true,
      shareId:this.$route.query.shareId, //是否来自分享链接点击注册
      pageFrom:this.$route.query.pageFrom,//来自那里，准备跳往那里
      returnmsg:'未取值',
      hidFlag:true,
     } 
  },

  methods: {
    testAndroidset(){
      var aa=  window.android.setSettingInfo("unit","MM");
      Toast({
            message: '成功!'+aa,
            position: 'middle',
            iconClass: 'icon icon-success',
            duration: 2500
        });
    },
    testAndroidget(){
      var aa=  window.android.getSettingInfo("unit");
      Toast({
            message: '成功!'+aa,
            position: 'middle',
            iconClass: 'icon icon-success',
            duration: 2500
        });
    },
    testSqliteset(){
      //设值
       var aa=  window.android.testSqliteset("chenyi",10);
    },
    testSqliteget(){
      //取值
       var aa=  window.android.testSqliteget();
       this.returnmsg=aa;
      Toast({
            message: '成功!npm'+aa,
            position: 'middle',
            iconClass: 'icon icon-success',
            duration: 2500
        });
    },
    //更新
    testSqliteupdate(){
      window.android.testSqliteupdate();
    },
     //删除
    testSqlitedelete(){
      window.android.testSqlitedelete();
    }
  },
  mounted: function () {
    this.wtlLog('hahha','testpage');
    setTimeout(() => {
      this.hidFlag=false;
    }, 210);
  },
  created () {
   
  },
  computed:{
       
  }
}
</script>

<style scoped>
.registerMain{width: 100%;}
.hid{
  opacity: 0;
}
.register h3{text-align: left;font-size: 12px;line-height:2.3125rem;color: #33333}
.register input{background: #eeeeee;width: 100%;border: 0px;padding: 0;height: 44px;margin-bottom: 10px;text-indent: 20px;border-radius: 5px;line-height:44px;}
.register label{position: absolute;top: 9px;right: 0px;background: #fff;border: 1px solid #5576dc;border-radius: 4px;margin-right: 10px;color: #fefefe;font-size: 14px;line-height: 27px;width: 115px;text-align: center;}
.register input:-moz-placeholder {color: #999999; opacity:1;}
.register input::-moz-placeholder {color: #999999;opacity:1;}
.register input:-ms-input-placeholder{color: #999999;opacity:1;}
.register input::-webkit-input-placeholder{color: #999999;}
.register{padding: 0 15px;margin-top: 2.8125rem;}
.bindOperation{background: #fff;border: 1px solid #5576dc;text-align: center;color: #333;height: 45px;font-size: 18px;line-height: 45px;border-radius: 5px;}
.pass{position: relative;margin-bottom: 20px;}
.register .mint-popup{border-radius: 6px;top: 138px;}
.msgmsg{
  padding: 0 20px;
  font-size: 14px;

}
</style>
