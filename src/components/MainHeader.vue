<template>
    <div class="header">
        <!-- 左邊選單 -->
        <nav class="flex-column  navbar-expand-lg navbar-light bg-* header_left">
            <!-- logo -->
            <a class="navbar-brand logoImg" href="#">
                <img src="../assets/image/login/logo.png" alt="" width="169" height="125">
            </a>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="flex-column navbar-nav mr-auto">
                    <!-- 消息管理 -->
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle text-dark" href="#" id="navbarDropdown" role="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            消息管理
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item text-dark" href="#">輪播管理</a>
                            <a class="dropdown-item text-dark" href="#">新聞管理</a>
                        </div>
                    </li>
                    <!-- 大選管理 -->
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle text-dark" href="#" id="navbarDropdown" role="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            大選管理
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item text-dark" href="#">活動管理</a>
                            <a class="dropdown-item text-dark" href="#">選舉倒數</a>
                            <a class="dropdown-item text-dark" href="#">政策管理</a>
                        </div>
                    </li>
                    <!-- 商城管理 -->
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle text-dark" href="#" id="navbarDropdown" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">
                            商城管理
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item text-dark" href="#">商品管理</a>
                            <a class="dropdown-item text-dark" href="#">訂單管理</a>
                        </div>
                    </li>
                    <!-- 捐款查詢 -->
                    <li class="nav-item">
                        <a class="nav-link disabled text-dark" href="#">捐款查詢</a>
                    </li>
                    <!-- 陳情查詢 -->
                    <li class="nav-item">
                        <a class="nav-link disabled text-dark" href="../contact">陳情查詢</a>
                    </li>
                    <!-- 帳戶管理 -->
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle text-dark" href="#" id="navbarDropdown" role="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            帳戶管理
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item text-dark" href="../member">會員管理</a>
                            <a class="dropdown-item text-dark" href="#">管理員管理</a>
                            <a class="dropdown-item text-dark" href="#">幹部管理</a>
                        </div>
                    </li>
                    <!-- 回到前台 -->
                    <li class="nav-item">
                        <a class="nav-link disabled text-dark" href="#">回到前台</a>
                    </li>
                </ul>

            </div>

        </nav>
        <!-- 後台管理 -->
        <div class="header_title">
            <h3>後台管理</h3>
            <div class="header_account">
                <img src="../../public/images/header/img.png" alt="" class="icon">
                <p>王曉明</p>
                <img src="../assets/image/index/logout.png" alt="" class="icon">
            </div>
        </div>
    </div>
</template>


<script>


</script>



