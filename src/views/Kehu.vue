<template>
    <div class="app">
       <el-row class="tac">
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
                        <i class="header-icon el-icon-folder"></i>&nbsp;&nbsp;区域代理
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
                        <i class="header-icon el-icon-folder"></i>&nbsp;&nbsp;普通客户
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
                ref="multipleTable"
                :data="tableData"
                tooltip-effect="dark"
                style="width: 100%"
                height="350"
                border=""
                @selection-change="handleSelectionChange">
                <el-table-column
                fixed
                type="selection"
                width="55">
                </el-table-column>
                <el-table-column
                prop="aname"
                label="客户名称"
                width="150">
                </el-table-column>
                <el-table-column
                prop="name"
                label="行业"
                width="120">
                </el-table-column>
                <el-table-column
                prop="province"
                label="来源"
                width="120">
                </el-table-column>
                <el-table-column
                prop="city"
                label="客户类型"
                width="120">
                </el-table-column>
                <el-table-column
                prop="address"
                label="销售阶段"
                width="120">
                </el-table-column>
                <el-table-column
                prop="lian"
                label="联系人"
                width="70">
                </el-table-column>
                 <el-table-column
                prop="iphone"
                label="电话"
                width="120">
                </el-table-column>
                 <el-table-column
                prop="yuan"
                label="入池原因"
                width="210">
                </el-table-column>
                 <el-table-column
                prop="date"
                label="创建时间"
                width="120">
                </el-table-column>
                 <el-table-column
                prop="zip"
                label="领用/分配日子"
                wirizidth="180">
                </el-table-column>
                 <el-table-column
                prop="jindu"
                label="历史跟进记录"
                width="120">
                </el-table-column>
                 <el-table-column
                prop="guan"
                label="关联项"
                width="120">
                </el-table-column>
                 <el-table-column
                prop="moy"
                label="客户价值"
                width="120">
                </el-table-column>
                 <el-table-column
                prop="bei"
                label="备注"
                width="180">
                </el-table-column>
                 <el-table-column
                prop="ren"
                label="创建人"
                width="120">
                </el-table-column>  
                 <el-table-column
                prop="yi"
                label="社会统一信用编码"
                width="150">
                </el-table-column>
                 <el-table-column
                prop="dizhi"
                label="地址"
                width="210">
                </el-table-column>
            </el-table>

                </div></el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    name:'kehu',
      data() {
      return {
        tableData: [{
          aname:'广西梧州万枫酒店',
          date: '2019-02-18',
          name: '餐饮业',
          province: '网络咨询',
          city: '独资公司',
          address: '意向客户',
          zip: '共两条',
          lian:'王总',
          iphone:'13734567777',
          yuan:'填充文字填充文字填充文字',
          jindu:'共3条',
          guan:'共3条',
          moy:'',
          bei:'---',
          ren:'销售1部-厂长',
          yi:'---',
          dizhi:'武汉市华府大道南端135号'

        }, {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-08',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-06',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-07',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }],
         multipleSelection: []
      }
    },
      methods: {
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
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