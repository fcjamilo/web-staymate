<script setup>
import { ref } from 'vue'

const theme = ref('light')

function onClick() {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
}
</script>

<template>
  <v-responsive>
    <v-app :theme="theme">

      <v-main>
        <v-container class="mt-5">
          <v-row>
            <v-col cols="12" md="6" class="form1 mx-auto">
              <v-card class="mx-auto text-center pt-5">
                <template v-slot:title>
                  <v-img src="/staymate.png" contain height="100" alt="App Logo"></v-img>
                </template>
                <v-card text class="px-4 py-2" height="500px">
                  <v-form fast-fail @submit.prevent>
                    <v-text-field label="Email" variant="outlined"></v-text-field>

                    <v-text-field
                      label="Password"
                      type="password"
                      variant="outlined"
                    ></v-text-field>

                    <v-btn color="#dc4e1d" rounded block type="submit" prepend-icon="mdi-login"><b>LOGIN</b></v-btn>

                    <v-divider class="my-5"></v-divider>
                    <h5>
                      Don't have an account?
                      <RouterLink class="bg-color3" to="/register">Register here.</RouterLink>
                    </h5>
                  </v-form>
                </v-card>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </v-app>
  </v-responsive>
</template>
