// components/AmenityCard.tsx
import React from 'react';
import Image from 'next/image';

interface AmenityCardProps {
  image: string;
  title: string;
  description: string;
}

const AmenityCard: React.FC<AmenityCardProps> = ({ image, title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-60">
        <Image src={image} alt={title} layout="fill" objectFit="cover" />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold mb-4">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default AmenityCard;
