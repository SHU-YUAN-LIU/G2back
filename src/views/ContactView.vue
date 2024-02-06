<template>
    <MainHeader />
    <dropDown />
    <div class="contact">
        <div class="contact_container">
            <div>
                <Search />
            </div>
            <div class="contact_table">
                <table>
                    <thead>
                        <td>陳情編號</td>
                        <td>陳情日期</td>
                        <td>陳情者姓名</td>
                        <td>陳情主旨</td>
                        <td>陳情狀態</td>
                        <td>操作</td>
                    </thead>
                    <tbody>
                        <tr v-for="item in contactdata">
                            <td class="contact_id">{{ item.contact_id }}</td>
                            <td class="contact_date">{{ item.contact_date }}</td>
                            <td class="contact_name">{{ item.contact_name }}</td>
                            <td class="contact_title">{{ item.contact_title }}</td>
                            <td class="contact_status">{{ item.contact_status }}</td>
                            <td class="contact_operate">
                                <button @click="showLightbox">
                                    <img src="/public/images/icon/icon_revise.png" alt="">修改
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
        <div class="contact_lightbox">
            <div class="mb-3 row">
                <label for="staticEmail" class="col-sm-2 col-form-label">陳情編號</label>
                <div class="col-sm-10">
                    <input type="text" disabled class="form-control-plaintext contact-no" id="staticEmail"
                        value="email@example.com">
                </div>
            </div>
            <p>詳細資訊</p>
            <div class="mb-3 row">
                <label for="staticEmail" class="col-sm-2 col-form-label">陳情編號</label>
                <div class="col-sm-10">
                    <input type="text" disabled class="form-control-plaintext contact-no" id="staticEmail"
                        value="email@example.com">
                </div>
            </div>
            <div class="mb-3 row">
                <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" id="inputPassword">
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
import Search from "../components/SearchBtn.vue";
import dropDown from "../components/Dropdown.vue";
export default {
    data() {
        return {
            contactdata: [
                {
                    contact_id: '1',
                    contact_date: '2024/.1.01',
                    contact_name: '葳哥',
                    contact_title: '我要睡覺',
                    contact_status: '處理中',
                }
            ],
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
    },
    methods: {
        showLightbox() {
            this.$refs.lightbox.showLightbox = true;
            document.body.style.overflow = 'hidden';
        },
    }
}
</script>

<style></style>
