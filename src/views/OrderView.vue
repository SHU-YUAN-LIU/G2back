<template>
    <MainHeader />
    <dropDown />
    <div class="order">
        <div class="order_container">
            <div>
                <SearchBtn :placeholder="placeholder" />
            </div>
            <div class="order_table">
                <table class="table table-hover" style="position: relative;">

                    <thead style="position: sticky; top:0;  z-index: 99;">
                        <td>訂單編號</td>
                        <td>訂單日期</td>
                        <td>姓名</td>
                        <td>金額</td>
                        <td>訂單狀態</td>
                        <td>支付方式</td>
                        <td>操作</td>
                    </thead>
                    <tbody>
                        <tr v-for="item in orderdata">
                            <td class="order_id">{{ item.order_id }}</td>
                            <td class="order_date">{{ item.order_date }}</td>
                            <td class="order_name">{{ item.order_name }}</td>
                            <td class="order_price">{{ item.order_price }}</td>
                            <td class="order_status">{{ item.order_status }}</td>
                            <td class="order_pay">{{ item.order_pay }}</td>
                            <td class="order_operate">
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
    <Lightbox ref="lightbox" lightboxType="true">
        <div class="order_lightbox">
            <p class="order-title ">會員資訊</p>
            <div class="mb-3 row">
                <label for="staticEmail" class="col-sm-2 col-form-label"><strong>訂單編號:</strong></label>
                <div class="col-sm-10">
                    <input type="text" disabled class="form-control-plaintext order-no" id="staticEmail" value="908099">
                </div>
            </div>
            <hr>
            <div class="mb-3 row">
                <label for="staticEmail" class="col-sm-2 col-form-label"><strong>姓名:</strong></label>
                <div class="col-sm-10">
                    <input type="text" disabled class="form-control-plaintext order-no" id="staticEmail" value="黑崎一護">
                </div>
            </div>
            <hr>
            <div class="mb-3 row">
                <label for="staticEmail" class="col-sm-2 col-form-label"><strong>會員ID:</strong></label>
                <div class="col-sm-10">
                    <input type="text" disabled class="form-control-plaintext order-no" id="staticEmail" value="1234567890">
                </div>
            </div>
            <p class="order-title ">訂單資訊</p>
            <div class="mb-3 row">
                <label for="staticEmail" class="col-sm-2 col-form-label"><strong>取件姓名:</strong></label>
                <div class="col-sm-10">
                    <input type="text" disabled class="form-control-plaintext order-no" id="staticEmail" value="小美">
                </div>
            </div>
            <hr>
            <div class="mb-3 row">
                <label for="staticEmail" class="col-sm-2 col-form-label"><strong>取貨電話:</strong></label>
                <div class="col-sm-10">
                    <input type="text" disabled class="form-control-plaintext order-no" id="staticEmail" value="0944837362">
                </div>
            </div>
            <hr>
            <div class="mb-3 row">
                <label for="staticEmail" class="col-sm-2 col-form-label"><strong>付款方式:</strong></label>
                <div class="col-sm-10">
                    <input type="text" disabled class="form-control-plaintext order-no " id="staticEmail" value="貨到付款">
                </div>

            </div>
            <div class="mb-3 row ">
                <label for="staticEmail" class="col-sm-2 col-form-label"><strong>取貨地址:</strong></label>
                <div class="col-sm-10">
                    <input type="text" disabled class="form-control-plaintext order-no " id="staticEmail" value="桃園市中壢區">
                </div>
            </div>




            <div class="mb-3 row">
                <label for="staticEmail" class="col-sm-2 col-form-label "><strong>陳情狀態:</strong></label>
                <select class="form-select">
                    <option selected></option>
                    <option value="1">已受理</option>
                    <option value="2">處理中</option>
                    <option value="3">已回覆</option>
                </select>
            </div>
            <div class="mb-3 row">
                <label for="staticEmail" class="col-sm-2 col-form-label"><strong>陳情內容:</strong></label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
            <div class="mb-3 row">
                <label for="staticEmail" class="col-sm-2 col-form-label"><strong>回覆內容:</strong></label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="8"></textarea>
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
export default {
    data() {
        return {
            placeholder: '請輸入標題或關鍵字',
            orderdata: [
                {
                    order_id: '1',
                    order_date: '2024/.1.01',
                    order_name: '賀龍',
                    order_price: '$3600',
                    order_status: '處理中',
                    order_pay: '信用卡',
                },
                {
                    order_id: '2',
                    order_date: '2024/.1.01',
                    order_name: '曾博恩',
                    order_price: '$3600',
                    order_status: '處理中',
                    order_pay: '貨到付款',
                },
                {
                    order_id: '3',
                    order_date: '2024/.1.01',
                    order_name: '陳大天',
                    order_price: '$3600',
                    order_status: '處理中',
                    order_pay: '信用卡',
                },
                {
                    order_id: '4',
                    order_date: '2024/.1.01',
                    order_name: '周杰倫',
                    order_price: '$3600',
                    order_status: '處理中',
                    order_pay: '信用卡',
                },
                {
                    order_id: '5',
                    order_date: '2024/.1.01',
                    order_name: '周興哲',
                    order_price: '$3600',
                    order_status: '處理中',
                    order_pay: '行動支付',
                },
                {
                    order_id: '6',
                    order_date: '2024/.1.01',
                    order_name: '周湯豪',
                    order_price: '$3600',
                    order_status: '處理中',
                    order_pay: '信用卡',
                },
                {
                    order_id: '5',
                    order_date: '2024/.1.01',
                    order_name: '柯震東',
                    order_price: '$3600',
                    order_status: '處理中',
                    order_pay: '行動支付',
                },
                {
                    order_id: '6',
                    order_date: '2024/.1.01',
                    order_name: '魏如萱',
                    order_price: '$3600',
                    order_status: '處理中',
                    order_pay: '信用卡',
                },
                {
                    order_id: '5',
                    order_date: '2024/.1.01',
                    order_name: 'Linkin Park',
                    order_price: '$3600',
                    order_status: '處理中',
                    order_pay: '行動支付',
                },
                {
                    order_id: '6',
                    order_date: '2024/.1.01',
                    order_name: 'Edward',
                    order_price: '$3600',
                    order_status: '處理中',
                    order_pay: '信用卡',
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
    },
    created() {
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
