<template>
  <div class="setmanage">
      <div class="header"><Icon type="ios-arrow-back" @click="go('/newIndex')"/>SETTING</div>
      <div class="contain">
            <div class="editunit">Change unit</div>
            <div class="checklist">
                <div class="u-mm cooh" :class="nowchoose=='mm'?'choosed':''" @click="choose('mm')">MM</div>
                <div class="u-inch cooh" :class="nowchoose=='inch'?'choosed':''" @click="choose('inch')">inch</div>
            </div>
            <!-- <RadioGroup v-model="unit" class="checkboxs">
                <Radio label="MM"></Radio>
                <Radio label="inch"></Radio>
            </RadioGroup> -->
            <div class="company">Official website</div>
            <div class="company-link">
              <a @click="openWeb">http://www.wtl.com.cn/</a>
              <!-- <a @click="openWeb">http://www.grovers.ru/</a> -->
            </div>
          <div class="help">Help Message</div>
          <div class="helpDetail">
           <!-- Tel: +7 831-280-83-53 -->
           Check the website above.
          </div>
          <div class="connnect">Wiring diagram</div>
          <div class="tabs">
               <div class="m-li">
                <div class="tab"  @click="chooseIMG(4)" :class="chooseModel==4?'choosedImg':''">MIG</div>
                <div class="tab"   @click="chooseIMG(2)" :class="chooseModel==2?'choosedImg':''">TIG</div>
                <div  class="tab"   @click="chooseIMG(1)" :class="chooseModel==1?'choosedImg':''">MMA</div>  
                  <!-- <div class="tab big"  @click="chooseIMG(3)" :class="chooseModel==3?'choosedImg':''">MIG FAWS-G</div> -->
               </div>
          </div>
          <div class="connect-linesImg">
            <!-- <img v-if="chooseModel==1" src="../../assets/images/weld_setting_1.jpeg">
            <img v-if="chooseModel==2" src="../../assets/images/weld_setting_2.jpeg">
            <img v-if="chooseModel==3" src="../../assets/images/weld_setting_3.jpeg">
            <img v-if="chooseModel==4" src="../../assets/images/weld_setting_4.jpg"> -->
            <img v-if="chooseModel==1" src="../../assets/images/weld_setting_mma.jpg">
            <img v-if="chooseModel==2" src="../../assets/images/weld_setting_tig.jpg">
            <img v-if="chooseModel==4" src="../../assets/images/weld_setting_mig.jpg">
          </div>
          <div class="resetBtn">Restore  settings</div>
      </div>

    </div>
</template>

