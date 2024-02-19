<template>
    <MainHeader />
    <Dropdown />

    <div class="donate">
        <div class="donate_container">
            <div>
                <Search />
            </div>
            <div class="donate_table">

            <table>
                <thead>
                    <td>捐款日期</td>
                    <td>姓名</td>
                    <td>會員編號</td>
                    <td>金額</td>
                    <td>支付方式</td>
                    <td>操作</td>
                </thead>
                <tbody>
                    <tr :key="index" v-for="item in donatedata">
                        <td class="donate_date">{{ item.donate_date }}</td>
                        <!-- <td class="donate_name">王葳</td> -->
                        <td class="donate_name">{{ item.member_name || '-' }}</td>
                        <td class="donate_id">{{ item.member_no || '-' }}</td>
                        <td class="donate_amount">$ <span>{{ item.donate_amount }}</span>
                        </td>
                        <td class="donate_method">{{ item.donate_method }}</td>
                        <td class="donate_operate">
                            <button @click="showLightbox(item.donate_no)">
                                <img src="../../public/images/icon/icon_info.png" alt="icon_info.png">查閱
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    </div>
    <Lightbox ref="lightbox" type="true" @toSaveData="updateData(currentightbox[0].member_no)">
        <div class="donate_lightbox">
            <p>
                <span>捐款日期: </span>
                <span>{{ lightboxdata.donate_date }}</span>
            </p>
            <p>
                <span>狀態: </span>
                <span>{{ lightboxdata.donate_class }}</span>
            </p>
            <p class="title"><span>詳細資訊</span></p>
            <table>
                <tr>
                    <td>流水編號: </td>
                    <td>{{ lightboxdata.donate_no }}</td>
                </tr>
                <tr>
                    <td>姓名: </td>
                    <td>{{ lightboxdata.member_name || '-' }}</td>
                </tr>
                <tr>
                    <td>會員ID: </td>
                    <td>{{ lightboxdata.member_no || '-' }}</td>
                </tr>
                <tr>
                    <td>Email: </td>
                    <td>{{ lightboxdata.email || '-' }}</td>
                </tr>
                <tr>
                    <td>生日: </td>
                    <td>{{ lightboxdata.birthday || '-' }}</td>
                </tr>
                <tr>
                    <td>連絡電話: </td>
                    <td>{{ lightboxdata.phone || '-' }}</td>
                </tr>
                <tr>
                    <td>捐款金額: </td>
                    <td>{{ lightboxdata.donate_amount }}</td>
                </tr>
                <tr>
                    <td>單筆點數: </td>
                    <td>{{ lightboxdata.member_name ? Math.floor(lightboxdata.donate_amount / 100) : '-' }}</td>
                </tr>
                <tr>
                    <td>捐款方式: </td>
                    <td>{{ lightboxdata.donate_method }}</td>
                </tr>
            </table>
        </div>
    </Lightbox>
</template>
<script>
import MainHeader from "../components/MainHeader.vue";
// import Dropdown from "../components/Dropdown.vue";
import Lightbox from "../components/Lightbox.vue";
import Search from "../components/SearchBtn.vue";
export default {
    data() {
        return {
            donatedata: [],
            searchPlaceholder: '请输入搜索内容',
            lightboxdata: [],
        };
    },
    created() {
        this.getDonateData();
    },
    components: {
        MainHeader,
        Lightbox,
        Search,
    },
    methods: {
        showLightbox(donate_no) {
            this.$refs.lightbox.showLightbox = true;
            this.lightboxdata = this.donatedata.find(item => item.donate_no === donate_no);
            // console.log(this.admindata);
            document.body.style.overflow = 'hidden';
        },
        getDonateData() {
            let url = `${import.meta.env.VITE_API_URL}/donateDataGetAll.php`;
            fetch(url)
                .then(response => response.json())
                .then(result => {
                    const donates = result.donates;
                    console.log(111, result)

                    this.showDonates(donates);
                })
                .catch(error => {
                    console.log(error);
                })
        },
        showDonates(donates) {
            // let html = "";

            for (let i = 0; i < donates.length; i++) {
                this.donatedata.push({
                    donate_date: donates[i].donate_date,
                    member_name: donates[i].member_name,
                    member_no: donates[i].member_no,
                    donate_amount: donates[i].donate_amount,
                    donate_method: donates[i].donate_method,
                    email: donates[i].email,
                    birthday: donates[i].birthday,
                    phone: donates[i].phone,
                    point: donates[i].point,
                    donate_no: donates[i].donate_no,
                    donate_class: donates[i].donate_class,
                })
            }
        },
    },
}

</script>
    
 <!-- 燈箱內容的css -->
<style lang="scss">
@import "../assets/scss/style.scss";

.donate_lightbox {
    width: 80%;

    p {
        display: flex;
        margin: 0;

        span:nth-child(1) {
            width: 200px;
        }
    }

    .title {
        text-align: center;
        background: black;
        color: $white;
        width: 100%;
        height: 45px;
        line-height: 45px;
        display: flex;
        justify-content: center;
    }

    table {
        width: 100%;
        border: 1px solid #000;

        tr {
            height: 40px;
            line-height: 40px;
            display: flex;
            justify-content: space-evenly;

            td {
                text-align: center;
                width: 50%;

                input {
                    height: 30px;
                }
            }

            td:nth-child(2) {
                text-align: left;

            }
        }
    }
}
</style>
    
