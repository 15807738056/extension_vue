<template>
  <el-dialog title="添加职员" :visible.sync="dialogVisible" width="50%" :before-close="handleClose">
    <el-form ref="AddForm" :model="AddForm" label-width="80px">
       <el-form-item label="姓名">
         <el-input v-model="AddForm.User_Name" size="small"></el-input>
       </el-form-item>
       <el-form-item prop="User_Num" label="工号" :rules="[{ required: true, message: '工号不能为空'}]">
         <el-input type="User_Num" v-model="AddForm.User_Num" size="small" autocomplete="off"></el-input>
       </el-form-item>
       <el-form-item label="英文名">
         <el-input v-model="AddForm.User_Name_Eng" size="small"></el-input>
       </el-form-item>
       <el-form-item label="昵称">
         <el-input v-model="AddForm.User_Nickname" size="small"></el-input>
       </el-form-item>
       <el-form-item label="公司">
         <el-input v-model="AddForm.Company" size="small"></el-input>
       </el-form-item>
       <el-form-item label="部门">
         <el-input v-model="AddForm.Dept" size="small"></el-input>
       </el-form-item>
       <el-form-item label="课组">
         <el-input v-model="AddForm.Group" size="small"></el-input>
       </el-form-item>
       <el-form-item label="职位">
         <el-input v-model="AddForm.Position" size="small"></el-input>
       </el-form-item>
       <el-form-item label="性别">
         <el-input v-model="AddForm.User_Sex" size="small"></el-input>
       </el-form-item>
       <el-form-item label="邮箱">
         <el-input v-model="AddForm.C_Mail" size="small"></el-input>
       </el-form-item>
       <el-form-item label="分机号">
         <el-input v-model="AddForm.C_Exten" size="small"></el-input>
       </el-form-item>
       <el-form-item label="工作电话">
         <el-input v-model="AddForm.C_Phone_W" size="small"></el-input>
       </el-form-item>
       <el-form-item label="私人电话">
         <el-input v-model="AddForm.C_Phone_P" size="small"></el-input>
       </el-form-item>
       <el-form-item label="Skype">
         <el-input v-model="AddForm.C_Skype" size="small"></el-input>
       </el-form-item>
       <!-- <el-form-item>
          <el-button @click="resetForm('AddForm')">取 消</el-button>
         <el-button type="primary" @click="onSubmit('AddForm')">确 定</el-button>
       </el-form-item> -->
    </el-form>

    <span slot="footer" class="dialog-footer">
      <el-button @click="resetForm('AddForm')">重 置</el-button>
      <el-button type="primary" @click="onSubmit('AddForm')">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
  import Vue from 'vue'
  import axios from 'axios'
  import VueAxios from 'vue-axios'
  Vue.prototype.axios = axios
  export default{
    name:'addDialog',
    data(){
      return {
        dialogVisible:true,
        AddForm: {
          User_Name:'',
          User_Num:'',
          User_Name_Eng:'',
          User_Nickname:'',
          Company:'',
          Dept:'',
          Group:'',
          Position:'',
          User_Sex:'',
          C_Mail:'',
          C_Exten:'',
          C_Phone_W:'',
          C_Phone_P:'',
          C_Skype:''
        }
      };
    },
    methods:{

      onSubmit:function(formName){
         var _this = this;
          _this.$refs[formName].validate((valid) => {
          if (valid) {
            _this.axios({
              method:'post',
              url:"http://localhost:1756/handlers/Add.ashx",
              data:this.$qs.stringify({
                User_Name: this.AddForm.User_Name,
                User_Num: this.AddForm.User_Num,
                User_Name_Eng: this.AddForm.User_Name_Eng,
                User_Nickname: this.AddForm.User_Nickname,
                Company: this.AddForm.Company,
                Dept: this.AddForm.Dept,
                Group: this.AddForm.Group,
                Position: this.AddForm.Position,
                User_Sex: this.AddForm.User_Sex,
                C_Mail: this.AddForm.C_Mail,
                C_Exten: this.AddForm.C_Exten,
                C_Phone_W: this.AddForm.C_Phone_W,
                C_Phone_P: this.AddForm.C_Phone_P,
                C_Skype: this.AddForm.C_Skype
            	}),
            }).then(function(response){
              if( parseInt(response.data) > 0 ){
                alert("添加成功！");
                _this.$router.push({ path: '/PersonPage' });
              }
              else{
                alert("添加失败！");
              }
            })

          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      //
      resetForm:function(formName) {
        this.$refs[formName].resetFields();
      },
      //
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            this.$router.push({ path: '/PersonPage' });
          })
          .catch(_ => {});
      }
    }
  }
</script>

<style>
  el-input{
    width: 50%;
  }
</style>
