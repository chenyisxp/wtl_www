

// const ROOT_URL = 'http://bozhi.greenlandfs.com';//http://47.98.83.29';
// const ROOT_URL = 'http://10.105.113.211:11001';//永刚本地ip
// const ROOT_URL = 'http://10.105.113.212:11001';//赛老板本地ip
// const ROOT_URL = 'http://10.105.113.212:11001';//赛老板本地ip

let BASE_CONFIG = {
   ONLY_CONNECT_STATUS_TOAST:true,
   DEVELOPERMODEFLAG:true,//开发者模式本地完全不和安卓交互
   LOGFLAG:false,
   TESTFLAG : false,//测试开关
   TESTDEEPTH:0,//深度
   autoRouterTime:5000,//自动前往焊接中页面的时间：ms
   DirectStart:'DA',
   callWeldTypeData:{
       migsyn:{data:'100000',crcCode:'0570',name:'MIG SYN',modelKey:'MIGSYN',url:'/weld_common?type=MIGSYN',newIndex:0},
       migman:{data:'100100',crcCode:'C5B1',name:'MIG MAN',modelKey:'MIGMAN',url:'/weld_common?type=MIGMAN',newIndex:1},
       tigsyn:{data:'100200',crcCode:'C4F1',name:'TIG SYN',modelKey:'TIGSYN',url:'/weld_tig_syn',newIndex:2},
       tigman:{data:'100300',crcCode:'0430',name:'TIG MAN',modelKey:'TIGMAN',url:'/weld_tig_man',newIndex:3},
          mma:{data:'100400',crcCode:'C671',name:'MMA',modelKey:'MMA',url:'/weld_mma',newIndex:4}
   },
   testData:{
        migsyn:{heade:'dae',headm:'dad',headc:'dac',data:'1 00 00 00 00 02 00 3C00 3D00 b400 c800 02 09 2E77'},
        migman:{heade:'dae',headm:'dad',headc:'dac',data:'2 00 3D00 c800 00 3535'},
        tigsyn:{heade:'dae',headm:'dad',headc:'dac',data:'3 00 00 03 6400 6400 02 09  2C61'},
        tigman:{heade:'dae',headm:'dad',headc:'dac',data:'4 00 c0 32 3200 32 3200 3200 e800 32 32 3200 32 50 23 3082'},
        mma:{heade:'dae',headm:'dad',headc:'dac',data:'5 82 00 01 09 6400 6400 FD9D'}
   },
   callEditDirect:{
       migsyn:{
            mode:'A0',
            material:'A1',
            gas:'A2',
            diameter:'A3',
            thickness:'A4',
            speed:'A5',
            v_welding:'A6',
            getready:'AE',
            memory:'AF'
       },
       migman:{
            mode:'B0',
            speed:'B1',
            v_welding:'B2',
            getready:'BE',
            memory:'BF'
        },
       tigsyn:{
            diameter:'C0',
            material:'C1',
            thickness:'C2',
            polatrity:'C3',
            getready:'CE',
            memory:'CF'
        },
        tigman:{
            tacdchfpulse:'D0',
            pre_gas_val:'D1',
            start_cur_val:'D2',
            slop_up_val:'D3',
            weld_cur_val:'D4',
            base_cur_val:'D5',
            pulse_fre_val:'D6',
            duty_val:'D7',
            slop_down_val:'D8',
            crater_cur_val:'D9',
            post_gas_val:'DA',
            AC_fre_val:'DB',
            AC_duty_val:'DC',
            getready:'DE',
            memory:'DF'
        },
        mma:{
            acdc:'E0',
            electrode:'E1',
            diameter:'E2',
            thickness:'E3',
            arc_force_val:'E4',
            weld_cur_val:'E5',
            getready:'ED',
            memory:'EF'
        }

   }

};

export {BASE_CONFIG};