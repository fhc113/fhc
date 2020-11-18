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
                height="300"
                border=""
                @selection-change="handleSelectionChange">
                <el-table-column
                fixed
                type="selection"
                width="55">
                </el-table-column>
                <el-table-column
                prop="aname"
                label="姓名"
                width="120">
                </el-table-column>
                <el-table-column
                prop="name"
                label="角色"
                width="120">
                </el-table-column>
                <el-table-column
                prop="province"
                label="客户名称"
                width="210">
                </el-table-column>
                <el-table-column
                prop="city"
                label="手机"
                width="150">
                </el-table-column>
                <el-table-column
                prop="address"
                label="微信"
                width="150">
                </el-table-column>
                <el-table-column
                prop="lian"
                label="办公电话"
                width="150">
                </el-table-column>
                 <el-table-column
                prop="iphone"
                label="电话"
                width="180">
                </el-table-column>
                 <el-table-column
                prop="yuan"
                label="生日"
                width="150">
                </el-table-column>
                 <el-table-column
                prop="date"
                label="QQ"
                width="150">
                </el-table-column>
               
                 <el-table-column
                prop="guan"
                label="关联项"
                width="120">
                </el-table-column>
                <el-table-column
                prop="bei"
                label="备注"
                width="210">
                </el-table-column>
            </el-table>
    </div></el-col>
        </el-row>
    </div>
</template>
<script>
export default {
     name:'lian',
      data() {
      return {
        tableData: [{
          aname:'张三',
          date: '￥12600.00',
          name: '总监',
          province: '广西梧州万枫酒店',
          city: '13734567890',
          address: 'asd_2314',
          lian:'028-5656889',
          iphone:'123456@qq.com',  
          yuan:'2019-02-18',
          guan:'共3条',
          bei:'---'
        },{
          aname:'李四',
          date: '￥12600.00',
          name: '经理',
          province: '北京市爱贝贝母婴连锁',
          city: '13734567890',
          address: 'asd_2314',
          lian:'028-5656889',
          iphone:'123456@qq.com',  
          yuan:'2019-02-18',
          guan:'共1条',
          bei:'---'
        },{
          aname:'王五',
          date: '￥12600.00',
          name: '总监',
          province: '济南新动力管理咨询有限公司',
          city: '13734567890',
          address: 'asd_2314',
          lian:'028-5656889',
          iphone:'123456@qq.com',  
          yuan:'2019-02-18',
          guan:'共3条',
          bei:'---'
        },{
          aname:'张三',
          date: '￥12600.00',
          name: '经理',
          province: '新胜达科技有限公司',
          city: '13734567890',
          address: 'asd_2314',
          lian:'028-5656889',
          iphone:'123456@qq.com',  
          yuan:'2019-02-18',
          guan:'共3条',
          bei:'---'
        },{
          aname:'李四',
          date: '￥12600.00',
          name: '总监',
          province: '方圆质量认证咨询有限公司',
          city: '13734567890',
          address: 'asd_2314',
          lian:'028-5656889',
          iphone:'123456@qq.com',  
          yuan:'2019-02-18',
          guan:'共3条',
          bei:'---'
        },{
          aname:'王五',
          date: '￥12600.00',
          name: '总监',
          province: '福建星星服装有限公司',
          city: '13734567890',
          address: 'asd_2314',
          lian:'028-5656889',
          iphone:'123456@qq.com',  
          yuan:'2019-02-18',
          guan:'共3条',
          bei:'---'
        },{
          aname:'张三',
          date: '￥12600.00',
          name: '总监',
          province: '明华生化药品有限公司',
          city: '13734567890',
          address: 'asd_2314',
          lian:'028-5656889',
          iphone:'123456@qq.com',  
          yuan:'2019-02-18',
          guan:'共3条',
          bei:'---'
        },{
          aname:'张三',
          date: '￥12600.00',
          name: '总监',
          province: '景托盛贸有限公司',
          city: '13734567890',
          address: 'asd_2314',
          lian:'028-5656889',
          iphone:'123456@qq.com',  
          yuan:'2019-02-18',
          guan:'共3条',
          bei:'---'
        },{
          aname:'张三',
          date: '￥12600.00',
          name: '总监',
          province: '格兰德企业策划有限公司',
          city: '13734567890',
          address: 'asd_2314',
          lian:'028-5656889',
          iphone:'123456@qq.com',  
          yuan:'2019-02-18',
          guan:'共3条',
          bei:'---'
        },{
          aname:'张三',
          date: '￥12600.00',
          name: '总监',
          province: '成都欣萍保洁服务有限公司',
          city: '13734567890',
          address: 'asd_2314',
          lian:'028-5656889',
          iphone:'123456@qq.com',  
          yuan:'2019-02-18',
          guan:'共3条',
          bei:'---'
        },{
          aname:'张三',
          date: '￥12600.00',
          name: '总监',
          province: '欧迈医疗器械有限公司',
          city: '13734567890',
          address: 'asd_2314',
          lian:'028-5656889',
          iphone:'123456@qq.com',  
          yuan:'2019-02-18',
          guan:'共3条',
          bei:'---'
        },{
          aname:'张三',
          date: '￥12600.00',
          name: '总监',
          province: '重庆欧米商贸有限公司',
          city: '13734567890',
          address: 'asd_2314',
          lian:'028-5656889',
          iphone:'123456@qq.com',  
          yuan:'2019-02-18',
          guan:'共3条',
          bei:'---'
        },{
          aname:'张三',
          date: '￥12600.00',
          name: '总监',
          province: '广西梧州万枫酒店',
          city: '13734567890',
          address: 'asd_2314',
          lian:'028-5656889',
          iphone:'123456@qq.com',  
          yuan:'2019-02-18',
          guan:'共3条',
          bei:'---'
        },{
          aname:'张三',
          date: '￥12600.00',
          name: '总监',
          province: '方圆质量认证咨询有限公司',
          city: '13734567890',
          address: 'asd_2314',
          lian:'028-5656889',
          iphone:'123456@qq.com',  
          yuan:'2019-02-18',
          guan:'共3条',
          bei:'---'
        },{
          aname:'张三',
          date: '￥12600.00',
          name: '总监',
          province: '明华生化药品有限公司',
          city: '13734567890',
          address: 'asd_2314',
          lian:'028-5656889',
          iphone:'123456@qq.com',  
          yuan:'2019-02-18',
          guan:'共3条',
          bei:'---'
        },{
          aname:'张三',
          date: '￥12600.00',
          name: '总监',
          province: '方圆质量认证咨询有限公司',
          city: '13734567890',
          address: 'asd_2314',
          lian:'028-5656889',
          iphone:'123456@qq.com',  
          yuan:'2019-02-18',
          guan:'共3条',
          bei:'---'
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