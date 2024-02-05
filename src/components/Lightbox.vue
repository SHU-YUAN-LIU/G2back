<template>
  <div class="lightbox_bg" v-if="showLightbox">
    <div class="lightbox_content">
      <slot></slot>
      <div class="lightbox_btn">
        <button v-if="lightboxType">新增</button>
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
  props:['lightboxType',],
  methods: {
    closeLightbox(){
      this.showLightbox = false;
      document.body.style.overflow = "auto";
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
  justify-content: center;
  align-items: center;
  overflow-y:scroll;
}

.lightbox_btn{
  margin: 60px 0;
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
