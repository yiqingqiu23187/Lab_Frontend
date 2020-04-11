<template>
  <div id="userinformation">

    <ul>
      <li v-for="(value,index) in object" :key="index">
        {{value.name}}:{{value.detail}}
      </li>
    </ul>
    <!--{{token}}-->
  </div>
</template>

<script>
  export default {
    name: "information",
    data(){
      return{
        // token:localStorage.getItem('token'),
        // userDetails:JSON.parse(localStorage.getItem('userDetails')),
        // username:localStorage.getItem('userDetails').username,
        object:[
          {name:"Username",detail:this.$store.state.userDetail.username},
          {name:"Fullname",detail:this.$store.state.userDetail.fullname},
          {name:"Email",detail:this.$store.state.userDetail.email},
          {name:"Area",detail:this.$store.state.userDetail.area},
          {name:"Job",detail:this.$store.state.userDetail.job}
        ]
      }
    }
  }

  // var vm = new Vue({
  //   el:'#userinformation',
  //   data:{
  //     username:localStorage.getItem('userDetails').username,
  //     fullname:localStorage.getItem('userDetails').fullname,
  //     email:localStorage.getItem('userDetails').email,
  //     area:localStorage.getItem('userDetails').area,
  //     job:localStorage.getItem('userDetails').job
  //   }
  // })
</script>

<style scoped>

</style>
