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

                <v-card class="px-4 py-2" height="440px">
                  <v-form fast-fail @submit.prevent>
                    <v-text-field 
                    label="Name" 
                    variant="outlined"
                    style="font-size: 1.25rem;"
                    ></v-text-field>

                    <v-text-field 
                    label="Email" 
                    variant="outlined"
                    style="font-size: 1.25rem;"
                    ></v-text-field>

                    <v-text-field 
                    label="Password" 
                    type="password" 
                    variant="outlined"
                    style="font-size: 1.25rem;"
                    ></v-text-field>

                    <v-text-field 
                    label="Password Confirmation" 
                    type="password" 
                    variant="outlined"
                    style="font-size: 1.25rem;"
                    ></v-text-field>

                    <v-btn color="#dc4e1d" rounded block type="submit" prepend-icon="mdi-pencil-box-outline"><b>SIGNUP</b></v-btn>

                    <v-divider class="my-5"></v-divider>
                    <h5>Already have an account? <RouterLink class="bg-color3" to="/">Login here</RouterLink></h5>

                  </v-form>
                </v-card>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
      <v-footer color="grey-lighten-2" app><v-col class="text-center"><h6>Copyright © 2024 - StayMate | All Rights Reserved</h6></v-col></v-footer>
    </v-app>
  </v-responsive>
</template>