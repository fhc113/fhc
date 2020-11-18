<template>
  <div class="app">
        <el-row class="tac">
            <el-col :span="4"><div class="grid-content bg-purple">
                <div class="blu">
                    <i class="el-icon-printer" style="margin-top:8px;margin-left:5px;margin-bottom:9px;"></i>&nbsp;&nbsp;
                      <!-- <el-select v-model="value" placeholder="客户主线">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select> -->
                    知识库
                </div>
                <div class="da-div">
                    <br>
                    <el-collapse accordion>
                    <el-collapse-item>
                        <template slot="title">
                        <i class="header-icon el-icon-folder"></i>&nbsp;&nbsp;企业文化
                        </template>
                        <div class="block">
                           <el-timeline :reverse="reverse">
                            <el-timeline-item
                            v-for="(activity, index) in activities"
                            :key="index">
                            {{activity.content}}
                            </el-timeline-item>
                        </el-timeline>
                        </div>                           
                  </el-collapse-item>
                    </el-collapse>
                   <el-collapse accordion>
                    <el-collapse-item>
                        <template slot="title">
                        <i class="header-icon el-icon-folder"></i>&nbsp;&nbsp;公司公告
                        </template>
                        <div class="block">
                           <el-timeline :reverse="reverse">
                            <el-timeline-item
                            v-for="(activity, index) in activities"
                            :key="index">
                            {{activity.content}}
                            </el-timeline-item>
                        </el-timeline>
                        </div>                           
                  </el-collapse-item>
                    </el-collapse>
                    <el-collapse accordion>
                    <el-collapse-item>
                        <template slot="title">
                        <i class="header-icon el-icon-folder"></i>&nbsp;&nbsp;24图书馆
                        </template>
                        <div class="block">
                           <el-timeline :reverse="reverse">
                            <el-timeline-item
                            v-for="(activity, index) in activities"
                            :key="index">
                            {{activity.content}}
                            </el-timeline-item>
                        </el-timeline>
                        </div>                           
                  </el-collapse-item>
                    </el-collapse> 
                      <el-collapse accordion>
                    <el-collapse-item>
                        <template slot="title">
                        <i class="header-icon el-icon-folder"></i>&nbsp;&nbsp;关于公司
                        </template>
                        <div class="block">
                           <el-timeline :reverse="reverse">
                            <el-timeline-item
                            v-for="(activity, index) in activities"
                            :key="index">
                            {{activity.content}}
                            </el-timeline-item>
                        </el-timeline>
                        </div>                           
                  </el-collapse-item>
                    </el-collapse>     
                </div>
                </div></el-col>
            <el-col :span="19">
                <div class="blu1">
                  <i class="el-icon-printer" style="margin-top:25px;margin-left:5px;display:none;padding-top:10px;"></i>&nbsp;&nbsp;
                  <el-tabs v-model="activeName" @tab-click="handleClick" class="ioii">
                    <el-tab-pane label="首页" name="first"></el-tab-pane>
                    <el-tab-pane label="企业平台" name="second"></el-tab-pane>
                    <el-tab-pane label="平台中心" name="third"></el-tab-pane>
                    <el-tab-pane label="销售中心" name="fourth"></el-tab-pane>
                </el-tabs>
                    
                </div>
                <br>
                <div class="el-col_div">
                   
                </div>
         </el-col>
        </el-row>
    </div>
   </template> 
<script>
export default {
    name:'zhishi',
    data() {
      return {
        reverse: true,
        activities: [{
          content: '公司及内部公告',
        }, {
          content: '产品创想工厂',
        }, {
          content: '公司级常备资料',
        }]
      };
    }
}
</script>
<style scoped>
    ::-webkit-scrollbar {
     width: 0 !important;
   }
   ::-webkit-scrollbar {
     width: 0 !important;height: 0;
   }
   *{
       margin: 0 auto;
       padding: 0 0;
       background-color: rgba(250, 251, 252, 1);
   }.blu span{
       float: right;
       border: 0.5px darkgrey solid;
       border-radius: 5px;
       font-size: 10px;
       font-weight: 400;
       color: darkgrey;
       
        padding: 5px 20px;
        margin-right: 50px;
        margin-top: 7px;
   }
   .el-col_div{
       width: 90%;
   }
   .el-col_div span{
       margin-left: 1px;
       font-size: 8px;
       color: darkgrey;
   }
   .blu i{
       margin-left: 20px;
   }
   .ddd{
       margin-top: 10px;    
   }
   .el-icon-arrow-right:before{
    content: none;
    }
    .el-timeline-item__wrapper{
    position: relative;
    padding-left: 28px;
    border-bottom: 0.5px darkgrey solid;
    }
    .el-timeline {
    margin: 0;
    /* font-size: 14px; */
    /* list-style: none; */
    }
    .el-timeline[data-v-b2a1ec74]{
    margin: 0px 1px;
    /* font-size: 14px; */
    /* list-style: none; */
}
   .select{
       padding: 3px 5px;
       margin: 8px 0;
       border-radius:4px; 
       width: 70%;
       font-size: 10px;
   }
  .sele{
        padding: 3px 5px;
       margin: 8px 0;
       border-radius:4px; 
       width: 10%;
       font-size: 10px;
       /* border-right: #99a9bf 0.5px solid; */
  }
  .ioii{
      /* float: right; */
      margin-left: 500px;
      position: absolute;
      top: -2px;
      height: 38px!important;
      z-index: 0.3px;
  }
  .el-tabs__nav-wrap::after {
    background-color:transparent!important;
  }
  .el-tabs__nav is-top div{
    color: red!important;
  }
   .blu{
      
       border-bottom: cyan 1.5px solid;
   }
   .blu1{
       margin-top: 16px;
       border-bottom: cyan 1.5px solid;
   }
  .el-row {
    margin-bottom: 20px;
  }
  .el-icon-printer{
      font-size: 20px;
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .el-tabs__nav-wrap::after{
    content: none;
    width: 0px;
    background-color: cyan;
    color: cyan;
  }
  .el-collapse-item__header {
    display: -webkit-box;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    height: 28px;
    line-height: 48px;
    background-color: #FFF;
    color: #303133;
    cursor: pointer;
    border-bottom: 1px solid #EBEEF5;
    font-size: 10px;
    font-weight: 500;
    transition: border-bottom-color .3s;
    outline: 0;
}
.da-div{
    height: 500px;
    margin: 0 0 20px 10px;
    background-color: white;
}
</style>