<template>
    <MainHeader />
    <Dropdown />
    <div class="journey">
        <div class="journey_container">
            <!-- 搜尋 -->
            <div class="journey-btn">
                <SearchBtn :placeholder="placeholder" @toSearchData="searchdata" />
                <addBtn @click="showLightbox(2, 0)" />
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
                        <tr v-for="item in findjourneydata">
                            <td class="journey_id">{{ item.campaign_no }}</td>
                            <td class="journey_date">{{ item.start_date }}</td>
                            <td class="journey_name">{{ item.cadres }}</td>
                            <td class="journey_locate">{{ item.address.substring(0, 3) }}</td>
                            <td class="journey_status">{{ item.status }}</td>
                            <td class="journey_operate">
                                <button @click="showLightbox(1, item.campaign_no)">
                                    <img src="/public/images/icon/icon_revise.png" alt="">修改
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <!-- 新增燈箱 -->
    <Lightbox ref="lightbox2" :lightboxType=true @toSaveData="insertJourney">
        <div class="journey_lightbox">
            <div class="journey-row-group">

                <p class="journey-title ">詳細資訊</p>
                <div class="journey-row">
                    <strong>活動主旨:</strong>
                    <input class="form-control" type="text" id="name">
                </div>
                <hr>
                <div class="journey-row">
                    <strong>候選人:</strong>
                    <select class="form-select" v-model="cadres">
                        <option selected value="劉緯育/陳舒淇">劉緯育/陳舒淇</option>
                    </select>
                </div>
                <hr>
                <div class="journey-row">
                    <strong>活動地點:</strong>
                    <div class="all-location">
                        <select class="form-select" style="width: 20px;" v-model="pin">
                            <option v-for="location in countrylocation" :value="location.place_name">{{ location.place_name }}
                            </option>
                        </select>
                        <input class="activity-space" id="adddetails" type="text">
                    </div>
                </div>
                <hr>
                <div class="journey-row">
                    <strong>活動狀態:</strong>
                    <select class="form-select" v-model="status">
                        <option selected value="正常">正常</option>
                        <!-- <option value="停辦">停辦</option> -->
                    </select>
                </div>
                <hr>
                <div class="journey-row">
                    <strong>開始日期:</strong>
                    <input type="datetime-local" id="start" class="form-control">
                </div>
                <hr>
                <div class="journey-row">
                    <strong>結束日期:</strong>
                    <input @change="checkdate" type="datetime-local" id="end" class="form-control">
                </div>
                <hr>
                <div class="journey-row">
                    <strong>活動內容:</strong>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="8"></textarea>
                </div>
                <hr>
                <div class="journey-row">
                    <div class="abc">
                        <strong>活動圖片:</strong>
                        <span><label for="picupload">(點擊換圖)</label></span>
                    </div>
                    <label for="picupload" class="limitpic"><img :src="currentPic" alt=""></label>
                    <input class="form-control" style="display: none;" id="picupload" @change="uploadfile" type="file">


                </div>
            </div>
        </div>

    </Lightbox>


    <!-- 修改燈箱 -->
    <Lightbox ref="lightbox1" :lightboxType=true @toSaveData="updateJourney(journeyItemData[0].campaign_no)">
        <div class="journey_lightbox">
            <div class="journey-row-group">

                <p class="journey-title ">詳細資訊</p>
                <div class="journey-row">
                    <strong>活動主旨:</strong>
                    <input class="form-control" type="text" v-model="name" id="name">
                </div>
                <hr>
                <div class="journey-row">
                    <strong>候選人:</strong>
                    <select class="form-select" v-model="cadres">
                        <option selected :value="journeyItemData[0].cadres">{{ journeyItemData[0].cadres }}</option>
                    </select>
                </div>
                <hr>
                <div class="journey-row">
                    <strong>活動地點:</strong>
                    <div class="all-location">
                        <select class="form-select" style="width: 20px;" v-model="pin">
                            <option v-for="location in countrylocation" :value="location.place_name">{{ location.place_name }}
                            </option>
                        </select>
                        <input class="activity-space" id="adddetails" type="text" v-model="adddetails">
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
                    <input @change="checkdate" type="datetime-local" id="start" v-model="start" class="form-control">
                </div>
                <hr>
                <div class="journey-row">
                    <strong>結束日期:</strong>
                    <input @change="checkdate" type="datetime-local" v-model="end" id="end" class="form-control">
                </div>
                <hr>
                <div class="journey-row">
                    <strong>活動內容:</strong>
                    <textarea class="form-control" v-model="content" id="exampleFormControlTextarea1" rows="8"></textarea>
                </div>
                <hr>
                <div class="journey-row">
                    <div class="abc">
                        <strong>活動圖片:</strong>
                        <span><label for="picupload">(點擊換圖)</label></span>
                    </div>
                    <label for="picupload" class="limitpic"><img :src="currentPic" :key="editNumber" alt=""></label>
                    <input class="form-control" style="display: none;" id="picupload" @change="uploadfile" type="file">


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
            placeholder: '請輸入活動編號或地點',
            countrylocation: [
                {
                    "place_name": "台北市",
                    "coordinates": [121.46371, 25.013122],
                },
                {
                    "place_name": "新北市",
                    "coordinates": [121.648911, 24.923119],
                },
                {
                    "place_name": "基隆市",
                    "coordinates": [121.736038, 25.100707],
                },
                {
                    "place_name": "宜蘭市",
                    "coordinates": [121.753334, 24.751954],
                },
                {
                    "place_name": "桃園市",
                    "coordinates": [121.21714, 24.981074],
                },
                {
                    "place_name": "新竹縣",
                    "coordinates": [120.965692, 24.805424],
                },
                {
                    "place_name": "苗栗縣",
                    "coordinates": [120.819233, 24.561483],
                },
                {
                    "place_name": "南投縣",
                    "coordinates": [120.930229, 23.777977],
                },
                {
                    "place_name": "彰化縣",
                    "coordinates": [120.5423, 24.080767],
                },
                {
                    "place_name": "雲林縣",
                    "coordinates": [120.524551, 23.699078],
                },
                {
                    "place_name": "嘉義市",
                    "coordinates": [120.453541, 23.481109],
                },
                {
                    "place_name": "台南市",
                    "coordinates": [120.281465, 22.999696],
                },
                {
                    "place_name": "高雄市",
                    "coordinates": [120.40155, 22.647144],
                },
                {
                    "place_name": "屏東縣",
                    "coordinates": [120.716687, 22.434572],
                },
                {
                    "place_name": "花蓮縣",
                    "coordinates": [121.521353, 24.011039],
                },
                {
                    "place_name": "台東縣",
                    "coordinates": [121.039296, 22.847209],
                },
            ],
            allJourney: [],
            journeyItemData: [],
            status: '',
            pin: '',
            cadres: '',
            longi: '',
            latti: '',
            uploadFile: null,
            currentPic: '',
            start: '',
            end: '',
            adddetails: '',
            context: '',
            name: '',
            findjourneydata:[],
            editNumber: 0,
        };
    },
    components: {
        MainHeader,
        Dropdown,
        SearchBtn,
        Lightbox,
        addBtn,
    },
    created() {
        this.getJourneyAll();
    },
    methods: {
        searchdata(value) {
            this.findjourneydata = this.allJourney.filter((item) => {
                return item.campaign_no.toString().includes(value) || item.address.substring(0, 3).toString().includes(value);
            })
        },
        showLightbox(id, campaign_no) {
            if (id == 2) {
                this.pin = '台北市';
                this.status = '正常';
                this.cadres = '劉緯育/陳舒淇'
                this.$refs[`lightbox${id}`].showLightbox = true;
                this.currentPic = this.getPicUrl('errorpic.png')
            } else {
                this.journeyItemData = [];
                this.status = '';
                this.pin = '';
                // this.currentPic = this.getPicUrl(this.allJourney[campaign_no].pic)
                var formData = new FormData();
                formData.append('campaign_no', campaign_no);
                axios.post(`${import.meta.env.VITE_PHP_URL}` + "/getJourneyData.php", formData)
                    .then(res => {
                        // console.log(res);
                        this.journeyItemData = res.data.campaign;
                        // console.log(this.journeyItemData);
                        this.status = this.journeyItemData[0].status
                        this.pin = this.journeyItemData[0].address.substring(0, 3)
                        // console.log(this.pin);
                        // console.log(this.journeyItemData[0].start_date);
                        this.start = this.journeyItemData[0].start_date
                        this.end = this.journeyItemData[0].end_date
                        this.adddetails = this.journeyItemData[0].address.substring(3)
                        this.content = this.journeyItemData[0].content
                        this.name = this.journeyItemData[0].campaign_name
                        // console.log(this.start);
                        // console.log(this.end);
                        this.currentPic = this.getPicUrl(this.journeyItemData[0].pic)
                        this.cadres = this.journeyItemData[0].cadres
                        this.$refs[`lightbox${id}`].showLightbox = true;
                        document.body.style.overflow = 'hidden';
                    })
                    

                    .catch(error => {
                        console.error('Error fetching data:', error);
                    });

            }
        },
        checkdate() {
            // console.log(123);
            if (document.getElementById('end').value < document.getElementById('start').value) {
                alert("結束日期要在開始日期之後")
                this.end = ''
                // console.log(document.getElementById('end').value);
            }
        },
        insertJourney() {
            if (document.getElementById("name").value && this.pin + document.getElementById('adddetails').value && document.getElementById('end').value != '' && document.getElementById('exampleFormControlTextarea1').value && document.getElementById('start').value != '') {

                if (this.uploadFile != null) {
                    this.countrylocation.forEach(location => {
                        if (location.place_name == this.pin) {
                            this.latti = location.coordinates[0];
                            this.longi = location.coordinates[1];
                        }
                    });
                    // console.log(document.getElementById("name").value);
                    var formData = new FormData();
                    formData.append('name', document.getElementById("name").value)
                    formData.append('cadres', this.cadres)
                    formData.append('address', this.pin + document.getElementById('adddetails').value);
                    formData.append('longi', this.longi);
                    formData.append('latti', this.latti);
                    formData.append('status', this.status);
                    formData.append('start', document.getElementById('start').value);
                    formData.append('end', document.getElementById('end').value);
                    formData.append('content', document.getElementById('exampleFormControlTextarea1').value);

                    axios({
                        method: "post",
                        url: `${import.meta.env.VITE_PHP_URL}` + "/insertJourney.php",
                        data: formData,
                        headers: { "Content-Type": "multipart/form-data" },
                    })
                        .then(res => {
                            if (!res.error) {
                                // console.log(res.data.PK);
                                this.updateJourney(res.data.PK)
                                // console.log(res.data.msg);
                                // alert(res.data.msg)
                                this.$refs.lightbox2.showLightbox = false
                                // this.uploadFile=null;
                                // this.getJourneyAll();
                            }
                        })

                        .catch(error => {
                            console.error('Error fetching data:', error);
                        });
                } else {
                    alert("請上傳圖片")
                }
            }
            else {
                alert("資料不可為空")
            }
        },
        getPicUrl(filename) {
            return `${import.meta.env.VITE_IMG_URL}` + "/campaign/" + filename + `?${Date.now()}`;
        },
        getJourneyAll() {
            axios.get(`${import.meta.env.VITE_PHP_URL}` + "/journeyDataGetAll.php")
                .then(res => {
                    // console.log(res);
                    this.allJourney = res.data.campaign;
                    this.findjourneydata=this.allJourney;
                    // console.log(this.allJourney);
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        },
        uploadfile(e) {
            this.uploadFile = e.target.files[0];
            console.log(this.uploadFile['name'].substr(-3));
            if (this.uploadFile['name'].substr(-3) == 'png') {
                this.currentPic = URL.createObjectURL(this.uploadFile)
                const reader = new FileReader();
                reader.readAsDataURL(this.uploadFile);
            }
            else {
                picupload.value = null;
                alert('圖檔只接受PNG檔')
            }
        },
        updateJourney(campaign_no) {
            if (document.getElementById("name").value.trim() && document.getElementById('adddetails').value.trim() && document.getElementById('end').value != '' && document.getElementById('exampleFormControlTextarea1').value.trim() && document.getElementById('start').value != '') {
                console.log(document.getElementById('end').value);
                if (this.uploadFile != null) {
                    let picFormData = new FormData();
                    picFormData.append('pic', this.uploadFile)
                    picFormData.append('campaign_no', campaign_no);
                    axios({
                        method: "post",
                        url: `${import.meta.env.VITE_PHP_URL}` + "/updateJourneyPic.php",
                        data: picFormData,
                        headers: { "Content-Type": "multipart/form-data" },
                    })
                        .then(res => {
                            if (!res.error) {
                                // console.log(res.data.msg);
                                // alert(res.data.msg)
                                // this.$refs.lightbox.showLightbox = false
                                this.uploadFile = null;
                                this.editNumber +=1
                                this.getJourneyAll();
                            }
                        })

                        .catch(error => {
                            console.error('Error fetching data:', error);
                        });
                }
                // console.log(campaign_no);
                this.countrylocation.forEach(location => {
                    if (location.place_name == this.pin) {
                        this.latti = location.coordinates[0];
                        this.longi = location.coordinates[1];
                    }
                });
                // console.log(this.longi);
                // console.log(this.latti);
                let formData = new FormData();
                formData.append('campaign_no', campaign_no);
                formData.append('name', document.getElementById('name').value);
                formData.append('cadres', this.cadres);
                formData.append('address', this.pin + document.getElementById('adddetails').value);
                formData.append('longi', this.longi);
                formData.append('latti', this.latti);
                formData.append('status', this.status);
                formData.append('start', document.getElementById('start').value);
                formData.append('end', document.getElementById('end').value);
                formData.append('content', document.getElementById('exampleFormControlTextarea1').value);
                axios({
                    method: "post",
                    url: `${import.meta.env.VITE_PHP_URL}` + "/updateJourney.php",
                    data: formData,
                    headers: { "Content-Type": "multipart/form-data" },
                })
                    .then(res => {
                        if (!res.error) {
                            // console.log(res.data.msg);
                            alert(res.data.msg)
                            this.$refs.lightbox1.showLightbox = false
                            this.getJourneyAll();
                        }
                    })

                    .catch(error => {
                        console.error('Error fetching data:', error);
                    });
            }
            else {
                alert("資料不可為空")
            }
        },
    },
}
</script>
<style lang="scss"></style>




