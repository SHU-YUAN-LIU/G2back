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
            <router-link to="#">捐款查詢</router-link>
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
            <!-- <div class="dropdown-content">
                <router-link to="#">輪播管理</router-link>
                <router-link to="#">新聞管理</router-link>
            </div> -->
          </li>
        </ul>
      </nav>
      <div class="go_to_front">
        <router-link to="#">回到前台</router-link>
      </div>
    </div>
    <div class="main">
      <div class="top_bar">
        <p>會員管理</p>
        <div class="member">
          <div class="profile"></div>
          <span>王曉明</span>
          <img src="../assets/image/index/logout.png" alt="" class="icon">
        </div>
      </div>
      <!-- --------------------------------------------------------------------------------------- -->
      <div class="mem_wrap">
        <div class="search_bar">
          <input type="text" placeholder="請輸入標題或關鍵字">
          <div class="search_text">搜尋</div>
        </div>
        <!-- --------------------------------------------------------------------------------------- -->
        <div class="mem-info">
          <table class="table">
            <thead>
              <tr class="table-dark">
                <th scope="col">會員ID</th>
                <th scope="col">姓名</th>
                <th scope="col">連絡電話</th>
                <th scope="col">是否停權</th>
                <th scope="col">操作</th>
              </tr>
            </thead>
            <tbody>
              <!-- 第一行 -->
              <tr>
                <td>231411424</td>
                <td>王小明</td>
                <td>0910101010</td>
                <td>
                  <label class="input-switch">
                    <input type="checkbox" name="" id="">
                    <span class="btn-box">
                      <span class="btn-circle"></span>
                    </span>
                  </label>
                </td>
                <td>
                  <button type="button" class="btn btn-outline-primary">
                    修改
                  </button>
                </td>
              </tr>
              <!-- 第二行 -->
              <tr>
                <td>231411424</td>
                <td>王小明</td>
                <td>0910101010</td>
                <td>
                  <label class="input-switch">
                    <input type="checkbox" name="" id="">
                    <span class="btn-box">
                      <span class="btn-circle"></span>
                    </span>
                  </label>
                </td>
                <td>
                  <button type="button" class="btn btn-outline-primary">
                    修改
                  </button>
                </td>
              </tr>
              <!-- 第三行 -->
              <tr>
                <td>231411424</td>
                <td>王小明</td>
                <td>0910101010</td>
                <td>
                  <label class="input-switch">
                    <input type="checkbox" name="" id="">
                    <span class="btn-box">
                      <span class="btn-circle"></span>
                    </span>
                  </label>
                </td>
                <td>
                  <button type="button" class="btn btn-outline-primary">
                    修改
                  </button>
                </td>
              </tr>
              <!-- 第四行 -->
              <tr>
                <td>231411424</td>
                <td>王小明</td>
                <td>0910101010</td>
                <td>
                  <label class="input-switch">
                    <input type="checkbox" name="" id="">
                    <span class="btn-box">
                      <span class="btn-circle"></span>
                    </span>
                  </label>
                </td>
                <td>
                  <button type="button" class="btn btn-outline-primary">
                    修改
                  </button>
                </td>
              </tr>
              <!-- 第五行 -->
              <tr>
                <td>231411424</td>
                <td>王小明</td>
                <td>0910101010</td>
                <td>
                  <label class="input-switch">
                    <input type="checkbox" name="" id="">
                    <span class="btn-box">
                      <span class="btn-circle"></span>
                    </span>
                  </label>
                </td>
                <td>
                  <button type="button" class="btn btn-outline-primary">
                    修改
                  </button>
                </td>
              </tr>
              <!-- 第六行 -->
              <tr>
                <td>231411424</td>
                <td>王小明</td>
                <td>0910101010</td>
                <td>
                  <label class="input-switch">
                    <input type="checkbox" name="" id="">
                    <span class="btn-box">
                      <span class="btn-circle"></span>
                    </span>
                  </label>
                </td>
                <td>
                  <button type="button" class="btn btn-outline-primary">
                    修改
                  </button>
                </td>
              </tr>
              <!-- 第七行 -->
              <tr>
                <td>231411424</td>
                <td>王小明</td>
                <td>0910101010</td>
                <td>
                  <label class="input-switch">
                    <input type="checkbox" name="" id="">
                    <span class="btn-box">
                      <span class="btn-circle"></span>
                    </span>
                  </label>
                </td>
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
