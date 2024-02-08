<template>
    <MainHeader />
    <dropDown />
    <div class="admin">
        <div class="admin_container">
            <div class="admin-btn">
                <Search :placeholder="'placeholder'" />
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
                        <tr v-for="item in admindata">
                            <td class="admin_id">{{ item.admin_no }}</td>
                            <td class="admin_name">{{ item.admin_name }}</td>
                            <td class="admin_class">{{ getleveldata(item.admin_level) }}</td>
                            <td class="admin_status">
                                <SwitchBtn />
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
    <Lightbox ref="lightbox1" :lightboxType="true">
        <div class="admin_lightbox">
            <!-- --------------------------------- -->
            <div class="admin-row-group">
                <div class="admin-row">
                    <strong>最後修改人:</strong>
                    <span>{{ lightboxdata.modifier_name }}</span>
                </div>
                <hr>
                <div class="admin-row">
                    <strong>最後修改日期:</strong>
                    <span>{{ lightboxdata.modify_date }}</span>
                </div>
                <p class="admin-title ">詳細資訊</p>
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
                        <option selected></option>
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
                        <option selected></option>
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
    <Lightbox ref="lightbox2" :lightboxType="true">
        <div class="admin_lightbox">
            <!-- --------------------------------- -->
            <div class="admin-row-group">
                <p class="admin-title ">詳細資訊</p>
                <div class="admin-row">
                    <strong>管理員姓名:</strong>
                    <input class="form-control" type="text" placeholder="請輸入姓名" >
                </div>
                <hr>
                <div class="admin-row">
                    <strong>狀態:</strong>
                    <select class="form-select">
                        <option value="A" selected>啟用</option>
                        <option value="IA">停用</option>
                    </select>
                </div>
                <hr>
                <div class="admin-row">
                    <strong>密碼:</strong>
                    <input class="form-control" type="text" placeholder=" 請輸入密碼">
                </div>
                <hr>
                <div class="admin-row">
                    <strong>權限等級:</strong>
                    <select class="form-select">
                        <option value="1" selected>一般管理員</option>
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
import Search from "../components/SearchBtn.vue";
import dropDown from "../components/Dropdown.vue";
import addBtn from "../components/addBtn.vue";
export default {
    data() {
        return {
            admindata: [],
            lightboxdata: [],
            lightbox_num: 0,
        };
    },
    components: {
        MainHeader,
        Lightbox,
        SwitchBtn,
        Search,
        dropDown,
        addBtn,
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
                this.lightboxdata = this.admindata.find(item => item.admin_no == admin_no);
            }
            // console.log(this.admindata);
            document.body.style.overflow = 'hidden';
        },

        getData() {
            axios.get(`${import.meta.env.VITE_API_URL}` + "/adminDataGetAll.php")
                .then(res => {
                    this.admindata = res.data.admins;
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
        }
    }
}
</script>

<!-- 燈箱內容的css -->
<style lang="scss">
@import "../assets/scss/style.scss";

.admin_lightbox {
    width: 80%;

    p {
        display: flex;
        margin-top: 10px;
        margin-bottom: 0;

        span:nth-child(1) {
            width: 200px;
        }
    }

    .title {
        text-align: center;
        background: black;
        color: $white;
        width: 100%;
        height: 45px;
        line-height: 45px;
        display: flex;
        justify-content: center;
    }

    table {
        width: 100%;
        border: 1px solid #000;

        tr {
            height: 40px;
            line-height: 40px;
            display: flex;
            justify-content: space-evenly;

            tr+tr {
                margin-top: 20px;
            }

            td {
                text-align: center;
                width: 50%;

                input {
                    height: 30px;
                }
            }

            td:nth-child(2) {
                text-align: left;

            }
        }
    }
}
</style>
