<template>
  <div class="index_wrap">
    <div class="sidebar">
      <div class="sidebar_logo"><img src="../assets/image/login/logo.png" alt=""></div>
      <nav>
        <ul>
          <li class="dropdown">
            <span>消息管理 ❯</span>
            <!-- <div class="dropdown-content">
                <router-link to="#">輪播管理</router-link>
                <router-link to="#">新聞管理</router-link>
            </div> -->
          </li>
          <li class="dropdown">
            <span>大選管理 ❯</span>
            <!-- <div class="dropdown-content">
                <router-link to="#">輪播管理</router-link>
                <router-link to="#">新聞管理</router-link>
            </div> -->
          </li>
          <li class="dropdown">
            <span>商城管理 ❯</span>
            <!-- <div class="dropdown-content">
                <router-link to="#">輪播管理</router-link>
                <router-link to="#">新聞管理</router-link>
            </div> -->
          </li>
          <li>
            <router-link to="donate">捐款查詢</router-link>
          </li>
          <li class="dropdown">
            <span>帳戶管理 ❯</span>
            <!-- <div class="dropdown-content">
                <router-link to="#">輪播管理</router-link>
                <router-link to="#">新聞管理</router-link>
            </div> -->
          </li>
          <li class="dropdown">
            <span><router-link to="/member">會員 ❯</router-link></span>
          </li>
          <li class="dropdown">
            <span><router-link to="/member">陳情管理</router-link></span>
          </li>
        </ul>
      </nav>
    </div>
    <div class="main">
      <div class="top_bar">
        <p>後臺管理</p>
        <div class="member">
          <div class="profile"></div>
          <span>王曉明</span>
          <img src="../assets/image/index/logout.png" alt="" class="icon">
        </div>
      </div>
      <div class="main_wrap">
        <div class="search_bar">
          <input type="text" placeholder="請輸入標題或關鍵字">
          <div class="search_text">搜尋</div>
        </div>
        <div class="main_container">
          <div class="title">
            <div class="news_number">消息編號</div>
            <div class="banner_pic">輪播圖預覽</div>
            <div class="content_title">主旨</div>
            <div class="state">是否啟用</div>
            <div class="edit">操作</div>
          </div>
          <div class="banner_ul">
            <div class="banner_li">
              <div class="news_number">1</div>
              <div class="banner_pic"><img src="../assets/image/index/banner1.png" alt=""></div>
              <div class="content_title">2024大選推廣</div>
              <div class="state"><img src="../assets/image/index/state.png" alt=""></div>
              <div class="edit"><img src="../assets/image/index/edit_icon.png" alt=""></div>
            </div>
          </div>
          <div class="banner_ul">
            <div class="banner_li">
              <div class="news_number">1</div>
              <div class="banner_pic"><img src="../assets/image/index/banner1.png" alt=""></div>
              <div class="content_title">2024大選推廣</div>
              <div class="state"><img src="../assets/image/index/state.png" alt=""></div>
              <div class="edit"><img src="../assets/image/index/edit_icon.png" alt=""></div>
            </div>
          </div>
          <div class="banner_ul">
            <div class="banner_li">
              <div class="news_number">1</div>
              <div class="banner_pic"><img src="../assets/image/index/banner1.png" alt=""></div>
              <div class="content_title">2024大選推廣</div>
              <div class="state"><img src="../assets/image/index/state.png" alt=""></div>
              <div class="edit"><img src="../assets/image/index/edit_icon.png" alt=""></div>
            </div>
          </div>
          <div class="banner_ul">
            <div class="banner_li">
              <div class="news_number">1</div>
              <div class="banner_pic"><img src="../assets/image/index/banner1.png" alt=""></div>
              <div class="content_title">2024大選推廣</div>
              <div class="state"><img src="../assets/image/index/state.png" alt=""></div>
              <div class="edit"><img src="../assets/image/index/edit_icon.png" alt=""></div>
            </div>
          </div>
          <div class="banner_ul">
            <div class="banner_li">
              <div class="news_number">1</div>
              <div class="banner_pic"><img src="../assets/image/index/banner1.png" alt=""></div>
              <div class="content_title">2024大選推廣</div>
              <div class="state"><img src="../assets/image/index/state.png" alt=""></div>
              <div class="edit"><img src="../assets/image/index/edit_icon.png" alt=""></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import { RouterLink } from 'vue-router';

// export default {
//   setup() {
//   },
//   components: {
//     DropDown,
//   },
//   data() {
//     return {

//     }
//   },
//   created() {
//   },
//   methods: {
//     //只要是data的物件',都要加this
//     showDropDown() {
//       if (this.isDropDown == true) {
//         this.isDropDown = false;
//       } else {
//         this.isDropDown = true;
//       }

//     },

//   },
// }
</script>

<style></style>
