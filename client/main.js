import {Template} from 'meteor/templating';
import {ReactiveVar} from 'meteor/reactive-var';
import Vue from 'vue';
import VueTracker from 'vue-meteor-tracker';
import VueMeta from 'vue-meta';
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';
import VueOnsen from 'vue-onsenui/dist/vue-onsenui';
import routerFactory from '/client/routes';

import AppLayout  from '../client/ui/AppLayout.vue';

Vue.use(VueTracker);
Vue.use(VueOnsen);
Vue.use(VueMeta);


Meteor.startup(() => {
    if (Meteor.isCordova) {
        const router = routerFactory.create();
        router.beforeEach((to, from, next) => {
            if (!Meteor.userId() && to.name !== 'login') {
                router.replace('login');
                return;
            }
            next();
        });
        new Vue({
            router,
            // render: h => h(App),
            ...AppLayout,
            // el: '#app',
        }).$mount('#app')
    }
    else {
        if (Meteor.isClient) {
            window.onload = function () {
                const router = routerFactory.create();
                router.beforeEach((to, from, next) => {
                    if (!Meteor.userId() && to.name !== 'login') {
                        router.replace('login');
                        return;
                    }
                    next();
                });
                new Vue({
                    router,
                    // render: h => h(App),
                    ...AppLayout,
                    // el: '#app',
                }).$mount('#app')
            }
        }
    }
});

