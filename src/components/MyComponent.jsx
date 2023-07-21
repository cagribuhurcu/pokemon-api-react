import React, { useState, useEffect } from 'react';
import fetchApiData from '../utils/api';
import '../style/myComponent.scss'

const MyComponent = () => {
  const [apiData, setApiData] = useState([]);
  const [visiblePokemons, setVisiblePokemons] = useState(36);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchApiData();
      if (data) {
        setApiData(data.results);
      }
    };

    fetchData();
  }, []);
  
  const handleLoadMore = () => {
    setVisiblePokemons((prevVisiblePokemons) => prevVisiblePokemons + 36);
  };

  return (
    <div>
      <h1>Pokemon Listesi</h1>
      <div className="pokemon-container">
        {apiData.slice(0,visiblePokemons).map((pokemon, index) => (
          <div key={index} className="pokemon-card">
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index + 1}.png`}
              alt={pokemon.name}
            />
            <h2>{pokemon.name}</h2>
          </div>
        ))}
      </div>
      {visiblePokemons < apiData.length && (
        <button className='load-more-button' onClick={handleLoadMore}>Load More</button>
      )}
    </div>
  );
};

export default MyComponent;