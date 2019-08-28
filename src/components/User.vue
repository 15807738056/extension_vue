<template>
  <div class="user">
    <div id="select">
      <el-row v-show="show">
        <el-col :span="1">公司</el-col>
        <el-col :span="10">
          <el-checkbox-group v-model="Com" >
            <el-checkbox v-for="company in companies" :v-model="company.Company_Txt" :label="company.Company_Txt" :key="company.Company_Txt"></el-checkbox>
          </el-checkbox-group>
        </el-col>

      </el-row>
      <el-row v-show="show">
        <el-col :span="1">部门</el-col>
        <el-col :span="10">
          <el-select v-model="Dept" size="small">
            <el-option v-for="department in departments" :value="department.name" :label="department.name" :key="department.name"></el-option>
          </el-select>
        </el-col>

      </el-row>
      <el-row v-show="show">
        <el-col :span="1">课组</el-col>
        <el-col :span="10">
          <el-select v-model="Groups" size="small">
            <el-option v-for="group in groups" :value="group.name" :label="group.name" :key="group.name"></el-option>
          </el-select>
        </el-col>
      </el-row>
      <el-row id="img-down">
        <i class="el-icon-arrow-down" align="center" @click="show = !show"></i>
      </el-row>
    </div>

    <div>
      <el-row :gutter="20">
        <el-col :span="5">
          <el-input v-model="keyWord" size="small" id="keyWord"></el-input>
        </el-col>
        <el-col :span="3">
          <el-button type="primary" @click="" size="mini" @click="research_click">查询</el-button>
        </el-col>
      </el-row>
    </div>

    <div id="table" border style="width: 100%">
      <el-table :data="tableData" empty-text="暂无数据">
        <el-table-column type="index"></el-table-column>
        <el-table-column prop="User_Name" label="姓名"></el-table-column>
        <el-table-column prop="User_Num" label="工号"></el-table-column>
        <el-table-column prop="User_Name_Eng" label="英文名"></el-table-column>
        <el-table-column prop="User_Nickname" label="昵称"></el-table-column>
        <el-table-column prop="Company" label="公司" width="200" align="center"></el-table-column>
        <el-table-column prop="Dept" label="部门" width="120"></el-table-column>
        <el-table-column prop="Group" label="课组" width="120"></el-table-column>
        <el-table-column prop="User_Sex" label="性别"></el-table-column>
        <el-table-column prop="C_Mail" label="邮箱地址"></el-table-column>
        <el-table-column prop="C_Exten" label="分机号"></el-table-column>
        <el-table-column prop="C_Phone_W" label="工作电话"></el-table-column>
        <el-table-column prop="C_Phone_P" label="私人电话"></el-table-column>
        <el-table-column prop="C_Skype" label="Skype"></el-table-column>
      </el-table>
    </div>

  </div>

</template>

<script>
  import Vue from 'vue'
  import axios from 'axios'
  import VueAxios from 'vue-axios'
  import qs from 'qs'
  Vue.prototype.axios = axios
  Vue.prototype.$qs = qs
  export default{
    name:'user',
    data(){
      return{
        Com:[],
        Dept:[],
        Groups:[],
        companies:[
          { Company_Txt:'东莞铭普光磁股份有限公司' },
          { Company_Txt:'东莞市铭庆电子有限公司' },
          { Company_Txt:'泌阳县铭普电子有限公司' },
        ],
        departments:[
          { name:'信息化管理部' },
          { name:'质量部' },
          { name:'营销中心' },
          { name:'财务部' },
          { name:'战略发展部' }
        ],
        groups:[
          { name:'技术与开发组' },
          { name:'网络与硬件组' },
          { name:'电源研发组' }
        ],
        keyWord:'',
        tableData:[],
        show:true
      }
    },
    //
    created:function(){
       axios.get("http://localhost:1756/handlers/QueryInfo.ashx").then(function(tableData){
        //axios.get("../static/meet_view.json").then(function(tableData){
        this.tableData = eval(tableData.data);
      }.bind(this));


    },
    //
    methods:{
      research_click:function(){
        var _this = this;
        _this.axios({
          method:'post',
          url:'http://localhost:1756/handlers/Select.ashx',
          data:_this.$qs.stringify({
            //Com:_this.Com,
            Dept:_this.Dept,
            Groups:_this.Groups,
          }),
        }).then(function(tableData){
          _this.tableData = eval(tableData.data);
        });

      },
      //
    },

  }

</script>

<style>
  .user{
    margin: 2%;
  }
   .el-row{
    margin-top: 15px;
  }
  #select{
    border: 1px solid #E4E7ED;
    padding-left: 20px;
  }
  #img-down{
    text-align: center;
  }
  #table{
    margin-top: 20px;
  }
</style>
