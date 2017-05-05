/**
 * Created by kevrat on 30.03.2017.
 */
import {Class, Enum} from 'meteor/jagi:astronomy';
import Topic from './topics';

const Opinion = Enum.create({
    name: 'Opinion',
    identifiers: ['HATE', 'LOVE'],
});

const VotedTopic = Class.create({
    name: 'VotedTopic',
    behaviors: ['timestamp'],
    fields: {
        opinion: {
            type: Opinion,
            default() {
                return Opinion.HATE;
            },
        },
        topic: Topic,
    },
});

const User = Class.create({
    name: 'User',
    collection: Meteor.users,
    fields: {
        services: Object,
        profile: Object,
        createdAt: Date,
        votedTopics: [VotedTopic],
    },
});

export {VotedTopic};
export default User;

