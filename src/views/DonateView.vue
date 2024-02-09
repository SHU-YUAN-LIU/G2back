<template>
    <MainHeader />
    <Dropdown />
    <div class="donate">
        <div class="donate_container">
            <!-- 搜尋框 -->
            <div class="news-btn">
                <SearchBtn :placeholder="placeholder" />
                <addBtn />
            </div>
            <div class="donate_table">
                <table class="table table-hover" style="position: relative;">
                    <!-- 表頭 -->
                    <thead style="position: sticky; top:0;  z-index: 99;">
                        <td>捐款日期</td>
                        <td>捐款姓名</td>
                        <td>會員編號</td>
                        <td>捐款金額</td>
                        <td>支付方式</td>
                        <td>操作</td>
                    </thead>
                    <!-- 欄位內容 -->
                    <tbody>
                        <tr v-for="item in donatedata" :key="index">
                            <td class="donate_date">{{ item.donate_date }}</td>
                            <td class="donate_name">{{ item.member_name || '-' }}</td>
                            <td class="donate_id">{{ item.member_no || '-' }}</td>
                            <td class="donate_amount">$ <span>{{ item.donate_amount }}</span>
                            </td>
                            <td class="donate_method">{{ item.donate_method }}</td>
                            <td class="donate_operate">
                                <button @click="showLightbox()">
                                    <img src="../../public/images/icon/icon_info.png" alt="icon_info.png">查閱
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    <!-- 燈箱架構 -->
    <Lightbox ref="lightbox" type="true" @toSaveData="updateData(currentightbox[0].member_no)">
        <Lightbox ref="lightbox" lightboxType="true">
            <div class="donate_lightbox">
                <div class="donate-row-group">
                    <div class="donate-row">
                        <strong>建立日期:</strong>
                        <span>2024/1/1</span>
                    </div>
                    <div class="donate-title-bar ">
                        <span>投票名稱</span>
                        <span>投票結束日期</span>
                        <span>是否隱藏</span>
                    </div>

                    <div class="donate-row-input">
                        <input class="form-control" type="text" placeholder="請輸入投票名稱" style="">
                        <input class="form-control" type="date" style="">
                        <div class="donate-row-switch" style="width:274.57px;">
                            <SwitchBtn />
                        </div>
                    </div>
                    <hr>
                </div>
            </div>
        </Lightbox>






        <div class="donate_lightbox">
            <p>
                <span>捐款日期: </span>
                <span>2024/1/1</span>
            </p>
            <p>
                <span>狀態: </span>
                <span>實名</span>
            </p>
            <p class="title"><span>詳細資訊</span></p>
            <table>
                <tr>
                    <td>流水編號: </td>
                    <td>90809809</td>
                </tr>
                <tr>
                    <td>姓名: </td>
                    <td>王小明</td>
                </tr>
                <tr>
                    <td>會員ID: </td>
                    <td>1828372</td>
                </tr>
                <tr>
                    <td>Email: </td>
                    <td>xx@gmail.com</td>
                </tr>
                <tr>
                    <td>生日: </td>
                    <td>1970.1.1</td>
                </tr>
                <tr>
                    <td>連絡電話: </td>
                    <td>0912345678</td>
                </tr>
                <tr>
                    <td>捐款金額: </td>
                    <td>1280</td>
                </tr>
                <tr>
                    <td>單筆點數: </td>
                    <td>20</td>
                </tr>
                <tr>
                    <td>捐款方式: </td>
                    <td>信用卡</td>
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
import SearchBtn from "../components/SearchBtn.vue";
import Dropdown from "../components/Dropdown.vue";
import addBtn from "../components/addBtn.vue";
export default {
    data() {
        return {
            placeholder: '請輸入標題或關鍵字',
            donatedata: [{
                donate_date: '2023/9/23',
                member_name: '劉橙汁',
                member_no: '1',
                donate_amount: '$2000',
                donate_method: '信用卡',
            },
            {
                donate_date: '2023/9/23',
                member_name: '劉丁',
                member_no: '2',
                donate_amount: '$2000',
                donate_method: '信用卡',
            }
            ],
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
        addBtn,
    },
    methods: {
        showLightbox(item) {
            this.$refs.lightbox.showLightbox = true;
        },
        getDonateData() {
            let url = `${import.meta.env.VITE_API_URL}/donateDataGetAll.php`;
            fetch(url)
                .then(response => response.json())
                .then(result => {
                    const donates = result.donates;
                    console.log(111, result)

                    this.showDonates(donates);
                })
                .catch(error => {
                    console.log(error);
                })
        },
        showDonates(donates) {
            // let html = "";

            for (let i = 0; i < donates.length; i++) {
                this.donatedata.push({
                    donate_date: donates[i].donate_date,
                    member_name: donates[i].member_name,
                    member_no: donates[i].member_no,
                    donate_amount: donates[i].donate_amount,
                    donate_method: donates[i].donate_method,
                })
            }
        },
    },
}

</script>
<style lang="scss"></style>
    
