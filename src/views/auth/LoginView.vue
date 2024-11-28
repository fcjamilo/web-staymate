<script setup>
  import { ref } from 'vue'

  const visible = ref(false)
</script>
<template>
  <v-responsive>
    <v-app>
      <v-main class="background-image">
        <v-container class="mt-5">
          <v-row class="loginitems">
            <v-col cols="12" md="6" class="mr-6">
              <v-img src="/headerpict2.png" alt="" contain max-height="550px"></v-img>
            </v-col>
            <v-col cols="12" md="4" class="form1 mx-auto">
              <v-card class="mx-auto text-center pt-5">
                <template v-slot:title>
                  <v-img src="/staymate.png" contain height="100" alt="App Logo"></v-img>
                </template>
                <v-card class="px-4 py-2" height="430px">
                  <v-form fast-fail @submit.prevent>
                    <v-col>
                      <v-text-field
                    density="compact"
                    prepend-inner-icon="mdi-email-outline" 
                    label="Email" 
                    variant="outlined"
                    style="font-size: 1.25rem;"
                    ></v-text-field>

                    <v-text-field
                    :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
                    :type="visible ? 'text' : 'password'"
                    density="compact"
                    prepend-inner-icon="mdi-lock-outline"
                    label="Password"
                    type="password"
                    variant="outlined"
                    style="font-size: 1.25rem;"
                    @click:append-inner="visible = !visible"
                    ></v-text-field>

                    <v-btn 
                    color="#dc4e1d" 
                    rounded block type="submit" 
                    prepend-icon="mdi-login"
                      ><b>LOGIN</b></v-btn
                    >
                    </v-col>
                  
                    <v-divider class="my-5"></v-divider>
                    <h5>
                      Don't have an account?
                      <RouterLink class="bg-color3" to="/register">Register here</RouterLink>
                    </h5>
                  </v-form>
                </v-card>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
      <v-footer color="grey-lighten-2" app
        ><v-col class="text-center"><h6>Copyright © 2024 - StayMate | All Rights Reserved</h6></v-col></v-footer
      >
    </v-app>
  </v-responsive>
</template>
