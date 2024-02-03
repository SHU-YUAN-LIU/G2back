<template>
  <div class="background_triangle">
    <div class="triangle_top"></div>
    <div class="triangle_bottom"></div>
  </div>
</template>

<style scoped lang="scss">
@import "../assets/scss/base/_color.scss";
.background_triangle{
  z-index: -1;
  width: 100%;
  position: fixed;
  top: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  div{
    height: 250px;
  }

  .triangle_top{
    clip-path: polygon(0% 100%, 0% 0%, 100% 0%);
    background: $orange;
  }
  .triangle_bottom{
    clip-path: polygon(0% 100%, 100% 100%, 100% 0%);
    background: $green;
  }
}


</style>
