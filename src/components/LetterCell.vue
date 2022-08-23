<template>
  <td
    class="border-12 border-black border-rounded-2 text-center py-4 text-36px font-800 font-serif"
  >
    {{ letter }}
  </td>
</template>

<script>
export default {
  name: 'LetterCell',
  props: {
    letter: {
      type: String,
      default: '',
    },
  },
  components: {},
  setup(props) {
    return {};
  },
};
</script>
