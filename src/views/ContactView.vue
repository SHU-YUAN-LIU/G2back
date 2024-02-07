<template>
    <MainHeader />
    <dropDown />
    <div class="contact">
        <div class="contact_container">
            <div>
                <Search :placeholder="placeholder" />
            </div>
            <div class="contact_table">
                <table class="table table-hover" style="position: relative;">

                    <thead style="position: sticky; top:0;  z-index: 99;">
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
                <label for="staticEmail" class="col-sm-2 col-form-label "><strong>陳情日期:</strong></label>
                <div class="col-sm-10">
                    <input type="text" disabled class="form-control-plaintext contact-no" id="staticEmail" value="2024/1/1">
                </div>
            </div>
            <p class="contact-title ">詳細資訊</p>
            <div class="mb-3 row">
                <label for="staticEmail" class="col-sm-2 col-form-label"><strong>陳情編號:</strong></label>
                <div class="col-sm-10">
                    <input type="text" disabled class="form-control-plaintext contact-no" id="staticEmail" value="908099">
                </div>
            </div>
            <hr>
            <div class="mb-3 row">
                <label for="staticEmail" class="col-sm-2 col-form-label"><strong>會員名稱:</strong></label>
                <div class="col-sm-10">
                    <input type="text" disabled class="form-control-plaintext contact-no" id="staticEmail" value="黑崎一護">
                </div>
            </div>
            <hr>
            <div class="mb-3 row">
                <label for="staticEmail" class="col-sm-2 col-form-label"><strong>會員編號:</strong></label>
                <div class="col-sm-10">
                    <input type="text" disabled class="form-control-plaintext contact-no" id="staticEmail" value="87878787">
                </div>
            </div>
            <hr>
            <div class="mb-3 row">
                <label for="staticEmail" class="col-sm-2 col-form-label"><strong>電子信箱:</strong></label>
                <div class="col-sm-10">
                    <input type="text" disabled class="form-control-plaintext contact-no" id="staticEmail"
                        value="andy123@yahoo.com.tw">
                </div>
            </div>
            <hr>
            <div class="mb-3 row">
                <label for="staticEmail" class="col-sm-2 col-form-label"><strong>陳情主旨:</strong></label>
                <div class="col-sm-10">
                    <input type="text" disabled class="form-control-plaintext contact-no" id="staticEmail" value="我要週休三日">
                </div>
            </div>
            <hr>

            <div class="mb-3 row">
                <label for="staticEmail" class="col-sm-2 col-form-label "><strong>陳情狀態:</strong></label>
                <select class="form-select">
                    <option selected></option>
                    <option value="1">已受理</option>
                    <option value="2">處理中</option>
                    <option value="3">已回覆</option>
                </select>
            </div>
            <div class="mb-3 row">
                <label for="staticEmail" class="col-sm-2 col-form-label"><strong>陳情內容:</strong></label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
            <div class="mb-3 row">
                <label for="staticEmail" class="col-sm-2 col-form-label"><strong>回覆內容:</strong></label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="8"></textarea>
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
            placeholder: '請輸入標題或關鍵字',
            contactdata: [
                {
                    contact_id: '1',
                    contact_date: '2024/.1.01',
                    contact_name: '葳利炸醬麵',
                    contact_title: '我要睡覺',
                    contact_status: '我要睡覺',
                },
                {
                    contact_id: '2',
                    contact_date: '2024/.1.01',
                    contact_name: '柏昇高體重',
                    contact_title: '我要睡覺',
                    contact_status: '處理中',
                },
                {
                    contact_id: '3',
                    contact_date: '2024/.1.01',
                    contact_name: '磬亮晶晶',
                    contact_title: '我要睡覺',
                    contact_status: '處理中',
                },
                {
                    contact_id: '4',
                    contact_date: '2024/.1.01',
                    contact_name: '欣慧切版',
                    contact_title: '我要睡覺',
                    contact_status: '處理中',
                },
                {
                    contact_id: '5',
                    contact_date: '2024/.1.01',
                    contact_name: '蕙伃尾巴',
                    contact_title: '我要睡覺',
                    contact_status: '處理中',
                },
                {
                    contact_id: '6',
                    contact_date: '2024/.1.01',
                    contact_name: '旻璇轉跳躍',
                    contact_title: '我要睡覺',
                    contact_status: '處理中',
                },
                {
                    contact_id: '7',
                    contact_date: '2024/.1.01',
                    contact_name: '函果伃',
                    contact_title: '我要睡覺',
                    contact_status: '處理中',
                },
                {
                    contact_id: '8',
                    contact_date: '2024/.1.01',
                    contact_name: '蔡英文',
                    contact_title: '我要睡覺',
                    contact_status: '處理中',
                },
                {
                    contact_id: '9',
                    contact_date: '2024/.1.01',
                    contact_name: '柯文哲',
                    contact_title: '我要睡覺',
                    contact_status: '處理中',
                },
                {
                    contact_id: '10',
                    contact_date: '2024/.1.01',
                    contact_name: '王世堅',
                    contact_title: '我要睡覺',
                    contact_status: '處理中',
                },

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
