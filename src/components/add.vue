<template>
    <div class="container">
      <alert v-if="alert" v-bind:message="alert"></alert>
      <form v-on:submit="addCustom">
        <div class="form-group">
          <label>姓名</label>
          <input type="text" class="form-control"  placeholder="name" v-model="customer.name">
        </div>
        <div class="form-group">
          <label>电话</label>
          <input type="text" class="form-control"  placeholder="phone" v-model="customer.phone">
        </div>
        <div class="form-group">
          <label>邮箱</label>
          <input type="text" class="form-control"  placeholder="email" v-model="customer.email">
        </div>
        <button type="submit" class="btn btn-success">确定</button>
      </form>
    </div>
</template>

<script>
  import  alert from './alert'
    export default {
        name: "add",
        data(){
          return{
            customer:{},
            alert:""
          }
        },
      methods:{
          addCustom(e){
            if(!this.customer.name ||!this.customer.email ||!this.customer.phone){
              this.alert="请输入对应的信息!";
            }else{
              let customNew={
                name:this.customer.name,
                phone:this.customer.phone,
                email:this.customer.email,
              }
              this.$http.post("http://localhost:3000/users",customNew).then(() =>{
               this.$router.push({path:"/",query:{alert:"用户添加成功!"}});
              })
            }
            e.preventDefault();
          }
      },
      components:{
          alert
      }
    }
</script>

<style scoped>

</style>
