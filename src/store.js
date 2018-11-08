import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    displayKeys: [
      'name',
      'age',
      'greeting',
    ],
    headList: {        
      name: '名前',
      age: '年齢',
      greeting: '挨拶',
    },
    me: {
      id: 10,
      name: 'ベル子',
      age: '19歳',
      greeting: 'いっけなーい。遅刻遅刻。',
    },
    friends: [
      {
        id: 1,
        name: '悟空',
        age: '35歳',
        greeting: 'おっすオラ悟空',
        is_friend: true,
        extra_info_list: {
          real_name: {
            title: '実名',
            value: '孫悟空',
          },
        }
      },
      {
        id: 2,
        name: 'キュアエール',
        age: '16歳',
        greeting: '輝くミライを抱きしめて！！',
        is_friend: true,
        introduce_messages: [
          {
            friend_id: 10, 
            text: 'キュアエールはみんなを応援する元気のプリキュアです！',
          }
        ],
        extra_info_list: {
          birth_place: {
            title: '出身地',
            value: '二次元',
          },
        }
      },
      {
        id: 3,
        name: 'タタリ神',
        age: '1006歳',
        greeting: 'さぞかし名のある山の主と見うけたがなぜ。そのようにあらぶるのか？',
        is_friend: true,
        extra_info_list: {
          real_name: {
            title: '実名',
            value: '不明',
          },
          hobby: {
            title: '趣味',
            value: 'あらぶりごっこ',
          },
        }
      },
      {
        id: 4,
        name: 'ハウル',
        age: '?歳',
        greeting: `足を出して 歩き続けて
そう　怖がらないで
上手だ`,
        is_friend: false,
      },
      {
        id: 5,
        name: 'オスカル様',
        age: '永遠の28歳',
        greeting: '私の屍を越えていけ!! 私の血で紅に染まっていけ!!',
        is_friend: false,
      },
    ],
  },
  getters: {
    followedFriends: state => {
      return state.friends.filter(friend => friend.is_friend)
    },
  },
  mutations: {
    addIntroduceMessage(state, { sendToId, values }) {
      let index = state.friends.findIndex(friend => friend.id === sendToId);
      let friend = state.friends[index];
      if (typeof friend.introduce_messages == 'undefined') {
        Vue.set(friend, 'introduce_messages', []);
      }
      friend.introduce_messages.push(values);
    }
  },
  actions: {}
});
