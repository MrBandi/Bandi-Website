<template>
  <div class="min-h-screen bg-gray-100">
    <div class="container mx-auto px-4 py-6 flex flex-col lg:flex-row lg:space-x-6">
      <ProfileSidebar />
      <ExperienceSection />
    </div>
  </div>
</template>

<script setup lang="ts">
import ProfileSidebar from '~/components/ProfileSidebar.vue'
import ExperienceSection from '~/components/ExperienceSection.vue'

useHead({
  title: 'Bandi About',
  meta: [
    {
      name: 'description',
      content: 'My resume page',
    },
  ],
})
</script>