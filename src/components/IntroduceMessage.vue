<!-- <template>
    <div class="py-3">
      <v-toolbar color="indigo lighten-4" height="30px" v-if="messages && messages.length">紹介文</v-toolbar>
      <v-flex
        xs12
        indigo lighten-3
        elevation-3
        class="text-xs-left list__item"
        v-for="(message) in messages"
        v-if="messages && messages.length"
      >
        {{ message.text }}
      </v-flex>
      <v-layout align-center v-if="!messages || !messages.length">
        <slot name="input"></slot>
        <slot name="btn" @click="updateMessage($event)"></slot>
      </v-layout>
      {{ message }}
    </div>
</template> -->

<script>
  export default {
    props: {
      messages: {
        type: Array,
        default: () => []
      },
      sendById: {
        type: Number,
        default: null
      },
      sendToId: {
        type: Number,
        default: null
      },
    },
    data() {
      return {
        message: null,
      }
    },
    methods: {
      updateMessage(e) {
        this.message = e;
      }
    },
    render: function (h) {
      let self = this;

      let header, body, footer;
      if (this.messages && this.messages.length) {
        header = h('div', {
          'class': 'v-toolbar theme--light indigo lighten-4'
        }, '紹介文');

        body = [];
        Object.keys(this.messages).forEach((key) => {
          body.push(h('div', {
            'class': 'flex text-xs-left list__item xs12 indigo lighten-3 elevation-3',
          }, this.messages[key].text));
        });
      }

      if (!this.messages || !this.messages.length) {
        footer = h('div',
          {
            'class': 'layout align-center',
            on: {
              input(event) {
                self.message = event.target.value;
              }
            }
          },
          [
              this.$slots.input,
              h('div', {
                on: {
                  click(event) {
                    event.stopPropagation();
                    let data = {
                      sendToId: self.sendToId,
                      values: {
                        friend_id: self.sendById,
                        text: self.message,
                      }
                    }
                    self.$emit('input', data);
                  }
                }
              }, this.$slots.btn)
          ]
        );
      }

      return h('div',
        {
          'class': 'py-3',
        },
        [header, body, footer]
      );
    }
  }
</script>

<style lang="scss" scpped>
  .subheading {
    border-bottom: 2px solid #00479b;
    border-top: 2px solid #00479b;
  }
</style>
