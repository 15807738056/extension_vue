<template>
  <section>
    <!-- 工具条 -->
   <!-- <el-rol> -->
      <el-button size="small" type="primary" @click="openAddDialog">新增职员信息</el-button>
      <el-button size="small"  type="primary" @click="exportExel">导出Excel</el-button>
    <!-- </el-rol> -->

    <!-- 信息列表 -->
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
      <el-table-column prop="" label="操作">
        <template slot-scope="props">
          <el-button type="primary" icon="el-icon-edit" circle size="mini" @click="dialogVisible = true;handleEdit(props.$index, props.row)"></el-button>
          <el-button type="danger" icon="el-icon-delete" circle size="mini" @click="handleDelete(props.$index,props.row)"></el-button>
          <el-dialog title="更改职员信息" :visible.sync="dialogVisible" width="50%" :before-close="handleClose">
            <el-form ref="editForm" :model="editForm" label-width="80px">
               <el-form-item label="姓名">
                 <el-input v-model="editForm.User_Name" size="small"></el-input>
               </el-form-item>
               <el-form-item label="工号">
                 <el-input v-model="editForm.User_Num" size="small" autocomplete="off" disabled></el-input>
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
            </el-form>
            <span slot="footer" class="dialog-footer">
              <el-button @click="">重 置</el-button>
              <el-button type="primary" @click="onSubmit('editForm')">确 定</el-button>
            </span>
          </el-dialog>
        </template>
      </el-table-column>
    </el-table>
  </section>
</template>

<script>
  import Vue from 'vue'
  import axios from 'axios'
  import VueAxios from 'vue-axios'
  Vue.prototype.axios = axios
  export default{
    name:'personPage',
    data(){
      return{
        tableData:[],
        dialogVisible:false,
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
      }
    },
    created:function(){
      // 初始化表格数据
      axios.get("http://localhost:1756/handlers/QueryInfo.ashx").then(function(tableData){
        this.tableData = eval(tableData.data);
      }.bind(this));
    },
    methods:{
      // 打开添加职员信息对话框

      openAddDialog:function(){
         this.$router.push({ path: '/AddDialog' })
      },
      //打开更改信息对话框
      handleEdit:function(index, row){
        this.editForm.User_Name = row.User_Name,
        this.editForm.User_Num = row.User_Num,
        this.editForm.User_Name_Eng = row.User_Name_Eng,
        this.editForm.User_Nickname = row.User_Nickname,
        this.editForm.Company = row.Company,
        this.editForm.Dept = row.Dept,
        this.editForm.Group = row.Group,
        this.editForm.Position = row.Position,
        this.editForm.User_Sex = row.User_Sex,
        this.editForm.C_Mail = row.C_Mail,
        this.editForm.C_Exten = row.C_Exten,
        this.editForm.C_Phone_W = row.C_Phone_W,
        this.editForm.C_Phone_P = row.C_Phone_P,
        this.editForm.C_Skype = row.C_Skype
      },
      // 删除
      deleteData:function(){

      },
      // 导出Excel
      exportExel:function(){

      },
      //
      // mounted:function(){
      //   if(prop.value == "")
      //   prop.value = "-";
      // }
      onSubmit:function(formName){
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.axios({
              method:'post',
              url:"http://localhost:1756/handlers/EditInfo.ashx",
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
                this.dialogVisible = false ;
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
      handleDelete:function(index,row){
        this.axios({
          method:'post',
          url:"http://localhost:1756/handlers/DeleteInfo.ashx",
          data:this.$qs.stringify({
            User_Num:row.User_Num
          }),
        }).then(function(response){
         if( parseInt(response.data) > 0 ){
           alert("删除成功！");
         }
         else{
           alert("删除失败！");
         }
        });
      },
      //
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
            // this.$router.push({ path: '/PersonPage' });
          })
          .catch(_ => {});
      },
      //
    }
  }
</script>

<style>
</style>
