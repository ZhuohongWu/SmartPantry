// src/components/AddFoodItem.tsx
'use client';

import { useState, useContext } from 'react';
import styles from './AddFoodItem.module.css';
import FoodItemsContext from '../context/FoodItemsContext';
import { useRouter } from 'next/navigation';

const AddFoodItem: React.FC = () => {
  const [title, setTitle] = useState('');
  const [imgSrc, setImgSrc] = useState('');
  const foodItemsContext = useContext(FoodItemsContext);
  const router = useRouter();

  if (!foodItemsContext) {
    return <div>Loading...</div>;
  }

  const { addFoodItem } = foodItemsContext;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    addFoodItem({ title, imgSrc });
    setTitle('');
    setImgSrc('');

    // Redirect to home page after adding the item
    router.push('/');
  };

  return (
    <div className={styles.addFoodItem}>
      <h2>Add a New Food Item</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          placeholder="Food Name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className={styles.input}
        />
        <input
          type="text"
          placeholder="Image URL"
          value={imgSrc}
          onChange={(e) => setImgSrc(e.target.value)}
          required
          className={styles.input}
        />
        <button type="submit" className={styles.button}>
          Add Food
        </button>
      </form>
    </div>
  );
};

export default AddFoodItem;
