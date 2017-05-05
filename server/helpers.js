/**
 * Created by kevrat on 02.04.2017.
 */
function mustBeLoggedIn(e) {
    if (!e.trusted && !Meteor.userId()) {
        // Anonymous client is trying to create a conversation.
        throw new Meteor.Error(
            'must-be-logged-in',
        );
    }
}