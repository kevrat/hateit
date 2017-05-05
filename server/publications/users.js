/**
 * Created by kevrat on 02.04.2017.
 */
import User from '../../lib/collections/users'
Meteor.publish('userData', function() {
    if(!this.userId) return null;
    return User.find(this.userId, {fields: {
        'services.vk.photo_big':1,
        'services.facebook.photo_big':1,
    },defaults: false});
});
Meteor.publish('votedTopics', function() {
    if(!this.userId) return null;
    return User.find(this.userId, {fields: {
        votedTopics: 1,
    },defaults: false});
});