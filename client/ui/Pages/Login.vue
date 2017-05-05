<template>
    <v-ons-page>
        <v-ons-row style="height:50%;">
        </v-ons-row>

        <v-ons-row style="text-align: center;">
            <v-ons-col>
                <ons-social-button @click.native="loginWith('Vk')" iconName="fa-vk" text="vkontakte"></ons-social-button>
            </v-ons-col>
        </v-ons-row>
        <v-ons-row style="text-align: center;">
            <v-ons-col>
                <ons-social-button @click.native="loginWith('Facebook')" iconName="fa-facebook" text="facebook"></ons-social-button>
            </v-ons-col>

        </v-ons-row>
    </v-ons-page>
</template>
<script>
    export default{
        methods: {
            loginWith(serviceName){
                Meteor['loginWith' + serviceName](null, () => {
                    this.$router.replace('home');
                })
            }
        },
    }
</script>