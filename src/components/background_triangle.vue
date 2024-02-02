<template>
  <div class="background">
    <div class="triangle_top"></div>
    <div class="triangle_bottom"></div>
  </div>
</template>

<style scoped lang="scss">
@import "../assets/scss/base/_color.scss";
.background{
  z-index: -1;
  width: 100%;
  top: 0;
  position: fixed;
  border: 1px solid red;
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
