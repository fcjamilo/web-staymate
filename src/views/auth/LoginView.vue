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
          slim
          @click="onClick"
        ></v-btn>
      </v-app-bar>

      <v-main>
        <v-container class="mt-3">
          <v-row>
            <v-col cols="12" md="6" class="form1 mx-auto">
              <v-card class="mx-auto text-center pt-5">
                <template v-slot:title>
                  <v-img src="/staymate.png" contain height="100" alt="App Logo"></v-img>
                </template>

                <v-card text class="px-4 py-2" height="400px">
                  <v-form fast-fail @submit.prevent>
                    <v-text-field label="Email" variant="outlined"></v-text-field>

                    <v-text-field label="Password" type="password" variant="outlined"></v-text-field>

                    <v-btn rounded block type="submit">LOGIN</v-btn>
                    <p class="font-weight-thin pt-5 text-center">Don't have an account? <a href="#" class="text-decoration-none bg-color3">Register</a></p>

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
