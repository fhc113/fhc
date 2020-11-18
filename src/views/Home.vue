<template>
  <div id="app">
    <div class="denglu">
      <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="账号密码登录" name="first" class="guanl">
      <form>
      <p><i class="el-icon-mobile-phone"><input type="text" placeholder="请输入你的账号" required></i></p>
      <p><i class="el-icon-lock"><input type="password" placeholder="请输入你的密码"></i></p>
      <p class="xiaop"><el-checkbox v-model="checked"></el-checkbox>新弹窗体<span> ( 如何设置 ) 获取MAC</span> <span>忘记密码</span></p>
      </form>
      <router-link tag="lo" to="/fen">
      <button type="button" class="butt">登录</button>
      </router-link>
        
        <br>
        <p class="xiaop">初次使用企业微信扫码登录请绑定<span>(绑定说明)</span><i class="el-icon-notebook-2 y2"></i></p>
    </el-tab-pane>
    <el-tab-pane label="其他方式登录" name="second" class="guanl" >
        <img src="../assets/img/QQ图片20201110135229.png" class="tu">
        <p>请使用微信扫描二维码登录</p>
        <p>“CRM”</p>
        <p class="xiaop">初次使用企业微信扫码登录请绑定<span>(绑定说明)</span><i class="el-icon-notebook-2 y2"></i></p>
    </el-tab-pane>
  </el-tabs>
    </div>
    
  </div>
</template>

<script>

export default {
  name: "home",
  data() {
      return {
        activeName: 'first'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    } 
};

</script>
<style scoped>
  #app{
    background-image: url("../assets/img/QQ图片20201110090135.png");
    width: 100%;
    height: 520px;
    background-color: black;
  }
  .denglu{
    background-color: white;
    float: right;
    margin-right: 200px;
    margin-top: 100px;
    /* padding: 10px 20px; */
    padding: 10px 20px 0px 20px;
    opacity: 1;
    border-radius: 5px;
  }
  .guanl{
    margin: 0 10px;
    width: 190px;
    /* height: 200px; */
    text-align: center;
    font-size: 8px;
    
  }
  form i {
            border-bottom: 1px solid gainsboro;
            background-color: white;
            height: 26.5px;
        }
  input{
    border: none;
    height: 25px;
    margin-top: 0px;
  }
  .xiaop{
    font-size: 8px;
    /* margin-left: -150px; */
  }
  .xiaop span{
    color: #0088fe;
    margin-top: 20px;
  }
  .xiaop span:nth-of-type(2){
    float: right;
    margin-right: 20px;
    margin-top: 6px;
    color: black;
  }
  .butt{
    padding: 5px 20px;
    background-color: #0088fe;
    color: white;
    text-align: center;
    border: none;
    width: 200px;
    border-radius: 5px;
    margin-top: 25px;
  }
  .butt:hover{
    cursor: pointer;
  }
  .xiaop:nth-of-type(2){
    margin: 50px;
  }
  .y2{
    font-size: 15px;
  }
  .tu{
    width: 54%;
    padding: 10px 0;
  }
</style>
