<template>
    <MainHeader />
    <Dropdown />
    <div class="news">
        <div class="news_container">
<<<<<<< HEAD
            <div>
                <Search />
            </div>
            <div class="news_table">
                <table>
=======
            <!-- 搜尋框 -->
            <div class="news-btn">
                <SearchBtn :placeholder="placeholder" />
                <addBtn />
            </div>
            <!-- table -->
            <div class="news_table">
                <table class="table table-hover" style="position: relative;">
                    <!-- 表頭 -->
>>>>>>> dev
                    <thead>
                        <td>編號</td>
                        <td>主圖預覽</td>
                        <td>新聞標題</td>
                        <td>最後編輯日期</td>
                        <td>啟用狀態</td>
                        <td>操作</td>
                    </thead>
<<<<<<< HEAD
                    <tbody>
                        <tr :key="index" v-for="index in 6">
                            <td class="news_id">1</td>
=======
                    <!-- 欄位內容 -->
                    <tbody>
                        <tr :key="index" v-for="index in 6" align='center'>
                            <td class="news_id">{{ index }}.</td>
>>>>>>> dev
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
    </div>
<<<<<<< HEAD
    <Lightbox ref="lightbox" lightboxType="true">
        <div class="news_lightbox">
            <div class="news_title"><label>新聞標題:</label><input type="text"></div>
            <div class="news_author"><label>作者:</label><input type="text"></div>
            <div class="news_introduction"><label>引言:</label><textarea name="" id="" cols="30" rows="10"></textarea></div>
            <div class="news_upload_pic">
                <label for="">主要圖片上傳:</label>
                <div class="news_main_pic"><img src="" alt=""></div>
                <div class="news_file_name">
                    <input type="file">
                    <p>檔名:<span></span></p>
                </div>
            </div>
            <div class="news_content">
                <p>新聞內文</p>
                <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
            <div class="news_marquee?">
                <p>是否啟用跑馬燈</p>
                <select name="" id="">
                    <option value="是">是</option>
                    <option value="否">否</option>
                </select>      
            </div>
            <div class="news_marquee_status">
                <p>啟用狀態</p>
                <select name="" id="">
                    <option value="是">是</option>
                    <option value="否">否</option>
                </select>      
            </div>
=======
    <!-- 燈箱架構 -->
    <Lightbox ref="lightbox" lightboxType="true">
        <div class="news_lightbox">
            <div class="news-row-group">
                <div class="news-row">
                    <strong>新聞標題:</strong>
                    <input class="form-control" type="text" placeholder=" 請輸入新聞標題">
                </div>
                <hr>
                <div class="news-row">
                    <strong>作者:</strong>
                    <input class="form-control" type="text" placeholder=" 請輸入作者姓名">
                </div>
                <hr>
                <div class="news-row">
                    <strong>引言:</strong>
                    <textarea class="form-control" placeholder="請輸入作者姓名" style="resize: none;"></textarea>
                </div>
                <hr>
                <div class="news-row">
                    <label for="formFileMultiple" class="form-label">主要圖片上傳:</label>
                    <input class="form-control" type="file" id="formFileMultiple" multiple>
                </div>
                <hr>
                <div class="news-row">
                    <strong>新聞內文:</strong>
                    <textarea class="form-control" placeholder="請輸入新聞內文" style="resize: none;"></textarea>
                </div>
                <hr>
                <div class="news-row">
                    <strong>是否啟用跑馬燈:</strong>
                    <select class="form-select">
                        <option>是</option>
                        <option>否</option>
                    </select>
                </div>
                <hr>
                <div class="news-row">
                    <strong>啟用狀態:</strong>
                    <select class="form-select">
                        <option>是</option>
                        <option>否</option>
                    </select>
                </div>
            </div>
>>>>>>> dev
        </div>
    </Lightbox>
</template>
<script>
import axios from "axios";
import MainHeader from "../components/MainHeader.vue";
import Lightbox from "../components/Lightbox.vue";
import SwitchBtn from "../components/switch_btn.vue";
<<<<<<< HEAD
import Search from "../components/SearchBtn.vue";

=======
import SearchBtn from "../components/SearchBtn.vue";
import Dropdown from "../components/Dropdown.vue";
import addBtn from "../components/addBtn.vue";
>>>>>>> dev
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
<<<<<<< HEAD
        Search,
=======
        SearchBtn,
        Dropdown,
        addBtn,
>>>>>>> dev
    },
    methods: {
        showLightbox() {
            this.$refs.lightbox.showLightbox = true;
        }
    },
}
</script>
<style lang="scss">
@import "../assets/scss/style.scss";
.news_lightbox {
    div {
        display: flex; 
        align-items: center;
        label {
            width: min-content;
            padding: 10px;
        }

    }


}

</style>
