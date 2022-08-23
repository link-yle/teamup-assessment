<template>
  <input
    v-bind="$attrs"
    :name="name"
    :id="name"
    :required="required"
    :disabled="disabled"
    :readonly="readonly"
    :type="type"
    :value="modelValue"
    :placeholder="placeholder"
    :class="classList"
    :min="min"
    :max="max"
    @focus="focused = true"
    @blur.passive="onBlur"
    @input="updateValue"
  />
</template>

<script>
import { ref, toRefs, watch, computed } from 'vue';

export default {
  name: 'AppInput',
  props: {
    name: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    error: {
      type: Boolean,
      default: false,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: 'text',
    },
    required: {
      type: Boolean,
    },
    min: {
      type: Number,
    },
    max: {
      type: Number,
    },
    modelValue: {
      type: [String, Number],
      default: '',
    },
    onValidate: {
      type: Function,
    },
  },
  emits: ['update:modelValue'],
  setup(props, context) {
    const { error, modelValue } = toRefs(props);
    const focused = ref(false);
    const classList = computed(() => ({
      success: !error.value,
      error: error.value,
    }));

    const onBlur = () => {
      setTimeout(() => {
        focused.value = false;
      }, 100);

      props.onValidate();
    };

    const updateValue = (event) => {
      context.emit('update:modelValue', event.target.value);
      props.onValidate();
    };

    return {
      modelValue,
      classList,
      focused,
      onBlur,
      updateValue,
    };
  },
};
</script>

<style scoped>
input.error {
  @apply border-red bg-red bg-opacity-5;
}
</style>
