<template>
    <MainHeader />
    <dropDown />
    <div class="admin">
        <div class="admin_container">
            <div>
                <Search />
            </div>
            <div class="admin_table">
                <table>
                    <thead>
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
                                <button @click="showLightbox(item.admin_no)">
                                    <img src="/images/icon/icon_revise.png" alt="">修改
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <!-- 燈箱架構 -->
    <Lightbox ref="lightbox" lightboxType="true">
        <div class="admin_lightbox">
            <p>
                <span>最後修改人: </span>
                <span>{{ lightboxdata.modifier_name }}</span>
            </p>
            <p>
                <span>最後修改日期: </span>
                <span>{{ lightboxdata.modify_date }}</span>
            </p>

            <p class="title"><span>詳細資訊</span></p>
            <table>
                <tr>
                    <td>管理員編號</td>
                    <td>{{ lightboxdata.admin_no }}</td>
                </tr>
                <tr>
                    <td>管理員姓名</td>
                    <td><input type="text" v-model="lightboxdata.admin_name"></td>
                </tr>
                <tr>
                    <td>狀態</td>
                    <td>
                        <select v-model="lightboxdata.status">
                            <option value="A">啟用</option>
                            <option value="IA">停用</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>密碼: </td>
                    <td><input type="text"  v-model="lightboxdata.admin_psw"></td>
                </tr>
                <tr>
                    <td>權限等級: </td>
                    <td><select v-model="lightboxdata.admin_level">
                            <option value="1">一般管理員</option>
                            <option value="0">超級管理員</option>
                        </select></td>
                </tr>
                <tr>
                    <td>入職日期: </td>
                    <td>{{ lightboxdata.admin_hiredate }}</td>
                </tr>
            </table>
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
export default {
    data() {
        return {
            admindata: [],
            lightboxdata:[],
            lightbox_num: 0,
        };
    },
    components: {
        MainHeader,
        Lightbox,
        SwitchBtn,
        Search,
        dropDown,
    },
    created() {
        this.getData();
    },
    methods: {
        showLightbox(admin_no) {
            this.$refs.lightbox.showLightbox = true;
            this.lightbox_num = admin_no;
            this.lightboxdata = this.admindata.find(item => item.admin_no == admin_no);
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
