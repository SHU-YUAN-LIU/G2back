<template>
    <MainHeader />
    <Dropdown />
    <div class="banner">
        <div class="banner_container">
            <table>
                <thead>
                    <td>消息編號</td>
                    <td>輪播圖預覽</td>
                    <td>主旨</td>
                    <td>啟用狀態</td>
                    <td>操作</td>
                </thead>
                <tbody>
                    <tr :key="index" v-for="index in 6">
                        <td class="banner_id">1</td>
                        <td class="banner_pic">
                            <img src="../assets/image/banner/banner1.png" alt="">
                        </td>
                        <td class="banner_title">2024大選推廣</td>
                        <td class="banner_status">
                            <SwitchBtn />
                        </td>
                        <td class="banner_operate">
                            <button @click="showLightbox">
                                <img src="../../public/images/icon/icon_revise.png" alt="">修改
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <Lightbox ref="lightbox" lightboxType="true">
        <div class="banner_lightbox">
            <table>
                <thead>
                    <td>消息編號</td>
                    <td>輪播圖預覽(電腦)</td>
                    <td>輪播圖預覽(手機)</td>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td><img src="../assets/image/banner/banner1.png" alt=""></td>
                        <td><div class="mobil_pic"><img src="../assets/image/banner/banner1_w350.png" alt=""></div></td>
                    </tr>
                </tbody>
            </table>

        </div>
    

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
