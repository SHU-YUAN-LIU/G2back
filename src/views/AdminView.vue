<template>
<MainHeader />

<div class="admin">
    <div>
        <Search />
    </div>
    <div class="admin_container">
        
        <table>
            <thead>
                <td>管理員編號</td>
                <td>姓名</td>
                <td>權限等級</td>
                <td>啟用狀態</td>
                <td>操作</td>
            </thead>
            <tbody>
                <tr :key="index" v-for="index in 35">
                    <td class="admin_id">231411424</td>
                    <td class="admin_name">王小明</td>
                    <td class="admin_class">超級管理員</td>
                    <td class="admin_status">
                        <SwitchBtn />
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
</div>
<Lightbox ref="lightbox" lightboxType="true">
    <div class="admin_lightbox">
        <p>
            <span>最後修改人: </span>
            <span>王小明</span>
        </p>
        <p>
            <span>最後修改日期: </span>
            <span>2024/1/1</span>
        </p>

        <p class="title"><span>詳細資訊</span></p>
        <table>
        <tr>
            <td>管理員編號</td>
            <td>test001</td>
        </tr>
        <tr>
            <td>管理員姓名</td>
            <td><input type="text"></td>
        </tr>
        <tr>
            <td>狀態</td>
            <td>
                <select name="" id="">
                    <option value="啟用">啟用</option>
                    <option value="停用">停用</option>
                </select>
            </td>
        </tr>
        <tr>
            <td>密碼: </td>
            <td><input type="text"></td>
        </tr>
        <tr>
            <td>權限等級: </td>
            <td><select name="" id="">
                    <option value="一般管理員">一般管理員</option>
                    <option value="超級管理員">超級管理員</option>
                </select></td>
        </tr>
        <tr>
            <td>入職日期: </td>
            <td>2024/1/1 00:00:00</td>
        </tr>
        </table>
    </div>
</Lightbox>
</template>
<script>
import MainHeader from "../components/MainHeader.vue";
import Lightbox from "../components/Lightbox.vue";
import SwitchBtn from "../components/switch_btn.vue";
import Search from "../components/SearchBtn.vue"
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
    SwitchBtn,
    Search,
},
    methods: {
        showLightbox(){
            this.$refs.lightbox.showLightbox = true;
            document.body.style.overflow = 'hidden';
        }
    },
}
</script>

<!-- 燈箱內容的css -->
<style lang="scss">
@import "../assets/scss/style.scss";
.admin_lightbox{
    width: 80%;
    p{
        display: flex;
        margin: 0;
        span:nth-child(1){
            width: 200px;
        }
    }
    .title{
        text-align: center;
        background: black;
        color: $white;
        width: 100%;
        height: 45px;
        line-height: 45px;
        display: flex;
        justify-content: center;
    }
    table{
        width: 100%;
        border: 1px solid #000; 
        tr{
            height: 40px;
            line-height: 40px;
            display: flex;
            justify-content: space-evenly;
            
            td{
                text-align: center;
                width: 50%;
                input{
                    height: 30px;
                }
            }
            td:nth-child(2){
                text-align: left;
                
            }
        }
    }
}
</style>
