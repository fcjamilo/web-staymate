<template>
  <v-app>
    <AppLayout/>
    <v-container>
      <!-- Dashboard content -->
    </v-container>
  </v-app>
</template>

<script>
import AppLayout from '@/components/layout/AppLayout.vue';

export default {
  name: 'dashboard',
  components: {
    AppLayout
  }
};
</script>

