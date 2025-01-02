<script setup>
import { supabase, formActionDefault } from '@/utils/supabase'
import { getAvatarText } from '@/utils/helpers'
import { useRouter } from 'vue-router'
import { onMounted, ref } from 'vue'
import { useAuthUserStore } from '@/stores/authUser'

// Utilize pre-defined vue functions
const router = useRouter()

const userData = ref({
  initials: '',
  email: '',
  fullname: '',
})

// Use Pinia Store
const authStore = useAuthUserStore()

// Load Variables
const formAction = ref({
  ...formActionDefault,
})

// Logout Functionality
const onLogout = async () => {
  /// Reset Form Action utils; Turn on processing at the same time
  formAction.value = { ...formActionDefault, formProcess: true }

  // Get supabase logout functionality
  const { error } = await supabase.auth.signOut()
  if (error) {
    console.error('Error during logout:', error)
    return
  }

  formAction.value.formProcess = false
  // Reset State
  setTimeout(() => {
    authStore.$reset()
  }, 2500)
  localStorage.removeItem('user_id')

  // Redirect to homepage
  router.replace('/login')
}

const getUser = async () => {
  const {
    data: {
      user: { user_metadata: metadata },
    },
  } = await supabase.auth.getUser()

  userData.value.email = metadata.email
  userData.value.fullname = metadata.firstname + ' ' + metadata.lastname
  userData.value.initials = getAvatarText(userData.value.fullname)
}

onMounted(() => {
  getUser()
})
</script>

<template>
  <v-menu min-width="150px" rounded>
    <template #activator="{ props }">
      <v-btn icon v-bind="props">
        <v-avatar color="grey-lighten-2" size="large">
          <span class="text-h5 bg-color3">{{ userData.initials }} </span>
        </v-avatar>
      </v-btn>
    </template>

    <v-card class="mt-1">
      <v-card-text>
        <v-list>
          <v-list-item :subtitle="userData.email" :title="userData.fullname">
            <v-divider class="mt-2 pb-2 border-opacity-0"></v-divider>
            <v-avatar color="grey-lighten-1" size="large">
              <span class="text-h5 bg-color3">{{ userData.initials }}</span>
            </v-avatar>
          </v-list-item>
        </v-list>

        <v-divider class="my-3"></v-divider>

        <v-btn prepend-icon="mdi-heart" variant="plain" to="/favorites">
          Favorites
        </v-btn>

        <v-divider class="my-3"></v-divider>

        <v-btn
          prepend-icon="mdi-logout"
          variant="plain"
          @click="onLogout"
          :loading="formAction.formProcess"
          :disabled="formAction.formProcess"
        >
          Logout
        </v-btn>
      </v-card-text>
    </v-card>
  </v-menu>
</template>
