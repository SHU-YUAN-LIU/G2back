<template>
    <MainHeader />
    <Dropdown />
    <SearchBtn />
    <div class="mem-bg">
        <div class="mem_wrap-group">
            <div class="mem_wrap">
                <!-- 搜尋 -->

                <!-- ----------------------------------------------------- -->
                <div class="mem-info">
                    <table class="table">
                        <thead>
                            <tr class="table-dark " align="center ">
                                <th scope="col" class="p-3">商品編號</th>
                                <th scope="col" class="p-2">商品圖片</th>
                                <th scope="col" class="p-2">商品名稱</th>
                                <th scope="col" class="p-2">類別</th>
                                <th scope="col" class="p-2">售價</th>
                                <th scope="col" class="p-2">是否上架</th>
                                <th scope="col" class="p-2">操作</th>
                            </tr>
                        </thead>
                        <tbody>
                            <!-- 第一行 -->
                            <tr align="center" v-for="index in 7" :key="index">
                                <td class="align-middle">231411424</td>
                                <td class="align-middle">
                                    <img class="img-fluid" style="max-width: 100px;"
                                        src="/images/product/product5_pic1.png">
                                </td>
                                <td class="align-middle">進補黨馬克杯</td>
                                <td class="align-middle">杯子</td>
                                <td class="align-middle">600</td>
                                <td class="align-middle">
                                    <switch_btn />
                                </td>
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
import Dropdown from "../components/Dropdown.vue";
import switch_btn from '../components/switch_btn.vue'
export default {
    components: {
        MainHeader,
        switch_btn,

    },
    data() {
        return {

        }
    },
    components: {
        MainHeader,
        Dropdown,
    },

}
</script>

<style></style>