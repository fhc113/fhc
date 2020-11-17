<template>
    <div id="app">
        <el-row :gutter="20">
  <el-col :span="16"><div class="grid-content bg-purple">
          <div class="one">
            <p class="onep"><i class="el-icon-s-platform dongdong"></i>&nbsp;今日工作
              <span class="shijian"> <i class="el-icon-arrow-left"></i> 
               2019-02-11  至  2019-02-17 <i class="el-icon-arrow-right"></i>
                 </span>
            </p>
            <br>
          </div>
          <div class="twod">
            <p class="zhouyue">
              <span class="www">
           <el-radio-group v-model="tabPosition">
              <el-radio-button label="zhou" class="daxiao">周</el-radio-button>
              <el-radio-button label="yue" class="daxiao">月</el-radio-button>
           </el-radio-group>
              </span>  
            </p>
            <br>
              <div class="xiang">
              <el-tooltip class="item" effect="dark" content="提示文字" placement="bottom" style="margin-left:13px;">
                  <el-button><img src="../assets/img/ri.png" style="width:80%;"><br>
                      <img src="../assets/img/chen.png" style="width:80%;" class="hid">
                  </el-button>  
              </el-tooltip>
               <el-tooltip class="item" effect="dark" content="提示文字" placement="bottom">
                  <el-button><img src="../assets/img/yi.png" style="width:80%;"><br>
                      <img src="../assets/img/chen.png" style="width:80%;" class="hid"></el-button>
              </el-tooltip>
               <el-tooltip class="item" effect="dark" content="提示文字" placement="bottom">
                  <el-button><img src="../assets/img/san.png" style="width:80%;"><br>
                      <img src="../assets/img/chen.png" style="width:80%;" class="hid"></el-button>
              </el-tooltip>
               <el-tooltip class="item" effect="dark" content="提示文字" placement="bottom">
                  <el-button><img src="../assets/img/si.png" style="width:80%;"><br>
                      <img src="../assets/img/chen.png" style="width:80%;" class="hid"></el-button>
              </el-tooltip>
               <el-tooltip class="item" effect="dark" content="提示文字" placement="bottom">
                  <el-button><img src="../assets/img/wu.png" style="width:80%;"><br>
                      <img src="../assets/img/chen.png" style="width:80%;" class="hid"></el-button>
              </el-tooltip>
               <el-tooltip class="item" effect="dark" content="提示文字" placement="bottom">
                  <el-button><img src="../assets/img/liu.png" style="width:80%;"><br>
                      <img src="../assets/img/chen.png" style="width:80%;" class="hid"></el-button>
              </el-tooltip>
               <el-tooltip class="item" effect="dark" content="提示文字" placement="bottom">
                  <el-button><img src="../assets/img/qi.png" style="width:80%;"><br>
                      <img src="../assets/img/chen.png" style="width:80%;" class="hid"></el-button>
              </el-tooltip>
              </div><br>
               <p class="twop"><i class="el-icon-date dongdong"></i>&nbsp;日程:1
              <span class="shijian">
                <el-radio-group v-model="tabPosition1">
              <el-radio-button label="wo" class="daxiao">我</el-radio-button>
              <el-radio-button label="wailai" class="daxiao">外来</el-radio-button>
           </el-radio-group>&nbsp;&nbsp; 
           <i class="el-icon-arrow-down lan"></i>
  
                 </span>
            </p>
            
          </div>
          <p>
            <!-- <el-collapse v-model="activeNames" @change="handleChange">
               <el-collapse-item title="+'<i class=''></i>'+待办事项" name="3">
                <div>简化流程：设计简洁直观的操作流程；</div>
                <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
                <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
               </el-collapse-item>
            </el-collapse> -->
            <el-collapse accordion>
              <el-collapse-item>
                <template slot="title">
                 <i class="el-icon-bell"></i><span class="iii">待办事项：3</span> 
                </template>
                <div class="eldiv">&nbsp;&nbsp;&nbsp;<i class="el-icon-s-opportunity cheng"></i>跟进广西南宁汉麻客户的需求<span class="you">昨日9:30</span></div>
                <div class="eldiv">&nbsp;&nbsp;&nbsp;<i class="el-icon-s-opportunity cheng"></i>外出拜访高新区星光大道125号海鲜批发商<span class="you">昨日9:30</span></div>
                <div class="eldiv">&nbsp;&nbsp;&nbsp;<i class="el-icon-s-opportunity cheng"></i>完成cold call 30通<span class="you">昨日9:30</span></div>
              </el-collapse-item>
            </el-collapse>
            </p>
            <br>
             <p class="yap"><i class="el-icon-s-platform dongdong"></i>&nbsp;工作圈
              <span class="shijian">  <el-tabs v-model="activeName" @tab-click="handleClick">
              <el-tab-pane label="圈子" name="first">
                <div class="tabdiv">
                 <img src="../assets/img/1.png" class="lalatu">
                 <img src="../assets/img/2.png" class="lalatu">
                 <img src="../assets/img/3.png" class="lalatu">
                 <img src="../assets/img/4.png" class="lalatu">
                 <img src="../assets/img/5.png" class="lalatu">
                </div>
              </el-tab-pane>
              <el-tab-pane label="话题" name="second">
                 <div class="tabdiv">
                  <img src="../assets/img/w1.png" class="wtu">
                  <img src="../assets/img/w2.png" class="wtu">
                  <img src="../assets/img/w3.png" class="wtu">
                  <img src="../assets/img/w1.png" class="wtu">
                  <img src="../assets/img/w2.png" class="wtu">
                  <img src="../assets/img/w3.png" class="wtu">
                  <br><br>
                  <div class="block">
                    <span class="demonstration"></span>
                    <el-pagination
                      @size-change="handleSizeChange"
                      @current-change="handleCurrentChange"
                      :current-page.sync="currentPage3"
                      :page-size="50"
                      layout="prev, pager, next, jumper"
                      :total="1000">
                    </el-pagination>
                  </div>
                </div>
              </el-tab-pane>
              <el-tab-pane label="我的动态" name="third">
                 <div class="tabdiv">
                 
                </div>
              </el-tab-pane>
            </el-tabs>
                 </span>
            </p>
      </div>
      </el-col>
  <el-col :span="8"><div class="grid-content bg-purple">
            <p class="nidu">
              <i class="el-icon-message-solid" style="color:blue;"></i>
              &nbsp;&nbsp;公告: &nbsp;通知:开工大吉,新年批示。 <span class="you el-icon-menu"></span>
            </p>
            <div class="sixiao">
                <img src="../assets/img/shangji.png" class="gudan">
                <img src="../assets/img/gendan.png" class="gudan">
                <img src="../assets/img/kehu.png" class="gudan">
                <img src="../assets/img/hetong.png" class="gudan">
            </div>
             <p class="nidu">
              <i class="el-icon-loading" style="color:blue;"></i>
              &nbsp;&nbsp;仪表盘: &nbsp;<span class="you el-icon-menu"></span>
            </p>
            <div class="biii">
              <img src="../assets/img/biao1.png" class="biao">
              <img src="../assets/img/biao2.png" class="biao">
              <img src="../assets/img/biao3.png" class="biao">
            </div>
      </div></el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    name:'index2',
   
    data() {
      return {
        tabPosition: 'zhou',
        tabPosition1:'wo',
        activeName: 'first',
    
      };
    },
    methods: {
      handleChange(val) {
        console.log(val);
      },
      
    }
  };
