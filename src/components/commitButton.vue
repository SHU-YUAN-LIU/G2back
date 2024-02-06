<template>
    <button class="commit_btn">
        {{ commitButton }}
        <img src="../../public/images/login/arrow.svg" alt="">
    </button>
</template>
<script>

export default {
    data() {
        return {

        }
    },
    props: ['commitButton', 'goTo'],

}
</script>

<style lang="scss"></style>
