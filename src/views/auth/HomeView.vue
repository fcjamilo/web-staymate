<script setup>
import { ref } from 'vue'

const model = ref(null)
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
      <v-row class="gradient2 text-center">
        <v-col cols="12" sm="6" xs="4">
          <div class="content">
            <img src="/headerpict2.png" alt="Header Image" contain class="flexible-img" />
          </div>
        </v-col>
        <v-col cols="12" sm="6" xs="4" class="d-flex align-center justify-center">
          <div class="content">
            <h1 class="text-center"><strong>BE OUR STAYMATE!</strong></h1>
            <p class="text-justify px-5">
              Your ideal living space is just a few clicks away with StayMate—start your journey now
              and make your stay truly comfortable and enjoyable!
            </p>
            <v-btn color="#dc4e1d" class="mt-4" href="/register" append-icon="mdi-arrow-right"
              >GET STARTED</v-btn
            >
          </div>
        </v-col>
      </v-row>
      <!-- Made to Measure Section -->
      <v-container class="my-5">
        <v-row>
          <v-col cols="12" md="4" class="d-flex flex-column align-center">
            <v-icon color="#dc4e1d" size="35">mdi-magnify</v-icon>
            <span class="text-center"><strong>SEARCH</strong></span> <v-spacer></v-spacer>
            <h5 class="text-justify font-weight-thin px-10">Explore a variety of cozy and welcoming boarding houses near the Ampayon/CSU area with ease.</h5>
          </v-col>
          <v-col cols="12" md="4" class="d-flex flex-column align-center">
            <v-icon color="#dc4e1d" size="35">mdi-thumb-up-outline</v-icon>
            <span class="text-center"><strong>FIND PREFERENCE</strong></span> <v-spacer></v-spacer>
            <h5 class="text-justify font-weight-thin px-10">Enjoy the convenience of finding the perfect place that fits your desired amenities, preferred distance, and budget.</h5>
          </v-col>
          <v-col cols="12" md="4" class="d-flex flex-column align-center">
            <v-icon color="#dc4e1d" size="35">mdi-check-outline</v-icon>
            <span class="text-center"><strong>MATCH</strong></span> <v-spacer></v-spacer>
            <h5 class="text-justify font-weight-thin px-10">Discover accommodations that match your needs, offering a seamless experience tailored just for you.</h5>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
    <img src="/houses.jpeg" alt="">
    <!-- Icons Section -->
    <v-container> 
      <v-row>
        <v-col cols="12" md="12">
          <h2>CONNECT WITH US</h2>
        </v-col>
        <v-col cols="12" md="4">
          <v-card
            prepend-avatar="/background.png"
            subtitle="System Analyst"
            title="Jherto Lagdamen"
          >
            <v-divider></v-divider>
            <div class="d-flex">
              <v-col cols="auto">
                <v-btn density="compact" icon="mdi-github" size="small" color="#dc4e1d"></v-btn>
              </v-col>
              <v-col cols="auto">
                <v-btn density="compact" icon="mdi-facebook" size="small" color="#dc4e1d" href="https://www.facebook.com/jherto.lagdamen.3" target="_blank"></v-btn>
              </v-col>
              <v-col cols="auto">
                <v-btn density="compact" icon="mdi-web" size="small" color="#dc4e1d"></v-btn>
              </v-col>
            </div>
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
          <v-card
            prepend-avatar="/francineprof.jpg"
            subtitle="Lead Developer"
            title="Francine Claire Jamilo"
          >
            <v-divider></v-divider>
            <div class="d-flex">
              <v-col cols="auto">
                <v-btn
                  density="compact"
                  icon="mdi-github"
                  size="small"
                  color="#dc4e1d"
                  href="https://github.com/fcjamilo"
                  target="_blank"
                ></v-btn>
              </v-col>
              <v-col cols="auto">
                <v-btn
                  density="compact"
                  icon="mdi-facebook"
                  size="small"
                  color="#dc4e1d"
                  href="https://www.facebook.com/francine.jamilo.5"
                  target="_blank"
                ></v-btn>
              </v-col>
              <v-col cols="auto">
                <v-btn
                  density="compact"
                  icon="mdi-web"
                  size="small"
                  color="#dc4e1d"
                  href="https://fcjamilo.github.io/"
                  target="_blank"
                ></v-btn>
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
                <v-btn density="compact" icon="mdi-github" size="small" color="#dc4e1d"></v-btn>
              </v-col>
              <v-col cols="auto">
                <v-btn density="compact" icon="mdi-facebook" size="small" color="#dc4e1d" href="https://www.facebook.com/eloisa.vasquez.214712" target="_blank"></v-btn>
              </v-col>
              <v-col cols="auto">
                <v-btn density="compact" icon="mdi-web" size="small" color="#dc4e1d"></v-btn>
              </v-col>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-footer color="white"
        ><v-col class="text-center"><h6>Copyright © 2024 - StayMate | All Rights Reserved</h6></v-col></v-footer
      >
  </v-app>
</template>
<script>
export default {
  name: 'home',
}
</script>
