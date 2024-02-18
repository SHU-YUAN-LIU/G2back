<template>
    <div class="right_nav">
        <div class="header_title">
            <h3>後台管理</h3>
            <div class="header_account">
                <div class="header_img">
                    <img src="../../public/images/header/img.png" alt="" class="icon">
                </div>
                <p>{{ name }}</p>
                <div class="header_icon" @click="logout">
                    <img src="../../public/images/icon/logout.svg" alt="" class="icon">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: "",
            admin_no: 0,
        }
    },
    mounted() {
        this.admin_no = JSON.parse(localStorage.getItem('adminId'))[0].admin_no;
        this.name = JSON.parse(localStorage.getItem('adminId'))[0].admin_name;
    },
    methods: {
        logout() {
            localStorage.removeItem('adminId');
            this.$router.push('/login');
        }
    },
}
</script>