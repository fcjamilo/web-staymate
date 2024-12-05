<script setup>
import { confirmedValidator, emailValidator, requiredValidator } from '@/utils/validators';
  import { ref } from 'vue'
  import AlertNotification from '@/components/common/AlertNotification.vue';
  import { supabase, formActionDefault } from '@/utils/supabase.js'
  import { useRouter } from 'vue-router';

  const router = useRouter()


  const formDataDefault = {
    name: '',
    email: '',
    password: '',
    password_confirmation: ''
  }

  const formData = ref ({
    ...formDataDefault
  })

  const formAction = ref ({
    ...formActionDefault
  })

  const visible = ref(false)
  const refVForm = ref()

  const onSubmit = async () => {

    formAction.value = { ...formActionDefault}
    formAction.value.formProcess = true

    const { data, error } = await supabase.auth.signUp(
  {
    email: formData.value.email,
    password: formData.value.password,
    options: {
      data: {
        name: formData.value.name,
        is_admin: false
      }
    }
  }
)

if(error) {
  console.log(error)
  formAction.value.formErrorMessage = error.message
  formAction.value.formStatus = error.status
}
else if(data) {
  console.log(data)
  formAction.value.formSuccessMessage = 'Successfully Registered Account.'
  refVForm.value?.reset()
  router.replace('/dashboard')
}

formAction.value.formProcess = false

  }

  const onFormSubmit = () => {
    refVForm.value?.validate().then(({ valid }) => {
      if (valid) 
      onSubmit()
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
              <v-img src="/hello-unscreen.gif" alt="" contain max-height="550px" class="floating"></v-img>
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
                    <v-col>
                      <v-text-field 
                    v-model ="formData.name"
                    label="Name" 
                    variant="outlined"
                    style="font-size: 1.25rem;"
                    prepend-inner-icon="mdi-card-account-details-outline"
                    density="compact"
                    :rules="[requiredValidator]"
                    ></v-text-field>

                    <v-text-field 
                    v-model="formData.email"
                    label="Email" 
                    variant="outlined"
                    style="font-size: 1.25rem;"
                    prepend-inner-icon="mdi-email-outline"
                    density="compact"
                    :rules="[requiredValidator, emailValidator]"
                    ></v-text-field>

                    <v-text-field
                    v-model="formData.password"
                    :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
                    :type="visible ? 'text' : 'password'"
                    density="compact" 
                    label="Password" 
                    type="password" 
                    variant="outlined"
                    style="font-size: 1.25rem;"
                    @click:append-inner="visible = !visible"
                    prepend-inner-icon="mdi-lock-outline"
                    :rules="[requiredValidator, passwordValidator]"
                    ></v-text-field>

                    <v-text-field
                    v-model="formData.password_confirmation"
                    :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
                    :type="visible ? 'text' : 'password'"
                    density="compact" 
                    label="Password Confirmation" 
                    type="password" 
                    variant="outlined"
                    style="font-size: 1.25rem;"
                    @click:append-inner="visible = !visible"
                    prepend-inner-icon="mdi-lock-outline"
                    :rules="[requiredValidator, confirmedValidator(formData.password_confirmation, formData.password)]"
                    ></v-text-field>

                    <v-btn 
                    class="mt-2" 
                    color="#dc4e1d" 
                    rounded block type="submit" 
                    prepend-icon="mdi-pencil-box-outline"
                    :disabled="formAction.formProcess"
                    :loading="formAction.formProcess"
                    ><b>SIGNUP</b></v-btn>
                    </v-col>

                    <v-divider class="my-5"></v-divider>
                    <h5>Already have an account? <RouterLink class="bg-color3" to="/login">Login here</RouterLink></h5>

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
<script> 
export default { name: 'register' } 
</script>