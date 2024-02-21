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
            commit: '登入',
            account: '',
            psw: '',
        }
    },
    components: {
        background,
        commitButton
    },
    beforeMount() {
        //登入進來前,要清空admin的id
        localStorage.removeItem('adminId');
    },
    mounted() {

    },
    created() {
        // this.fetchData()
    },
    methods: {

        adminLogin() {
            var formData = new FormData();
            formData.append('account', this.account);
            formData.append('psw', this.psw);
            axios({
                method: "post",
                url: `${import.meta.env.VITE_PHP_URL}` + "/adminLogin.php",
                data: formData,
                headers: { "Content-Type": "multipart/form-data" },
            })
                .then(res => {
                    // console.log(res.data.admin.length);
                    // console.log(res.data.admin[0].status);
                    if (res.data.admin.length === 0) {
                        alert("帳號密碼錯誤");
                    } else if (res.data.admin[0].status == "IA") {
                        alert("帳戶已停用");
                    } else {
                        // console.log(res.data.admin);
                        localStorage.setItem('adminId', JSON.stringify(res.data.admin));
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
