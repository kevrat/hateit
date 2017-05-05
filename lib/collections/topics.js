/**
 * Created by kevrat on 30.03.2017.
 */
import {Class, Enum} from 'meteor/jagi:astronomy';

const TopicTheme = Enum.create({
    name: 'TopicTheme',
    identifiers: ['Politics', 'Animals', 'Memes'],
});

const Topic = Class.create({
    name: 'Topic',
    collection: new Mongo.Collection('topics'),
    behaviors: ['timestamp'],
    fields: {
        name: String,
        theme: {
            type: TopicTheme,
            index: 1,
        },
    },
});
export {TopicTheme};
export default Topic;
