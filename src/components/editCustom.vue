<template>
    <div class="container">
      <alert v-if="alert" v-bind:message="alert"></alert>
      <button  class="btn btn-info pull-right" @click="editBlack">返回</button>
      <form v-on:submit="editcustomer">
        <div class="from-group">
          <label>姓名</label>
          <input type="text" class="form-control"  placeholder="name" v-model="customer.name">
        </div>
        <div class="from-group">
          <label>电话</label>
          <input type="text" class="form-control"  placeholder="phone" v-model="customer.phone">
        </div>
        <div class="from-group">
          <label>邮箱</label>
          <input type="text" class="form-control"  placeholder="email" v-model="customer.email">
        </div>
        <button type="submit" class="btn btn-success">确认</button>
      </form>
    </div>
</template>

<script>
  import alert from './alert'
    export default {
        name: "editCustom",
        data(){
          return{
            customer:{},
            alert:""
          }
        },
      methods: {
        fetchEdit(id){
          this.$http.get("http://localhost:3000/users/"+id)
            .then((response)=> {
              this.customer=response.data;
            })
        },
        editBlack(){
          this.$router.push({path:"/"});
        },
        editcustomer(e){
          if(!this.customer.name ||!this.customer.phone ||!this.customer.email){
            this.alert="请输入对应的信息";
          }else{
            let editCustom={
              name:this.customer.name,
              phone:this.customer.phone,
              email:this.customer.email,
            }
            this.$http.put("http://localhost:3000/users/"+this.$route.params.id,editCustom)
              .then(()=>{
                this.$router.push({path:'/',query:{alert:"用户信息更新成功!"}})
              })
          }
        }
      },
      created(){
          this.fetchEdit(this.$route.params.id);
      },
      components:{
          alert
      }
    }
</script>

<style scoped>

</style>
