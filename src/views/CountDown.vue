<template>
    <MainHeader />
    <Dropdown />
    <div class="countdown">
        <div class="countdown_container">
            <div class="countdown-btn">
                <SearchBtn :placeholder="placeholder" />
                <addBtn />
            </div>
            <div class="countdown_table">
                <table class="table table-hover" style="position: relative;">

                    <thead style="position: sticky; top:0;  z-index: 99;">
                        <td>投票名稱</td>
                        <td>投票結束日期</td>
                        <td>是否隱藏</td>
                        <td>操作</td>
                    </thead>
                    <tbody>
                        <tr v-for="item in countdowndata">
                            <td class="countdown_name">{{ item.countdown_name }}</td>
                            <td class="countdown_lavel">{{ item.countdown_level }}</td>
                            <td class="countdown_status">
                                <SwitchBtn />
                            </td>
                            <td class="countdown_operate">
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
        <div class="countdown_lightbox">
            <!-- --------------------------------- -->
            <div class="countdown-row-group">
                <div class="countdown-row">
                    <strong>建立日期:</strong>
                    <span>2024/1/1</span>
                </div>
                <div class="countdown-title-bar ">
                    <span>投票名稱</span>
                    <span>投票結束日期</span>
                    <span>是否隱藏</span>
                </div>

                <div class="countdown-row-input">
                    <input class="form-control" type="text" placeholder="請輸入投票名稱">
                    <input class="form-control" type="date">
                    <div class="countdown-row-switch" style="width:560px;">
                        <SwitchBtn />
                    </div>
                </div>
                <hr>
            </div>
        </div>
    </Lightbox>
</template>


<script>
import MainHeader from "../components/MainHeader.vue";
import Lightbox from "../components/Lightbox.vue";
import SwitchBtn from "../components/switch_btn.vue";
import SearchBtn from "../components/SearchBtn.vue";
import Dropdown from "../components/Dropdown.vue";
import addBtn from "../components/addBtn.vue";
export default {
    data() {
        return {
            placeholder: '請輸入關鍵字',
            countdowndata: [
                {
                    countdown_name: '2023總統大選',
                    countdown_level: '2023/3/8',
                },
                {
                    countdown_name: '2024總統大選',
                    countdown_level: '2024/3/8',
                },
                {
                    countdown_name: '2025總統大選',
                    countdown_level: '2025/3/8',
                },

            ],

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
        document.title = "青年進補黨(後台) - 倒數管理";
    },
    created() {
    },
    methods: {
        showLightbox() {
            this.$refs.lightbox.showLightbox = true;
            // document.body.style.overflow = 'hidden';
        },

    }
}
</script>
<style lang="scss"></style>
