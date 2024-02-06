<template>
    <MainHeader />
    <Dropdown />
    <SearchBtn />
    <div class="admin">
        <div class="admin_container">
            <table>
                <thead>
                    <td>活動編號</td>
                    <td>開始日期</td>
                    <td>候選人</td>
                    <td>地點</td>
                    <td>狀態</td>
                    <td>操作</td>
                </thead>
                <tbody>
                    <tr :key="index" v-for="index in 35">
                        <td class="admin_id">908009</td>
                        <td class="admin_name">2023/9/23</td>
                        <td class="admin_class">王小明</td>
                        <td class="admin_class">桃園</td>
                        <td class="admin_class">正常</td>
                        <td class="admin_operate">
                            <button @click="showLightbox">
                                <img src="../../public/images/icon/icon_revise.png" alt="">修改
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

    <!-- 燈箱 -->
    <Lightbox ref="lightbox">
        <div class="admin_lightbox">
            <p>
                <span>最後修改人: </span>
                <span>王小明</span>
            </p>
            <p>
                <span>最後修改日期: </span>
                <span>2024/1/1</span>
            </p>
            <p class="title"><span>詳細資訊</span></p>
            <table>
                <tr>
                    <td>活動主旨</td>
                    <td><input type="text"></td>
                </tr>
                <tr>
                    <td>候選人</td>
                    <td><select name="">
                            <option value="">吳聰明</option>
                            <option value="">劉煒煜</option>
                        </select></td>
                </tr>
                <tr>
                    <td>狀態: </td>
                    <td><input type="text"></td>
                </tr>
                <tr>
                    <td>開始日期: </td>
                    <td><input type="date"></td>
                </tr>
                <tr>
                    <td>結束日期: </td>
                    <td><input type="date"></td>
                </tr>
                <tr>
                    <td>活動內容: </td>
                    <td><textarea name="" id=""></textarea></td>
                </tr>
            </table>
        </div>
    </Lightbox>
</template>



<script>
import MainHeader from "../components/MainHeader.vue";
import Dropdown from "../components/Dropdown.vue";
import SearchBtn from "../components/SearchBtn.vue";
import Lightbox from "../components/Lightbox.vue";
export default {
    data() {
        return {
            adminAccount: [
                {
                    id: 231411424,
                    name: "王小明"
                }
            ]
        };
    },
    components: {
        MainHeader,
        Dropdown,
        SearchBtn,
        Lightbox,
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

.admin_lightbox {
    width: 80%;

    p {
        display: flex;

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

        tr {
            height: 40px;
            line-height: 40px;
            display: flex;
            justify-content: space-evenly;

            td {
                text-align: center;
                width: 50%;
            }

            input {
                height: 30px;
            }
        }

        td:nth-child(2) {
            text-align: left;

        }
    }

    textarea {
        resize: none;
    }
}
</style>




