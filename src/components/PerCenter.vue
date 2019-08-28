<template>
  <div class="perCenter">
    <p>
      <button id="addStaff" @click="addDialogVisible = true">新增职员</button>
      <button id="export">导出Excel</button>
     </p>
     <!-- 职员信息列表 -->
      <div id="infoList">
        <table cellpadding="0" cellspacing="0">
          <thead>
            <tr>
              <td>姓名</td>
              <td>工号</td>
              <td>英文名</td>
              <td>昵称</td>
              <td style="width: 12%;">公司</td>
              <td style="width: 6%;">部门</td>
              <td style="width: 6%;">课组</td>
              <td style="width: 6%;">职位</td>
              <td>性别</td>
              <td>邮箱地址</td>
              <td>分机号</td>
              <td>工作电话</td>
              <td>私人电话</td>
              <td>Skype</td>
              <td>操作</td>
            </tr>
          </thead>
          <tbody id="displayInfo">
            <tr v-for="item in items">
              <td>{{ item.User_Name }}</td>
              <td>{{ item.User_Num }}</td>
              <td>{{ item.User_Name_Eng }}</td>
              <td>{{ item.User_Nickname }}</td>
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
              <td>
                <img src="../assets/edit.png" id="edit" @click="editDialogVisible = true">
                <img src="../assets/delete.png" id="delete" @click="deleteInfoSend">
                </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- END职员信息列表 -->

      <!-- 添加职员信息对话框 -->
      <div id="addUsar">
        <el-dialog title="添加职员" :visible.sync="addDialogVisible" width="50%" :before-close="handleClose">
          <div id="addInfo">
           <form name="infoForm" action="" method="get">
             <p>
               <span class="symbol">*</span><span class="label">姓名</span>
               <input type="text" v-model="UserName" required />
             </p>
             <p>
               <span class="symbol"></span><span class="label">工号</span>
               <input type="text" v-model="UserNum"/>
             </p>
             <p>
               <span class="symbol"></span><span class="label">英文名</span>
               <input type="text" v-model="EngName"/>
             </p>
             <p>
               <span class="symbol"></span><span class="label">昵称</span>
               <input type="text" v-model="NickName"/>
             </p>
             <p>
               <span class="symbol">*</span><span class="label">公司</span>
               <input type="text" v-model="Company" required/>
             </p>
             <p>
               <span class="symbol">*</span><span class="label">部门</span>
               <input type="text" v-model="Department" required/>
             </p>
             <p>
               <span class="symbol"></span><span class="label">课组</span>
               <input type="text" v-model="Group"/>
             </p>
             <p>
               <span class="symbol">*</span><span class="label">职位</span>
               <input type="text" v-model="Position" required/>
             </p>
             <p>
               <span class="symbol"></span><span class="label">性别</span>
               <input type="text" v-model="Sex" required/>
             </p>
             <p>
               <span class="symbol"></span><span class="label">邮箱</span>
               <input type="text" v-model="C_Mail"/>
             </p>
             <p>
               <span class="symbol">*</span><span class="label">分机号</span>
               <input type="text" v-model="C_Exten" required/>
             </p>
             <p>
               <span class="symbol"></span><span class="label">工作电话</span>
               <input type="text" v-model="C_Phone_W"/>
             </p>
             <p>
               <span class="symbol"></span><span class="label">私人电话</span>
               <input type="text"v-model="C_Phone_P"/>
             </p>
             <p>
               <span class="symbol"></span><span class="label">Skype</span>
               <input type="text" v-model="C_Skype"/>
             </p>
           </form>
          </div>

          <span slot="footer" class="dialog-footer">
            <el-button @click="addDialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="addInfoSend">确 定</el-button>
          </span>
        </el-dialog>
      </div>
      <!-- END添加职员信息对话框 -->

      <!-- 变更职员信息对话框-->
      <el-dialog title="变更职员信息" :visible.sync="editDialogVisible" width="50%" :before-close="handleClose">
        <div id="editInfo">
         <form name="editForm" action="" method="get">
           <p>
             <span class="label">姓名</span>
             <input type="text" v-model="userName" required/>
           </p>
           <p>
             <span class="label">工号</span>
             <input type="text" v-model="userNum" required/>
           </p>
           <p>
             <span class="label">英文名</span>
             <input type="text" v-model="engName" required/>
           </p>
           <p>
             <span class="label">昵称</span>
             <input type="text" v-model="nickName" required/>
           </p>
           <p>
             <span class="label">公司</span>
             <input type="text" v-model="company" required/>
           </p>
           <p>
             <span class="label">部门</span>
             <input type="text" v-model="department" required/>
           </p>
           <p>
             <span class="label">课组</span>
             <input type="text" v-model="group" required/>
           </p>
           <p>
             <span class="label">职位</span>
             <input type="text" v-model="position" required/>
           </p>
           <p>
             <span class="label">性别</span>
             <input type="text" v-model="sex" required/>
           </p>
           <p>
             <span class="label">邮箱</span>
             <input type="text" v-model="c_Mail" required/>
           </p>
           <p>
             <span class="label">分机号</span>
             <input type="text" v-model="c_Exten" required/>
           </p>
           <p>
             <span class="label">工作电话</span>
             <input type="text" v-model="c_Phone_W" required/>
           </p>
           <p>
             <span class="label">私人电话</span>
             <input type="text" v-model="c_Phone_P" required/>
           </p>
           <p>
             <span class="label">Skype</span>
             <input type="text" v-model="c_Skype" required/>
           </p>
         </form>
        </div>

        <span slot="footer" class="dialog-footer">
          <el-button @click="editDialogVisible = false">取 消</el-button>
         <!-- <el-button type="primary" @click="editDialogVisible = false;addInfoSend">确 定</el-button> -->
          <el-button type="primary" @click="editInfoSend">确 定</el-button>
        </span>
      </el-dialog>
      <!-- END变更职员信息对话框 -->

  </div>
