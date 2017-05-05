/**
 * Created by kevrat on 12.04.2017.
 */
import Vue from 'vue';
import VueTracker from 'vue-meteor-tracker';
import { Supply } from 'vue-supply'
import User from '../../../lib/collections/users.js'

Vue.use(VueTracker);

export default new Vue({
    extends: Supply,
    data () {
        return {
            user:{}
        }
    },
    // Realtime data from Meteor
    // special option provided by vue-meteor-tracker
    meteor: {
        user () {
            return User.findOne();
        },
    },
    // Automatic activation
    methods: {
        activate () {
            // Meteor subscription
            // Special method provided by vue-meteor-tracker
            this.userDataSub = this.$subscribe('userData')
        },
        deactivate () {
            // Special method provided by vue-meteor-tracker
            this.$stopHandle(this.userDataSub)
        },
    },
})
