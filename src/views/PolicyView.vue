<template>
    <MainHeader />
    <Dropdown />
    <div class="policy">
        <div class="policy_container">
            <!-- 搜尋 -->
            <div>
                <SearchBtn :placeholder="placeholder" />
            </div>
            <div class="policy_table">
                <table class="table table-hover" style="position: relative;">

                    <thead style="position: sticky; top:0;  z-index: 99;">
                        <td>政策編號編號</td>
                        <td>主旨</td>
                        <td>操作</td>
                    </thead>
                    <tbody>
                        <tr v-for="item in policydata">
                            <td class="policy_no">{{ item.policy_no }}</td>
                            <td class="policy_title">{{ item.policy_title }}</td>
                            <td class="policy_operate">
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
    <Lightbox ref="lightbox" :lightboxType=true>
        <div class="policy_lightbox">
            <div class="policy-row-group">
                <p class="policy-title ">詳細資訊</p>
                <div class="policy-row">
                    <strong>政策主旨:</strong>
                    <input class="form-control" type="text" value="房屋改革">
                </div>
                <hr>
                <div class="policy-row">
                    <strong>政策內容:</strong>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="8"
                        value="政策內容政策內容政策內容政策內容政策內容政策內容政策內容政策內容政策內容政策內容政策內容政策內容"></textarea>
                </div>
            </div>
        </div>
    </Lightbox>
</template>

<script>
import MainHeader from '../components/MainHeader.vue'
import Dropdown from "../components/Dropdown.vue";
import switch_btn from '../components/switch_btn.vue'
import SearchBtn from "../components/SearchBtn.vue";
import Lightbox from "../components/Lightbox.vue";
export default {
    components: {
        MainHeader,
        Dropdown,
        switch_btn,
        SearchBtn,
        Lightbox,

    },
    data() {
        return {
            placeholder: '請輸入關鍵字',
            policydata: [
                {
                    policy_no: '1',
                    policy_title: '房屋改革',
                },
                {
                    policy_no: '2',
                    policy_title: '經濟改革',
                },
                {
                    policy_no: '3',
                    policy_title: '打擊房價',
                },

            ]
        }
    },
    mounted() {
        document.title = "青年進補黨(後台) - 政策管理";
    },
    methods: {
        showLightbox() {
            this.$refs.lightbox.showLightbox = true;
            document.body.style.overflow = 'hidden';
        },
    }

}
</script>

<style></style>