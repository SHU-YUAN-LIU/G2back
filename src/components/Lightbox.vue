<template>
  <div class="lightbox_bg" v-if="showLightbox">
    <div class="lightbox_content" >
      <slot></slot>
      <div class="lightbox_btn">
        <!-- 新增v-if條件判斷, 如果點擊修改才會有儲存按鈕 -->
        <button v-if="lightboxType" @click="saveData">儲存</button>
        <button @click="closeLightbox">返回</button>
      </div>
    </div>
  </div>
</template>

<script>
export default{
  data(){
    return{
      showLightbox: false,
      lightboxType:false,
    };
  },
  // 新增props變數lightboxType, 如果頁面是修改按鈕在頁面導入元件時回傳true, 查閱按鈕回傳false
  props:['lightboxType',],
  methods: {
    closeLightbox(){
      this.showLightbox = false;
      document.body.style.overflow = "auto";
    },
    saveData(){
      this.$emit('toSaveData')
    }
  },

}
</script>

<style scoped lang="scss">
@import "../assets/scss/base/_color.scss";
.lightbox_bg{
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(50, 50, 50, .7);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
}
.lightbox_content{
  width: 1000px;
  height: 600px;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y:scroll;
  padding: 60px 0;
}

.lightbox_btn{
  margin-top: 60px;
}

button{
  width: 180px;
  height: 60px;
  border-radius: 50px;
  border: 1px solid $orange;
  background: none;
}

button:first-child{
  margin-right: 20px;
}

</style>
