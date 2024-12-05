<template>
  <v-app>
    <NavbarComponent />
    <v-container>
      <!-- Empty content area -->
    </v-container>
  </v-app>
</template>

<script>
import NavbarComponent from '@/components/layout/NavBarComponent.vue';

export default {
  name: 'DashboardComponent',
  components: {
    NavbarComponent
  }
};
</script>