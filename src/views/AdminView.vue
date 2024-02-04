

<template>
<MainHeader />

<div class="admin">
    <table>
        <thead>
            <td>管理員編號</td>
            <td>姓名</td>
            <td>權限等級</td>
            <td>啟用狀態</td>
            <td>操作</td>
        </thead>
        <tbody>
            <tr>
                <td class="admin_id">231411424</td>
                <td class="admin_name">王小明</td>
                <td class="admin_class">超級管理員</td>
                <td class="admin_status">
                        <label for="admin_switch">
                            <input type="checkbox" id="admin_switch">
                            <div>
                                <span></span>
                                <span>否</span> <span>是</span>
                            </div>
                        </label>
                </td>
                <td class="admin_operate">
                    <button @click="showLightbox">
                        <img src="../../public/images/icon/icon_revise.png" alt="">修改
                    </button>
                </td>
            </tr>           
        </tbody>
    </table>
</div>
<Lightbox ref="lightbox">
    
</Lightbox>
</template>
<script>
import MainHeader from "../components/MainHeader.vue";
import Lightbox from "../components/Lightbox.vue";
export default{
    data(){
        return{
            adminAccount:[
                {
                    id: 231411424,
                    name: "王小明"
                }
            ]
        };
    },
    components:{
    MainHeader,
    Lightbox,
},
    methods: {
        showLightbox(){
            this.$refs.lightbox.showLightbox = true;
        }
    },
}
</script>

<!-- 燈箱內容的css -->
<style>

</style>
