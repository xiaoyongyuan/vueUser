<template>
    <div class="Custome container">
      <alert v-if="alert" v-bind:message="alert"></alert>
      <input type="text" class="form-control" placeholder="搜索" v-model="searchName">
      <button class="btn btn-info pull-right" @click="clearCust">清空</button>
      <table class="table">
        <thead>
          <th>姓名</th>
          <th>电话</th>
          <th>邮箱</th>
        </thead>
        <tbody>
          <tr v-for="customes in findBy(custome,searchName)">
            <td>{{customes.name}}</td>
            <td>{{customes.phone}}</td>
            <td>{{customes.email}}</td>
            <td><router-link class="btn btn-default" v-bind:to="'/customDetail/'+customes.id">详情</router-link></td>
          </tr>
        </tbody>
      </table>
    </div>
</template>

<script>
  import alert from './alert'
  export default {
        name: "Custome",
        data(){
          return{
            custome:[],
            alert:'',
            searchName:""
          }
        },
      methods:{
        fetchCustom(){
          this.$http.get("http://localhost:3000/users")
            .then((response)=> {
              this.custome=response.data;
            })
        },
        findBy(customes,value){
            return customes.filter(function (custome) {
              return custome.name.match(value);
            })
        },
        clearCust(){
            this.searchName="";
        }
      },
      created(){
          if(this.$route.query.alert){
            this.alert=this.$route.query.alert;
          }
          this.fetchCustom();
      },
      components:{
        alert
      }
  }
</script>

<style scoped>

</style>
