import React from 'react';
import Image from 'next/image';

interface CardProps {
  image: string;
  name: string;
  price: string;
  rating: number;
}

const Card: React.FC<CardProps> = ({ image, name, price, rating }) => {
  return (
    <div className="border rounded-xl overflow-hidden shadow-md bg-white">
      <div className="relative h-48 w-full">
        <Image src={image} alt={name} layout="fill" objectFit="cover" />
      </div>
      <div className="p-4">
        <h2 className="text-lg font-semibold">{name}</h2>
        <p className="text-sm text-gray-600">{price}</p>
        <p className="text-sm text-yellow-500">⭐ {rating}</p>
      </div>
    </div>
  );
};

export default Card;