<script>
export default {
  name: "",
  components: {},
  data() {
    return {
       nowchoose:'mm',
       chooseModel:1,
       clickTimes:0
       
    };
  },

  methods: {
    goDevleper(){
      this.clickTimes+=1;
      if(this.clickTimes==10){
        this.clickTimes=0;
        this.$router.push('/develeperManage');
      }
    },
    chooseIMG(type){
      this.chooseModel=type;
    },
    openWeb(){
      window.android.openWeb();
    },
    go(url) {
      this.$router.push(url);
    },
    choose(type){
      this.nowchoose=type;
      //测试模式开关
      if(!this.GLOBAL_CONFIG.TESTFLAG){
        if(type=='mm'){
          this.callSendDataToBleUtil('setmanage','DA4000001470','1470');
        }else{
          this.callSendDataToBleUtil('setmanage','DA400100D4B1','D4B1');
        }
      }
    },
    goBack(){
      // this.go('/newIndex');
      this.$router.back() 
      console.log('触发回退');
    }
  },
  mounted: function() {
    // if (window.history && window.history.pushState) {
    //   history.pushState(null, null, document.URL);
    //   window.addEventListener('popstate', this.goBack, false);
    // } 
    if (window.history && window.history.pushState) {
        history.pushState(null, null, document.URL);
        window.addEventListener('popstate', this.goBack, false);
    }
  },
  created() {
    console.log('created');
  },
  destroyed(){
    console.log('destoryed')
    window.removeEventListener('popstate', this.goBack, false);
  }
};
</script>
<style lang="scss" scoped>
.setmanage {
  color: #61808c;
  min-height: 100vh;
  background: -webkit-linear-gradient(to top,#002c3a,#174d60);
  background: -o-linear-gradient(to top,#002c3a,#174d60);
  background: -moz-linear-gradient(to top,#002c3a,#174d60);
  background: -mos-linear-gradient(to top,#002c3a,#174d60);
  background: linear-gradient(to top,#002c3a,#174d60);
  width: 100%;
  .header {
    position: relative;
    height: 50px;
    line-height: 50px;
    font-size: 14px;
    text-align: center;
    color: #fff;
    background: #010101;
    // padding-left: 60px;
    .ivu-icon {
      font-size: 20px;
      position: absolute;
      left: 15px;
      top: 50%;
      transform: translate(0, -50%);
    }
  }
  .contain{
     margin: 0 15px;
    .checklist{
      height: 30px;;
      line-height: 30px;
        .u-mm{
          width: 70px;
          float: left;
        }
        .u-inch{
          width:70px;
          float: left;
        }
        .cooh{
          background:url(../../assets/images/weld_icon_unit_unchoose.png) no-repeat;    
          background-size: 20px;
          background-position:left center;
          padding-left: 25px;
        }
        .cooh.choosed{
          font-size: 14px;
          color: #dcedf3;
          background:url(../../assets/images/weld_icon_unit_choosed.png) no-repeat;    
          background-size: 20px;
          background-position:left center;
          padding-left: 25px;
        }

     }
    .editunit{height: 30x;font-size: 14px;color: #7dc1d4;margin-top: 20px;margin-bottom: 20px;}
    .checkboxs{height: 40px;line-height: 40px;}
    .company{height: 15px;margin-top: 20px;color: #7dc1d4;}
    .company-link{height: 20px;margin-top: 10px;margin-bottom: 20px;}
    .help{height: 20px;color: #7dc1d4;}
    .helpDetail{
      margin: 10px 5px;
    }
    .connnect{
      color: #7dc1d4;
      margin-top: 20px;
      height: 20px;
    }
    .tabs{
      margin-bottom: 20px;
      .m-li{
        color: #839baa;
        height: 40px;
        line-height: 40px;
        margin: 10px 0px;
        border-radius: 2px;
        background: linear-gradient( 
            to top,
            rgba(10,59,70,1) 0%,  
            rgba(2,46,56,1) 50%,
            rgba(10,59,70,1)  100%);
           -moz-box-shadow:0px 0px 2px 1px #103f4b;
          -webkit-box-shadow:0px 0px 2px 1px #103f4b;
          box-shadow:0px 0px 2px 1px #103f4b;
          .tab{
            text-align: center;
            height: 40px;
            width: 33.33%;
            float: left;
            border-right: 2px solid; 
          　-webkit-border-image: -webkit-linear-gradient(#16404c , #b7d4dc , #16404c)1 10 1; /* 控制边框颜色渐变 */
            border-image: linear-gradient(#16404c , #b7d4dc , #16404c)1 10 1; /* 标准的必须写在最后 */
          
          }:last-child{
            border-right: none;
          }
          .tab.choosedImg{
              font-weight: bold;
              background: #10566a;
              color: #fff;
            }
      }
    }
    .connect-linesImg{
      height: 150px;
      margin: 0 20px;
      background: #eee;
      img{
        height: 100%;
        width: 100%;
      }
    }
    .resetBtn{
      margin: 0 30px;
      margin-top: 20px;
      border-radius: 5px;
      height: 50px;
      line-height: 50px;
      text-align: center;
      font-size: 16px;
      color: #fff;
      background:#ffb300;
    }

  }
}
@media screen and (max-width: 320px) {
    .m-li .tab{
      // width: 24%!important;
      // &.big{
      //   width: 28% !important;
      // }
    }
}
</style>
