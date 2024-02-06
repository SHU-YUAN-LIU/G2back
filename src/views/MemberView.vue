<template>
  <MainHeader />
  <div class="mem-bg">
    <div class="mem_wrap-group">
      <div class="mem_wrap">
        <!-- 搜尋 -->
        <SearchBtn :placeholder="placeholder" />
        <!-- ----------------------------------------------------- -->
        <div class="mem-info">
          <table class="table">
            <thead>
              <tr class="table-dark " align="center ">
                <th scope="col" class="p-3">會員ID</th>
                <th scope="col" class="p-2"><span class="l-2">姓名</span></th>
                <th scope="col" class="p-2">連絡電話</th>
                <th scope="col" class="p-2">是否停權</th>
                <th scope="col" class="p-2">操作</th>
              </tr>
            </thead>
            <tbody>
              <!-- 第一行 -->
              <tr align="center">
                <td class="align-middle">231411424</td>
                <td class="align-middle">王小明</td>
                <td class="align-middle">0910101010</td>
                <td class="align-middle">
                  <switch_btn />
                </td>
                <td class="align-middle">
                  <button class="showlightbtn" @click="showLightbox">
                    <img src="../../public/images/icon/icon_revise.png" alt="">修改
                  </button>
                </td>
              </tr>
              <!-- 第二行 -->
              <tr align="center">
                <td class="align-middle">231411424</td>
                <td class="align-middle">王小明</td>
                <td class="align-middle">0910101010</td>
                <td class="align-middle">
                  <switch_btn />
                </td>
                <td class="align-middle">
                  <button class="showlightbtn" @click="showLightbox">
                    <img src="../../public/images/icon/icon_revise.png" alt="">修改
                  </button>
                </td>
              </tr>
              <!-- 第三行 -->
              <tr align="center">
                <td class="align-middle">231411424</td>
                <td class="align-middle">王小明</td>
                <td class="align-middle">0910101010</td>
                <td class="align-middle">
                  <switch_btn />
                </td>
                <td class="align-middle">
                  <button class="showlightbtn" @click="showLightbox">
                    <img src="../../public/images/icon/icon_revise.png" alt="">修改
                  </button>
                </td>
              </tr>
              <!-- 第四行 -->
              <tr align="center">
                <td class="align-middle">231411424</td>
                <td class="align-middle">王小明</td>
                <td class="align-middle">0910101010</td>
                <td class="align-middle">
                  <switch_btn />
                </td>
                <td class="align-middle">
                  <button class="showlightbtn" @click="showLightbox">
                    <img src="../../public/images/icon/icon_revise.png" alt="">修改
                  </button>
                </td>
              </tr>
              <!-- 第五行 -->
              <tr align="center">
                <td class="align-middle">231411424</td>
                <td class="align-middle">王小明</td>
                <td class="align-middle">0910101010</td>
                <td class="align-middle">
                  <switch_btn />
                </td>
                <td class="align-middle">
                  <button class="showlightbtn" @click="showLightbox">
                    <img src="../../public/images/icon/icon_revise.png" alt="">修改
                  </button>
                </td>
              </tr>
              <!-- 第六行 -->
              <tr align="center">
                <td class="align-middle">231411424</td>
                <td class="align-middle">王小明</td>
                <td class="align-middle">0910101010</td>
                <td class="align-middle">
                  <switch_btn />
                </td>
                <td class="align-middle">
                  <button class="showlightbtn" @click="showLightbox">
                    <img src="../../public/images/icon/icon_revise.png" alt="">修改
                  </button>
                </td>
              </tr>
              <!-- 第七行 -->
              <tr align="center">
                <td class="align-middle">231411424</td>
                <td class="align-middle">王小明</td>
                <td class="align-middle">0910101010</td>
                <td class="align-middle">
                  <switch_btn />
                </td>
                <td class="align-middle">
                  <button class="showlightbtn" @click="showLightbox">
                    <img src="../../public/images/icon/icon_revise.png" alt="">修改
                  </button>
                </td>
              </tr>

            </tbody>
          </table>
        </div>

      </div>
    </div>
  </div>
  <Lightbox class="memberlightbox" ref="lightbox" >
    
    <div class="admin_lightbox" style="overflow-y: scroll;">
      <p>
        <span>建立日期: </span>
        <span>2024/1/1</span>
      </p>
      <p>
        <span>修改日期: </span>
        <span>2024/1/1</span>
      </p>
      <p class="title"><span>詳細資訊</span></p>
      <table>
        <tr>
          <td>會員ID:</td>
          <td>9809809</td>
        </tr>
        <tr>
          <td>姓名:</td>
          <td><input type="text" value="王小明"></td>
        </tr>
        <tr>
          <td>生日:</td>
          <td><input type="date" value="2000-07-22"></td>
        </tr>
        <tr>
          <td>地址:</td>
          <td><input type="text" value="桃園市中壢區"></td>
        </tr>
        <tr>
          <td>行動電話:</td>
          <td><input type="text" value="0919897987"></td>
        </tr>
        <tr>
          <td>行動電話:</td>
          <td><input type="text" value="0800092000"></td>
        </tr>
        <tr>
          <td>EMAIL:</td>
          <td><input type="text" value="xxxx34252@gmail.com "></td>
        </tr>
        <tr>
          <td>密碼:</td>
          <td><input type="text" value="kp12345"></td>
        </tr>
        <tr>
          <td>狀態</td>
          <td>
            <select name="" id="">
              <option value="啟用">啟用</option>
              <option value="停用">停用</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>點數:</td>
          <td><input type="text" value="999"></td>
        </tr>
        
      </table>
    </div>
  </Lightbox>
</template>

<script>
import MainHeader from '../components/MainHeader.vue'
import switch_btn from '../components/switch_btn.vue'
import SearchBtn from '../components/SearchBtn.vue'
import Lightbox from "../components/Lightbox.vue";
export default {
  components: {
    MainHeader,
    switch_btn,
    SearchBtn,
    Lightbox,

  },
  data() {
    return {
      placeholder: '會員ID或電話',
    }
  },
  mounted() {
    document.title = "青年進補黨(後台) - 會員管理";
  },
  methods: {
    showLightbox() {
      this.$refs.lightbox.showLightbox = true;
    }
  },

}
</script>

<style></style>
