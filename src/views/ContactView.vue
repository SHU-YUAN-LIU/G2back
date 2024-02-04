<template>
    <MainHeader />
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
                                    <button type="button" class="btn btn-outline-primary">
                                        修改
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
                                    <button type="button" class="btn btn-outline-primary">
                                        修改
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
                                    <button type="button" class="btn btn-outline-primary">
                                        修改
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
                                    <button type="button" class="btn btn-outline-primary">
                                        修改
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
                                    <button type="button" class="btn btn-outline-primary">
                                        修改
                                    </button>
                                </td>
                            </tr>


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
export default {
    components: {
        MainHeader,
        switch_btn,
        SearchBtn,

    },
    data() {
        return {
            placeholder: '請輸入關鍵字',
        }
    },
    mounted() {
        document.title = "青年進補黨(後台) - 陳情查詢";
    },

}
</script>
  
<style></style>
  