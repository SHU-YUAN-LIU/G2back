<template>
    <MainHeader />
    <Dropdown />
    <div class="journey">
        <div class="journey_container">
            <!-- 搜尋 -->
            <div class="journey-btn">
                <SearchBtn :placeholder="placeholder" />
                <addBtn />
            </div>
            <div class="journey_table">
                <table class="table table-hover" style="position: relative;">

                    <thead style="position: sticky; top:0;  z-index: 99;">
                        <td>活動編號</td>
                        <td>開始日期</td>
                        <td>候選人</td>
                        <td>地點</td>
                        <td>狀態</td>
                        <td>操作</td>
                    </thead>
                    <tbody>
                        <tr v-for="item in journeydata">
                            <td class="journey_id">{{ item.journey_id }}</td>
                            <td class="journey_date">{{ item.journey_date }}</td>
                            <td class="journey_name">{{ item.journey_name }}</td>
                            <td class="journey_locate">{{ item.journey_locate }}</td>
                            <td class="journey_status">{{ item.journey_status }}</td>
                            <td class="journey_operate">
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

    <!-- 燈箱 -->
    <Lightbox ref="lightbox" lightboxType="true">
        <div class="journey_lightbox">
            <div class="journey-row-group">
                <div class="journey-row">
                    <strong>最後修改人:</strong>
                    <span>吳康人</span>
                </div>
                <hr>
                <div class="journey-row">
                    <strong>最後修改日期:</strong>
                    <span>2024/1/1</span>
                </div>
                <p class="journey-title ">詳細資訊</p>
                <div class="journey-row">
                    <strong>候選人:</strong>
                    <select class="form-select">
                        <option selected></option>
                        <option value="">劉書齊</option>
                        <option value="">劉煒煜</option>
                    </select>
                </div>
                <hr>
                <div class="journey-row">
                    <strong>活動地點:</strong>
                    <select class="form-select">
                        <option selected>全部地點</option>
                        <option value="">基隆市</option>
                        <option value="">台北市</option>
                        <option value="">新北市</option>
                        <option value="">桃園市</option>
                        <option value="">新竹市</option>
                        <option value="">苗栗縣</option>
                        <option value="">台中市</option>
                        <option value="">彰化縣</option>
                        <option value="">雲林縣</option>
                        <option value="">嘉義市</option>
                        <option value="">台南市</option>
                        <option value="">高雄市</option>
                        <option value="">屏東縣</option>
                        <option value="">南投縣</option>
                        <option value="">花蓮縣</option>
                        <option value="">台東縣</option>
                    </select>
                </div>
                <hr>
                <div class="journey-row">
                    <strong>活動主旨:</strong>
                    <input class="form-control" type="text" placeholder=" 請輸入活動主旨">
                </div>
                <hr>
                <div class="journey-row">
                    <strong>候選人:</strong>
                    <select class="form-select">
                        <option selected></option>
                        <option value="">劉書齊</option>
                        <option value="">劉煒煜</option>
                    </select>
                </div>
                <hr>
                <div class="journey-row">
                    <strong>狀態:</strong>
                    <select class="form-select">
                        <option selected></option>
                        <option value="">活動進行中</option>
                        <option value="">活動結束</option>
                    </select>
                </div>
                <hr>
                <div class="journey-row">
                    <strong>開始日期:</strong>
                    <input type="date" class="form-control">
                </div>
                <hr>
                <div class="journey-row">
                    <strong>結束日期:</strong>
                    <input type="date" class="form-control">
                </div>
                <hr>
                <div class="journey-row">
                    <strong>活動內容:</strong>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="8"></textarea>
                </div>
            </div>
        </div>

    </Lightbox>
</template>



<script>
import MainHeader from "../components/MainHeader.vue";
import Dropdown from "../components/Dropdown.vue";
import SearchBtn from "../components/SearchBtn.vue";
import Lightbox from "../components/Lightbox.vue";
import addBtn from "../components/addBtn.vue";
export default {
    data() {
        return {
            placeholder: '請輸入標題或關鍵字',
            journeydata: [
                {
                    journey_id: '1',
                    journey_date: '2023/09/23',
                    journey_name: '周湯豪',
                    journey_locate: '桃園',
                    journey_status: '正常',
                },
                {
                    journey_id: '2',
                    journey_date: '2023/09/23',
                    journey_name: '為李安',
                    journey_locate: '中壢',
                    journey_status: '正常',
                },
                {
                    journey_id: '3',
                    journey_date: '2023/09/23',
                    journey_name: '蔚如宣',
                    journey_locate: '澎湖',
                    journey_status: '正常',
                },
            ]
        };
    },
    components: {
        MainHeader,
        Dropdown,
        SearchBtn,
        Lightbox,
        addBtn,
    },
    methods: {
        showLightbox() {
            this.$refs.lightbox.showLightbox = true;
        }
    },
}
</script>
<style lang="scss"></style>




