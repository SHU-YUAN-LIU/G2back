
<template>
    <!-- <label class="input-switch">
        <input type="checkbox" name="" id="">
        <span class="btn-box">
            <span class="btn-circle"></span>
        </span>
        <span>否/是</span>
    </label> -->
    <div class="switchBtn">
        <label class="switch-label">
            <input type="checkbox" :checked="ischecked">
            <div>
                <span></span>
                <span>否</span> <span>是</span>
            </div>
        </label>
    </div>
</template>
<script>
export default {
    data() {
        return {

        };
    },
    props: ['ischecked']

}
</script>

