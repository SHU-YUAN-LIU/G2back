<template>
    <div class="login_wrap">
        <div class="login_container">
            <div class="login_logo">
                <img src="../assets/image/login/logo.png" alt="">
            </div>
            <form action="" method="POST" class="login_form">
                <div class="login_logo"><img src="" alt=""></div>
                <p>帳號</p>
                <input type="text" name="memId">
                <p>密碼</p>
                <input type="text" name="memPsw">
                <button type="button" class="btn"><router-link to="/index">登入 ➜</router-link></button>
                <!-- <button type="submit" class="btn">登入 ➜</button> -->
            </form>
        </div>
    </div>
    <background />
</template>
<script>
import background from "../components/background_triangle.vue";
import axios from 'axios';

export default {
    data() {
        return {
            // url: `${import.meta.env.VITE_API_URL}/demo/demo.php`,
        }
    },
    components: {
        background,
    },
    methods: {

    },
    mounted() {

    },
    created() {
        this.fetchData()
    },
    methods: {
        // fetchData() {
        //     fetch(`${import.meta.env.VITE_API_URL}/AjaxLab/2_Ajax_fetch_books/prod_getAll.php`).then(res => {
        //         console.log(res);
        //     })
        // }
        // fetchData() {
        //     fetch(`${import.meta.env.VITE_API_URL}/public/api/prod_getAll.php`).then(res => {
        //         console.log(res);
        //     })
        // }
        fetchData() {
            axios.get(`${import.meta.env.VITE_API_URL}/AjaxLab/2_Ajax_fetch_books/prod_getAll.php`).then(res => {
                console.log(res);
            })
        }
    }
}

</script>

<style>


</style>
