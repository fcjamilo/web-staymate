<template>
    <v-app-bar app>
      <v-toolbar-title>Dashboard</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn v-if="!user" @click="login">Login</v-btn>
      <v-menu v-else>
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on">
            <v-avatar>
              <img :src="user.user_metadata.avatar_url" alt="Profile">
            </v-avatar>
            {{ user.user_metadata.full_name }}
          </v-btn>
        </template>
        <v-list>
          <v-list-item @click="logout">
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import { supabase } from '@/utils/supabase'; // Adjust the import according to your project setup

  export default {
    name: 'NavbarComponent',
    setup() {
      const user = ref(null);
  
      const login = async () => {
        await supabase.auth.signIn({ provider: 'google' });
      };
  
      const logout = async () => {
        await supabase.auth.signOut();
        user.value = null;
      };
  
      onMounted(async () => {
        const { data } = await supabase.auth.getUser();
        user.value = data.user;
      });
  
      return {
        user,
        login,
        logout
      };
    }
  };
  </script>
  