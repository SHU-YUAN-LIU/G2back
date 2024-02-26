<template>
    <MainHeader />
    <dropDown />
    <div class="order">
        <div class="order_container">
            <div>
                <SearchBtn :placeholder="placeholder" @toSearchData="searchdata" />
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
                        <tr v-for="item in findorderdata">
                            <td class="order_id">{{ item.orders_no }}</td>
                            <td class="order_date">{{ item.orders_date }}</td>
                            <td class="order_name">{{ item.receiver_name }}</td>
                            <td class="order_price">{{ item.final_price }}</td>
                            <td class="order_status">{{ item.status }}</td>
                            <td class="order_pay">{{ item.payment_method }}</td>
                            <td class="order_operate">
                                <button @click="showLightbox(item.orders_no)">
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
    <Lightbox ref="lightbox" @toSaveData="updateOrderData(orderItemdata[0].orders_no)" :lightboxType=true>
        <div class="order_lightbox">
            <!-- --------------------------------- -->
            <div class="order-row-group">
                <p class="order-title-bar ">會員資訊</p>
                <div class="order-row">
                    <strong>訂單編號:</strong>
                    <span>{{ orderItemdata[0].orders_no }}</span>
                </div>
                <hr>
                <div class="order-row">
                    <strong>姓名:</strong>
                    <span>{{ orderItemdata[0].member_name }}</span>
                </div>
                <hr>
                <div class="order-row">
                    <strong>會員ID:</strong>
                    <span>{{ orderItemdata[0].member_no }}</span>
                </div>
                <p class="order-title-bar ">訂單資訊</p>
                <div class="order-row">
                    <strong>取件姓名:</strong>
                    <span>{{ orderItemdata[0].receiver_name }}</span>
                </div>
                <hr>
                <div class="order-row">
                    <strong>取貨電話:</strong>
                    <span>{{ orderItemdata[0].receiver_phone }}</span>
                </div>
                <hr>
                <div class="order-row">
                    <strong>付款方式:</strong>
                    <span>{{ orderItemdata[0].payment_method }}</span>
                </div>
                <hr>
                <div class="order-row">
                    <strong>取貨地址:</strong>
                    <span>{{ orderItemdata[0].receiver_address }}</span>
                </div>
                <hr>
                <div class="order-row">
                    <strong>取貨方式:</strong>
                    <span>{{ orderItemdata[0].shipping }}</span>
                </div>
                <hr>
                <div class="order-row">
                    <strong>訂單狀態:</strong>
                    <select class="form-select" :value="orderItemdata[0].status" id="orderStatus">
                        <option value="已完成">已完成</option>
                        <option value="處理中">處理中</option>
                    </select>
                </div>
                <hr>
                <div class="order-row">
                    <strong>訂單編號:</strong>
                    <span>{{ orderItemdata[0].orders_no }}</span>
                </div>
                <hr>
                <div class="order-row">
                    <strong>建立日期:</strong>
                    <span>{{ orderItemdata[0].orders_date }}</span>
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
                                <td class="order_id">{{ item.product_no }}</td>
                                <td class="order_date">{{ item.product_name }}</td>
                                <td class="order_name">{{ item.qty }}</td>
                                <td class="order_price">{{ item.price }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <!-- ------------------------------------------------- -->
                <p class="order-title-bar ">訂單金額明細</p>
                <div class="order-row">
                    <strong>訂單金額:</strong>
                    <span>{{ orderItemdata[0].final_price }}</span>
                </div>
                <hr>
                <div class="order-row">
                    <strong>點數折抵:</strong>
                    <span>-{{ orderItemdata[0].total_point }}點</span>
                </div>
                <hr>
                <div class="order-row">
                    <strong>運費:</strong>
                    <span>$60元</span>
                </div>
                <hr style="border:1.7px solid black">
                <div class="order-row">
                    <strong>金額總計:</strong>
                    <span> ${{ orderItemdata[0].final_price - orderItemdata[0].total_point + 60 }}元</span>
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
            placeholder: '請輸入訂單編號',
            orderdata: [],
            orderItemdata: [],
            orderstatus: "",
            findorderdata:[],
            
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
        this.getAllOrders();
    },
    methods: {
        searchdata(value){
            this.findorderdata = this.orderdata.filter((item) => {
                return item.orders_no.toString().includes(value);
            })
        },
        showLightbox(clicked_order_no) {
            this.orderItemdata = [];
            var formData = new FormData();
            formData.append('order_no', clicked_order_no);
            axios.post(`${import.meta.env.VITE_PHP_URL}` + "/getOrderData.php", formData)
                .then(res => {
                    console.log(res);
                    this.orderItemdata = res.data.order;
                    this.$refs.lightbox.showLightbox = true;
                    document.body.style.overflow = 'hidden';
                })

                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        },
        getAllOrders() {
            axios.get(`${import.meta.env.VITE_PHP_URL}` + "/ordersGetAll.php")
                .then(res => {
                    console.log(res.data.order);
                    this.orderdata = res.data.order;
                    this.findorderdata=this.orderdata;
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        },
        updateOrderData(order_no) {
            if (document.getElementById("orderStatus").value == '處理中') {
                this.orderstatus = '處理中'
            } else {
                this.orderstatus = '已完成'
            }
            console.log(this.orderstatus);
            // this.orderItemdata = [];
            var formData = new FormData();
            formData.append('order_no', order_no);
            formData.append('status', this.orderstatus);
            axios({
                method: "post",
                url: `${import.meta.env.VITE_PHP_URL}` + "/changeOrderStatus.php",
                data: formData,
                headers: { "Content-Type": "multipart/form-data" },
            })
                .then(res => {
                    if (!res.error) {
                        console.log(res.data.msg);
                        alert(res.data.msg)
                        this.$refs.lightbox.showLightbox = false
                        this.getAllOrders();
                    }
                })

                .catch(error => {
                    console.error('Error fetching data:', error);
                });

        }
    }
}
</script>

<style></style>
