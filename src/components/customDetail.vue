<template>
    <div class="container">
      <p>
        <router-link class="btn btn-info" v-bind:to="'/editCustomer/'+custome.id">修改</router-link>
        <button class="btn btn-danger" v-on:click="deleteCustom(custome.id)">删除</button>
        <button class="btn btn-primary" @click="blackHome">返回</button>
      </p>
      <ul class="list-group">
        <li class="list-group-item"><span class="glyphicon glyphicon-user">{{custome.name}}</span></li>
        <li class="list-group-item"><span class="glyphicon glyphicon-phone-alt">{{custome.phone}}</span></li>
        <li class="list-group-item"><span class="glyphicon glyphicon-envelope">{{custome.email}}</span></li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "customDetail",
      data(){
          return{
            custome:""
          }
      },
      methods:{
          lookCustomDatli(id){
            this.$http.get("http://localhost:3000/users/"+id)
              .then((response)=> {
                 this.custome=response.data;
              })
          },
        blackHome(){
            this.$router.push({path:'/'});
        },
        deleteCustom(id){
          this.$http.delete("http://localhost:3000/users/"+id)
            .then(() =>{
              this.$router.push({path:"/",query:{alert:"用户删除成功!"}});
            })
        }
      },
      created(){
          this.lookCustomDatli(this.$route.params.id);
      }
    }
</script>

<style scoped>

</style>
