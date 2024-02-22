<template>
    <MainHeader />
    <dropDown />
    <div class="cadre">
        <div class="cadre_container">
            <div class="cadre-btn">
                <SearchBtn :placeholder="placeholder" />
                <addBtn />
            </div>
            <div class="cadre_table">
                <table class="table table-hover" style="position: relative;">

                    <thead style="position: sticky; top:0;  z-index: 99;">
                        <td>幹部人員編號</td>
                        <td>姓名</td>
                        <td>幹部等級</td>
                        <td>啟用狀態</td>
                        <td>操作</td>
                    </thead>
                    <tbody>
                        <tr v-for="item in cadredata">
                            <td class="cadre_id">{{ item.cadre_no }}</td>
                            <td class="cadre_name">{{ item.cadre_name }}</td>
                            <td class="cadre_level">{{ item.cadre_level }}</td>
                            <td class="cadre_status">
                                <SwitchBtn />
                            </td>
                            <td class="cadre_operate">
                                <button @click="showLightbox()">
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
    <Lightbox ref="lightbox" :lightboxType=true>
        <div class="cadre_lightbox">
            <!-- --------------------------------- -->
            <div class="cadre-row-group">
                <div class="cadre-row">
                    <strong>最後修改人:</strong>
                    <span>test001 王小明</span>
                </div>
                <hr>
                <div class="cadre-row">
                    <strong>最後修改日期:</strong>
                    <span>2024/1/1</span>
                </div>
                <p class="cadre-title-bar ">詳細資訊</p>
                <div class="cadre-row">
                    <strong>幹部人員編號:</strong>
                    <span>test001</span>
                </div>
                <hr>
                <div class="cadre-row">
                    <strong>幹部人員姓名:</strong>
                    <input class="form-control" type="text" placeholder="請輸入姓名">
                </div>
                <hr>
                <div class="cadre-row">
                    <strong>狀態:</strong>
                    <select class="form-select">
                        <option selected></option>
                        <option value="A">啟用</option>
                        <option value="IA">停用</option>
                    </select>
                </div>
                <hr>
                <div class="cadre-row">
                    <strong>幹部職稱:</strong>
                    <select class="form-select">
                        <option selected></option>
                        <option value="">001 黨主席</option>
                        <option value="">002 秘書長</option>
                    </select>
                </div>
                <hr>
                <div class="cadre-row">
                    <strong>幹部等級:</strong>
                    <select class="form-select">
                        <option selected></option>
                        <option value="">黨幹部</option>
                        <option value="">總統候選人</option>
                    </select>
                </div>
                <hr>
                <div class="mb-3">
                    <div class="cadre-row">
                        <strong>黨幹部圖片:</strong>
                        <input class="form-control" type="file">
                    </div>
                </div>
                <hr>
                <div class="contact-row">
                    <div class="cadre-row">
                        <strong>現任職位:</strong>
                        <textarea class="form-control" rows="8" placeholder="請輸入現任職位"></textarea>
                    </div>
                </div>
                <hr>
                <div class="contact-row">
                    <div class="cadre-row">
                        <strong>學歷:</strong>
                        <textarea class="form-control" rows="8" placeholder="請輸入學歷"></textarea>
                    </div>
                </div>
                <hr>
                <div class="contact-row">
                    <div class="cadre-row">
                        <strong>經歷:</strong>
                        <textarea class="form-control" rows="8" placeholder="請輸入經歷"></textarea>
                    </div>
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
import dropDown from "../components/Dropdown.vue";
import addBtn from "../components/addBtn.vue";
export default {
    data() {
        return {
            placeholder: '請輸入幹部人員編號 ',
            lightboxdata: [],
            lightbox_num: 0,
            cadredata: [
                {
                    cadre_no: '1',
                    cadre_name: '賴清德',
                    cadre_level: '總統候選人',
                },
                {
                    cadre_no: '2',
                    cadre_name: '宋楚瑜',
                    cadre_level: '黨幹部',
                },
                {
                    cadre_no: '3',
                    cadre_name: '柯文哲',
                    cadre_level: '副總統候選人',
                },
            ],
        };
    },
    components: {
        MainHeader,
        Lightbox,
        SwitchBtn,
        SearchBtn,
        dropDown,
        addBtn,
    },
    created() {
    },
    mounted() {
        document.title = "青年進補黨(後台) - 幹部管理";
    },
    methods: {
        showLightbox() {
            this.$refs.lightbox.showLightbox = true;
            document.body.style.overflow = 'hidden';
        },
    }
}
</script>
<style lang="scss"></style>
