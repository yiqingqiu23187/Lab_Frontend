<template>
<div></div>
</template>

<script>
    export default {
        name: "checkPaper",
      created(){
        this.topics=this.$store.state.nowconference.topics;
        this.$axios.post('/myPaper',{
          username:this.$store.state.userDetail.username,
          conferenceFullname:this.$store.state.nowconference.fullName,
        })
          .then(resp => {
              if (resp.status === 200) {
                this.papers=resp.data.papers;
                let a= this.writers;
                for(let b=0;b<this.papers.writerName.length;b++){
                  a.push(this.papers.writerEmail[b],this.papers.writerName[b],
                    this.papers.writerJob[b],this.papers.writerAddress[b])
                }
                this.writers=a;
              }
              else
                alert('show error')
            }
          )
          .catch(error => {
            console.log(error);
          });
      }
    }
</script>

<style scoped>

</style>
