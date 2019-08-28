<template>
  <div id="infoTable">
    <el-button type="primary" size="mini">新增职员信息</el-button>
    <el-button type="primary" size="mini">导出Excel</el-button>
    <div style="text-align: -moz-center;">
      <el-table :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)" stripe style="width: 100%;text-align: -moz-center;">
         <el-table-column prop="User_Name" label="姓名"></el-table-column>
         <el-table-column prop="User_Num" label="工号"></el-table-column>
         <el-table-column prop="User_Name_Eng" label="英文名"></el-table-column>
         <el-table-column prop="User_Nickname" label="昵称"></el-table-column>
         <el-table-column prop="Company" label="公司" width="200"></el-table-column>
         <el-table-column prop="Dept" label="部门" width="120"></el-table-column>
         <el-table-column prop="Group" label="课组" width="120"></el-table-column>
         <el-table-column prop="User_Sex" label="性别"></el-table-column>
         <el-table-column prop="C_Mail" label="邮箱地址"></el-table-column>
         <el-table-column prop="C_Exten" label="分机号"></el-table-column>
         <el-table-column prop="C_Phone_W" label="工作电话"></el-table-column>
         <el-table-column prop="C_Phone_P" label="私人电话"></el-table-column>
         <el-table-column prop="C_Skype" label="Skype"></el-table-column>
         <el-table-column prop="" label="操作">
           <el-button type="primary" icon="el-icon-edit" circle size="mini"></el-button>
           <el-button type="danger" icon="el-icon-delete" circle size="mini"></el-button>
         </el-table-column>
       </el-table>
    </div>

    <div class="block" style="text-align: center;">
      <el-pagination
        background
        layout="prev, pager, next"
        @current-change="current_change"
        :total="1000">
      </el-pagination>
    </div>
  </div>

</template>

<script>
  import Vue from 'vue'
  import axios from 'axios'
  import VueAxios from 'vue-axios'
  Vue.prototype.axios = axios
  export default {
    name:'page',
    data() {
      return {
        tableData: [],
        total:1000,//默认数据总数
        pagesize:10,//每页的数据条数
        currentPage:1,//默认开始页面
      }
    },
    created:function(){
      axios.get("../static/meet_view.json").then(function(tableData){
        this.tableData = eval(tableData.data);
      }.bind(this));
      this.total = this.tableData.length;
    },
    methods:{
      current_change:function(currentPage){
        this.currentPage = currentPage;
      }
    }
  }
</script>

<style>
</style>
