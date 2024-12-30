<script setup>
import AppLayout from '@/components/layout/AppLayout.vue'
import { ref } from 'vue'

const dialog = ref(false)
</script>

<template>
  <AppLayout>
    <template #content>
      <v-container>
        <v-row>
          <v-col cols="12" md="4">
            <v-card>
              <v-card-title>Boarding House Name</v-card-title> <v-card-subtitle>Purok & Contact Number</v-card-subtitle>
              <v-img class="ma-4" src="/bh_sample.jpg"></v-img>
              <v-card-text>Description</v-card-text>
              <v-card-actions>
                <v-btn color="primary" @click="dialog = true">See More Info</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
        <v-dialog v-model="dialog" max-width="500px" persistent transition="dialog-top-transition">
          <v-card>
            <v-card-title class="headline">Boarding House Name</v-card-title>
            <v-card-subtitle>Purok & Contact Number</v-card-subtitle>
            <v-img :width="371" class="ma-4" src="/bh_sample.jpg"></v-img> 
            <v-card-text>
              Description
            </v-card-text>
            <v-label class="ga-2 d-flex justify-center">
              <v-chip>room capacity</v-chip>
              <v-chip>room vacancy</v-chip>
              <v-chip>room rate</v-chip>
            </v-label>
            <v-card-text>MAP</v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="green darken-1" text @click="dialog = false">Close</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-container>
    </template>
  </AppLayout>
</template>
