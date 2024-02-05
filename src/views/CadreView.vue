<template>
    <MainHeader />
    <div class="mem-bg">
        <div class="mem_wrap-group">
            <div class="mem_wrap">
                <!-- 搜尋 -->

                <!-- ----------------------------------------------------- -->
                <div class="mem-info">
                    <table class="table">
                        <thead>
                            <tr class="table-dark " align="center ">
                                <th scope="col" class="p-3">幹部人員編號</th>
                                <th scope="col" class="p-2">姓名</th>
                                <th scope="col" class="p-2">幹部等級</th>
                                <th scope="col" class="p-2">啟用狀態</th>
                                <th scope="col" class="p-2">操作</th>
                            </tr>
                        </thead>
                        <tbody>
                            <!-- 第一行 -->
                            <tr align="center" v-for="index in 7" :key="index">
                                <td class="align-middle">123456</td>
                                <td class="align-middle">劉書苑</td>
                                <td class="align-middle">大總統</td>
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

}
</script>

<style></style>