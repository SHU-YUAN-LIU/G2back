<template>
    <MainHeader />
    <Dropdown />

    <div class="donate">
        <div class="donate_container">
            <div>
                <Search />
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
                    <tr :key="index" v-for="item in donatedata">
                        <td class="donate_date">{{ item.donate_date }}</td>
                        <!-- <td class="donate_name">王葳</td> -->
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
    </div>
    </div>
    <Lightbox ref="lightbox" type="true" @toSaveData="updateData(currentightbox[0].member_no)">
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
import MainHeader from "../components/MainHeader.vue";
import Dropdown from "../components/Dropdown.vue";
import Lightbox from "../components/Lightbox.vue";
import Search from "../components/SearchBtn.vue";
export default {
    data() {
        return {
            donatedata: [],
            searchPlaceholder: '请输入搜索内容'
        };
    },
    created() {
        this.getDonateData();
    },
    components: {
        MainHeader,
        Dropdown,
        Lightbox,
        Search,
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
    
 <!-- 燈箱內容的css -->
<style lang="scss">
@import "../assets/scss/style.scss";

.donate_lightbox {
    width: 80%;

    p {
        display: flex;
        margin: 0;

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
    
