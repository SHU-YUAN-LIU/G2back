

<template>
<div class="admin">
    <MainHeader />
    <table>
        <tr>
            <td>管理員編號</td>
            <td>姓名</td>
            <td>權限等級</td>
            <td>啟用狀態</td>
            <td>操作</td>
        </tr>
    </table>
</div>
</template>
<script>
import MainHeader from "../components/MainHeader.vue";
export default{
    data(){
        return{

        };
    },
    components:{
        MainHeader,
    },
}
</script>