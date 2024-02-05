<template>
    <MainHeader />
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
                            <img src="../assets/image/index/banner1.png" alt="">
                        </td>
                        <td class="banner_title">2024大選推廣</td>
                        <td class="banner_status">
                                <label>
                                    <input type="checkbox">
                                    <div>
                                        <span></span>
                                        <span>否</span> <span>是</span>
                                    </div>
                                </label>
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
    <Lightbox ref="lightbox">

    </Lightbox>
</template>
<script>
import MainHeader from "../components/MainHeader.vue";
import Lightbox from "../components/Lightbox.vue";
export default{
    data(){
        return{
        };
    },
    components:{
    MainHeader,
    Lightbox,
},
    methods: {
        showLightbox(){
            this.$refs.lightbox.showLightbox = true;
        }
    },
}
</script>
