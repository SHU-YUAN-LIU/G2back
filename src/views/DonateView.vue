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
                        <tr :key="index" v-for="index in 35">
                            <td class="donate_date">2023/9/23</td>
                            <td class="donate_name">王小明</td>
                            <td class="donate_id">1234567</td>
                            <td class="donate_amount">$ <span>1280</span>
                            </td>
                            <td class="donate_method">信用卡</td>
                            <td class="donate_operate">
                                <button @click="showLightbox">
                                    <img src="../../public/images/icon/icon_info.png" alt="">查閱
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    <Lightbox ref="lightbox" type="true">
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
// import Dropdown from "../components/Dropdown.vue";
import Lightbox from "../components/Lightbox.vue";
import Search from "../components/SearchBtn.vue";
export default {
    data() {
        return {
            donateAccount: [
                {
                    id: 231411424,
                    name: "王小明"
                }
            ],
            searchPlaceholder: '请输入搜索内容'
        };
    },
    components: {
        MainHeader,
        Lightbox,
        Search,
    },
    methods: {
        showLightbox() {
            this.$refs.lightbox.showLightbox = true;
        }
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
    
