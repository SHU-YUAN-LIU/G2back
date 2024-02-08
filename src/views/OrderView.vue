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
                        <td>狀態</td>
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
            <!-- --------------------------------- -->
            <div class="order-row-group">
                <p class="order-title-bar ">會員資訊</p>
                <div class="order-row">
                    <strong>訂單編號:</strong>
                    <span>9809809</span>
                </div>
                <hr>
                <div class="order-row">
                    <strong>姓名:</strong>
                    <span>張惠妹</span>
                </div>
                <hr>
                <div class="order-row">
                    <strong>會員ID:</strong>
                    <span>231411424</span>
                </div>
                <p class="order-title-bar ">訂單資訊</p>
                <div class="order-row">
                    <strong>取件姓名:</strong>
                    <span>張惠妹</span>
                </div>
                <hr>
                <div class="order-row">
                    <strong>取貨電話:</strong>
                    <span>0976767676</span>
                </div>
                <hr>
                <div class="order-row">
                    <strong>付款方式:</strong>
                    <span>貨到付款</span>
                </div>
                <hr>
                <div class="order-row">
                    <strong>取貨地址:</strong>
                    <span>桃園市中壢區</span>
                </div>
                <hr>
                <div class="order-row">
                    <strong>取貨方式:</strong>
                    <span>超商取貨</span>
                </div>
                <hr>
                <div class="order-row">
                    <strong>訂單狀態:</strong>
                    <select class="form-select">
                        <option selected>選擇訂單狀態</option>
                        <option value="">已完成</option>
                        <option value="">處理中</option>
                    </select>
                </div>
                <hr>
                <div class="order-row">
                    <strong>訂單編號:</strong>
                    <span>9809809</span>
                </div>
                <hr>
                <div class="order-row">
                    <strong>建立日期:</strong>
                    <span>2024/1/1</span>
                </div>
                <!-- ------------------------------------------------- -->
                <div class="order-title-bar">
                    <span>商品編號</span>
                    <span>商品名稱</span>
                    <span>數量</span>
                    <span>單價</span>
                </div>
                <div class="order_table">
                    <table class="table " style="position: relative; " align="center" vertical="middle">
                        <tbody>
                            <tr v-for="item in orderItemdata" align="center" vertical="middle">
                                <td class="order_id">{{ item.product_id }}</td>
                                <td class="order_date">{{ item.product_name }}</td>
                                <td class="order_name">{{ item.product_qty }}</td>
                                <td class="order_price">{{ item.product_price }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <!-- ------------------------------------------------- -->
                <p class="order-title-bar ">訂單金額明細</p>
                <div class="order-row">
                    <strong>訂單金額:</strong>
                    <span>$3,250元</span>
                </div>
                <hr>
                <div class="order-row">
                    <strong>點數折抵:</strong>
                    <span>-200點</span>
                </div>
                <hr>
                <div class="order-row">
                    <strong>運費:</strong>
                    <span>$60元</span>
                </div>
                <hr style="border:1.7px solid black">
                <div class="order-row">
                    <strong>金額總計:</strong>
                    <span> $3,110元</span>
                </div>
                <!-- ------------------------------------------------- -->

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

            ],
            orderItemdata: [
                {
                    product_id: '1',
                    product_name: '棒球棍棍',
                    product_qty: '3',
                    product_price: '$900',
                },
                {
                    product_id: '3',
                    product_name: '雨傘',
                    product_qty: '1',
                    product_price: '$550',
                }
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
