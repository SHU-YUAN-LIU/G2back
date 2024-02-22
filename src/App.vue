<script>
import { RouterLink, RouterView } from 'vue-router'
export default {
  components: {

  },
  data() {
    return {

    }
  },
  
  //由於在直接輸入url時無法只依靠router.beforeEach的取消跳轉
  //所以在進入對應頁面後手動立刻跳轉回login
  beforeMount() {
    // 檢查 localStorage 是否有登入管理員ID
    const adminId = localStorage.getItem('adminId');

    // 如果沒有登入管理員ID，跳轉回 login 頁面
    if (!adminId && this.$route.path !== '/login') {
      this.$router.push('/login');
    }
  },

}



</script>

<template>
  <RouterView />
</template>

<style scoped></style>
