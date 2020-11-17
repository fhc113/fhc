<template>
  <div class="app">
        <el-row :gutter="20">
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
                    数据报表
                </div>
                <div class="da-div">
                    <br>
                    <el-collapse accordion>
                    <el-collapse-item>
                        <template slot="title">
                        <i class="header-icon el-icon-folder"></i>&nbsp;&nbsp;客户数据统计
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
                        <i class="header-icon el-icon-folder"></i>&nbsp;&nbsp;销售数据统计
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
                        <i class="header-icon el-icon-folder"></i>&nbsp;&nbsp;合同数据统计
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
            <el-col :span="19"><div class="grid-content bg-purple">
                <div class="blu">
                    <i class="el-icon-printer" style="margin-top:8px;margin-left:5px;margin-bottom:9px;"></i>&nbsp;&nbsp;
                    公共池客户统计 <span>--</span>    
                </div>
                <br>
                <div class="el-col_div">
                    XX统计  <span>Sales performance</span>
                    <img src="../assets/img/chi.png" width="98%">
                    <br><br>
                    XX统计  <span>Report form</span>
                    <img src="../assets/img/chi2.png" width="98%">
                    <br><br>
                    <img src="../assets/img/u10640.png" width="98%">
                </div>
                
    </div></el-col>
        </el-row>
    </div>
   </template> 
<script>
export default {
    name:'bao',
    data() {
      return {
        reverse: true,
        activities: [{
          content: '部门客户数量对比',
        }, {
          content: '月度新增客户统计',
        }, {
          content: '客户价值统计',
        }, {
          content: '客户行业统计',
        }, {
          content: '客户区域统计',
        }, {
          content: '客户来源统计',
        }, {
          content: '客户类型统计',
        }, {
          content: '公共池客户统计',
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
    content: "";
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
   .blu{
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