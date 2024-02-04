<template>
    <nav class="navbar navbar-light ">
        <div class="container-fluid">
            <form class="d-flex">

                <input class="form-control me-2" type="search" :placeholder="placeholder" aria-label="Search">

                <button class="btn btn-primary" type="submit">搜尋</button>
            </form>
        </div>
    </nav>
</template>
<script>
export default {
    data() {
        return {

        }
    },
    props: ['placeholder',],

}
</script>
<style lang="scss" ></style>
