<template>
    <t-from ref="form" :data="formData" :labelWidth="labelWidth" :rules="formRules" @reset="onReset" @sumbit="onSearch"
        scrollToFirstError="smooth">
        <t-from-item v-for="(item, key) in config" :key="key">
           
        </t-from-item>
    </t-from>
</template>

<script>
// const LABEL_THRESHOLD = 7; 
// const DOUBLE_BYTE_THRESHOLD = 255; 
export default {
    props: {
        config: {
            type: Array,
            default: () => [],
        },
        labelWidth: {
            type: String,
            default: () => '100px',
        },
    },
    data() {
        return {
            formData: undefined
        }
    },
    methods: {
        // 提交
        onSearch() {
            console.log(this.formData)
        },
        getPrams(key) {
            if(key) return this.formData[key];
            return {...this.formData};
        },
    }
}
</script>

<style scoped></style>
