<template>
  <v-container>
    <div class="about">
        <h2 class="primary--text page-title">ともだちリスト</h2>
      <v-layout
        text-xs-center
        wrap
        class="friend-list"
      >
        <v-flex
          xs6
          d-flex
          v-for="friend in originalFollowedFriends"
          class="friend-list__item"
        >
          <hello-world :person="friend">
            <template slot="list" slot-scope="{ person }">
              <v-flex
                xs12
                :primary="key == 'name'"
                :warning="key == 'age'"
                :accent="key == 'greeting'"
                lighten-2
                elevation-3
                class="list__item"
                v-for="(item, key) in person"
                v-if="displayKeys.includes(key)"
              >
                {{ headList[key] }}：{{ item }}
              </v-flex>
            </template>
            <template slot="extra-info" slot-scope="{ extraInfoList }">
              <v-flex
                xs12
                error
                lighten-2
                elevation-3
                class="list__item"
                slot="extra-info"
                v-for="info in extraInfoList"
                v-if="friend.is_friend"
              >
               {{ info.title }}: {{ info.value }}
              </v-flex>
            </template>
            <v-flex xs12 slot="footer">
              <v-btn
                outline
                color="primary"
                @click="toggleFollow(friend.id)"
                v-if="friend.is_friend"
              >フォロー解除</v-btn>
              <v-btn
                color="primary"
                @click="toggleFollow(friend.id)"
                v-else
              >フォローする</v-btn>
            </v-flex>
          </hello-world>
        </v-flex>
      </v-layout>
    </div>
  </v-container>
</template>

<script>
  import HelloWorld from '../components/HelloWorld'
  import { mapState, mapGetters } from 'vuex'

  export default {
    components: {
      HelloWorld
    },
    data () {
      return {
        originalFollowedFriends: [],
      }
    },
    computed: {
      ...mapState([
        'friends',
        'headList',
        'displayKeys'
      ]),
      ...mapGetters([
        'followedFriends'
      ]),
    },
    created() {
      this.originalFollowedFriends = this.followedFriends;
    },
    methods: {
      toggleFollow(friendId) {
        let friend = this.friends.find(friend => friend.id === friendId);
        friend.is_friend = ! friend.is_friend;
      },
    },
  }
</script>

<style lang="scss" scoped>
    .item-title {
      padding: 20px 30px 15px;
      text-align: center;
    }
    .friend-list {
      margin-right: -20px;
      &__item {
        padding-right: 20px;
        margin-bottom: 20px;
      }
    }
</style>