import React from 'react';
import Image from 'next/image';
import Pill from '@/components/common/Pill';
import Card from '@/components/common/Card';
import { HERO_IMAGE, FILTERS, PROPERTYLISTINGSAMPLE } from '@/constants';

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center text-white">
        <Image
          src={HERO_IMAGE}
          alt="Hero"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
        <div className="z-10 text-center bg-black/50 p-6 rounded-xl">
          <h1 className="text-4xl font-bold mb-2">Find your favorite place here!</h1>
          <p className="text-lg">The best prices for over 2 million properties worldwide.</p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="my-8 px-4">
        <div className="flex gap-4 flex-wrap">
          {FILTERS.map((filter) => (
            <Pill key={filter} label={filter} />
          ))}
        </div>
      </section>

      {/* Listing Section */}
      <section className="px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROPERTYLISTINGSAMPLE.map((property) => (
          <Card
            key={property.id}
            image={property.image}
            name={property.name}
            price={property.price}
            rating={property.rating}
          />
        ))}
      </section>
    </div>
  );
};

export default HomePage;
