<template>
  <div class="staff">
    <!-- 多条件查询 -->
    <div class="" id="selectAll">
      <p v-show="display">
        <span>公司</span>
        <span v-for="company in companies"><input type="checkbox" :name="company.Company_Txt" :value="company.Company_Txt" v-model="Comp">{{company.Company_Txt}}</span>
      </p>
       <p>部门选中值为:{{Comp}}</p>
     <p v-show="display">
       <span>部门</span>
       <select v-model="Dept">
         <option v-for="department in departments" :value="department.name" >{{department.name}}</option>
       </select>
       <p>部门选中值为:{{Dept}}</p>
     </p>
     <p v-show="display">
       <span>课组</span>
       <select v-model="Groups">
         <option v-for="group in groups" :value="group.name">{{ group.name }}</option>
       </select>
     </p>
      <p>部门选中值为:{{Groups}}</p>
     <p style="text-align: center;margin-bottom: 0;"><img src="../assets/xiala.png" @click="display = !display"></p>
    </div>
    <!-- 多条件查询 -->

    <!-- 关键字查询 -->
    <div id="keyWord">
      <p>
        <span>关键字</span>
        <input type="text" name="keyWordTxt" id="keyWordTxt"/>
        <input type="button" name="searchBtn" value="查询" id="searchBtn" @click=""/>
      </p>
    </div>
    <!-- 关键字查询 -->

    <!-- 查询结果列表 -->
    <div id="info">
      <table cellpadding="0" cellspacing="0">
        <thead>
          <tr>
            <td>姓名</td>
            <td>工号</td>
            <td>英文名</td>
            <td>昵称</td>
            <td style="width: 11%;">公司</td>
            <td style="width: 6%;">部门</td>
            <td style="width: 6%;">课组</td>
            <td style="width: 6%;">职位</td>
            <td>性别</td>
            <td>邮箱地址</td>
            <td>分机号</td>
            <td>工作电话</td>
            <td>私人电话</td>
            <td>Skype</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in items">
            <td>{{ item.User_Name }}</td>
            <td>{{ item.User_Num }}</td>
            <td>{{ item.User_Name_Eng }}</td>
            <td>{{ item.User_NickName }}</td>
            <td>{{ item.Company }}</td>
            <td>{{ item.Dept }}</td>
            <td>{{ item.Group }}</td>
            <td>{{ item.Position }}</td>
            <td>{{ item.User_Sex }}</td>
            <td>{{ item.C_Mail }}</td>
            <td>{{ item.C_Exten }}</td>
            <td>{{ item.C_Phone_W }}</td>
            <td>{{ item.C_Phone_P }}</td>
            <td>{{ item.C_Skype }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- 查询结果列表 -->
  </div>

</template>

<script>
  import Vue from 'vue'
  import axios from 'axios'
  import VueAxios from 'vue-axios'
  Vue.prototype.axios = axios
   export default {
    name: 'staffInfo',
    data () {
      return {
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
          { name:'应用于流程组' }
        ],
        companies:[],
        items:[],
        display:true,
        Dept:[],
        Groups:[],
        Comp:[]
      }
    },
    created:function(){
      axios.get("../static/company.json").then(function(companies){
        this.companies = eval(companies.data); //'this'指向VM实例
      }.bind(this));

      axios.get("../static/meet_view.json").then(function(items){
        this.items = eval(items.data);
      }.bind(this));


    }
  }
</script>

<style scope>
  .staff{
   font-family: "serif arial narrow";
  }
  #selectAll{
    border: 1px solid #E6E6E6;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    padding-left: 2%;
    font-family: "arial black";
    font-size: 0.9375rem;
  }
  select{
    width: 15%;
    height: 1.875rem;
    border-radius: 0.1875rem;
  }
  #keyWord{
     font-family: "arial black";
     font-size: 0.9375rem;
  }
  #keyWord,#info{
    padding-left: 2%;
  }
  button{
    outline: none;
  }
  #info{
    border: 1px solid #E6E6E6;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }
  table{
    width: 98%;
    text-align: center;

  }
  thead td{
    width: 5%;
    height: 1.875rem;
    background-color: #3399cc;
    color: white;
  }
  tbody td{
    font-family: "arial rounded mt bold";
    font-size: 0.9375rem;
    height: 2.1875rem;

  }

  #keyWordTxt{
    width: 15%;
    height: 1.5625rem;
    border-radius: 3px;
    border: 1px solid #D6E6F6;
  }
  #searchBtn{
    height: 1.75rem;
    width: 3.75rem;
    margin-left: 0.5rem;
    border-radius: 4px;
    background-color: #338E3C;
    outline: none;
    color: white;
  }
  #searchBtn:hover{
    background-color: #5DAC81;
  }

</style>
