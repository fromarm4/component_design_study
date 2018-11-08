<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>自己紹介SNS</span>
        <span class="font-weight-light">みんなでレッツ自己紹介</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        to="/"
      >
        ホーム
      </v-btn>
      <v-btn
        flat
        to="/about"
      >
        アバウト
      </v-btn>
      <v-btn
        flat
        to="/friends-list"
      >
        ともだち検索
      </v-btn>
    </v-toolbar>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      //
    }
  }
}
</script>

<style lang="scss">
  .font-weight-light {
    font-size: 13px;
    color: #666;
    margin-left: 10px;
  }
</style>
