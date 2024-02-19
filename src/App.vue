<script>
import { RouterLink, RouterView } from 'vue-router'
export default {
  components: {

  },
  data() {
    return {

    }
  },
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