</script>
<style>
  *{
    margin: 0 auto;
    padding: 0 0;
  }
  .gudan{
    margin: 2px 5px;
    width: 45%;
  }
  .gudan:hover{
    cursor: pointer;
  }
  .biii{
    width: 90%;
    margin-top: 10px;
  }
  .biao{
    margin-left: 10px;
    
    width: 90%;
  }
  .nidu{
    font-size: 10px;
    background-color: white;
    padding: 5px 0 5px 0px;
    margin-top: 5px;
    width: 90%;
    border: 0.5px gainsboro solid;
  }
  .nidu i{
    margin-left: 10px;
  }
  .sixiao{
    /* margin: 20px; */
    margin-top: 20px;
    background-color: white;
    width: 90%
    
  }
  .el-icon-arrow-right:before {
    content: "";
  } 
  .el-icon-arrow-left:before {
    content: "";
  } 
  .el-pager li{
    font-size: 9px;
    min-width: 20.5px;
        padding: 0 0px;
  }  
  .el-pagination button, .el-pagination span:not([class*=suffix]){
    font-size: 9px;
  }
  .el-pagination__editor.el-input .el-input__inner {
    height: 13px;
    padding: 3px 3px;
  }
  .el-input__inner{
    padding: 3px 3px;
  }
  .el-input{
    padding: 3px 3px;
        font-size: 9px;
  }
  .cheng{
    color: coral;
  }
  .eldiv{
    font-size: 8px;
    padding: 3px 0;
  }
  .lalatu{
    text-align: center;
    margin-left: 30px;
    width: 90%;
  }
  .block{
    margin-left: 350px;
  }
  .wtu{
   
    width: 31.5%
  }
  .wtu:nth-of-type(1){
    margin-left: 30px;
  }
  .wtu:nth-of-type(4){
    margin-left: 30px;
  }
  .you{
    float: right;
    margin-right: 40px;
  }
  /*去除滚动条*/
  ::-webkit-scrollbar {
     width: 0 !important;
   }
   ::-webkit-scrollbar {
     width: 0 !important;height: 0;
   }
   
   .item {
      margin: 4px;
    }
  .el-row {
    margin-bottom: 20px;
    
  }
  .el-col {
    border-radius: 4px;
  }
  /* .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  } */
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .onep{
    font-size: 10px;
    background-color: #ffffff;
    border: 0.5px solid darkgrey;
    padding: 5px 0px;
    margin-top: 5px;
  }
  .yap{
    margin-top: -30px;
    font-size: 10px;
    background-color: #ffffff;
    /* border: 0.5px solid darkgrey; */
    padding: 13px 0px;
  }
   .twop{
    font-size: 10px;
    background-color: #ffffff;
    border-bottom: 0.5px solid darkgrey;
    padding: 5px 0px;
  }
  .dongdong{
    margin-left: 15px;
    color:skyblue;
  }
  .shijian{
    float: right;
    margin-right: 20px;
  }
 .el-radio-button__inner{
   padding: 2px 5px;
   border-radius: 0px;
   font-size: 12px;
 }
 .lan{
   color: #409eff;
 }
 .www{
   float: right;
   margin-top: -15px;
   margin-right: 20px;
 }
 .item{
   margin: 0;
   width: 19%;
 }
 .el-button{
   padding: 0;
    width: 13.5%;
 }
 .el-button+.el-button{
   margin-left: 0;
 }
 .hid{
   display: none;
 }
 .el-radio-button__inner{
    font-size: 6px;
 }
 .iii{
   margin-left: -310px;
 }
.el-collapse-item__header{
  font-size: 10px;
  margin-left: -300px;
  padding: 0;
  height: 28px;
}
.tabdiv{
  /* overflow-x: scroll; 
  white-space: nowrap; */
  border: none;
  margin-left: 78px;
  width: 700px;
}
.el-tabs__item{
  border: none;
  font-size: 8px;
  height: 20px;
  margin-top: -50px;
}
.el-tabs__item:nth-of-type(2){
  margin-left: 600px;
}
.el-tabs__nav{
  margin-top: -3px;
}
.el-tabs__nav-wrap::after{
    content: "";
    width: 100%;
    height: 0;
    background-color: #E4E7ED;
    z-index: 1;
}
/* .el-tabs__nav{
  height: 0px;
  background-color: white;
} */
.el-tabs__active-bar{
  height: 0;
}
</style>