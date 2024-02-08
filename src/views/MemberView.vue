<template>
  <MainHeader />
  <Dropdown />
  <div class="member">
    <div class="member_container">
      <!-- 搜尋 -->
      <div>
        <SearchBtn :placeholder="placeholder" />
      </div>
      <div class="member_table">
        <table class="table table-hover" style="position: relative;">

          <thead style="position: sticky; top:0;  z-index: 99;">
            <td>會員ID</td>
            <td>姓名</td>
            <td>連絡電話</td>
            <td>是否停權</td>
            <td>操作</td>
          </thead>
          <tbody>
            <tr v-for="item in memberdata">
              <td class="member_id">{{ item.member_no }}</td>
              <td class="member_date">{{ item.member_name }}</td>
              <td class="member_name">{{ item.cellphone }}</td>
              <td class="member_title">
                <switch_btn :ischecked="item.status == '正常'" @change="changeMemberStatus(item.member_no)" />
              </td>
              <td class="member_operate">
                <button @click="showLightbox(item.member_no)">
                  <img src="/public/images/icon/icon_revise.png" alt="">修改
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>


  <!-- 燈箱 -->
  <Lightbox class="memberlightbox" @toSaveData="updateData(currentlightbox[0].member_no)" ref="lightbox"
    lightboxType="true">
    <div class="member_lightbox">
      <div class="member-row-group">
        <div class="member-row">
          <strong>建立日期:</strong>
          <span>{{ currentlightbox[0].create_date }}</span>
        </div>
        <hr>
        <div class="member-row">
          <strong>修改日期:</strong>
          <span>{{ currentlightbox[0].modify_date }}</span>
        </div>
        <p class="member-title-bar ">詳細資訊</p>
        <div class="member-row">
          <strong>會員ID:</strong>
          <span>{{ currentlightbox[0].member_no }}</span>
        </div>
        <hr>
        <div class="member-row">
          <strong>姓名:</strong>
          <span>{{ currentlightbox[0].member_name }}</span>
        </div>
        <hr>
        <div class="member-row">
          <strong>地址:</strong>
          <span>{{ currentlightbox[0].address }}</span>
        </div>
        <hr>
        <div class="member-row">
          <strong>行動電話:</strong>
          <span>{{ currentlightbox[0].cellphone }}</span>
        </div>
        <hr>
        <div class="member-row">
          <strong>室內電話:</strong>
          <span>{{ currentlightbox[0].phone }}</span>
        </div>
        <hr>
        <div class="member-row">
          <strong>EMAIL:</strong>
          <span>{{ currentlightbox[0].email }}</span>
        </div>
        <hr>
        <div class="member-row">
          <strong>密碼:</strong>
          <span>{{ currentlightbox[0].password }}</span>
        </div>
        <hr>
        <div class="member-row">
          <strong>狀態:</strong>
          <select class="form-select" id="member_status" :value="currentlightbox[0].status">
            <option selected></option>
            <option value="正常">正常</option>
            <option value="停用">停用</option>
          </select>
        </div>
        <hr>
        <div class="member-row">
          <strong>點數:</strong>
          <span>{{ currentlightbox[0].point }}</span>
        </div>

      </div>
    </div>
  </Lightbox>
</template>

<script>
import MainHeader from '../components/MainHeader.vue'
import Dropdown from "../components/Dropdown.vue";
import switch_btn from '../components/switch_btn.vue'
import SearchBtn from '../components/SearchBtn.vue'
import Lightbox from "../components/Lightbox.vue";

export default {
  data() {
    return {
      placeholder: '會員ID或電話',
      memberdata: [],
      currentlightbox: [],
      memberstatus: '',

    }
  },
  components: {
    MainHeader,
    Dropdown,
    switch_btn,
    SearchBtn,
    Lightbox,
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
      // console.log(id);
      this.currentlightbox = this.memberdata.filter((item) => {
        return item.member_no == id
      })
      // console.log(this.currentlightbox);
    },
    getMemberData() {
      this.memberdata = [];
      this.currentlightbox = [];
      let url = `${import.meta.env.VITE_API_URL}/memberDataGetAll.php`;
      fetch(url)
        .then(response => response.json())
        .then(result => {
          const members = result.members;
          // console.log(111, result)

          this.showMembers(members);
        })
        .catch(error => {
          console.log(error);
        })
    },
    showMembers(members) {

      for (let i = 0; i < members.length; i++) {
        if (members[i].status == 'A') {
          this.memberstatus = '正常'
        } else {
          this.memberstatus = '停用'
        }
        this.memberdata.push({
          member_no: members[i].member_no,
          member_name: members[i].member_name,
          cellphone: members[i].cellphone,
          phone: members[i].phone,
          birthday: members[i].birthday,
          email: members[i].email,
          password: members[i].password,
          address: members[i].address,
          id_number: members[i].id_number,
          point: members[i].point,
          modifier: members[i].modifier,
          modify_date: members[i].modify_date,
          create_date: members[i].create_date,
          status: this.memberstatus,
        })

      }
      // console.log(this.memberdata);
    },
    changeMemberStatus(member_no) {
      const member = this.memberdata.find(item => item.member_no === member_no);
      if (member) {
        member.status = (member.status === '正常') ? '停用' : '正常';
        // console.log(member.status);
        if (member.status == '正常') {
          this.memberstatus = 'A'
        } else {
          this.memberstatus = 'IA'
        }
        member.modify_date = new Date().toLocaleString();
        let memberData = {
          member_no,
          status: this.memberstatus,
        };
        let url = `${import.meta.env.VITE_API_URL}/memberDataUpdate.php`;
        fetch(url, {
          method: 'post',
          headers: {
            "content-type": "application/json"
          },
          body: JSON.stringify(memberData)
        })
          .then(response => response.json())
          .catch(error => console.log(error))
      }
    },
    updateData(member_no) {
      if (document.getElementById("member_status").value == '正常') {
        this.memberstatus = 'A'
      } else {
        this.memberstatus = 'IA'
      }
      // console.log(this.memberdata.status);
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
