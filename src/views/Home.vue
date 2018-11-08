<template>
  <v-container>
    <div class="homepage">
      <h2 class="primary--text page-title">マイ自己紹介</h2>
        <hello-world :person="me">
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
        </hello-world>
    </div>
  </v-container>
</template>

<script>
  import HelloWorld from '../components/HelloWorld'
  import { mapState } from 'vuex'

  export default {
    components: {
      HelloWorld
    },
    data () {
      return {
      }
    },
    computed: {
      ...mapState([
        'me',
        'headList',
        'displayKeys'
      ])
    }
  }
</script>

<style lang="scss" scoped>
    .page-title {
      padding: 20px 30px 15px;
      text-align: center;
    }
    .homepage {
      margin: auto;
      width: 500px;
    }
</style>
