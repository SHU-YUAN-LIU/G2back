<template>
    <MainHeader />
    
    <div class="donate">
        <div>
            <Search />
        </div>
        <div class="donate_container">
            
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
                    <tr :key="index" v-for="index in 35">
                        <td class="donate_date">2023/9/23</td>
                        <td class="donate_name">王小明</td>
                        <td class="donate_id">1234567</td>
                        <td class="donate_amount">$ <span>1280</span>
                        </td>
                        <td class="donate_method">信用卡</td>
                        <td class="donate_operate">
                            <button @click="showLightbox">
                                <img src="../../public/images/icon/icon_info.png" alt="">查閱
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <Lightbox ref="lightbox" type="true">
        <div class="donate_lightbox">
            <p>
                <span>捐款日期: </span>
                <span>2024/1/1</span>
            </p>
            <p>
                <span>狀態: </span>
                <span>實名</span>
            </p>
            <p class="title"><span>詳細資訊</span></p>
            <table>
            <tr>
                <td>流水編號</td>
                <td>90809809</td>
            </tr>
            <tr>
                <td>管理員姓名</td>
                <td><input type="text"></td>
            </tr>
            <tr>
                <td>狀態</td>
                <td>
                    <select name="" id="">
                        <option value="啟用">啟用</option>
                        <option value="停用">停用</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td>密碼: </td>
                <td><input type="text"></td>
            </tr>
            <tr>
                <td>權限等級: </td>
                <td><select name="" id="">
                        <option value="一般管理員">一般管理員</option>
                        <option value="超級管理員">超級管理員</option>
                    </select></td>
            </tr>
            <tr>
                <td>入職日期: </td>
                <td>2024/1/1 00:00:00</td>
            </tr>
            </table>
        </div>
        <div class="donate_lightbox" lightboxType="true">
            <p>
                <span>捐款日期: </span>
                <span>2024/1/1</span>
            </p>
            <p>
                <span>狀態: </span>
                <span>實名</span>
            </p>
            <p class="title"><span>詳細資訊</span></p>
            <table>
            <tr>
                <td>流水編號</td>
                <td>90809809</td>
            </tr>
            <tr>
                <td>管理員姓名</td>
                <td><input type="text"></td>
            </tr>
            <tr>
                <td>狀態</td>
                <td>
                    <select name="" id="">
                        <option value="啟用">啟用</option>
                        <option value="停用">停用</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td>密碼: </td>
                <td><input type="text"></td>
            </tr>
            <tr>
                <td>權限等級: </td>
                <td><select name="" id="">
                        <option value="一般管理員">一般管理員</option>
                        <option value="超級管理員">超級管理員</option>
                    </select></td>
            </tr>
            <tr>
                <td>入職日期: </td>
                <td>2024/1/1 00:00:00</td>
            </tr>
            </table>
        </div>
    </Lightbox>
    </template>
    <script>
    import MainHeader from "../components/MainHeader.vue";
    import Lightbox from "../components/Lightbox.vue";
    import Search from "../components/SearchBtn.vue"
    export default{
        data(){
            return{
                donateAccount:[
                    {
                        id: 231411424,
                        name: "王小明"
                    }
                ]
            };
        },
        components:{
        MainHeader,
        Lightbox,
        Search,
    },
        methods: {
            showLightbox(){
                this.$refs.lightbox.showLightbox = true;
            }
        },
    }
    </script>
    
    <!-- 燈箱內容的css -->
    <style lang="scss">
    @import "../assets/scss/style.scss";
    .donate_lightbox{
        width: 80%;
        p{
            display: flex;
    
            span:nth-child(1){
                width: 200px;
            }
        }
        .title{
            text-align: center;
            background: black;
            color: $white;
            width: 100%;
            height: 45px;
            line-height: 45px;
            display: flex;
            justify-content: center;
        }
        table{
            width: 100%;
            tr{
                height: 40px;
                line-height: 40px;
                display: flex;
                justify-content: space-evenly;
                td{
                    text-align: center;
                    width: 50%;
                    input{
                        height: 30px;
                    }
                }
                td:nth-child(2){
                    text-align: left;
                    
                }
            }
        }
    }
    </style>
    