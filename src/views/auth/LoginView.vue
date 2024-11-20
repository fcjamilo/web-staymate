<script setup>
import { ref } from 'vue'

const theme = ref('light')

function onClick() {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
}
</script>

<template>
  <v-responsive class="border rounded">
    <v-app :theme="theme">
      <v-app-bar class="px-3">
        <v-spacer></v-spacer>

        <v-btn
          :prepend-icon="theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'"
          text="Toggle Theme"
          slim
          @click="onClick"
        ></v-btn>
      </v-app-bar>

      <v-main>
        <v-container>
          <v-row>
            <v-col cols="12" md="6" class="mx-auto">
              <v-card class="mx-auto" prepend-icon="mdi-account" subtitle="Login">
                <template v-slot:title>
                  <span class="font-weight-black">StayMate</span>
                </template>

                <v-card text class="bg-surface-light px-4 py-4">
                  <v-form fast-fail @submit.prevent>
                    <v-text-field label="Email" variant="outlined"></v-text-field>

                    <v-text-field label="Password" type="password" variant="outlined"></v-text-field>

                    <v-btn rounded block type="submit">LOGIN</v-btn>
                    <p class="font-weight-thin pt-5 text-center">Don't have an account? <a href="#" class="text-decoration-none">Register</a></p>

                  </v-form>
                </v-card>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
      <v-footer border app>2024 - StayMate</v-footer>
    </v-app>
  </v-responsive>
</template>