</template>

<script>
  import Vue from 'vue'
  import axios from 'axios'
  import VueAxios from 'vue-axios'
  import qs from 'qs'
  Vue.prototype.axios = axios
  Vue.prototype.$qs = qs
  // Vue.prototype.$axios = axios;

  export default{
    name:'perCenter',
    data(){
      return{
        items:[],
        addDialogVisible: false,
        editDialogVisible: false,
        UserName:'',
        UserNum:'',
        EngName:'',
        NickName:'',
        Company:'',
        Department:'',
        Group:'',
        Position:'',
        Sex:'',
        C_Mail:'',
        C_Exten:'',
        C_Phone_W:'',
        C_Phone_P:'',
        C_Skype:'',

        userName:'',
        userNum:'',
        engName:'',
        nickName:'',
        company:'',
        department:'',
        group:'',
        position:'',
        sex:'',
        c_Mail:'',
        c_Exten:'',
        c_Phone_W:'',
        c_Phone_P:'',
        c_Skype:''
      }
    },
    created:function(){
      axios.get("http://localhost:1756/handlers/QueryInfo.ashx").then(function(items){
       this.items = eval(items.data);
       //console.log(items.data);
       //this.items = JSON.parse(items.data);
      }.bind(this));
      // axios.get("http://localhost:1756/handlers/QueryInfo.ashx").then(function(data){
      //   document.getElementById("displayInfo").innerHTML = data.data;
      //   console.log(data);
      // }.bind(this));
    },
    methods: {
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
      addInfoSend:function(){
        this.axios({
        	method:"post",
        	url:"http://localhost:1756/handlers/StaffInfo.ashx",

        	data:this.$qs.stringify({
        		UserName:this.UserName,
        		UserNum:this.UserNum,
        		EngName:this.EngName,
        		NickName:this.NickName,
        		Company:this.Company,
        		Department:this.Department,
        		Group:this.Group,
        		Position:this.Position,
        		Sex:this.Sex,
        		C_Mail:this.C_Mail,
        		C_Exten:this.C_Exten,
        		C_Phone_W:this.C_Phone_W,
        		C_Phone_P:this.C_Phone_P,
        		C_Skype:this.C_Skype,
        	}),
        }).then(function (response) {
          alert(parseInt(response.data));
          })
      },

      editInfoSend:function(){
        this.axios({
        	method:"post",
        	url:"http://localhost:1756/handlers/EditInfo.ashx",

        	data:this.$qs.stringify({
        		UserName:this.userName,
        		UserNum:this.userNum,
        		EngName:this.engName,
        		NickName:this.nickName,
        		Company:this.company,
        		Department:this.department,
        		Group:this.group,
        		Position:this.position,
        		Sex:this.sex,
        		C_Mail:this.c_Mail,
        		C_Exten:this.c_Exten,
        		C_Phone_W:this.c_Phone_W,
        		C_Phone_P:this.c_Phone_P,
        		C_Skype:this.c_Skype,
        	}),
        }).then(function (response) {
          alert(parseInt(response.data));
          })
      },

      deleteInfoSend:function(){
        this.axios({
          method:"post",
          url:"http://localhost:1756/handlers/DeleteInfo.ashx",
          data:this.$qs.stringify({

          }),
        }).then(function(response){
          if(parseInt(response.data > 0)){
            alert("删除成功!");
          }
        })
      }

    }
  }


</script>

<style>
  .perCenter{
    margin-left: 2%;
  }
  #addStaff,#export{
    background-color: #99cc33;
    border:1px solid #99CC33;
    border-radius: 5px;
    width: 5%;
    height: 1.875rem;
    color: white;
    margin-left: 0.3125rem;
    outline: none;
  }
  #addStaff:hover{
    background-color: #C8E6C9;
  }
  #export:hover{
    background-color: #C8E6C9;
  }
  table{
    width: 98%;
    text-align: center;

  }
  thead td{
    width: 5%;
    height: 1.875rem;
    background-color: #72A6E0;
    color: white;
  }
  tbody td{
    height: 2.1875rem;
  }
  tbody tr:hover{
    background-color: ;
  }
  img{
    background-color: #FFFFFF;
    border-color: white;
    width: 18px;
    height: 18px;
    margin-left: 13px;
  }

  #addInfo{
    text-align: center;
    font-size: 0.9375rem;
  }
  .symbol{
    width: 10px;
    color: red;
    display: inline-block;
  }
  .label{
    width: 60px;
    display: inline-block;
  }
  #addInfo input{
    width: 12.5rem;
    height: 25px;
    border-radius: 0.25rem;
    border: 0.0625rem solid gray;
    outline: none;
  }

  #editInfo{
    text-align: center;
    font-size: 0.9375rem;
  }
  #editInfo input{
    width: 12.5rem;
    height: 25px;
    border-radius: 0.25rem;
    border: 0.0625rem solid gray;
    outline: none;
  }
  /* #edit:hover{
    background-color: #5DAC81;
  }
  #edit:active{
	  background-color: #5DAC81;
  } */
</style>
