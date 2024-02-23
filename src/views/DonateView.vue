<template>
  <MainHeader />
  <Dropdown />
  <div class="donate">
    <div class="donate_container">
      <!-- 搜尋框 -->
      <div class="donate-btn">
        <SearchBtn :placeholder="'請輸入會員編號'" @toSearchData="searchdata" />
      </div>
      <div class="donate_table">
        <table>
          <thead>
            <td>捐款日期</td>
            <td>姓名</td>
            <td>會員編號</td>
            <td>金額</td>
            <td>支付方式</td>
            <td>操作</td>
          </thead>
          <tbody>
            <tr :key="item.donate_no" v-for="item in filterdata">
              <td class="donate_date">{{ item.donate_date }}</td>
              <td class="donate_name">{{ item.member_name || "-" }}</td>
              <td class="donate_id">{{ item.member_no || "-" }}</td>
              <td class="donate_amount">
                $ <span>{{ item.donate_amount }}</span>
              </td>
              <td class="donate_method">{{ item.donate_method }}</td>
              <td class="donate_operate">
                <button @click="showLightbox(item.donate_no)">
                  <img src="/images/icon/icon_info.png" />查閱
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <!-- 燈箱查詢 -->
  <Lightbox ref="lightbox" :lightboxType="false">
    <div class="donate_lightbox">
      <!-- ---------------------------------------------- -->
      <div class="donate-row-group">
        <p class="donate-title"><span>捐款資訊</span></p>
        <div class="donate-row">
          <strong>捐款日期: </strong>
          <span>{{ lightboxdata.donate_date }}</span>
        </div>
        <hr>
        <p class="donate-row">
          <strong>狀態: </strong>
          <span>{{ lightboxdata.donate_class }}</span>
        </p>
        <hr>
        <div class="donate-row">
          <strong>流水編號:</strong>
          <span>{{ lightboxdata.donate_no }}</span>
        </div>

        <p class="donate-title"><span>詳細資訊</span></p>
        <div class="donate-row">
          <strong>姓名:</strong>
          <td>{{ lightboxdata.member_name || "-" }}</td>
        </div>
        <hr>
        <div class="donate-row">
          <strong>會員ID:</strong>
          <td>{{ lightboxdata.member_no || "-" }}</td>
        </div>
        <hr>
        <div class="donate-row">
          <strong>Email:</strong>
          <td>{{ lightboxdata.email || "-" }}</td>
        </div>
        <hr>
        <div class="donate-row">
          <strong>生日:</strong>
          <td>{{ lightboxdata.birthday || "-" }}</td>
        </div>
        <hr>
        <div class="donate-row">
          <strong>連絡電話:</strong>
          <td>{{ lightboxdata.phone || "-" }}</td>
        </div>
        <hr>
        <div class="donate-row">
          <strong>捐款金額:</strong>
          <td>{{ lightboxdata.donate_amount }}</td>
        </div>
        <hr>
        <div class="donate-row">
          <strong>單筆點數:</strong>
          <td>{{ lightboxdata.point || "-" }}</td>
        </div>
        <hr>
        <div class="donate-row">
          <strong>捐款方式:</strong>
          <td>{{ lightboxdata.donate_method }}</td>
        </div>

      </div>
    </div>
  </Lightbox>
</template>
<script>
import axios from "axios";
import MainHeader from "../components/MainHeader.vue";
import Lightbox from "../components/Lightbox.vue";
import SwitchBtn from "../components/switch_btn.vue";
import SearchBtn from "../components/SearchBtn.vue";
import Dropdown from "../components/Dropdown.vue";
export default {
  data() {
    return {
      donatedata: [],
      filterdata: [],
      lightboxdata: [],
    };
  },
  created() {
    this.getDonateData();
  },
  mounted() {
    document.title = "青年進補黨(後台) - 捐款查詢";
  },
  components: {
    MainHeader,
    Lightbox,
    SwitchBtn,
    SearchBtn,
    Dropdown,
  },
  methods: {
    showLightbox(donate_no) {
      this.$refs.lightbox.showLightbox = true;
      this.lightboxdata = this.donatedata.find(
        (item) => item.donate_no === donate_no
      );
      document.body.style.overflow = "hidden";
    },
    getDonateData() {
      let url = `${import.meta.env.VITE_PHP_URL}/donateDataGetAll.php`;
      fetch(url)
        .then((response) => response.json())
        .then((result) => {
          this.showDonates(result.donates);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    showDonates(donates) {
      for (let i = 0; i < donates.length; i++) {
        this.donatedata.push({
          donate_date: donates[i].donate_date,
          member_name: donates[i].member_name,
          member_no: donates[i].member_no,
          donate_amount: donates[i].donate_amount,
          donate_method: donates[i].donate_method,
          email: donates[i].email,
          birthday: donates[i].birthday,
          phone: donates[i].cellphone,
          point: donates[i].point,
          donate_no: donates[i].donate_no,
          donate_class: donates[i].donate_class,
        });
      }

      this.filterdata = this.donatedata;
    },
    searchdata(value) {
      if (value == null || value == "") {
        this.filterdata = this.donatedata;
      } else {
        this.filterdata = this.donatedata.filter((item) => {

          return item.member_no !== null && item.member_no.toString().includes(value);
        })
      }
    }
  },
};
</script>

<style lang="scss"></style>
