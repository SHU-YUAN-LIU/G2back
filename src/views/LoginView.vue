<template>
    <div>
        <background />
    </div>
    <div class="login_wrap">
        <div class="login_container">
            <div class="login_logo">
                <img src="../assets/image/login/logo.png" alt="">
            </div>
            <form action="" method="POST" class="login_form">
                <div class="login_logo"><img src="" alt=""></div>
                <p>帳號</p>
                <input type="text" v-model="account" name="memId">
                <p>密碼</p>
                <input type="password" v-model="psw" name="memPsw">
            </form>
            <commitButton @click="adminLogin" :commitButton="commit" />
        </div>
    </div>
</template>
<script>
import background from "../components/background_triangle.vue";
import commitButton from "../components/commitButton.vue";
import axios from 'axios';

export default {
    data() {
        return {
            // url: `${import.meta.env.VITE_API_URL}/demo/demo.php`,
            commit: '登入',
            account: '',
            psw:'',
        }
    },
    components: {
        background,
        commitButton
    },
    mounted() {

    },
    created() {
        // this.fetchData()
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
        // fetchData() {
        //     axios.get(`${import.meta.env.VITE_API_URL}/AjaxLab/2_Ajax_fetch_books/prod_getAll.php`).then(res => {
        //         console.log(res);
        //     })
        // }
        adminLogin(){
            var formData = new FormData();
            formData.append('account',this.account);
            formData.append('psw',this.psw);
            axios({
                method:"post",
                url:`${import.meta.env.VITE_PHP_URL}` + "/adminLogin.php",
                data:formData,
                headers: { "Content-Type": "multipart/form-data" },
            })
            .then(res => {
                    console.log(res.data.admin.length);
                    // console.log(res.data.admin[0].status);
                    if(res.data.admin.length===0){
                        alert("帳號密碼錯誤");
                    }else if(res.data.admin[0].status=="IA"){
                        alert("帳戶已停用");
                    }else{
                        this.$router.push({ name: 'index' });
                    }
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        }
    }
}

</script>

<style></style>
