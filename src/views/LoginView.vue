<template>
    <div class="login_wrap">
        <div class="login_container">
            <div class="login_logo">
                <img src="../assets/image/login/logo.png" alt="">
            </div>
            <form action="" class="login_form">
            <div class="login_logo"><img src="" alt=""></div>
            <p>帳號</p>
            <input type="text">
            <p>密碼</p>
            <input type="text">
            <button type="button" class="btn"><router-link to="/index">登入 ➜</router-link></button>
            </form>
        </div>
    </div>
    <background />
</template>
<script>
import background from "../components/background_triangle.vue";

export default{
    data(){
        return{

        }
    },
    components:{
        background,
    },
    methods: {
        
    },
    mounted() {
        
    },
}

</script>

<style>


</style>
