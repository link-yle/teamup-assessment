<template>
  <tr>
    <LetterCell
      v-for="(letter, index) in Array.from(letters)"
      :key="index"
      :letter="letter"
    />
  </tr>
</template>

<script>
import LetterCell from '@/components/LetterCell.vue';

export default {
  name: 'Row',
  props: {
    letters: {
      type: String,
      default: '',
    },
  },
  components: { LetterCell },
};
</script>
