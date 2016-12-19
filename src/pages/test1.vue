<template>
  <div>
    this is test1
    <span>{{nowTime | dateFormat('yyyy-MM-dd hh:mm:ss')}}</span>

  </div>
</template>

<script>
  export default{
    data(){
      return {
      	nowTime: new Date(),
        alert
      }
    },
    mounted() {
    },
    components: {
    }
  }
</script>
