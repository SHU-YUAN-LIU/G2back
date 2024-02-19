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
                        <tr v-for="item in allJourney">
                            <td class="journey_id">{{ item.campaign_no }}</td>
                            <td class="journey_date">{{ item.start_date }}</td>
                            <td class="journey_name">{{ item.cadres }}</td>
                            <td class="journey_locate">{{ item.address.substring(0, 3) }}</td>
                            <td class="journey_status">{{ item.status }}</td>
                            <td class="journey_operate">
                                <button @click="showLightbox(item.campaign_no)">
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
    <Lightbox ref="lightbox" :lightboxType=true>
        <div class="journey_lightbox">
            <div class="journey-row-group">
                
                <p class="journey-title ">詳細資訊</p>
                <div class="journey-row">
                    <strong>活動主旨:</strong>
                    <input class="form-control" type="text" :value="journeyItemData[0].campaign_name">
                </div>
                <hr>
                <div class="journey-row">
                    <strong>候選人:</strong>
                    <select class="form-select">
                        <option selected :value="journeyItemData[0].cadres">{{ journeyItemData[0].cadres }}</option>
                    </select>
                </div>
                <hr>
                <div class="journey-row">
                    <strong>活動地點:</strong>
                    <div class="all-location">
                        <select class="form-select" style="width: 20px;" v-model="pin">
                            <option v-for="location in countrylocation" :value="location.place_name">{{location.place_name}}</option>
                        </select>
                        <input class="activity-space" type="text" :value="journeyItemData[0].address.substring(3)">
                    </div>
                </div>
                <hr>
                <div class="journey-row">
                    <strong>活動狀態:</strong>
                    <select class="form-select" v-model="status">
                        <option value="正常">正常</option>
                        <option value="停辦">停辦</option>
                    </select>
                </div>
                <hr>
                <div class="journey-row">
                    <strong>開始日期:</strong>
                    <input type="datetime-local" class="form-control" :value="journeyItemData[0].start_date">
                </div>
                <hr>
                <div class="journey-row">
                    <strong>結束日期:</strong>
                    <input type="datetime-local" class="form-control" :value="journeyItemData[0].end_date">
                </div>
                <hr>
                <div class="journey-row">
                    <strong>活動內容:</strong>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="8" :value="journeyItemData[0].content"></textarea>
                </div>
                <hr>
                <div class="journey-row">
                    <strong>圖片上傳:</strong>
                    <input class="form-control" type="file" >{{ journeyItemData[0].pic }}
                    <img src="" alt="">
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
import axios from "axios";
export default {
    data() {
        return {
            placeholder: '請輸入標題或關鍵字',
            countrylocation: [
                {
                    "place_name": "台北市",
                    "coordinates": [121.46371,25.013122],
                },
                {
                    "place_name": "新北市",
                    "coordinates": [121.648911,24.923119],
                },
                {
                    "place_name": "基隆市",
                    "coordinates": [121.736038,25.100707],
                },
                {
                    "place_name": "宜蘭市",
                    "coordinates": [121.753334,24.751954],
                },
                {
                    "place_name": "桃園市",
                    "coordinates": [121.21714,24.981074],
                },
                {
                    "place_name": "新竹縣",
                    "coordinates": [120.965692,24.805424],
                },
                {
                    "place_name": "苗栗縣",
                    "coordinates": [120.819233,24.561483],
                },
                {
                    "place_name": "南投縣",
                    "coordinates": [120.930229,23.777977],
                },
                {
                    "place_name": "彰化縣",
                    "coordinates": [120.5423,24.080767],
                },
                {
                    "place_name": "雲林縣",
                    "coordinates": [120.524551,23.699078],
                },
                {
                    "place_name": "嘉義市",
                    "coordinates": [120.453541,23.481109],
                },
                {
                    "place_name": "台南市",
                    "coordinates": [120.281465,22.999696],
                },
                {
                    "place_name": "高雄市",
                    "coordinates": [120.40155,22.647144],
                },
                {
                    "place_name": "屏東縣",
                    "coordinates": [120.716687,22.434572],
                },
                {
                    "place_name": "花蓮縣",
                    "coordinates": [121.521353,24.011039],
                },
                {
                    "place_name": "台東縣",
                    "coordinates": [121.039296,22.847209],
                },
            ],
            allJourney:[],
            journeyItemData:[],
            status:'',
            pin:'',
        };
    },
    components: {
        MainHeader,
        Dropdown,
        SearchBtn,
        Lightbox,
        addBtn,
    },
    created(){
        this.getJourneyAll();
    },
    methods: {
        showLightbox(campaign_no) {
            this.journeyItemData=[];
            this.status='';
            this.pin='';
            var formData = new FormData();
            formData.append('campaign_no', campaign_no);
            axios.post(`${import.meta.env.VITE_PHP_URL}` + "/getJourneyData.php", formData)
                .then(res => {
                    console.log(res);
                    this.journeyItemData = res.data.campaign;
                    console.log(this.journeyItemData);
                    this.status=this.journeyItemData[0].status
                    this.pin=this.journeyItemData[0].address.substring(0,3)
                    console.log(this.pin);
                    this.$refs.lightbox.showLightbox = true;
                    document.body.style.overflow = 'hidden';
                })

                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        },
        getJourneyAll(){
            axios.get(`${import.meta.env.VITE_PHP_URL}` + "/journeyDataGetAll.php")
                .then(res => {
                    // console.log(res);
                    this.allJourney = res.data.campaign;
                    // console.log(this.allJourney);
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        }
    },
}
</script>
<style lang="scss"></style>




