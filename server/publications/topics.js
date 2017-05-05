/**
 * Created by kevrat on 12.04.2017.
 */
import Topic from '../../lib/collections/topics'
import User from '../../lib/collections/users'
/**
 *
 * @type {any}
 */
Meteor.publish('topics', function () {
    if (!this.userId) return null;

    //getting voted topics
    const votedTopics = User.findOne(this.userId, {
        fields: {
            'votedTopics.topic._id': 1,
        }, defaults: false
    }).votedTopics;

    //creating voted topics ids array
    const votedTopicsIds = [];
    votedTopics.forEach(votedTopic => votedTopicsIds.push(votedTopic.topic._id));

    //topics search, that not in voted topics
    return Topic.find({ _id: { $nin: votedTopicsIds } })
});