<template>
  <div class="w-full lg:w-3/4 space-y-4 lg:space-y-6">
    <!-- 身分經歷 -->
    <WindowSection title="身分經歷">
      <div class="space-y-4">
        <div
          v-for="experience in experiences"
          :key="experience.id"
          class="relative pl-6 lg:pl-8 pb-4 lg:pb-6 border-l-2 border-gray-200 last:pb-0"
        >
          <div class="absolute -left-[9px] mt-2">
            <div
              class="w-4 h-4 bg-blue-500 rounded-full border-2 border-white"
            ></div>
          </div>
          <div class="mb-1">
            <span class="text-xs lg:text-sm text-gray-500">{{
              experience.duration
            }}</span>
          </div>
          <h3 class="text-base lg:text-lg font-semibold text-gray-800">
            {{ experience.title }}
          </h3>
          <p class="text-sm lg:text-base text-gray-600 mt-2">
            {{ experience.description }}
          </p>
        </div>
      </div>
    </WindowSection>

    <!-- 專案經歷 -->
    <WindowSection title="專案經歷">
      <div class="space-y-1">
        <div
          v-for="experience in projectExperiences"
          :key="experience.id"
          class="relative pl-6 lg:pl-8 pb-4 lg:pb-6 border-l-2 border-gray-200 last:pb-0"
        >
          <div class="absolute -left-[9px] mt-2">
            <div
              class="w-4 h-4 bg-blue-500 rounded-full border-2 border-white"
            ></div>
          </div>
          <div class="mb-1">
            <span class="text-xs lg:text-sm text-gray-500">{{
              experience.duration
            }}</span>
          </div>
          <h3 class="text-base lg:text-lg font-semibold text-gray-800">
            {{ experience.title }}
          </h3>
          <p class="text-sm lg:text-base text-gray-600 mt-2">
            {{ experience.description }}
          </p>
        </div>
      </div>
    </WindowSection>

    <!-- 參賽經歷 -->
    <WindowSection title="參賽經歷">
      <div class="space-y-1">
        <div
          v-for="experience in contestExperiences"
          :key="experience.id"
          class="relative pl-6 lg:pl-8 pb-4 lg:pb-6 border-l-2 border-gray-200 last:pb-0"
        >
          <div class="absolute -left-[9px] mt-2">
            <div
              class="w-4 h-4 bg-blue-500 rounded-full border-2 border-white"
            ></div>
          </div>
          <div class="mb-1">
            <span class="text-xs lg:text-sm text-gray-500">{{
              experience.duration
            }}</span>
          </div>
          <h3 class="text-base lg:text-lg font-semibold text-gray-800">
            {{ experience.title }}
          </h3>
          <p class="text-sm lg:text-base text-gray-600 mt-2">
            {{ experience.description }}
          </p>
        </div>
      </div>
    </WindowSection>

    <!-- 活動經歷 -->
    <WindowSection title="活動經歷">
      <div class="space-y-1">
        <div
          v-for="experience in activityExperiences"
          :key="experience.id"
          class="relative pl-6 lg:pl-8 pb-4 lg:pb-6 border-l-2 border-gray-200 last:pb-0"
        >
          <div class="absolute -left-[9px] mt-2">
            <div
              class="w-4 h-4 bg-blue-500 rounded-full border-2 border-white"
            ></div>
          </div>
          <div class="mb-1">
            <span class="text-xs lg:text-sm text-gray-500">{{
              experience.duration
            }}</span>
          </div>
          <h3 class="text-base lg:text-lg font-semibold text-gray-800">
            {{ experience.title }}
          </h3>
          <p class="text-sm lg:text-base text-gray-600 mt-2">
            {{ experience.description }}
          </p>
        </div>
      </div>
    </WindowSection>
  </div>
</template>

<script setup lang="ts">
import {
  experiences,
  projectExperiences,
  contestExperiences,
  activityExperiences,
} from "./mock";
import WindowSection from "./WindowSection.vue";
</script>

<style scoped>
/* 確保最後一個項目沒有底部間距 */
.last\:pb-0:last-child {
  padding-bottom: 0;
}
</style>
