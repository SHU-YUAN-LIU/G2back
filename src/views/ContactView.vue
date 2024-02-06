<template>
    <MainHeader />
    <div class="contact-bg">
        <div class="contact_wrap-group">
            <div class="contact_wrap">
                <!-- 搜尋 -->
                <SearchBtn :placeholder="placeholder" />
                <!-- ----------------------------------------------------- -->
                <div class="contact-info">
                    <table class="table">
                        <thead>
                            <tr class="table-dark " align="center ">
                                <th scope="col" class="p-3">陳情編號</th>
                                <th scope="col" class="p-2">陳情日期</th>
                                <th scope="col" class="p-2">陳情者姓名</th>
                                <th scope="col" class="p-2">陳情主旨</th>
                                <th scope="col" class="p-2">陳情狀態</th>
                                <th scope="col" class="p-2">操作</th>
                            </tr>
                        </thead>
                        <tbody>
                            <!-- 第一行 -->
                            <tr align="center">
                                <td class="align-middle">231411424</td>
                                <td class="align-middle">2024.01.01</td>
                                <td class="align-middle">小丸子</td>
                                <td class="align-middle">我要週休三日</td>
                                <td class="align-middle">處理中</td>
                                <td class="align-middle">
                                    <button @click="showLightbox" class="contact-modify">
                                        <img src="../../public/images/icon/icon_revise.png" alt="">修改
                                    </button>
                                </td>
                            </tr>
                            <!-- 第一行 -->
                            <tr align="center">
                                <td class="align-middle">231411424</td>
                                <td class="align-middle">2024.01.01</td>
                                <td class="align-middle">韓國魚</td>
                                <td class="align-middle">我要週休三日</td>
                                <td class="align-middle">處理中</td>
                                <td class="align-middle">
                                    <button @click="showLightbox" class="contact-modify">
                                        <img src="../../public/images/icon/icon_revise.png" alt="">修改
                                    </button>
                                </td>
                            </tr>
                            <!-- 第一行 -->
                            <tr align="center">
                                <td class="align-middle">231411424</td>
                                <td class="align-middle">2024.01.01</td>
                                <td class="align-middle">郭台民</td>
                                <td class="align-middle">我要週休三日</td>
                                <td class="align-middle">處理中</td>
                                <td class="align-middle">
                                    <button @click="showLightbox" class="contact-modify">
                                        <img src="../../public/images/icon/icon_revise.png" alt="">修改
                                    </button>
                                </td>
                            </tr>
                            <!-- 第一行 -->
                            <tr align="center">
                                <td class="align-middle">231411424</td>
                                <td class="align-middle">2024.01.01</td>
                                <td class="align-middle">蔡英文</td>
                                <td class="align-middle">我要週休三日</td>
                                <td class="align-middle">處理中</td>
                                <td class="align-middle">
                                    <button @click="showLightbox" class="contact-modify">
                                        <img src="../../public/images/icon/icon_revise.png" alt="">修改
                                    </button>
                                </td>
                            </tr>
                            <!-- 第一行 -->
                            <tr align="center">
                                <td class="align-middle">231411424</td>
                                <td class="align-middle">2024.01.01</td>
                                <td class="align-middle">小丸子</td>
                                <td class="align-middle">我要週休三日</td>
                                <td class="align-middle">處理中</td>
                                <td class="align-middle">
                                    <button @click="showLightbox" class="contact-modify">
                                        <img src="../../public/images/icon/icon_revise.png" alt="">修改
                                    </button>
                                </td>
                            </tr>
                            <!-- 燈箱 -->
                            <Lightbox ref="lightbox">
                                <div class="contact-wrap">
                                    <p>
                                        <span>陳情日期: </span>
                                        <span>2024/1/1</span>
                                    </p>
                                    <p class="title"><span>詳細資訊</span></p>
                                    <table>
                                        <tr>
                                            <td>陳情編號</td>
                                            <td>9809809</td>
                                        </tr>
                                        <tr>
                                            <td>會員名稱:</td>
                                            <td>周絕人</td>
                                        </tr>
                                        <tr>
                                            <td>會員編號:</td>
                                            <td>878787878</td>
                                        </tr>
                                        <tr>
                                            <td>電子信箱:</td>
                                            <td>andy123@yahoo.com.tw</td>
                                        </tr>

                                        <tr>
                                            <td>陳情狀態</td>
                                            <td>
                                                <select name="" id="">
                                                    <option value="已受理">已受理</option>
                                                    <option value="處理中">處理中</option>
                                                    <option value="已回覆">已回覆</option>
                                                </select>
                                            </td>
                                        </tr>


                                    </table>

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
import switch_btn from '../components/switch_btn.vue'
import SearchBtn from '../components/SearchBtn.vue'
import Lightbox from "../components/Lightbox.vue";
export default {
    components: {
        MainHeader,
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
  
<style></style>
  