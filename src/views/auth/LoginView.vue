<script setup>
import AlertNotification from '@/components/common/AlertNotification.vue';
import { formActionDefault, supabase } from '@/utils/supabase';
import { requiredValidator, emailValidator } from '@/utils/validators';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

// Utilize pre-defined vue functions
const router = useRouter();

const isPasswordVisible = ref(false);
const refVForm = ref();

const formDataDefault = {
  email: '',
  password: ''
};

const formData = ref({
  ...formDataDefault
});

const formAction = ref({
  ...formActionDefault
});

const onSubmit = async () => {
  // Reset Form Action utils; Turn on processing at the same time
  formAction.value = { ...formActionDefault, formProcess: true };

  const { data, error } = await supabase.auth.signInWithPassword({
    email: formData.value.email,
    password: formData.value.password
  });

  if (error) {
    // Add Error Message and Status Code
    formAction.value.formErrorMessage = error.message;
    formAction.value.formStatus = error.status;
  } else if (data) {
    // Add Success Message
    formAction.value.formSuccessMessage = 'Successfully Logged In.';
    // Redirect Acct to Dashboard
    router.replace('/dashboard');
  }

  // Turn off processing
  formAction.value.formProcess = false;
};

const onFormSubmit = () => {
  refVForm.value?.validate().then(({ valid }) => {
    if (valid) onSubmit();
  });
};
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

                <v-card class="px-4 py-2" height="430px">
                  <v-form ref="refVForm" @submit.prevent="onFormSubmit">
                    <v-col>
                      <v-text-field
                        v-model="formData.email"
                        prepend-inner-icon="mdi-email-outline" 
                        density="compact"
                        label="Email" 
                        variant="outlined"
                        style="font-size: 1.25rem;"
                        :rules="[requiredValidator, emailValidator]"
                      ></v-text-field>

                      <v-text-field
                        v-model="formData.password"
                        :type="isPasswordVisible ? 'text' : 'password'"
                        :append-inner-icon="isPasswordVisible ? 'mdi-eye-off' : 'mdi-eye'"
                        @click:append-inner="isPasswordVisible = !isPasswordVisible"
                        prepend-inner-icon="mdi-lock-outline"
                        density="compact"
                        label="Password"
                        variant="outlined"
                        style="font-size: 1.25rem;"
                        :rules="[requiredValidator]"
                      ></v-text-field>

                      <v-btn
                        class="mt-2" 
                        color="#dc4e1d" 
                        rounded block type="submit" 
                        prepend-icon="mdi-login"
                        :disabled="formAction.formProcess"
                        :loading="formAction.formProcess"
                      ><b>LOGIN</b></v-btn>
                    </v-col>
                  
                    <v-divider class="my-5"></v-divider>
                    <h5>
                      Don't have an account?
                      <RouterLink class="bg-color3" to="/register">Register here</RouterLink>
                    </h5>
                  </v-form>
                </v-card>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
      <v-footer color="grey-lighten-2" app height="60px">
        <v-col class="text-center">
          <h6>Copyright © 2024 - StayMate | All Rights Reserved</h6>
        </v-col>
      </v-footer>
    </v-app>
  </v-responsive>
</template>

<script> 
export default { name: 'LoginView' }; 
</script>
