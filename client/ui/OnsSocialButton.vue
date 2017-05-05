<template>
    <v-ons-button modifier="cta">
        <v-ons-icon :icon=iconName></v-ons-icon>
        {{text}}
    </v-ons-button>
</template>
<script>
    export default{
        props: {
            iconName: {
                type: String,
                required: true,
            },
            text: {
                type: String,
                required: true,
            },
        }
    }
</script>
<style>
    .button--cta {
        /*min-width: 200px;*/
        /*width:80%;*/
        text-align: center;
        width: 15rem;
        margin: 1rem 0;
    }

    .button--material {
        /*min-width: 200px;*/
        /*width:80%;*/
        text-align: center;
        width: 15rem;
        margin: 1rem 0;
    }
</style>