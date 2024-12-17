<template>
    <div class="w-3/4 p-6 space-y-6">
        <!-- 身分經歷 -->
        <WindowSection title="身分經歷">
            <div class="space-y-1">
                <div v-for="experience in experiences" :key="experience.id" 
                    class="relative pl-8 pb-6 border-l-2 border-gray-200 last:pb-0"
                >
                    <div class="absolute -left-[9px] mt-2">
                        <div class="w-4 h-4 bg-blue-500 rounded-full border-2 border-white"></div>
                    </div>
                    <div class="mb-1">
                        <span class="text-sm text-gray-500">{{ experience.duration }}</span>
                    </div>
                    <h3 class="text-lg font-semibold text-gray-800">{{ experience.title }}</h3>
                    <p class="text-gray-600 mt-2">
                        {{ experience.description }}
                    </p>
                </div>
            </div>
        </WindowSection>

        <!-- 專案經歷 -->
        <WindowSection title="專案經歷">
            <div class="space-y-1">
                <div v-for="experience in projectExperiences" :key="experience.id" 
                    class="relative pl-8 pb-6 border-l-2 border-gray-200 last:pb-0"
                >
                    <div class="absolute -left-[9px] mt-2">
                        <div class="w-4 h-4 bg-blue-500 rounded-full border-2 border-white"></div>
                    </div>
                    <div class="mb-1">
                        <span class="text-sm text-gray-500">{{ experience.duration }}</span>
                    </div>
                    <h3 class="text-lg font-semibold text-gray-800">{{ experience.title }}</h3>
                    <p class="text-gray-600 mt-2">
                        {{ experience.description }}
                    </p>
                </div>
            </div>
        </WindowSection>

        <!-- 參賽經歷 -->
        <WindowSection title="參賽經歷">
            <div class="space-y-4">
                <!-- 這裡放教育背景的內容 -->
            </div>
        </WindowSection>

        <!-- 可以繼續添加更多區塊 -->
    </div>
</template>

<script setup lang="ts">
import { experiences, projectExperiences } from './mock';
import WindowSection from './WindowSection.vue';
</script>

<style scoped>
/* 確保最後一個項目沒有底部間距 */
.last\:pb-0:last-child {
    padding-bottom: 0;
}
</style>