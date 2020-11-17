<template>
    <div class="hui">
    <el-row :gutter="20">
        <el-col :span="16"><div class="grid-content bg-purple">
                <div class="eldiv">
                    <p class="yiop">今日简报</p>
                </div>
                <div class="eldiv">
                    <p class="yiop">工作圈</p>
                </div>
                <div class="el-div">
                    <p class="yiop">工作圈</p>
                </div>
            </div></el-col>
        <el-col :span="8"><div class="grid-content bg-purple">
            <div class="eldiv">
                    <p class="yiop">公司动态</p>
                </div>
                <div class="eldiv">
                    <p class="yiop">仪表盘</p>
                </div>
                 <div class="el-div">
                    <p class="yiop">仪表盘</p>
                </div>
            </div></el-col>
    </el-row>
    </div>
</template>
<script>
export default {
    name:'xiang'
}
</script>
<style scoped>
    *{

        margin: 0 auto;
        padding: 0 0;
    }
    .hui{
        background-color: rgba(250, 251, 252, 1);
    }
    .eldiv{
        width: 98%;
        height: 200px;
        margin-top: 10px;
        background-color: #ffffff;
    }
    .el-div{
        width: 98%;
        height: 500px;
        background-color: #ffffff;
        margin-top: 10px;
        margin-bottom: 50px;
    }
    /*去除滚动条*/
  ::-webkit-scrollbar {
     width: 0 !important;
   }
   ::-webkit-scrollbar {
     width: 0 !important;height: 0;
   }
    .yiop{
        margin-top: 5px;
        font-size: 7px;
        border-bottom: #99a9bf 0.5px solid;
        padding: 5px 0;
        margin-left: 10px;
        width: 95%;
    }
   .el-row {
    margin-bottom: 20px;
  }
  .el-col {
    border-radius: 4px;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>