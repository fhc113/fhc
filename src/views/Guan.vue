<template>
    <div id="app">
         <el-row :gutter="20">
            <el-col :span="4"><div class="grid-content bg-purple">
                <div class="blu">
                    <i class="el-icon-printer" style="margin-top:8px;margin-left:5px;"></i>&nbsp;&nbsp;
                      <!-- <el-select v-model="value" placeholder="客户主线">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select> -->
                <select class="select">
                    <option  value="0"  selected= "selected">客户主线</option>
                    <option  value="1">主分类</option>
                    <option  value="2">行业</option>
		        </select>
                </div>
                <div class="da-div">
                    <br>
                    <el-collapse accordion>
                    <el-collapse-item>
                        <template slot="title">
                        <i class="header-icon el-icon-folder"></i>&nbsp;&nbsp;任我行协同CRM
                        </template>
                        <div class="ddd">&nbsp;&nbsp;<i class="el-icon-location-outline"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;四川省</div>
                        <div>&nbsp;&nbsp;<i class="el-icon-location-outline"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;福建省</div>
                        <div>&nbsp;&nbsp;<i class="el-icon-location-outline"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;福建省</div>
                        <div>&nbsp;&nbsp;<i class="el-icon-location-outline"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;黑龙江省</div>
                        <div>&nbsp;&nbsp;<i class="el-icon-location-outline"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;辽宁省</div>
                        <div>&nbsp;&nbsp;<i class="el-icon-location-outline"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;吉林省</div>
                        <div>&nbsp;&nbsp;<i class="el-icon-location-outline"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;浙江省</div>                        
                  </el-collapse-item>
                    </el-collapse>
                    <el-collapse accordion>
                    <el-collapse-item>
                    <template slot="title">
                        <i class="header-icon el-icon-folder"></i>&nbsp;&nbsp;管家婆CRM
                        </template>
                    </el-collapse-item>
                    </el-collapse>    
                </div>
                </div></el-col>
            <el-col :span="19"><div class="grid-content bg-purple">
                <div class="blu">
                    <i class="el-icon-printer" style="margin-top:8px;margin-left:5px;margin-bottom:9px;"></i>&nbsp;&nbsp;
                <select class="sele">
                    <option  value="0" selected= "selected">我负责的</option>
                    <option  value="1">常用检索</option>
                    <option  value="2">自定义条件</option>
		        </select>
                </div>
                <br>
        <el-table
    :data="tableData"
    border
    style="width: 100%">
   <el-table-column
      prop="id"
      label="产品编号"
      width="120">
    </el-table-column>  
    <el-table-column
      prop="name"
      label="产品名称"
      width="150">
    </el-table-column>
    <el-table-column
      prop="address"
      label="标志分类"
      width="120">
    </el-table-column>
    <el-table-column
      prop="chan"
      label="产品规格"
      width="120">
    </el-table-column>
    <el-table-column
      prop="moy"
      label="成本单价"
      width="120">
    </el-table-column>
    <el-table-column
      prop="moys"
      label="产品价格"
      width="120">
    </el-table-column>
    <el-table-column
      prop="lian"
      label="关联附件"
      width="120">
    </el-table-column>
     <el-table-column
      prop="jian"
      label="创建人"
      width="120">
    </el-table-column>
     <el-table-column
      prop="date"
      label="日期"
      width="120">
    </el-table-column>
  </el-table>
    </div></el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    name:'guan',
    data() {
      return {
        tableData: [{
          id:'C-20192016',
          chan:'--',
          moy:'￥9999.00',
          moys:'￥19999.00',
          lian:'1/个',
          jian:'厂长',
          date: '2019-03-07',
          name: '任我行精华版CRM',
          address: '标准产品'
        }, {
        id:'C-20192016',
          chan:'--',
          moy:'￥9999.00',
          moys:'￥19999.00',
          lian:'1/个',
          jian:'厂长',
          date: '2019-03-07',
          name: '管家婆',
          address: 'CRM公海插件'
        }, {
          id:'C-20192016',
          chan:'--',
          moy:'￥9999.00',
          moys:'￥19999.00',
          lian:'1/个',
          jian:'厂长',
          date: '2019-03-07',
          name: '任我行精华版CRM',
          address: '插件'
        },
        {
          id:'',
          chan:'',
          moy:'',
          lian:'',
          jian:'',
          date: '',
          name: '',
          address: ''
        },
        {
          id:'',
          chan:'',
          moy:'',
          lian:'',
          jian:'',
          date: '',
          name: '',
          address: ''
        },
        {
          id:'',
          chan:'',
          moy:' ',
          lian:'',
          jian:'',
          date: '',
          name: '',
          address: ''
        },
        {
          id:'',
          chan:' ',
          moy:'',
          lian:'',
          jian:'',
          date: '',
          name: '',
          address: ''
        },
        {
          id:'',
          chan:' ',
          moy:'',
          lian:'',
          jian:'',
          date: '',
          name: '',
          address: ''
        },
        {
          id:'',
          chan:' ',
          moy:'',
          lian:'',
          jian:'',
          date: '',
          name: '',
          address: ''
        },
        {
          id:'',
          chan:' ',
          moy:'',
          lian:'',
          jian:'',
          date: '',
          name: '',
          address: ''
        }]
      }
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
   }
   .ddd{
       margin-top: 10px;    
   }
   .el-icon-arrow-right:before{
    content: "";
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