<template>
    <MainHeader />
    <Dropdown />
    <div class="mem-bg">
        <div class="mem_wrap-group">
            <div class="mem_wrap">
                <!-- 搜尋 -->
                <SearchBtn :placeholder="placeholder" />
                <!-- ----------------------------------------------------- -->
                <div class="mem-info">
                    <table class="table">
                        <thead>
                            <tr class="table-dark " align="center ">
                                <th scope="col" class="p-3">訂單編號</th>
                                <th scope="col" class="p-2">訂單日期</th>
                                <th scope="col" class="p-2">姓名</th>
                                <th scope="col" class="p-2">金額</th>
                                <th scope="col" class="p-2">訂單狀態</th>
                                <th scope="col" class="p-2">支付方式</th>
                                <th scope="col" class="p-2">操作</th>
                            </tr>
                        </thead>
                        <tbody>
                            <!-- 第一行 -->
                            <tr align="center">
                                <td class="align-middle">908009123</td>
                                <td class="align-middle">2024.01.01</td>
                                <td class="align-middle">賴清德</td>
                                <td class="align-middle">$3000</td>
                                <td class="align-middle">處理中</td>
                                <td class="align-middle">信用卡</td>
                                <td class="align-middle">
                                    <button @click="showLightbox" class="order-modify">
                                        <img src="../../public/images/icon/icon_revise.png" alt="">修改
                                    </button>
                                </td>
                            </tr>
                            <!-- 第二行 -->
                            <tr align="center">
                                <td class="align-middle">908009123</td>
                                <td class="align-middle">2024.01.01</td>
                                <td class="align-middle">賴清德</td>
                                <td class="align-middle">$3000</td>
                                <td class="align-middle">處理中</td>
                                <td class="align-middle">信用卡</td>
                                <td class="align-middle">
                                    <button @click="showLightbox" class="order-modify">
                                        <img src="../../public/images/icon/icon_revise.png" alt="">修改
                                    </button>
                                </td>
                            </tr>
                            <Lightbox ref="lightbox">

                                <div class="contact-wrap">
                                    <p>陳情日期:2024/1/1 </p>
                                    <p class="title"><span>詳細資訊</span></p>
                                    <div class="mb-3 row">
                                        <label for="inputPassword" class="col-sm-2 col-form-label">陳情編號:</label>
                                        <div class="col-sm-10">
                                            <input type="password" class="form-control" id="inputPassword">
                                        </div>
                                    </div>
                                    <div class="mb-3 row">
                                        <label for="inputPassword" class="col-sm-2 col-form-label">會員名稱:</label>
                                        <div class="col-sm-10">
                                            <input type="password" class="form-control" id="inputPassword">
                                        </div>
                                    </div>
                                    <div class="mb-3 row">
                                        <label for="inputPassword" class="col-sm-2 col-form-label">會員編號:</label>
                                        <div class="col-sm-10">
                                            <input type="password" class="form-control" id="inputPassword">
                                        </div>
                                    </div>
                                    <div class="mb-3 row">
                                        <label for="inputPassword" class="col-sm-2 col-form-label">電子信箱:</label>
                                        <div class="col-sm-10">
                                            <input type="password" class="form-control" id="inputPassword">
                                        </div>
                                    </div>
                                    <div class="mb-3 row">
                                        <label for="inputPassword" class="col-sm-2 col-form-label">陳情狀態:</label>
                                        <select class="form-select" aria-label="Default select example">
                                            <option selected>處理中</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>

                                </div>
                            </Lightbox>


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import MainHeader from '../components/MainHeader.vue'
import Dropdown from "../components/Dropdown.vue";
import switch_btn from '../components/switch_btn.vue'
import SearchBtn from '../components/SearchBtn.vue'
import Lightbox from "../components/Lightbox.vue";
export default {
    components: {
        MainHeader,
        Dropdown,
        switch_btn,
        SearchBtn,
        Lightbox

    },
    data() {
        return {
            placeholder: '請輸入關鍵字',
        }
    },
    methods: {
        //$refs通過這個屬性來訪問元件的屬性或方法
        showLightbox() {
            this.$refs.lightbox.showLightbox = true;
        }

    },
    mounted() {
        document.title = "青年進補黨(後台) - 陳情查詢";
    },

}
</script>
  
<style lang="scss">
.contact-wrap {
    width: 800px;
}

.title {
    text-align: center;
    background: black;
    color: white;
    width: 100%;
    height: 45px;
    line-height: 45px;
    display: flex;
    justify-content: center;
}
</style>
  