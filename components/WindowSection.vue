<template>
  <div class="bg-white rounded-lg shadow-md overflow-hidden">
    <div
      class="bg-gray-800 px-3 lg:px-4 py-2 lg:py-3 flex items-center cursor-pointer select-none"
      @click="isOpen = !isOpen"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-4 w-4 lg:h-5 lg:w-5 text-white mr-2 transform transition-transform duration-200"
        :class="{ 'rotate-180': !isOpen }"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 9l-7 7-7-7"
        />
      </svg>
      <h2 class="text-base lg:text-lg text-white font-semibold">{{ title }}</h2>
    </div>

    <transition
      enter-active-class="transition-all duration-300 ease-in-out"
      leave-active-class="transition-all duration-300 ease-in-out"
      enter-from-class="max-h-0 opacity-0"
      enter-to-class="max-h-[1000px] opacity-100"
      leave-from-class="max-h-[1000px] opacity-100"
      leave-to-class="max-h-0 opacity-0"
    >
      <div v-show="isOpen" class="overflow-hidden">
        <div class="p-4 lg:p-6">
          <slot></slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

defineProps<{
  title: string;
}>();

const isOpen = ref(true);
</script>
