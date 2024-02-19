<template>
    <MainHeader />
    <Dropdown />
    <div class="donate">
        <div class="donate_container">
            <!-- 搜尋框 -->
            <div class="donate-btn">
                <SearchBtn :placeholder="placeholder" />
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
                            <td class="donate_amount"> <span>{{ item.donate_amount }}</span>
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
    <Lightbox ref="lightbox" :lightboxType="false">
        <div class="donate_lightbox">
            <div class="donate-row-group">
                <div class="donate-row">
                    <strong>捐款日期:</strong>
                    <span>2024/1/1</span>
                </div>
                <div class="donate-row">
                    <strong>狀態:</strong>
                    <span>實名
                    </span>
                </div>
                <p class="donate-title ">詳細資訊</p>
                <div class="donate-row">
                    <strong>流水編號:</strong>
                    <span>908099</span>
                </div>
                <hr>
                <div class="donate-row">
                    <strong>姓名:</strong>
                    <span>王小明</span>
                </div>
                <hr>
                <div class="donate-row">
                    <strong>會員ID: </strong>
                    <span>1828372</span>
                </div>
                <hr>
                <div class="donate-row">
                    <strong>Email:</strong>
                    <span>andy123@yahoo.com.tw</span>
                </div>
                <hr>
                <div class="donate-row">
                    <strong>生日:</strong>
                    <span>1970.1.1</span>
                </div>
                <hr>
                <div class="donate-row">
                    <strong>連絡電話:</strong>
                    <span>0912345678</span>
                </div>
                <hr>
                <div class="donate-row">
                    <strong>捐款金額:</strong>
                    <span>$1280</span>
                </div>
                <hr>
                <div class="donate-row">
                    <strong>單筆點數:</strong>
                    <span>20</span>
                </div>
                <hr>
                <div class="donate-row">
                    <strong>捐款方式:</strong>
                    <span>信用卡</span>
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
    },
    methods: {
        showLightbox(item) {
            this.$refs.lightbox.showLightbox = true;
        },
        getDonateData() {
            let url = `${import.meta.env.VITE_PHP_URL}/donateDataGetAll.php`;
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

    
