<template>
    <div id="app">
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
                label="销售阶段"
                width="120">
                </el-table-column>
                <el-table-column
                prop="name"
                label="客户名称"
                width="210">
                </el-table-column>
                <el-table-column
                prop="province"
                label="客户意向产品"
                width="150">
                </el-table-column>
                <el-table-column
                prop="city"
                label="赢单几率"
                width="150">
                </el-table-column>
                <el-table-column
                prop="address"
                label="客户价格"
                width="150">
                </el-table-column>
                <el-table-column
                prop="lian"
                label="预计收款"
                width="150">
                </el-table-column>
                 <el-table-column
                prop="iphone"
                label="跟单状态"
                width="180">
                </el-table-column>
                 <el-table-column
                prop="yuan"
                label="预计成交时间"
                width="150">
                </el-table-column>
                 <el-table-column
                prop="date"
                label="跟进记录"
                width="150">
                </el-table-column>
                <el-table-column
                prop="gun"
                label="联系人"
                width="120">
                </el-table-column>
                <el-table-column
                prop="dian"
                label="电话"
                width="120">
                </el-table-column>
                   <el-table-column
                prop="lai"
                label="来源"
                width="120">
                </el-table-column>
                   <el-table-column
                prop="dizhi"
                label="地址"
                width="210">
                </el-table-column>
                <el-table-column
                prop="hang"
                label="行业"
                width="120">
                </el-table-column>
                <el-table-column
                prop="gendan"
                label="入跟单时间"
                width="120">
                </el-table-column>
                <el-table-column
                prop="guan"
                label="关联项"
                width="120">
                </el-table-column>
                 <el-table-column
                prop="jian"
                label="创建人"
                width="120">
                </el-table-column>
                <el-table-column
                prop="fuze"
                label="历史负责人"
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
    name:'shang',
     data() {
      return {
        tableData: [{
          aname:'初步洽谈',
          date: '网络跟单',
          name: '广西梧州万枫酒店',
          province: '协同普通版',
          city: '10%',
          address: 'AAAA',
          zip: '锁定',
          lian:'￥12338',
          iphone:'共3条',
          yuan:'2019-02-26',
          jindu:'王总',
          guan:'13734567777',
          moy:'共三条',
          bei:'---',
          ren:'',
          gun:'王总',
          dian:'13734567777',
          lai:'网络跟单',
          fuze:'厂长',
          hang:'餐饮业',
          gendan:'2019-02-18',
          jian:'销售1部-厂长',
          yi:'---',
          dizhi:'武汉市华府大道南端135号'
        },
        {
          aname:'初步洽谈',
          date: '网络跟单',
          name: '北京市爱贝贝母婴连锁',
          province: '协同精华版',
          city: '10%',
          address: 'AAAAA',
          zip: '预警',
          lian:'￥12338',
          iphone:'共6条',
          yuan:'2019-02-26',
          jindu:'--',
          guan:'13734567777',
          moy:'共三条',
          bei:'---',
          ren:'',
          gun:'王总',
          dian:'13734567777',
          lai:'网络咨询',
          fuze:'--',
          hang:'批发/零售业',
          gendan:'2019-02-18',
          jian:'系统自动',
          yi:'---',
          dizhi:'北京市天安门大道'
        },
        {
          aname:'意向客户',
          date: '网络跟单',
          name: '济南新动力管理咨询有限公司',
          province: 'OA办公',
          city: '25%',
          address: 'AAA',
          zip: '正常',
          lian:'￥12338',
          iphone:'共3条',
          yuan:'2019-02-26',
          jindu:'李总',
          guan:'13734567777',
          moy:'共三条',
          bei:'---',
          ren:'',
          gun:'王总',
          dian:'13734567777',
          lai:'网络跟单',
          fuze:'厂长',
          hang:'服务业',
          gendan:'2019-02-18',
          jian:'系统自动',
          yi:'---',
          dizhi:'武汉市华府大道南端135号'
        },
        {
          aname:'初步洽谈',
          date: '网络跟单',
          name: '广西梧州万枫酒店',
          province: '协同普通版',
          city: '10%',
          address: 'AAAA',
          zip: '锁定',
          lian:'￥12338',
          iphone:'共3条',
          yuan:'2019-02-26',
          jindu:'王总',
          guan:'13734567777',
          moy:'共三条',
          bei:'---',
          ren:'',
          gun:'王总',
          dian:'13734567777',
          lai:'网络跟单',
          fuze:'厂长',
          hang:'餐饮业',
          gendan:'2019-02-18',
          jian:'销售1部-厂长',
          yi:'---',
          dizhi:'武汉市华府大道南端135号'
        },
        {
          aname:'初步洽谈',
          date: '网络跟单',
          name: '广西梧州万枫酒店',
          province: '协同普通版',
          city: '10%',
          address: 'AAAA',
          zip: '锁定',
          lian:'￥12338',
          iphone:'共3条',
          yuan:'2019-02-26',
          jindu:'王总',
          guan:'13734567777',
          moy:'共三条',
          bei:'---',
          ren:'',
          gun:'王总',
          dian:'13734567777',
          lai:'网络跟单',
          fuze:'厂长',
          hang:'餐饮业',
          gendan:'2019-02-18',
          jian:'销售1部-厂长',
          yi:'---',
          dizhi:'武汉市华府大道南端135号'
        },
        {
          aname:'初步洽谈',
          date: '网络跟单',
          name: '广西梧州万枫酒店',
          province: '协同普通版',
          city: '10%',
          address: 'AAAA',
          zip: '锁定',
          lian:'￥12338',
          iphone:'共3条',
          yuan:'2019-02-26',
          jindu:'王总',
          guan:'13734567777',
          moy:'共三条',
          bei:'---',
          ren:'',
          gun:'王总',
          dian:'13734567777',
          lai:'网络跟单',
          fuze:'厂长',
          hang:'餐饮业',
          gendan:'2019-02-18',
          jian:'销售1部-厂长',
          yi:'---',
          dizhi:'武汉市华府大道南端135号'
        },
        {
          aname:'初步洽谈',
          date: '网络跟单',
          name: '广西梧州万枫酒店',
          province: '协同普通版',
          city: '10%',
          address: 'AAAA',
          zip: '锁定',
          lian:'￥12338',
          iphone:'共3条',
          yuan:'2019-02-26',
          jindu:'王总',
          guan:'13734567777',
          moy:'共三条',
          bei:'---',
          ren:'',
          gun:'王总',
          dian:'13734567777',
          lai:'网络跟单',
          fuze:'厂长',
          hang:'餐饮业',
          gendan:'2019-02-18',
          jian:'销售1部-厂长',
          yi:'---',
          dizhi:'武汉市华府大道南端135号'
        },
        {
          aname:'初步洽谈',
          date: '网络跟单',
          name: '广西梧州万枫酒店',
          province: '协同普通版',
          city: '10%',
          address: 'AAAA',
          zip: '锁定',
          lian:'￥12338',
          iphone:'共3条',
          yuan:'2019-02-26',
          jindu:'王总',
          guan:'13734567777',
          moy:'共三条',
          bei:'---',
          ren:'',
          gun:'王总',
          dian:'13734567777',
          lai:'网络跟单',
          fuze:'厂长',
          hang:'餐饮业',
          gendan:'2019-02-18',
          jian:'销售1部-厂长',
          yi:'---',
          dizhi:'武汉市华府大道南端135号'
        }], 
        multipleSelection: []
      }     
     }
}
</script>