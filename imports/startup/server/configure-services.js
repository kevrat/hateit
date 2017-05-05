/**
 * Created by kevrat on 26.03.2017.
 */
import {Meteor} from 'meteor/meteor';
import {ServiceConfiguration} from 'meteor/service-configuration';
let services = []
if (Meteor.settings && Meteor.settings.private && Meteor.settings.private.oAuth) {
    services = Meteor.settings.private.oAuth;
}

export default function configureServices() {
    for (const service in services) {
        ServiceConfiguration.configurations.upsert({service}, {
            $set: services[service]
        });
    }
    // Accounts.onCreateUser((options, user) => {
    //
    //     // if (!user.services.facebook) {
    //     //     return user;
    //     // }
    //     // user.username = user.services.facebook.name;
    //     // user.emails = [{address: user.services.facebook.email}];
    //
    //     return user;
    // });
}

