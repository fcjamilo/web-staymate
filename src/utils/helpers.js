// 👉 Avatar Text Initials
export const getAvatarText = (name) => {
    const nameParts = name.trim().split(' ').filter(Boolean)
  
    const initials = nameParts.slice(0, 3).map((part) => part[0].toUpperCase())
  
    return initials.join('')
  }


  export const fetchFavorites = async () => {
    const userId = localStorage.getItem('user_id');
    console.log('Fetching favorites for user ID:', userId);
    if (!userId) {
      console.error('User not logged in');
      return [];
    }
  
    try {
      const { data, error } = await supabase
        .from('favorites')
        .select('boarding_house_id')
        .eq('user_id', userId);
  
      if (error) {
        console.error('Error fetching favorites:', error);
        return [];
      } else {
        console.log('Fetched favorites:', data);
        return data;
      }
    } catch (error) {
      console.error('Unexpected error fetching favorites:', error);
      return [];
    }
  };
