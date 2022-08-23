<template>
  <div class="container w-full my-8">
    <h1>Card Generator</h1>
    <div
      class="bg-white shadow-md shadow-gray-400 flex flex-col md:flex-row justify-between p-3 rounded my-4"
    >
      <div class="flex flex-col md:flex-row justify-between">
        <div class="flex items-center">
          Generate
          <app-input
            type="number"
            v-model="countCards.value"
            name="countCards"
            :min="1"
            :max="5"
            :onValidate="onValidate"
            :error="countCards.error"
          />
          random cards,
        </div>
        <div class="flex items-center md:ml-1 my-3 md:my-0">
          each with
          <app-input
            type="number"
            v-model="countRowsCols.value"
            name="countRowsCols"
            :min="1"
            :max="5"
            :onValidate="onValidate"
            :error="countRowsCols.error"
          />
          rows/columns.
        </div>
      </div>
      <button
        class="py-7px px-13px bg-#0D6EFD text-white rounded text-lg text-700 disabled:bg-gray-300"
        @click="handleGenerate"
        :disabled="countCards.error || countRowsCols.error"
      >
        Generate
      </button>
    </div>
    <Table :cardsArray="cardsArray" />
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import AppInput from '@/components/AppInput.vue';
import Table from '@/components/Table.vue';
import { generateLetters } from '@/lib/generateLetters';

export default defineComponent({
  components: { Table, AppInput },
  setup() {
    const cardsArray = ref([]);
    const countCards = ref({
      value: 3,
      error: false,
    });
    const countRowsCols = ref({
      value: 5,
      error: false,
    });
    const countMin = ref(1);
    const countMax = ref(5);

    const resetCardsArray = () => {
      cardsArray.value = [];
    };

    const handleGenerate = () => {
      resetCardsArray();

      for (let i = 0; i < countRowsCols.value.value; i++) {
        const newLetters = generateLetters(countCards.value.value);

        cardsArray.value = [...cardsArray.value, newLetters];
      }
    };

    const onValidate = () => {
      if (
        countCards.value.value > countMax.value ||
        countCards.value.value < countMin.value
      ) {
        countCards.value.error = true;
      } else {
        countCards.value.error = false;
      }

      if (
        countRowsCols.value.value > countMax.value ||
        countRowsCols.value.value < countMin.value
      ) {
        countRowsCols.value.error = true;
      } else {
        countRowsCols.value.error = false;
      }
    };

    return {
      cardsArray,
      countCards,
      countRowsCols,
      onValidate,
      handleGenerate,
    };
  },
});
</script>
