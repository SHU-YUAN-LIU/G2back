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
                <th scope="col" class="p-2">狀態正常</th>
                <th scope="col" class="p-2">操作</th>
              </tr>
            </thead>
            <tbody id="memberTbody">
              <tr align="center" v-for="item in memberdata">
                <td class="align-middle">{{ item.member_no }}</td>
                <td class="align-middle">{{ item.member_name }}</td>
                <td class="align-middle">{{ item.cellphone }}</td>
                <td class="align-middle">
                  <switch_btn />
                </td>

                <td class="align-middle">
                  <button class="showlightbtn" @click="showLightbox(item.member_no)">
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
  <Lightbox class="memberlightbox" @toSaveData="updateData(currentightbox[0].member_no)" lightboxType="true"
    ref="lightbox">

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
          <td>{{ currentightbox[0].member_no }}</td>
        </tr>
        <tr>
          <td>姓名:</td>
          <td>{{ currentightbox[0].member_name }}</td>
        </tr>
        <tr>
          <td>生日:</td>
          <td>{{ currentightbox[0].birthday }}</td>
        </tr>
        <tr>
          <td>地址:</td>
          <td>{{ currentightbox[0].address }}</td>
        </tr>
        <tr>
          <td>行動電話:</td>
          <td>{{ currentightbox[0].cellphone }}</td>
        </tr>
        <tr>
          <td>室內電話:</td>
          <td>{{ currentightbox[0].phone }}</td>
        </tr>
        <tr>
          <td>EMAIL:</td>
          <td>{{ currentightbox[0].email }}</td>
        </tr>
        <tr>
          <td>密碼:</td>
          <td>{{ currentightbox[0].password }}</td>
        </tr>
        <tr>
          <td>狀態:</td>
          <td>
            <select id="member_status" :value="currentightbox[0].status">
              <option value="正常">正常</option>
              <option value="停用">停用</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>點數:</td>
          <td>{{ currentightbox[0].point }}</td>
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
      memberdata: [],
      currentightbox: [],
      memberstatus: '',

    }
  },
  created() {
    this.getMemberData();
  },
  mounted() {
    document.title = "青年進補黨(後台) - 會員管理";
  },
  methods: {
    showLightbox(id) {
      this.$refs.lightbox.showLightbox = true;
      console.log(id);
      this.currentightbox = this.memberdata.filter((item) => {
        return item.member_no == id
      })
      console.log(this.currentightbox);
    },
    updateData() {
      // 傳到php的資料
      let memberData = {
        member_no,
        status: this.memberstatus,
      };
      //php的路徑
      let url = `${import.meta.env.VITE_API_URL}/memberDataUpdate.php`;
      //傳送到php的方法(也可以用axios)
      fetch(url, {
        method: 'post',
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(memberData)
      })
        //接php的回傳值
        .then(response => response.json())
        .then(result => {
          if (!result.error) {
            alert(result.msg)
            this.$refs.lightbox.showLightbox = false
            this.getMemberData();
          }
        })
        .catch(error => console.log(error))
    },
  },

}
</script>

<style></style>
