<template>
  <div class="flex justify-center mt-12">
    <div class="w-sm">
      <table class="drop-shadow-2xl border-rounded-2 w-full">
        <Row v-for="letters in cardsArray" :key="letters" :letters="letters" />
      </table>
    </div>
  </div>
</template>

<script>
import Row from '@/components/Row.vue';

export default {
  name: 'Table',
  props: {
    cardsArray: {
      type: Array,
      default: [],
    },
  },
  components: { Row },
};
</script>
