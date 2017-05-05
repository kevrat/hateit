/**
 * Created by kevrat on 30.03.2017.
 */
import {Class} from 'meteor/jagi:astronomy';

const Notification = Class.create({
    name: 'Notification',
    collection: new Mongo.Collection('notifications'),
    behaviors: ['timestamp'],
    fields: {
        ownerId: {
            type: String,
            default() {
                return 'SYSTEM';
            },
            immutable: true,
        },
        userId: {
            type: String,
            default() {
                return 'SYSTEM';
            },
            immutable: true,
        },
    },
});
export default Notification;
