<template>
    <div class="index_wrap">
        <div class="sidebar">
            <div class="sidebar_logo"><img src="../assets/image/login/logo.png" alt=""></div>
            <nav>
                <ul>
                    <li class="dropdown">
                        <span>消息管理 ❯</span>
                    </li>
                    <li class="dropdown">
                        <span>大選管理 ❯</span>
                    </li>
                    <li class="dropdown">
                        <span>商城管理 ❯</span>
                    </li>
                    <li>
                        <router-link to="#">捐款查詢</router-link>
                    </li>
                    <li class="dropdown">
                        <span>帳戶管理 ❯</span>

                    </li>
                    <li class="dropdown">
                        <span><router-link to="/member">會員 ❯</router-link></span>
                    </li>
                    <li class="dropdown">
                        <span><router-link to="/petition">陳情管理</router-link></span>
                    </li>
                </ul>
            </nav>
            <div class="go_to_front">
                <router-link to="#">回到前台</router-link>
            </div>
        </div>
        <div class="main">
            <div class="top_bar">
                <p>後台管理</p>
                <div class="member">
                    <div class="profile"></div>
                    <span>王曉明</span>
                    <img src="../assets/image/index/logout.png" alt="" class="icon">
                </div>
            </div>
            <!-- --------------------------------------------------------------------------------------- -->
            <div class="petition_wrap">
                <div class="search_bar">
                    <input type="text" placeholder="請輸入標題或關鍵字">
                    <div class="search_text">搜尋</div>
                </div>
                <!-- --------------------------------------------------------------------------------------- -->
                <div class="petition-info">
                    <table class="table">
                        <thead>
                            <tr class="table-dark" align="center">
                                <th scope="col">陳情編號</th>
                                <th scope="col">陳情日期</th>
                                <th scope="col">陳情者姓名</th>
                                <th scope="col">陳情主旨</th>
                                <th scope="col">陳情狀態</th>
                                <th scope="col">操作</th>
                            </tr>
                        </thead>
                        <tbody>
                            <!-- 第一行 -->
                            <tr class="petition-tr" align="center">
                                <td>231411424</td>
                                <td>2024.01.01</td>
                                <td>小丸子</td>
                                <td>我要週休三日</td>
                                <td>處理中</td>
                                <td>
                                    <button type="button" class="btn btn-outline-primary">
                                        修改
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<style></style>
