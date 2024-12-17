<template>
  <div class="flex min-h-screen bg-gray-100">
    <ProfileSidebar />
    <ExperienceSection />
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