<template>
  <div class="dashboard-container">
    <div class="app-container">
      <el-card shadow="never">
        <el-table :data="dataList" border style="width: 100%">
          <el-table-column fixed type="index" label="序号" width="50"/>
          <el-table-column fixed prop="name" label="企业名称" width="200"/>
          <el-table-column fixed prop="version" label="version" width="150"/>
          <el-table-column fixed prop="companyPhone" label="联系电话" width="150"/>
          <el-table-column fixed prop="expirationDate" label="截止时间" width="150"/>
          <el-table-column fixed prop="state" label="状态">
            <template slot-scope="scope">
              <!--
                  scope:表示当前行的所有数据
                  active-value：激活数据值
                  inactive-value：未激活数据值
              -->
              <el-switch
                v-model="scope.row.state"
                active-value="1"
                inactive-value="0"
                disabled
                active-color="#13ce66"
                inactive-color="#ff4949">
              </el-switch>
            </template>
          </el-table-column>
          <el-table-column fixed="right" label="操作" width="150">
            <template slot-scope="scope">
              <router-link :to="'/saas-clients/detail/'+scope.row.id">查看</router-link>
            </template>
          </el-table-column>
        </el-table>
      </el-card>
     </div>
  </div>
</template>

<script>
import {list} from '@/api/base/saasClient'
export default {
  name: 'saas-clients-index',
  data() {
    return {
      dataList:[]
    };
  },
  methods: {
    getList(){
      list().then(res=>{
        this.dataList=res.data.data;
      })
    }
  },
  created() {
    this.getList();
  },
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.alert {
  margin: 10px 0px 0px 0px;
}
.pagination {
  margin-top: 10px;
  text-align: right;
}
</style>
