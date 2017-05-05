/**
 * Created by kevrat on 05.04.2017.
 */
// Import the router
import {RouterFactory, nativeScrollBehavior} from 'meteor/akryum:vue-router2';

// Create router instance
const routerFactory = new RouterFactory({
    mode: 'history',
    scrollBehavior: nativeScrollBehavior,
});

// Not found
import NotFound from '/client/ui/Pages/NotFound.vue';

// RouterFactory.configure(factory => {
//     factory.addRoute({
//         name:'not-found',
//         path: '*',
//         component: NotFound,
//     });
// }, -1);

export default routerFactory;