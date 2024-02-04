<template>
  <div class="lightbox_bg" v-if="showLightbox">
    <div class="lightbox_content">
      <slot></slot>
      <button>新增</button>
      <button @click="closeLightbox">取消</button>
    </div>
  </div>
</template>

<script>
export default{
  data(){
    return{
      showLightbox: false,
    };
  },
  methods: {
    closeLightbox(){
      this.showLightbox = false;
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
  background: rgba(200, 200, 200, .5);
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
  justify-content: center;
  align-items: center;
}

button{
  width: 180px;
  height: 60px;
  border-radius: 50px;
  border: 1px solid $orange;
}

button:first-child{
  margin-right: 20px;
}

</style>
