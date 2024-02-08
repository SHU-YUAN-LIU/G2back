<template>
    <nav class="navbar navbar-light ">
        <div class="container-fluid">
            <div class="d-flex">
                <input class="form-control me-2 search-input" type="search" :placeholder="placeholder" v-model="inputValue"
                    style="width: 300px !important;">
                <button class="btn btn-primary" @click="searchdata">搜尋</button>
            </div>
        </div>
    </nav>
</template>
<script>
export default {
    data() {
        return {
            inputValue: ''
        }
    },
    props: ['placeholder',],
    methods: {
        searchdata() {
            this.$emit('toSearchData', this.inputValue);
        }
    },
}
</script>
<style lang="scss" ></style>
