<script setup>
import {
  confirmedValidator,
  emailValidator,
  requiredValidator,
  passwordValidator,
} from '@/utils/validators'
import { ref } from 'vue'
import AlertNotification from '@/components/common/AlertNotification.vue'
import { supabase, formActionDefault } from '@/utils/supabase.js'
import { useRouter } from 'vue-router'

const router = useRouter()

const formDataDefault = {
  firstname: '',
  lastname: '',
  email: '',
  password: '',
  password_confirmation: '',
}

const formData = ref({
  ...formDataDefault,
})

const formAction = ref({
  ...formActionDefault,
})

const isPasswordVisible = ref(false)
const isPasswordConfirmVisible = ref(false)
const refVForm = ref()

const onSubmit = async () => {
  formAction.value = { ...formActionDefault }
  formAction.value.formProcess = true

  const { data, error } = await supabase.auth.signUp({
    email: formData.value.email,
    password: formData.value.password,
    options: {
      data: {
        firstname: formData.value.firstname,
        lastname: formData.value.lastname,
        is_admin: false, // Just turn to true if admin account
        // role: 'Administrator' // If role based; just change the string based on role
      },
    },
  })

  if (error) {
    console.log(error)
    formAction.value.formErrorMessage = error.message
    formAction.value.formStatus = error.status
  } else if (data) {
    console.log(data)
    formAction.value.formSuccessMessage = 'Successfully Registered Account.'
    console.log(data.user.id)
    // Store the user ID in local storage
    localStorage.setItem('user_id', data.user.id)

    router.replace('/dashboard')
  }

  refVForm.value?.reset()
  formAction.value.formProcess = false
}

const onFormSubmit = () => {
  refVForm.value?.validate().then(({ valid }) => {
    if (valid) onSubmit()
  })
}
</script>

<template>
  <v-responsive>
    <v-app>
      <v-main class="gradient">
        <v-container class="mt-5">
          <v-row class="loginitems">
            <v-col cols="12" md="6">
              <v-img
                src="/hello-unscreen.gif"
                alt=""
                contain
                max-height="550px"
                class="floating"
              ></v-img>
            </v-col>
            <v-col cols="12" md="4" class="form1 mx-auto">
              <v-card class="mx-auto text-center pt-5">
                <template v-slot:title>
                  <v-img src="/staymate.png" contain height="100" alt="App Logo"></v-img>
                </template>

                <AlertNotification
                  :form-success-message="formAction.formSuccessMessage"
                  :form-error-message="formAction.formErrorMessage"
                ></AlertNotification>

                <v-card class="px-4 py-2" height="440px">
                  <v-form ref="refVForm" @submit.prevent="onFormSubmit">
                    <v-row dense>
                      <v-col cols="12" md="6" class="pb-0 pt-3">
                        <v-text-field
                          prepend-inner-icon="mdi-account-details-outline"
                          density="compact"
                          variant="outlined"
                          style="font-size: 1.25rem"
                          label="Firstname"
                          v-model="formData.firstname"
                          :rules="[requiredValidator]"
                        ></v-text-field>
                      </v-col>

                      <v-col cols="12" md="6" class="pb-0 pt-3">
                        <v-text-field
                          prepend-inner-icon="mdi-account-details-outline"
                          density="compact"
                          variant="outlined"
                          style="font-size: 1.25rem"
                          label="Lastname"
                          v-model="formData.lastname"
                          :rules="[requiredValidator]"
                        ></v-text-field>
                      </v-col>

                      <v-col cols="12" class="py-0">
                        <v-text-field
                          density="compact"
                          variant="outlined"
                          style="font-size: 1.25rem"
                          label="Email"
                          prepend-inner-icon="mdi-email-outline"
                          v-model="formData.email"
                          :rules="[requiredValidator, emailValidator]"
                        ></v-text-field>
                      </v-col>

                      <v-col cols="12" md="6" class="py-0">
                        <v-text-field
                          density="compact"
                          variant="outlined"
                          style="font-size: 1.25rem"
                          prepend-inner-icon="mdi-lock-outline"
                          label="Password"
                          v-model="formData.password"
                          :type="isPasswordVisible ? 'text' : 'password'"
                          :append-inner-icon="isPasswordVisible ? 'mdi-eye-off' : 'mdi-eye'"
                          @click:append-inner="isPasswordVisible = !isPasswordVisible"
                          :rules="[requiredValidator, passwordValidator]"
                        >
                        </v-text-field>
                      </v-col>

                      <v-col cols="12" md="6" class="py-0">
                        <v-text-field
                          density="compact"
                          variant="outlined"
                          style="font-size: 1.25rem"
                          prepend-inner-icon="mdi-lock-outline"
                          label="Password Confirmation"
                          v-model="formData.password_confirmation"
                          :type="isPasswordConfirmVisible ? 'text' : 'password'"
                          :append-inner-icon="isPasswordConfirmVisible ? 'mdi-eye-off' : 'mdi-eye'"
                          @click:append-inner="isPasswordConfirmVisible = !isPasswordConfirmVisible"
                          :rules="[
                            requiredValidator,
                            confirmedValidator(formData.password, formData.password_confirmation),
                          ]"
                        >
                        </v-text-field>
                      </v-col>
                    </v-row>
                    <v-btn
                      class="mt-2"
                      color="#dc4e1d"
                      rounded
                      type="submit"
                      prepend-icon="mdi-account-plus"
                      :disabled="formAction.formProcess"
                      :loading="formAction.formProcess"
                      block
                    >
                      Register
                    </v-btn>
                    <v-divider class="my-5"></v-divider>
                    <h5>
                      Already have an account?
                      <RouterLink class="bg-color3" to="/login">Login here</RouterLink>
                    </h5>
                  </v-form>
                </v-card>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
      <v-footer color="grey-lighten-2" app
        ><v-col class="text-center"
          ><h6>Copyright © 2024 - StayMate | All Rights Reserved</h6></v-col
        ></v-footer
      >
    </v-app>
  </v-responsive>
</template>
<script>
export default { name: 'RegisterView' }
</script>
