<script setup>
import { ref } from 'vue'

const length = ref(3)
const onboarding = ref(0)
</script>
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
      <v-row class="text-center">
        <h1 class="py-5 px-5">Top Values for you</h1>
      </v-row>
      <!-- Made to Measure Section -->
      <v-window v-model="onboarding" direction="vertical" show-arrows>
        <v-window-item v-for="n in length" :key="`card-${n}`">
          <v-card class="d-flex align-center justify-center ma-2" height="200">
            <img src="/background.png" alt="" />
            <h1 class="text-h2">Slide {{ n }}</h1>
          </v-card>
        </v-window-item>
      </v-window>
      <!-- Icons Section -->
       <v-row>
        <v-col cols="12" md="4">
      <v-card
      prepend-avatar="/background.png"
        subtitle="System Analyst"
        title="Jherto Lagdamen"
      >
      <v-divider></v-divider>
      <div class="d-flex">
        <v-col cols="auto">
        <v-btn density="compact" icon="mdi-github" size="small" color="dark"></v-btn>
      </v-col>
      <v-col cols="auto">
        <v-btn density="compact" icon="mdi-facebook" size="small" color="dark"></v-btn>
      </v-col>
      <v-col cols="auto">
        <v-btn density="compact" icon="mdi-web" size="small" color="dark"></v-btn>
      </v-col>
      </div>
    </v-card>
    </v-col>
    <v-col cols="12" md="4">
      <v-card
      prepend-avatar="/francine.jpg"
        subtitle="Lead Developer"
        title="Francine Claire Jamilo"
      >
      <v-divider></v-divider>
      <div class="d-flex">
        <v-col cols="auto">
        <v-btn density="compact" icon="mdi-github" size="small" color="dark" href="https://github.com/fcjamilo" target="_blank"></v-btn>
      </v-col>
      <v-col cols="auto">
        <v-btn density="compact" icon="mdi-facebook" size="small" color="dark" href="https://www.facebook.com/francine.jamilo.5" target="_blank"></v-btn>
      </v-col>
      <v-col cols="auto">
        <v-btn density="compact" icon="mdi-web" size="small" color="dark" href="https://fcjamilo.github.io/" target="_blank"></v-btn>
      </v-col>
      </div>
    </v-card>
    </v-col>
    <v-col cols="12" md="4">
      <v-card
      prepend-avatar="/background.png"
        subtitle="Frontend Developer"
        title="Eloisa Vasquez"
      >
      <v-divider></v-divider>
      <div class="d-flex">
        <v-col cols="auto">
        <v-btn density="compact" icon="mdi-github" size="small" color="dark"></v-btn>
      </v-col>
      <v-col cols="auto">
        <v-btn density="compact" icon="mdi-facebook" size="small" color="dark"></v-btn>
      </v-col>
      <v-col cols="auto">
        <v-btn density="compact" icon="mdi-web" size="small" color="dark"></v-btn>
      </v-col>
      </div>
    </v-card>
    </v-col>
    
       </v-row>
    </v-container>
  </v-app>
</template>
<script>
export default {
  name: 'home',
}
</script>
