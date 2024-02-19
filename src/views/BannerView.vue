<template>
    <MainHeader />
    <Dropdown />
    <div class="banner">
        <div class="banner_container">
            <!-- 搜尋框 -->
            <div class="banner-btn">
                <SearchBtn :placeholder="placeholder" />
                <addBtn />
            </div>
            <!-- table -->
            <div class="banner_table">
                <table class="table table-hover" style="position: relative;">
                    <!-- 表頭 -->
                    <thead align='center'>
                        <td>消息編號</td>
                        <td>輪播圖預覽</td>
                        <td>主旨</td>
                        <td>啟用狀態</td>
                        <td>操作</td>
                    </thead>
                    <!-- 欄位內容 -->
                    <tbody>
                        <tr v-for="index in 6" valign="middle" align='center'>
                            <td class="banner_no">{{ index }}.</td>
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
    </div>
    <!-- 燈箱架構 -->
    <Lightbox ref="lightbox" :lightboxType="true">
        <div class="banner_lightbox">
            <!-- --------------------------------- -->
            <div class="banner-row-group">
                <div class="banner_title">
                    <p class="banner-title-bar ">新聞編號 </p>
                    <p class="banner-title-bar ">輪播圖片預覽</p>
                </div>
                <div class="banner-row">
                    <div> 1.</div>
                    <div class="mb-3">
                        <label for="formFileMultiple" class="form-label">電腦版圖片</label>
                        <input class="form-control" type="file" id="formFileMultiple" multiple>
                    </div>
                    <div class="mb-3">
                        <label for="formFileMultiple" class="form-label">手機版圖片</label>
                        <input class="form-control" type="file" id="formFileMultiple" multiple>
                    </div>
                </div>
                <hr>
                <div class="banner-row-btn">
                    <strong>狀態:</strong>
                    <SwitchBtn />
                </div>
                <hr>
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
import addBtn from "../components/addBtn.vue";
export default {
    data() {
        return {
            placeholder: '請輸入關鍵字',
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
    created() {
    },
    mounted() {
        document.title = "青年進補黨(後台) - 輪播管理";
    },
    methods: {
        showLightbox(product_no) {
            this.$refs.lightbox.showLightbox = true;
            // console.log(this.productdata);
            document.body.style.overflow = 'hidden';
        },

    }
}

</script>



