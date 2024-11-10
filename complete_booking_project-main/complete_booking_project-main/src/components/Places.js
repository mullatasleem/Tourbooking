import React, { useState } from 'react';
import './Places.css';

const Places = () => {
  const [selectedPlace, setSelectedPlace] = useState(null);

  const places = [
    { 
      src: 'https://tse2.mm.bing.net/th?id=OIP.NGvPSNjLG0efnq-uPg6L_wHaE9&pid=Api&P=0&h=220', 
      alt: 'Manali', 
      description: ' perfect for photos that showcase the natural beauty of Manali and its surroundings,',
      details: 'A beautiful beach that stretches along the coast with golden sand and clear waters. Perfect for swimming, sunbathing, and relaxing.',
    },
    { 
      src: 'https://tse4.mm.bing.net/th?id=OIP.Jz8v8XeYDWuw-cKFAo9UOgHaFj&pid=Api&P=0&h=220', 
      alt: 'Ooty', 
      description: 'A mountain retreat with stunning views.',
      details: 'An idyllic mountain retreat surrounded by towering peaks. Ideal for nature lovers, with hiking trails and panoramic views.',
    },
    { 
      src: 'https://tse2.mm.bing.net/th?id=OIP.oTsnbr9UGnN-ehObkt9KRAHaEK&pid=Api&P=0&h=220', 
      alt: 'Kerala', 
      description: 'A historic city with ancient architecture.',
      details: 'Step back in time and explore the ancient ruins, historical buildings, and vibrant culture of this historic city.',
    },
    { 
      src: 'https://tse3.mm.bing.net/th?id=OIP.PWSjhhHXrsm0YvQ2O5cd3AHaE7&pid=Api&P=0&h=220', 
      alt: 'Goa', 
      description: 'Beautiful beach with golden sand.',
      details: 'Immerse yourself in the tranquil atmosphere of this lush garden, surrounded by colorful flowers and serene pathways.',
    },
    { 
      src: 'https://tse4.mm.bing.net/th?id=OIP.kaN4VnvSSguxcYILikQ71wHaEj&pid=Api&P=0&h=220', 
      alt: 'Leh Ladakh', 
      description: 'Vibrant city with a rich cultural scene.',
      details: 'This bustling city offers a rich cultural experience, with museums, theaters, and vibrant street art.',
    },
    { 
      src: 'https://tse1.mm.bing.net/th?id=OIP.mIc85Z7OdHvpttd-IABQBQHaE7&pid=Api&P=0&h=220', 
      alt: 'Maldives', 
      description: 'A quiet lakeside village.',
      details: 'Escape to this charming lakeside village for a peaceful getaway. Perfect for boating, fishing, or simply relaxing by the water.',
    },
    { 
      src: 'https://tse1.mm.bing.net/th?id=OIP.GSoo4W6Smim4udQizZk-fQHaEo&pid=Api&P=0&h=220', 
      alt: 'New York', 
      description: 'land of the free and home of the brave!',
      details: 'Sunshine, clear waters, and palm trees—this tropical island is the perfect destination for beach lovers.',
    },
    { 
      src: 'https://tse1.mm.bing.net/th?id=OIP.INB7nsN_TGttYNu4sINevQHaEW&pid=Api&P=0&h=220', 
      alt: 'Italy', 
      description: 'Beautiful landscapes, amazing culinary delicacies, fashion, arts and history, culture',
      details: 'A breathtaking site with waterfalls cascading down rocky cliffs, surrounded by lush forests and scenic views.',
    },
    { 
      src: 'https://tse3.mm.bing.net/th?id=OIP.IkTczchTRysJAWwlLgs3TQHaE7&pid=Api&P=0&h=220', 
      alt: 'Thailand', 
      description: 'Beautiful place one must visit .',
      details: 'Experience the vast desert landscape, with endless sand dunes stretching as far as the eye can see.',
    },
    
  ];

  return (
    <div className="places">
      <h2>Popular Places</h2>
      <div className="cards-container">
        {places.map((place, index) => (
          <div key={index} className="place-card" onClick={() => setSelectedPlace(place)}>
            <img src={place.src} alt={place.alt} />
            <div className="place-card-info">
              <h3>{place.alt}</h3>
              <p>{place.description}</p>
              <button>View More</button>
            </div>
          </div>
        ))}
      </div>

      {/* Display more information when a place is selected */}
      {selectedPlace && (
        <div className="place-description">
          <h3>{selectedPlace.alt}</h3>
          <img src={selectedPlace.src} alt={selectedPlace.alt} className="place-description-image" />
          <p>{selectedPlace.details}</p>
          <button onClick={() => alert('Booking place...')}>Book Now</button>
          <button onClick={() => setSelectedPlace(null)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default Places;
