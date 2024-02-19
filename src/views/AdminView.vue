<template>
    <MainHeader />
    <Dropdown />
    <div class="admin">
        <div class="admin_container">
            <div class="admin-btn">
                <SearchBtn :placeholder="'請輸入管理員編號'" @toSearchData="searchdata" />
                <addBtn @click="showLightbox(2, 0)" />
            </div>
            <div class="admin_table">
                <table class="table table-hover" style="position: relative;">

                    <thead style="position: sticky; top:0;  z-index: 99;">
                        <td>管理員編號</td>
                        <td>姓名</td>
                        <td>權限等級</td>
                        <td>啟用狀態</td>
                        <td>操作</td>
                    </thead>
                    <tbody>
                        <tr v-for="item in findadmindata">
                            <td class="admin_id">{{ item.admin_no }}</td>
                            <td class="admin_name">{{ item.admin_name }}</td>
                            <td class="admin_lavel">{{ getleveldata(item.admin_level) }}</td>
                            <td class="admin_status">
                                <SwitchBtn :ischecked="item.status == 'A'"
                                    @change="changestatus(item.admin_no, item.status)" />
                            </td>
                            <td class="admin_operate">
                                <button @click="showLightbox(1, item.admin_no)">
                                    <img src="/public/images/icon/icon_revise.png" alt="">修改
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <!-- 修改燈箱架構 -->
    <Lightbox ref="lightbox1" :lightboxType="true" @toSaveData="savedata(lightboxdata.admin_no)">
        <div class="admin_lightbox">
            <!-- --------------------------------- -->
            <div class="admin-row-group">
                <div class="
                .">
                    <strong>最後修改人:</strong>
                    <span>{{ lightboxdata.modifier_name }}</span>
                </div>
                <hr>
                <div class="admin-row">
                    <strong>最後修改日期:</strong>
                    <span>{{ lightboxdata.modify_date }}</span>
                </div>
                <p class="admin-title-bar ">詳細資訊</p>
                <div class="admin-row">
                    <strong>管理員編號:</strong>
                    <span>{{ lightboxdata.admin_no }}</span>
                </div>
                <hr>
                <div class="admin-row">
                    <strong>管理員姓名:</strong>
                    <input class="form-control" type="text" placeholder="請輸入姓名" v-model="lightboxdata.admin_name">
                </div>
                <hr>
                <div class="admin-row">
                    <strong>狀態:</strong>
                    <select class="form-select" v-model="lightboxdata.status">
                        <option value="A">啟用</option>
                        <option value="IA">停用</option>
                    </select>
                </div>
                <hr>
                <div class="admin-row">
                    <strong>密碼:</strong>
                    <input class="form-control" type="text" placeholder=" 請輸入密碼" v-model="lightboxdata.admin_psw">
                </div>
                <hr>
                <div class="admin-row">
                    <strong>權限等級:</strong>
                    <select class="form-select" v-model="lightboxdata.admin_level">
                        <option value="1">一般管理員</option>
                        <option value="0">超級管理員</option>
                    </select>
                </div>
                <hr>
                <div class="admin-row">
                    <strong>入職日期:</strong>
                    <span>{{ lightboxdata.admin_hiredate }}</span>
                </div>
            </div>
        </div>
    </Lightbox>

    <!-- 新增燈箱架構 -->
    <Lightbox ref="lightbox2" :lightboxType="true" @toSaveData="inserdata()">
        <div class="admin_lightbox">
            <!-- --------------------------------- -->
            <div class="admin-row-group">
                <p class="admin-title ">詳細資訊</p>
                <div class="admin-row">
                    <strong>管理員姓名:</strong>
                    <input class="form-control" type="text" placeholder="請輸入姓名" v-model="insertdata.admin_name">
                </div>
                <hr>
                <div class="admin-row">
                    <strong>狀態:</strong>
                    <select class="form-select" v-model="insertdata.status">
                        <option value="A">啟用</option>
                        <option value="IA">停用</option>
                    </select>
                </div>
                <hr>
                <div class="admin-row">
                    <strong>密碼:</strong>
                    <input class="form-control" type="text" placeholder=" 請輸入密碼" v-model="insertdata.admin_psw">
                </div>
                <hr>
                <div class="admin-row">
                    <strong>權限等級:</strong>
                    <select class="form-select" v-model="insertdata.admin_level">
                        <option value="1">一般管理員</option>
                        <option value="0">超級管理員</option>
                    </select>
                </div>
                <hr>
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
import addBtn from "../components/addBtn.vue";
export default {
    data() {
        return {
            placeholder: '請輸入管理員編號',
            admindata: [],
            findadmindata: [],
            lightboxdata: [],
            updatedata: {},
            insertdata: {
                status: "A",
                admin_level: "1"
            },
            lightbox_num: 0,
        };
    },
    components: {
        MainHeader,
        Lightbox,
        SwitchBtn,
        SearchBtn,
        Dropdown,
        addBtn,
    },
    mounted() {
        document.title = "青年進補黨(後台) - 管理員管理";
    },
    created() {
        this.getData();
    },
    methods: {
        showLightbox(id, admin_no) {
            // lightbox1
            this.$refs[`lightbox${id}`].showLightbox = true;
            if (admin_no > 0) {
                this.lightbox_num = admin_no;
                this.lightboxdata = this.findadmindata.find(item => item.admin_no == admin_no);
            }
            document.body.style.overflow = 'hidden';
        },

        getData() {
            axios.get(`${import.meta.env.VITE_PHP_URL}` + "/adminDataGetAll.php")
                .then(res => {
                    this.admindata = res.data.admins;
                    this.findadmindata = res.data.admins;
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        },
        getleveldata(admin_level) {
            if (admin_level == 0) {
                return "超級管理員";
            }
            else if (admin_level == 1) {
                return "一般管理員";
            };
        },
        inserdata() {
            axios.post(`${import.meta.env.VITE_PHP_URL}` + "/adminDataInsert.php", this.insertdata)
                .then(res => {
                    console.log('insert data:', res.data.msg);
                    this.$refs[`lightbox2`].showLightbox = false;
                    this.insertdata = {
                        status: "A",
                        admin_level: "1"
                    };
                    this.getData();
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        },
        searchdata(value) {
            this.findadmindata = this.admindata.filter((item) => {
                return item.admin_no.toString().includes(value);
            })
        },
        savedata(admin_no) {
            this.updatedata = this.findadmindata.find(item => item.admin_no == admin_no);

            //因為從表單獲取時是字串 必須全部換回int欄位
            this.updatedata.admin_no = parseInt(this.updatedata.admin_no);
            this.updatedata.admin_level = parseInt(this.updatedata.admin_level);
            this.updatedata.creator = parseInt(this.updatedata.creator);
            this.updatedata.modifier = parseInt(this.updatedata.modifier);

            console.log(this.updatedata);
            axios.post(`${import.meta.env.VITE_PHP_URL}` + "/adminDataUpdate.php", this.updatedata)
                .then(res => {
                    console.log('insert data:', res.data.msg);
                    this.$refs[`lightbox1`].showLightbox = false;
                    this.updatedata = {};
                    this.getData();
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        },
        changestatus(admin_no, status) {
            if (status == "A") {
                this.findadmindata.find(item => item.admin_no == admin_no).status = "IA";
            } else {
                this.findadmindata.find(item => item.admin_no == admin_no).status = "A";
            }
            this.savedata(admin_no);
        }
    }
}
</script>
<style lang="scss"></style>
