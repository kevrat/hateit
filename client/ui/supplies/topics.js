/**
 * Created by kevrat on 12.04.2017.
 */
import Vue from 'vue';
import VueTracker from 'vue-meteor-tracker';
import { Supply } from 'vue-supply'
import Topic from '../../../lib/collections/topics.js'

Vue.use(VueTracker);

export default new Vue({
    extends: Supply,
    data () {
        return {
            topicsList: [],
        }
    },
    // Realtime data from Meteor
    // special option provided by vue-meteor-tracker
    meteor: {
        topicsList () {
            return Topic.find({}, {
                $sort: { createdAt: -1 },
            });
        },
    },
    // Automatic activation
    methods: {
        activate () {
            // Meteor subscription
            // Special method provided by vue-meteor-tracker
            this.topicsSub = this.$subscribe('topics')
        },
        deactivate () {
            // Special method provided by vue-meteor-tracker
            this.$stopHandle(this.topicsSub)
        },
    },
})