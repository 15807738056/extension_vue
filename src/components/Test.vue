<template>
  <div>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column label="操作">
      <!-- <el-dialog title="更改职员信息" :visible.sync="dialogVisible" width="50%"> -->
         <template slot-scope="props">
           <el-button icon="el-icon-edit" size="small" type="primary" @click="dialogVisible = true;deleteData(props.$index, props.row)"></el-button>
           <el-button type="danger" icon="el-icon-delete" circle size="mini"  @click="deleteData(props.$index, props.row)"></el-button>

           <el-dialog title="更改职员信息" :visible.sync="dialogVisible" width="50%">
             <el-form label-position="left" inline class="demo-table-expand" ref="editForm" :model="editForm">
               <el-form-item label="商品名称" >
                 <el-input v-model="editForm.name"></el-input>
               </el-form-item>
               <el-form-item label="所属店铺">
                 <el-input v-model="editForm.shop"></el-input>
               </el-form-item>
               <el-form-item label="商品 ID">
                 <el-input v-model="editForm.id" disabled></el-input>
               </el-form-item>
               <el-form-item label="店铺 ID">
                 <el-input v-model="editForm.shopId"></el-input>
               </el-form-item>
               <el-form-item label="商品分类">
                 <el-input v-model="editForm.category"></el-input>
               </el-form-item>
               <el-form-item label="店铺地址">
                 <el-input v-model="editForm.address"></el-input>
               </el-form-item>
               <el-form-item label="商品描述">
                 <el-input v-model="editForm.desc"></el-input>
               </el-form-item>
             </el-form>
           </el-dialog>
          </template>



      </el-table-column>
      <el-table-column
        label="商品 ID"
        prop="id">
      </el-table-column>
      <el-table-column
        label="商品名称"
        prop="name">
      </el-table-column>
      <el-table-column
        label="描述"
        prop="desc">
      </el-table-column>
    </el-table>
    <div>
       <span>{{testdata}}</span>
    </div>


  </div>

</template>

<style>
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
</style>

<script>
  export default {
    name:'test',

    data() {
      return {
        dialogVisible:false,
        testdata:'123',
        test:'',
        editForm:{
          id: '',
          name: '',
          category: '',
          desc: '',
          address: '',
          shop: '',
          shopId: ''
        },
        tableData: [{
          id: '12987122',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333'
        }, {
          id: '12987123',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333'
        }, {
          id: '12987125',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333'
        }, {
          id: '12987126',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333'
        }],

      }
    },
    methods:{
      deleteData:function(index,row){
        this.dialogVisible = true;
         this.testdata = row;
        this.editForm.id = row.id;
        this.editForm.name = row.name;
        this.editForm.category = row.category;
        this.editForm.desc = row.desc;
        this.editForm.address = row.address;
        this.editForm.shop = row.shop;
        this.editForm.shopId = row.shopId;
      },
      //
    }
  }
</script>
