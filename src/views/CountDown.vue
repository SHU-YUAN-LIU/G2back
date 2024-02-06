<template>
    <MainHeader />
    <Dropdown />
</template>

<script>
import MainHeader from "../components/MainHeader.vue";
import Dropdown from "../components/Dropdown.vue";
import Lightbox from "../components/Lightbox.vue";

export default {
    data() {
        return {
        };
    },
    components: {
        MainHeader,
        Dropdown,
        Lightbox,

    },
    methods: {
        showLightbox() {
            this.$refs.lightbox.showLightbox = true;
        }
    },
}
</script>