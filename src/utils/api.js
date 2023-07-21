import axios from 'axios';

const fetchApiData = async () => {
  try {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=1010'); // API URL'sini buraya girin
    return response.data; // API'den gelen verileri döndürün
  } catch (error) {
    console.error('API isteği başarısız:', error);
    return null;
  }
};

export default fetchApiData;