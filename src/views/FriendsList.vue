<template>
  <v-container>
    <div class="about">
      <h2 class="primary--text page-title">ともだち検索</h2>
      <v-layout
        text-xs-center
        wrap
        class="friend-list"
      >
        <v-flex
          xs6
          d-flex
          v-for="friend in friends"
          class="friend-list__item"
        >
          <hello-world  :person="friend" :isActive="friend.is_friend">
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

            <v-flex xs12 slot="footer">
              <introduce-message
                class="mt-3"
                :messages="friend.introduce_messages"
                :sendById="me.id"
                :sendToId="friend.id"
                @input="addIntroduceMessage"
              >
                  <template slot="input">
                    <v-flex xs10>
                      <v-text-field outline single-line hide-details></v-text-field>
                    </v-flex>
                  </template>
                  <template slot="btn">
                    <v-flex xs2>
                      <v-btn fab outline depressed small color="pink">
                        <v-icon>message</v-icon>
                      </v-btn>
                    </v-flex>
                  </template>
              </introduce-message>

              <v-btn outline color="primary" @click="toggleFollow(friend.id)" v-if="friend.is_friend">フォロー解除</v-btn>
              <v-btn color="primary" @click="toggleFollow(friend.id)" v-else>フォローする</v-btn>
            </v-flex>

          </hello-world>
        </v-flex>
      </v-layout>
    </div>
  </v-container>
</template>

<script>
  import { mapState, mapMutations } from 'vuex'
  import HelloWorld from '../components/HelloWorld'
  import IntroduceMessage from '../components/IntroduceMessage'

  export default {
    components: {
      HelloWorld,
      IntroduceMessage
    },
    data () {
      return {
      }
    },
    computed: {
      ...mapState([
        'me',
        'friends',
        'headList',
        'displayKeys'
      ])
    },
    methods: {
      ...mapMutations([
        'addIntroduceMessage',
      ]),
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