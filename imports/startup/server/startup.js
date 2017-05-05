/**
 * Created by kevrat on 26.03.2017.
 */
import {Meteor} from 'meteor/meteor';
import configureServices from './configure-services.js';

Meteor.startup(() => {
    // code to run on server at startup
    configureServices();
});


// Meteor.publish('messages', Messages.find);

// var _setBrowserPolicies = () => {
//     // [...]
// };
