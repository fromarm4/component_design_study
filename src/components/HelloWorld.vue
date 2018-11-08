<template>
  <v-layout
    text-xs-center
    wrap
    :class="{ 'list--is-friend': isActive }"
    class="list"
  >

    <v-flex xs12>
      
      <slot name="list" :person="person"></slot>

      <slot
        name="extra-info"
        :extra-info-list="person.extra_info_list"
        v-if="person.extra_info_list"
      ></slot>

      <slot name="footer"></slot>

    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    props: {
      isActive: {
        type: Boolean,
        default: false
      },
      extraInfoList: {
        type: Object,
        defalt: null,
      },
      person: {
        type: Object,
        defalt: null,
      }
    },
  }
</script>

<style lang="scss" scpped>
  $bg-color: #ddd;
  $bg-friend: #eaead0;

  .list {
    padding: 30px 50px;
    background-color: lighten($bg-color, 5%);
    border: $bg-color 2px solid;
    border-radius: 4px;
    &--is-friend {
      background-color: $bg-friend;
      border: darken($bg-friend, 10%) 2px solid;
    }
    &__item {
      padding: 24px;
      margin-bottom: 20px;
      &:last-child {
        margin-bottom: 0px;
      }
    }
  }
</style>
