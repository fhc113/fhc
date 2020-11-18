<template>
     <el-row class="tac">
  <el-col :span="5">
    <div class="blu">
      <i class="el-icon-printer" style="margin-top:8px;margin-left:5px;margin-bottom:9px;"></i>&nbsp;&nbsp;
       个人设置
    </div>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
      <el-menu-item index="1">
        <i class="el-icon-menu"></i>
        <span slot="title">我的资料</span>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>个人参数</span>
        </template>
        <el-menu-item-group>
          
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
        </el-menu-item-group>
      
      </el-submenu>
      
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">平台配置</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="3-1">选项1</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
        <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">系统安全</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="4-1">选项1</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      
    </el-menu>



  </el-col>
  <el-col :span="1">
    &nbsp;
  </el-col>
  <el-col :span="18">
      <div class="blu">
        <i class="el-icon-printer" style="margin-top:8px;margin-left:5px;margin-bottom:9px;"></i>&nbsp;&nbsp;
        销售漏斗分析<span>--</span>    
      </div>
    
  </el-col>
</el-row>
</template>
<script>
export default {
    name:'geren',
    methods: {
         handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    },
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
  /* .bg-purple-dark {
    background: #99a9bf;
  } */
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
    /* background-color: white; */
}
.da-div p{
    margin-top: 10px;
    padding-bottom: 5px;
    border-bottom: 0.5px darkgray solid;
    font-size: 12px;
    font-weight: 300;
}
</style>