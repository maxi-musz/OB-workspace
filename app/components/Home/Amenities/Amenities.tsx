// components/Amenities.tsx
import amenitiesData from '@/data/amenitiesData';
import React from 'react';// Import the amenities data
import AmenityCard from './AmenityCards';

const Amenities: React.FC = () => {
  return (
    <div className="md:container mx-auto py-8">
      <h1 className="text-4xl font-bold text-green-500 text-center font-serif">Amenities</h1>
      <div className="text-slate-500 text-center mt-6 mb-6">Some of the amenities provided by O~B Hub Workspace</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {amenitiesData.map((amenity, index) => (
          <div key={index}>
            <AmenityCard {...amenity} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Amenities;
