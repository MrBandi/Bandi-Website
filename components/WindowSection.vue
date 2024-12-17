<template>
    <div class="bg-white rounded-lg shadow-md overflow-hidden">
        <!-- 視窗標題列 -->
        <div 
            class="bg-gray-800 px-4 py-3 flex items-center cursor-pointer select-none"
            @click="isOpen = !isOpen"
        >
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                class="h-5 w-5 text-white mr-2 transform transition-transform duration-200"
                :class="{ 'rotate-180': !isOpen }"
                fill="none" 
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
            <h2 class="text-white font-semibold">{{ title }}</h2>
        </div>

        <!-- 內容區域 -->
        <transition
            enter-active-class="transition-all duration-300 ease-in-out"
            leave-active-class="transition-all duration-300 ease-in-out"
            enter-from-class="max-h-0 opacity-0"
            enter-to-class="max-h-[1000px] opacity-100"
            leave-from-class="max-h-[1000px] opacity-100"
            leave-to-class="max-h-0 opacity-0"
        >
            <div v-show="isOpen" class="overflow-hidden">
                <div class="p-6">
                    <slot></slot>
                </div>
            </div>
        </transition>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

defineProps<{
    title: string;
}>();

const isOpen = ref(true);
</script>