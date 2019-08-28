<template>
  <el-dialog title="更改职员信息" :visible.sync="dialogVisible" width="50%" :before-close="handleClose">
    <el-form ref="editForm" :model="editForm" label-width="80px">
       <el-form-item label="姓名">
         <el-input v-model="editForm.User_Name" size="small"></el-input>
       </el-form-item>
       <el-form-item label="工号">
         <el-input v-model="editForm.User_Num" size="small" autocomplete="off"></el-input>
       </el-form-item>
       <el-form-item label="英文名">
         <el-input v-model="editForm.User_Name_Eng" size="small"></el-input>
       </el-form-item>
       <el-form-item label="昵称">
         <el-input v-model="editForm.User_Nickname" size="small"></el-input>
       </el-form-item>
       <el-form-item label="公司">
         <el-input v-model="editForm.Company" size="small"></el-input>
       </el-form-item>
       <el-form-item label="部门">
         <el-input v-model="editForm.Dept" size="small"></el-input>
       </el-form-item>
       <el-form-item label="课组">
         <el-input v-model="editForm.Group" size="small"></el-input>
       </el-form-item>
       <el-form-item label="职位">
         <el-input v-model="editForm.Position" size="small"></el-input>
       </el-form-item>
       <el-form-item label="性别">
         <el-input v-model="editForm.User_Sex" size="small"></el-input>
       </el-form-item>
       <el-form-item label="邮箱">
         <el-input v-model="editForm.C_Mail" size="small"></el-input>
       </el-form-item>
       <el-form-item label="分机号">
         <el-input v-model="editForm.C_Exten" size="small"></el-input>
       </el-form-item>
       <el-form-item label="工作电话">
         <el-input v-model="editForm.C_Phone_W" size="small"></el-input>
       </el-form-item>
       <el-form-item label="私人电话">
         <el-input v-model="editForm.C_Phone_P" size="small"></el-input>
       </el-form-item>
       <el-form-item label="Skype">
         <el-input v-model="editForm.C_Skype" size="small"></el-input>
       </el-form-item>
       <!-- <el-form-item>
          <el-button @click="resetForm('editForm')">取 消</el-button>
         <el-button type="primary" @click="onSubmit('editForm')">确 定</el-button>
       </el-form-item> -->
    </el-form>

    <span slot="footer" class="dialog-footer">
      <el-button @click="resetForm('editForm')">重 置</el-button>
      <el-button type="primary" @click="onSubmit('editForm')">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
  export default{
    name:'editDialog',
    data(){
      return {
        dialogVisible:true,
        editForm: {
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

    created:function(index, row){
     this.editForm = Object.assign({}, row);
    },

    methods:{
      onSubmit:function(formName){
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.axios({
              method:'post',
              url:"http://localhost:1756/handlers/Add.ashx",
              data:this.$qs.stringify({
                User_Name: this.editForm.User_Name,
                User_Num: this.editForm.User_Num,
                User_Name_Eng: this.editForm.User_Name_Eng,
                User_Nickname: this.editForm.User_Nickname,
                Company: this.editForm.Company,
                Dept: this.editForm.Dept,
                Group: this.editForm.Group,
                Position: this.editForm.Position,
                User_Sex: this.editForm.User_Sex,
                C_Mail: this.editForm.C_Mail,
                C_Exten: this.editForm.C_Exten,
                C_Phone_W: this.editForm.C_Phone_W,
                C_Phone_P: this.editForm.C_Phone_P,
                C_Skype: this.editForm.C_Skype
            	}),
            }).then(function(response){
              if( parseInt(response.data) > 0 ){
                alert("更改成功！");
                this.$router.push({ path: '/PersonPage' });
              }
              else{
                alert("更改失败！");
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
      //

    }
  }
</script>

<style>
  el-input{
    width: 50%;
  }
</style>
