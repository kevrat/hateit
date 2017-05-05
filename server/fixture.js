/**
 * Created by kevrat on 31.03.2017.
 */
import User, {VotedTopic} from '../lib/collections/users';
import Notification from '../lib/collections/notifications';
import Topic, {TopicTheme} from '../lib/collections/topics';

const user = User.findOne();

const topics = [
    {name: 'Trump', theme: TopicTheme.Politics},
    {name: 'Putin', theme: TopicTheme.Politics},
    {name: 'Cats', theme: TopicTheme.Animals},
    {name: 'Dogs', theme: TopicTheme.Animals},
    {name: 'Pepe', theme: TopicTheme.Memes},
];
for (const topic of topics) {
    Topic.upsert(
        topic,
        {$set: topic},
    );
}
if (user) {
    const notifications = [
        {userId: user._id},
    ];
    for (const notification of notifications) {
        Notification.upsert(
            notification,
            {$set: notification},
        );
    }
    const topic = Topic.findOne();
    if (user.votedTopics.length === 0) {
        user.votedTopics.push(new VotedTopic({topic}));
        user.save();
    }
}
