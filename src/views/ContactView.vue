<template>
    <MainHeader />
    <div class="index_wrap">

        <div class="main">

            <!-- --------------------------------------------------------------------------------------- -->
            <div class="petition_wrap">
                <div class="search_bar">
                    <input type="text" placeholder="請輸入標題或關鍵字">
                    <div class="search_text">搜尋</div>
                </div>
                <!-- --------------------------------------------------------------------------------------- -->
                <div class="petition-info">
                    <table class="table">
                        <thead>
                            <tr class="table-dark" align="center">
                                <th scope="col">陳情編號</th>
                                <th scope="col">陳情日期</th>
                                <th scope="col">陳情者姓名</th>
                                <th scope="col">陳情主旨</th>
                                <th scope="col">陳情狀態</th>
                                <th scope="col">操作</th>
                            </tr>
                        </thead>
                        <tbody>
                            <!-- 第一行 -->
                            <tr class="petition-tr" align="center">
                                <td>231411424</td>
                                <td>2024.01.01</td>
                                <td>小丸子</td>
                                <td>我要週休三日</td>
                                <td>處理中</td>
                                <td>
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
export default {
    components: {
        MainHeader,

    },
    data() {
        return {

        }
    },

}
</script>

<style></style>
