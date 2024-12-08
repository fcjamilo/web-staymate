<script setup>
import { isAuthenticated } from '@/utils/supabase'
import ProfileHeaderNavigation from './ProfileHeaderNavigation.vue'
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
    <v-app>
      <v-app-bar dark>
          <v-col class="text-end bg-color-grn opacity-80">
            <ProfileHeaderNavigation v-if="isLoggedIn"></ProfileHeaderNavigation>
          </v-col>
      </v-app-bar>

      <slot name="navigation"></slot>
      
      <v-main>
        <slot name="content"></slot>
      </v-main>

      <v-footer color="grey-lighten-2" app><v-col class="text-center"><h6>Copyright © 2024 - StayMate | All Rights Reserved</h6></v-col></v-footer>
    </v-app>
  </v-responsive>
</template>