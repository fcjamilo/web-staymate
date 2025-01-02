<template>
    <v-container>
    <v-row>
      <v-col>
        <v-card class="pa-4 opacity-80" elevation="2" color="#3a7871">
          <v-card-title class="text-h5 font-weight-bold text-center">
            YOUR FAVORITES
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="house in boardingHouses" :key="house.id" cols="12" sm="6" md="4">
        <v-card>
          <v-card-title>
            {{ house.name }}
          </v-card-title>
          <v-img :src="house.img || '/room_sample.jpg'" class="ma-2"></v-img>
          <v-card-text>
            Location: {{ house.purok }} <br>
            Contact Number: {{ house.contact_number }} <br>
            Description: {{ house.description }}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { ref, onMounted } from 'vue';
import { supabase } from '@/utils/supabase';

export default {
  setup() {
    const boardingHouses = ref([]); // Stores data from the boarding_houses table

    const fetchFavoritesAndBoardingHouses = async () => {
      const userId = localStorage.getItem('user_id');
      if (!userId) {
        console.error('User not logged in');
        return [];
      }

      try {
        // Fetch user's favorites
        const { data: favorites, error: favoritesError } = await supabase
          .from('favorites')
          .select('boarding_house_id')
          .eq('user_id', userId);

        if (favoritesError) {
          console.error('Error fetching favorites:', favoritesError);
          return [];
        }

        if (favorites.length === 0) {
          console.warn('No favorites found for the user');
          return [];
        }

        const boardingHouseIds = favorites.map((favorite) => favorite.boarding_house_id);

        // Fetch boarding houses using the IDs from favorites
        const { data: boardingHouseData, error: boardingHouseError } = await supabase
          .from('boarding_houses')
          .select('*')
          .in('id', boardingHouseIds); // Filter by IDs from favorites

        if (boardingHouseError) {
          console.error('Error fetching boarding houses:', boardingHouseError);
          return [];
        }

        return boardingHouseData;
      } catch (error) {
        console.error('Unexpected error fetching data:', error);
        return [];
      }
    };

    const loadFavorites = async () => {
      const fetchedBoardingHouses = await fetchFavoritesAndBoardingHouses();
      boardingHouses.value = fetchedBoardingHouses;
    };

    // Load favorites when the component is mounted
    onMounted(() => {
      loadFavorites();
    });

    return {
      boardingHouses,
    };
  },
};
</script>

