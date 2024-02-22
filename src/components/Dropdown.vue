<template>
    <div class="header">
        <!-- 左邊選單 -->
        <nav class="flex-column  navbar-expand-lg bg-* header_left">
            <!-- logo -->
            <div class="logoImg">
                <img class="navbar-brand " src="../assets/image/login/logo.png" alt="" width="169" height="125">
            </div>
            <div class="collapse navbar-collapse header-info" id="navbarSupportedContent">
                <ul class="flex-column navbar-nav mr-auto">
                    <!-- 消息管理 -->
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle text-dark" href="#" id="navbarDropdown" role="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            消息管理
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <RouterLink class="dropdown-item text-dark" to="/banner">輪播管理</RouterLink>
                            <RouterLink class="dropdown-item text-dark" to="/news">新聞管理</RouterLink>
                        </div>
                    </li>
                    <!-- 大選管理 -->
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle text-dark" href="#" id="navbarDropdown" role="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            大選管理
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <RouterLink class="dropdown-item text-dark" to="journey">活動管理</RouterLink>
                            <RouterLink class="dropdown-item text-dark" to="countdown">選舉倒數</RouterLink>
                            <RouterLink class="dropdown-item text-dark" to="policy">政策管理</RouterLink>
                        </div>
                    </li>
                    <!-- 商城管理 -->
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle text-dark" href="#" id="navbarDropdown" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">
                            商城管理
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <RouterLink class="dropdown-item text-dark" to="Product">商品管理</RouterLink>
                            <RouterLink class="dropdown-item text-dark" to="order">訂單管理</RouterLink>
                        </div>
                    </li>
                    <!-- 捐款查詢 -->
                    <li class="nav-item">
                        <RouterLink class="text-dark" to="donate">捐款查詢</RouterLink>
                    </li>
                    <!-- 陳情查詢 -->
                    <li class="nav-item">
                        <RouterLink class="text-dark" to="contact">陳情查詢</RouterLink>
                    </li>
                    <!-- 帳戶管理 -->
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle text-dark" href="#" id="navbarDropdown" role="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            帳戶管理
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <RouterLink class="dropdown-item text-dark" to="member">會員管理</RouterLink>
                            <RouterLink class="dropdown-item text-dark" to="admin">管理員管理</RouterLink>
                            <RouterLink class="dropdown-item text-dark" to="cadre">幹部管理</RouterLink>
                        </div>
                    </li>
                    <!-- 回到前台 -->
                    <li class="nav-item back-home">
                        <a class="nav-link  text-dark back" href="https://tibamef2e.com/chd104/g2/" >回到前台
                        </a>
                    </li>
                </ul>

            </div>

        </nav>
    </div>
</template>


<script>
export default {
    data() {
        return {

        };
    },
    components: {

    }

}

</script>



