// src/app/page.tsx
'use client';

import { useContext } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FoodList from '../components/FoodList';
import FoodItemsContext from '../context/FoodItemsContext';

const HomePage = () => {
  const foodItemsContext = useContext(FoodItemsContext);
//lklj
  if (!foodItemsContext) {
    return <div>Loading...</div>;
  }

  const { foodItems } = foodItemsContext;

  return (
    <>
      <Header />
      <main>
        <FoodList items={foodItems} />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
