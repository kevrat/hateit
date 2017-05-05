<template id="profile">
    <v-ons-page id="profile" class="profile">
        <v-ons-row style="text-align: center;">
            <v-ons-col>
                <img :src="photoUrl">
            </v-ons-col>

        </v-ons-row>

        <v-ons-row style="text-align: center;">
            <v-ons-col>
            </v-ons-col>
        </v-ons-row>
        <v-ons-row style="text-align: center;">
            <v-ons-col>
            </v-ons-col>

        </v-ons-row>
    </v-ons-page>
</template>
<script>
    import {use} from 'vue-supply'
    import User from '../supplies/user'
    export default{
        mixins: [use(User)],
        data(){
            return {}

        },

        computed: {
            user () {
                return User.user;
            },
            photoUrl(){
                if (this.user && this.user.services) {
                    if (this.user.services.vk)
                        return this.user.services.vk.photo_big;
                    if (this.user.services.facebook)
                        return this.user.services.facebook.photo_big;
                }
                return ''
            }
        },
    }
</script>