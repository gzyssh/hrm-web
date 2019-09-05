<template>
    <div>
      <el-dialog title="编辑部门" :visible.sync="dialogFormVisible">
        <el-form :model="dept" label-width="120px">
          <el-form-item label="部门名称" >
            <el-input v-model="dept.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="部门编码" >
            <el-input v-model="dept.code" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="部门负责人" >
            <el-input v-model="dept.manager" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="部门介绍" >
            <el-input v-model="dept.introduce" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="saveDept">确 定</el-button>
        </div>
      </el-dialog>
    </div>
</template>

<script>
    import {list,saveOrUpdate,detail,deleteById} from '@/api/base/dept'
    export default {
      name: "add",
      data(){
        return{
          //添加部门的模型
          pid:'',
          dept:{},
          dialogFormVisible:false
        }
      },
      methods:{
        saveDept(){
          this.dept.pid=this.pid;
          saveOrUpdate(this.dept).then(res=>{
            if(res.data.success){
              this.$message({
                message: res.data.message,
                type: res.data.success?'success':'error'
              });
              location.reload();
            }
          })
        }
      }
    }
</script>

<style>

</style>
