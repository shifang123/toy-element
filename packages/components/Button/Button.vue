<script setup lang="ts">
  /*
  - Xxx.vue 所有的组件逻辑
  - Xxx.test.tsx 所有的测试用例
  - types.ts 所有的类型声明
  - style.css 样式
  - index.ts  入口文件，用来导出组件
  - * constants.ts 常量
  */

  import { ref } from 'vue';
  import type { ButtonProps } from './type';

  defineOptions({
    name: 'ErButton'
  })
  const props = withDefaults(defineProps<ButtonProps>(), {
    tag: "button",
    nativeType: "button"
  })

  const slots = defineSlots()

  const _ref = ref<HTMLButtonElement>()

</script>

<template>
  <component ref="_ref" class="er-button" :is="props.tag" :type="tag === 'button' ? nativeType : void 0"
    :disabled="disabled || loading ? true : void 0" :class="{
      [`er-button--${type}`]: type,
      [`er-button--${size}`]: size,
      'is-plain': plain,
      'is-round': round,
      'is-circle': circle,
      'is-disabled': disabled,
      'is-loading': loading,
    }">
    <slot></slot>
  </component>
</template>