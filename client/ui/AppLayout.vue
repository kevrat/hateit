<template id="app-layout">
    <div>
        <v-ons-tabbar
                      :tabs="tabs"
                      :index="activeIndex"
                      @update="changePage($event)"
        >
        </v-ons-tabbar>
        <router-view></router-view>
    </div>
</template>


<script>
    import Login from '/client/ui/Pages/Login.vue';
    import AppMenu from '/client/ui/AppMenu.vue';
    import Chat from '/client/ui/Pages/Chat.vue';
    import Profile from '/client/ui/Pages/Profile.vue';
    import Vote from '/client/ui/Pages/Vote.vue';
    import People from '/client/ui/Pages/People.vue';
    import EmptyPage from '/client/ui/Pages/EmptyPage.vue';
    export default {
        meteor: {
            data: {
                user () {
                    return Meteor.user()
                },
            }
        },
        data(){
            return {
                activeIndex: 0,
                currentPage: null,
                tabs: [
                    {
                        icon: 'ion-android-person',
                        name: 'profile',
                        page: Profile
                    },
                    {
                        icon: 'md-view-carousel',
                        name: 'vote',
                        page: Vote
                    },
                    {
                        icon: 'ion-android-people',
                        name: 'people',
                        page: People
                    },
                    {
                        icon: 'ion-chatbubbles',
                        name: 'chat',
                        page: Chat,
                        badge: 7
                    },
                ]
            }
        },
        methods: {
            logout(){
                Meteor.logout();
                this.$router.replace('login');
            },
            changePage(index){
                this.currentPage = this.tabs[index].name;
                this.$router.replace(this.tabs[index].name);
            }
        },
        created: function () {
            this.currentPage = this.$router.currentRoute.name;
        }
    }
</script>
<style>
    .tab-bar {
        background-color: transparent;
        border-top: 0;
    }
</style>