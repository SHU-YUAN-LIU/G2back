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
                  <switch_btn :ischecked="item.status == '正常'" @change="changeMemberStatus(item.member_no)" />
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
  <Lightbox class="memberlightbox" @toSaveData="updateData(currentlightbox[0].member_no)" lightboxType="true"
    ref="lightbox">

    <div class="admin_lightbox" style="overflow-y: scroll;">
      <p>
        <span>建立日期: </span>
        <span>{{ currentlightbox[0].create_date }}</span>
      </p>
      <p>
        <span>修改日期: </span>
        <span>{{ currentlightbox[0].modify_date }}</span>
      </p>
      <p class="title"><span>詳細資訊</span></p>
      <table>
        <tr>
          <td>會員ID:</td>
          <td>{{ currentlightbox[0].member_no }}</td>
        </tr>
        <tr>
          <td>姓名:</td>
          <td>{{ currentlightbox[0].member_name }}</td>
        </tr>
        <tr>
          <td>生日:</td>
          <td>{{ currentlightbox[0].birthday }}</td>
        </tr>
        <tr>
          <td>地址:</td>
          <td>{{ currentlightbox[0].address }}</td>
        </tr>
        <tr>
          <td>行動電話:</td>
          <td>{{ currentlightbox[0].cellphone }}</td>
        </tr>
        <tr>
          <td>室內電話:</td>
          <td>{{ currentlightbox[0].phone }}</td>
        </tr>
        <tr>
          <td>EMAIL:</td>
          <td>{{ currentlightbox[0].email }}</td>
        </tr>
        <tr>
          <td>密碼:</td>
          <td>{{ currentlightbox[0].password }}</td>
        </tr>
        <tr>
          <td>狀態:</td>
          <td>
            <select id="member_status" :value="currentlightbox[0].status">
              <option value="正常">正常</option>
              <option value="停用">停用</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>點數:</td>
          <td>{{ currentlightbox[0].point }}</td>
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
      currentlightbox: [],
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
      let url = `${import.meta.env.VITE_API_URL}/memberDataUpdate.php`;
      fetch(url, {
        method: 'post',
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(memberData)
      })
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
