<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '@/utils/supabase'
import AppLayout from '@/components/layout/AppLayout.vue'

const boardingHouses = ref([]) // Store the boarding houses
const dialog = ref(false)
const selectedHouse = ref(null) // Store the selected house
const houseRooms = ref([]) // Store the room types for the selected house

// Fetch boarding houses from Supabase
const fetchBoardingHouses = async () => {
  try {
    const { data, error } = await supabase.from('boarding_houses').select('*')

    if (error) {
      console.error('Error fetching boarding houses:', error)
    } else {
      boardingHouses.value = data
      fetchRooms() // Fetch rooms after boarding houses
    }
  } catch (error) {
    console.error('Unexpected error fetching boarding houses:', error)
  }
}

// Fetch rooms data from Supabase and assign images to rooms
const fetchRooms = async () => {
  try {
    const { data, error } = await supabase.from('boarding_houses').select('*')

    if (error) {
      console.error('Error fetching rooms:', error)
    } else {
      // Update rooms with image URLs and associate them with boarding houses
      boardingHouses.value = boardingHouses.value.map((house) => {
        const houseRooms = data.filter((room) => room.boarding_house_id === house.id)
        const updatedRooms = houseRooms.map((room) => {
          const imageUrl = `${room.img}`
          return {
            ...room,
            img: imageUrl, // Update the img field with the full image URL
          }
        })
        return {
          ...house,
          rooms: updatedRooms, // Add rooms with images to the boarding house
        }
      })
    }
  } catch (error) {
    console.error('Unexpected error fetching rooms:', error)
  }
}

// Open the dialog with the selected boarding house
const openDialog = async (house) => {
  selectedHouse.value = house
  dialog.value = true

// Fetch room types associated with the selected boarding house
try {
    const { data, error } = await supabase
      .from('room_types') // Assuming room_types table has a foreign key to 'boarding_houses'
      .select('*')
      .eq('boarding_house_id', house.id) // Use the selected boarding house ID

    if (error) {
      console.error('Error fetching room types:', error)
    } else {
      // Assign the fetched room types to houseRooms
      houseRooms.value = data
    }
  } catch (error) {
    console.error('Unexpected error fetching room types:', error)
  }
}

// Add to favorites function
const addToFavorites = async (houseId) => {
  const userId = localStorage.getItem('user_id') // Get user ID from localStorage
  console.log(userId)
  if (!userId) {
    console.error('User not logged in')
    return
  }

  try {
    const { data, error } = await supabase.from('favorites').insert([
      {
        user_id: userId,
        boarding_house_id: houseId,
      },
    ])

    if (error) {
      console.error('Error adding to favorites:', error)
    } else {
      alert('Added to favorites:', data)
    }
  } catch (error) {
    console.error('Unexpected error adding to favorites:', error)
  }
}

onMounted(() => {
  fetchBoardingHouses()
})
</script>

<template>
  <AppLayout>
    <template #content>
      <v-container class="pt-0">
        <v-row class="gradient2 text-center">
        <v-col cols="12" sm="6" xs="4">
          <div class="content">
            <img src="/headerpict2.png" alt="Header Image" contain class="flexible-img" />
          </div>
        </v-col>
        <v-col cols="12" sm="6" xs="4" class="d-flex align-center justify-center">
          <div class="content">
            <h1 class="text-center"><strong>BE OUR STAYMATE!</strong></h1>
            <p class="text-justify px-5 poppins-light">
              Your ideal living space is just a few clicks away with StayMate—Make your stay truly comfortable and enjoyable!
            </p>
          </div>
        </v-col>
      </v-row>
      <v-container class="py-5">
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
            <v-icon color="#dc4e1d" size="35">mdi-star-outline</v-icon>
            <span class="text-center"><strong>ADD FAVORITES</strong></span> <v-spacer></v-spacer>
            <h5 class="text-justify font-weight-thin px-10">Add favorite accommodations that match your needs, offering a seamless experience tailored just for you.</h5>
          </v-col>
        </v-row>
      </v-container>
      <br>
      <br>
      <br>
        <v-row>
          <!-- Loop through each boarding house -->
          <v-col v-for="house in boardingHouses" :key="house.id" cols="12" md="4" class="elevation-2">
            <v-card class="mx-3 elevation-0">
              <v-img class="ma-4" :src="house.img"></v-img>
              <v-card-title class="anton-regular">{{ house.name }}</v-card-title>
              <v-card-subtitle class="poppins-light">Location: {{ house.purok }}<br>Contact Number: {{ house.contact_number }}</v-card-subtitle>
              <v-card-text class="poppins-light">{{ house.description }}</v-card-text>

              <!-- Loop through each room in the boarding house and show its image -->
              <v-row>
                <v-col v-for="room in house.rooms" :key="room.id" cols="12" sm="6">
                  <v-card elevation="25">
                    <v-img :src="house.img || '/room_sample.jpg'" class="ma-2"></v-img>
                    <v-card-title>{{ room.name }}</v-card-title>
                    <v-card-subtitle>{{ room.capacity }} Beds</v-card-subtitle>
                    <v-card-actions>
                      <v-btn color="primary">See Room Details</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-col>
              </v-row>

              <v-card-actions>
                <!-- On button click, set the selected house and open the dialog -->
                <v-btn class="mt-5" border="border lg" color="#dc4e1d" @click="openDialog(house)">See More Info</v-btn>

                <!-- Add to favorites button -->
                <v-btn class="mt-5" border="border lg" color="#dc4e1d" @click="addToFavorites(house.id)">Add to Favorites</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>

        <!-- Dialog for more details about the selected boarding house -->
        <v-dialog v-model="dialog" max-width="500px" persistent transition="dialog-top-transition">
  <v-card>
    <v-card-title class="headline anton-regular pt-5">{{ selectedHouse?.name }}</v-card-title>
    <v-card-subtitle class="poppins-light">
      Location: {{ selectedHouse?.purok }} <br>
      Contact Number: {{ selectedHouse?.contact_number }}
    </v-card-subtitle>
    <v-img :width="371" class="ma-4" :src="selectedHouse?.img || '/bh_sample.jpg'"></v-img>

    <!-- Display room types here -->
     <v-divider></v-divider>
     <br>
    <v-card-title class="text-center my-0 anton-regular">ADDITIONAL DETAILS</v-card-title>
    <v-row class=" text-center">
      <v-col v-for="room in houseRooms" :key="room.id">
          <v-img :src="room.img || '/room_sample.jpg'" class="ma-2"></v-img>
          <v-card-text class="poppins-light">{{ selectedHouse?.description }}</v-card-text>
          <v-chip class="mx-2">Vacancy: {{ room.room_vacancy }}</v-chip>
          <v-chip class="mx-2">Capacity: {{ room.room_capacity }}</v-chip>
          <v-chip class="mx-2 my-3">Rate: ₱{{ room.room_rate }}</v-chip>
      </v-col>
    </v-row>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="#dc4e1d" text @click="dialog = false">Close</v-btn>
    </v-card-actions>
  </v-card>
</v-dialog>

      </v-container>
      <v-container class="my-5"> 
      <v-row>
        <v-col cols="12" md="12">
          <h2>CONNECT WITH US</h2>
        </v-col>
        <v-col cols="12" md="4">
          <v-card
            prepend-avatar="/background.png"
            subtitle="System Analyst"
            title="Jherto Lagdamen"
            class="poppins-light"
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
            prepend-avatar="/myprof.jpg"
            subtitle="Lead Developer"
            title="Francine Claire Jamilo"
            class="poppins-light"
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
            class="poppins-light"
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
    </template>
  </AppLayout>
</template>
