<template>
  <v-app>
    <v-container>
      <v-app-bar app dark>
        <v-container>
          <v-col cols="auto">
            <h4><strong>STAYMATE</strong></h4>
          </v-col>
        </v-container>
      </v-app-bar>
      <br />
      <br />
      <!-- Main Section -->
      <v-row class="gradient text-center">
        <v-col cols="12" sm="6" xs="4">
          <div class="content">
            <img src="/headerpict2.png" alt="Header Image" contain class="flexible-img" />
          </div>
        </v-col>
        <v-col cols="12" sm="6" xs="4" class="d-flex align-center justify-center">
          <div class="content">
            <h1 class="text-center"><strong>BE OUR STAYMATE!</strong></h1>
            <p>
              Discover nearby boarding houses in the Ampayon/CSU area with ease. Perfect for
              students and professionals, StayMate provides a convenient way to find accommodations
              that match your amenities, distance preferences, and budget.
            </p>
            <v-btn color="#dc4e1d" class="mt-4" href="/register">GET STARTED</v-btn>
          </div>
        </v-col>
      </v-row>
      <!-- Made to Measure Section -->
      <v-row class="text-center py-12">
        <v-col>
          <h2>TESTING</h2>
          <p>testing abcdedfgsgs</p>
          <v-btn color="primary" class="mt-4">SEE THE SUITS</v-btn>
        </v-col>
      </v-row>

      <!-- Icons Section -->
      <div class="d-flex align-center justify-space-around gradient pb-5">
        <v-avatar cols="4" color="info">
          <v-icon icon="mdi-account-circle"></v-icon>
        </v-avatar>

        <v-avatar cols="4">
          <v-img alt="John" src="https://cdn.vuetifyjs.com/images/john.jpg"></v-img>
        </v-avatar>

        <v-avatar cols="4" color="red">
          <span class="text-h5">CJ</span>
        </v-avatar>
      </div>
    </v-container>
  </v-app>
</template>
<script>
export default {
  name: 'landing',
}
</script>
