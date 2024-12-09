<template>
    <v-container fill-height class="gradient2">
      <v-row justify="center" align="center">
        <v-col cols="12" md="8" class="text-center">
          <v-icon size="100" color="error">mdi-alert-circle-outline</v-icon>
          <h1 class="display-2 font-weight-bold">404</h1>
          <h2 class="subtitle-1">Oops! The page you're looking for doesn't exist.</h2>
          <v-btn color="primary" large @click="goHome" prepend-icon="mdi-home">
            Go to Home
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  
  const goHome = () => {
    router.push('/');
  };
  </script>
  
  <style scoped>
    .display-2 {
      font-size: 3.75rem;
    }
  
    .subtitle-1 {
      font-size: 1.25rem;
    }
  
    .v-icon {
      margin-bottom: 1rem;
    }
  
    .v-btn {
      margin-top: 2rem;
    }
  </style>
  