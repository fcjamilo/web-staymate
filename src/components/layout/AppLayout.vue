<script setup>
import { isAuthenticated } from '@/utils/supabase'
import ProfileHeaderNavigation from '@/components/layout/ProfileHeaderNavigation.vue'
import { useAuthUserStore } from '@/stores/authUser'
import { onMounted, ref } from 'vue'
import { useDisplay } from 'vuetify'

const props = defineProps(['isWithAppBarNavIcon'])

const emit = defineEmits(['isDrawerVisible'])

// Utilize predefined vue functions
const { xs, sm, mobile } = useDisplay()

// Use Pinia Store
const authStore = useAuthUserStore()


// Load Variables
const isLoggedIn = ref(false)
const theme = ref(localStorage.getItem('theme') ?? 'light')

//  Toggle Theme
const onToggleTheme = () => {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
  localStorage.setItem('theme', theme.value)
}

// Get Authentication status from supabase
const getLoggedStatus = async () => {
  isLoggedIn.value = await isAuthenticated()
}

// Load Functions during component rendering
onMounted(() => {
  getLoggedStatus()
})
</script>

<template>
  <v-responsive>
    <v-app :theme="theme">
      <v-app-bar
        class="px-3"
        :color="theme === 'light' ? 'brown-lighten-3' : 'brown-darken-2'"
        border
      >
      <v-app-bar-nav-icon
          v-if="props.isWithAppBarNavIcon"
          icon="mdi-menu"
          :theme="theme"
          @click="emit('isDrawerVisible')"
        >
        </v-app-bar-nav-icon>

        <!-- <v-app-bar-title>
          <v-img src="/images/pawtrack-logo.png" :width="xs ? '100%' : sm ? '40%' : '9%'"></v-img>
        </v-app-bar-title> -->

        <v-spacer></v-spacer>

        <v-btn
        class="me-2"
          :icon="theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'"
          variant="elevated"
          slim
          @click="onToggleTheme"
        ></v-btn>

        <ProfileHeaderNavigation></ProfileHeaderNavigation>
      </v-app-bar>

      <slot name="navigation"></slot>
      
      <v-main>
        <slot name="content"></slot>
      </v-main>

      <v-footer color="grey-lighten-2" app><v-col class="text-center"><h6>Copyright © 2024 - StayMate | All Rights Reserved</h6></v-col></v-footer>
    </v-app>
  </v-responsive>
</template>