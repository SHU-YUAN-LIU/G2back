<template>
    <MainHeader />
    <Dropdown />
    <div class="news">
        <div class="news_container">
            <table>
                <thead>
                    <td>編號</td>
                    <td>主圖預覽</td>
                    <td>新聞標題</td>
                    <td>最後編輯日期</td>
                    <td>啟用狀態</td>
                    <td>操作</td>
                </thead>
                <tbody>
                    <tr :key="index" v-for="index in 6">
                        <td class="news_id">1</td>
                        <td class="news_pic">
                            <img src="../assets/image/news/news.png" alt="">
                        </td>
                        <td class="news_title">2024大選推廣</td>
                        <td class="news_edit_date">2021/1/2</td>
                        <td class="news_status">
                            <SwitchBtn />
                        </td>
                        <td class="news_operate">
                            <button @click="showLightbox">
                                <img src="../../public/images/icon/icon_revise.png" alt="">修改
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <Lightbox ref="lightbox">

    </Lightbox>
</template>
<script>
import MainHeader from "../components/MainHeader.vue";
import Dropdown from "../components/Dropdown.vue";
import Lightbox from "../components/Lightbox.vue";
import SwitchBtn from "../components/switch_btn.vue";
export default {
    data() {
        return {
        };
    },
    components: {
        MainHeader,
        Dropdown,
        Lightbox,
        SwitchBtn

    },
    methods: {
        showLightbox() {
            this.$refs.lightbox.showLightbox = true;
        }
    },
}
</script>
