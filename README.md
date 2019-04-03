#此项目使用说明
trunk的svn地址：http://10.105.112.62/svn/ETradeSrc/F2E/trunk/www_etrade

1. 确保安装了nodejs，以及版本"node": ">= 4.0.0", "npm": ">= 3.0.0"
2. 在终端里运行如下步骤
```
	cd 项目地址
```
```
	npm install --registry=https://registry.npm.taobao.org
```
3. 运行下面命令启动项目
```
	npm run start
```
* 注意终端里的端口提示，新版模板采用了自动寻找端口功能，端口由8080叠加

4. 运行下面命令打包项目
```
	npm run build

```
5.打包后的文件在dist目录下 想dist目录的内容上传到服务器即可(测试阶段上传到10.139.34.219堡垒机上 D:\edtrade\www_etrade下)
```
	npm run build

```




开发顺手：
1、所有开发在src目录下
2、	pages：页面

	compnents:公用组件

	router:路由配置

	新增页面：首先在pages里加页面文件 --->  在router下去配置路由

3、本项目引入mint-ui组建库 文档查阅：http://mint-ui.github.io/docs/#/zh-cn2

4、小程序开发 需引入weixin-js-sdk 用于小程序必须的部分初始化操作
```
    npm install weixin-js-sdk --save-dev
```
###################
#上线确认：
1、前端：各个环境config.*.js配置是否正确
	a、CRYPTO_KEY_OPEN 密钥开关
	b、SERVICE_ADDRESS 主服务地址
	c、ROOT_URL 主地址
	d、调用weixin-js-sdk里使用到wx.config的地方debug模式是否关闭
	e、router/index.js中路由第一个转向是否默认为：redirect:Main
	f、router/index.js中路由权限是否做了限制：(router.beforeEach((to, from, next)中)
2、小程序端：
    a、project.config.json 文件中：appid各环境是否配置正确
    b、app.js中globalData.url配置是否切换到对应环境的url
3、微信公众号绑定
	a、是否关联微信公众号
	b、合法域名及js合法请求域名是否配置
	c、注意：weixin-js-sdk开发是基于公众号的appid
	d、wx.config配置校验在不使用jsApiList里的api接口的话，可不做这一步(优化页面加载速度)。
4、确认
	a、小程序版本和前端版本是否配套及一致(注意：生产小程序需要审核时间！！！！)。

####### 关于本地模拟 操作流程 按如下顺序修改 begin ############
1、main.js 中，注释如下代码
		
		//  Indicator.open({
        //    text: '',
        //    spinnerType: 'fading-circle'
        //  });
2、register.vue中  搜索:InterfaceService.doCustRegister
下面有一个备注  /***本地测试打开注释***/ 的代码，打开即可
  //data ={"respCode":"0000","respData":{"respCode":"0000","respMsg":"","userCode":"user002","userName":"chenyi","userMobile":"13127898730","wxUuid":"o3tu35ZAb635AfcoTImNjibW4RLE","headImage":"https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLjzrU9E0QibibzFcNRPvbWZgjyADrmbcB1tPwibf1GmicuPhkCUhmj1lO1kDHCoQgD6XF8L22bahqLuQ/132","deptCode":null,"identityType":"0","corName":"绿地金服","corNames":null,"providers":[],"deptName":"技术部","warnMsgID":null,"warnMsg":null,"cityNotification":null,"versionNotification":"0","points":0},"respMsg":"成功","systemTime":"2018-11-01 11:10:44","txCode":null,"respType":"6","ip":null};
3、流程：注册页==》输入库中存在的手机号（如：13127898730）==》获取验证码（浏览器debug查看返回的validateCode）==》注册成功前往首页
4、说明
	a、按钮点击没反映又不报错说明是前往小程序原生页面。
	b、对2中的data关键字段说明
		identityType：用户的身份类别，不同用户页面显示的值会不一样
		其他字段调试人员可以让后端同事协助，查找自己对应的帐号信息，并对相应值进行替换
####### 关于本地模拟 操作流程 按如下顺序修改 end ############

######## 威特力焊机项目 begin ########
1|引用了ivew的手机端样式控件
	npm install iview --save
2|前往 焊接中....页面的时机  welding
  a、当首页点击后 ，byte0里是焊接中的状态。前往
  b、可以返回到编辑页
  c、焊接中那些参数可以调？
  		mig里是送丝速度和电压
		tig里是电流
		mma里是电流和force电弧推力
    ？？会出现选择了和当前焊接模式不同的数据？？
	 0.5s会上发一次，焊接中的状态...电流、电压
3|首页逻辑需要修正
  a、点击后判断当前的是否焊接中...--第一次收到需要判断用户当前操作的模式对不对，不对切换 ，第一次收到直接跳转
  b、是前往焊接中页面，同时会返回当前模式的数据;
  c、焊接中只能在当前焊接模式下编辑和查阅，不能切换模式，也不能修改太多的参数
  d、TODO:焊接中返回到每个模式编辑页中，只有部分参数可以被编辑
  e、TODO:在每个编辑页中逗留五秒未操作就自动前往焊接中的页面...
4、焊接中的状态
   a、模式里参数不能改
   b、历史和存储的数据不能应用
5、蓝牙模块逻辑
	a、显示上次连接的蓝牙
	b、扫描加载更多
	c、扫描more
	d、怎么修改呢？？？在首页。。
	e、目前有三种扫描状态：0、1、2
6、接收、下发
	a、时间间隔1400ms,次数5次  安卓中配置

7、关于首页的逻辑梳理
	a、点击选择蓝牙后跳转至本页面
	b、编辑页返回至本页面
		---常规编辑页
		---焊接中的编辑页
	c、初始化 默认选中一个c位模式 不触发请求蓝牙
	d、焊接状态：
		---焊接中：
		    i.点击选择非当前焊接模式则提示warning,可切换，存储和历史可查看不能应用
		   ii.点击同一个模式，不需要重新发请求了，机器会一直上发。
		  iii.如果,有上发焊接中状态和电压、电流，且五秒内没有操作界面前往welding页
		---非焊接中：
		   点击选择模式出现loading,所有流程都可通行
8、全局控制参数及日志设计
	a、定时器时间
	b、开启开关(日志，测试等)
	c、深度日志设计改造(console,alert):
		---wtlLog:info、error
9、蓝牙细致控制
    a、点击选择的话，关闭蓝牙连接，重新连接
	b、否则回到首页不发起，连接操作，可以获取连接状态
######## 威特力焊机项目 end   #######
打包注意：
	1、各种开关
	2、router.index.js:默认的路由路径
20190301
	a、tig_man模式中:
		//关闭 折线动图
		// this.drawCharMainContrl(this.nowModelTypeName);
		//关闭重新赋值
		// this.keysChangelistMap(list);
		推荐值修正成正负10 调整为9
	b、关于高低位调整如89字节，8存的是低位9是高位，数据解析已经修正应该是先转成2进制
		69 01000101 则高位是：0101 低位：0100 组成一组：89字节数据即 0405
		通用方法：jinzhiChangeFuc
	c、新增安卓通用sharepreferences存储模式
		queryKeyStorage
		saveKeyStorage
	d、mma tig 中整数变量不需要小数点 --取消监听 和特殊处理
	e、上传了不是当前选中的模式的话，返回，页面不再跳转
	f、tig_man模式增加 记忆之前修改的参数key
	g|在memorymanage和savemanage页 把self.$store.state.nowModelDirectice='';//置空要不然utils中builddata的逻辑会return，造成不及时的数据
	i、 savedetail中
		// this.nowModalTypeId=this.$route.query.nowModalTypeId;//主页中的id
    	this.nowModalTypeId=this.$store.state.nowModalTypeId;//主页中的id
20190324
	a、图标替换
	b、弹层图标替换
20190325
   a、首页修改 man和syn合并成一个页面上

######## 威特力焊机项目 end   #######
