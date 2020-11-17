<template>
    <div id="app">
         <div class="blu">
            <i class="el-icon-odometer" style="margin-top:8px;margin-left:5px;margin-bottom:9px;"></i>&nbsp;&nbsp;
           仪表盘 <span>新建仪表盘</span>        
        </div>
        <div class="blu_div">
            <img src="../assets/img/u10617.gif" width="50%">
            <img src="../assets/img/u10619.gif" width="50%">
            <img src="../assets/img/u10621.gif" width="50%">
            <img src="../assets/img/u10623.gif" width="50%">
        </div>
    </div>
</template>
<script>
export default {
    name:'yabiao'
}
</script>
<style scoped>
    *{
        margin: 0 auto;
        padding: 0 0;
    }
    .blu{
       border-bottom: cyan 1.5px solid;
       font-size: 15px;
       font-weight: 900;
   }
   .blu span{
       float: right;
       border: 0.5px darkgrey solid;
       border-radius: 5px;
       font-size: 10px;
       font-weight: 400;
       color: darkgrey;
        padding: 5px 15px;
        margin-right: 50px;
   }
   .blu i{
       margin-left: 20px;
   }
   .blu_div{
       width: 80%;
       /* border: 0.5px darkgrey solid; */
       margin-top: 80px;
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
</style>