/* src/components/FoodItem.tsx */
import Image from 'next/image';
import styles from './FoodItem.module.css';

interface FoodItemProps {
  item: {
    title: string;
    imgSrc: string;
  };
}

const FoodItem: React.FC<FoodItemProps> = ({ item }) => {
  return (
    <div className={styles.foodItem}>
      <Image
        src={item.imgSrc}
        alt={item.title}
        width={200}
        height={200}
        className={styles.image}
      />
      <h3 className={styles.title}>{item.title}</h3>
    </div>
  );
};

export default FoodItem;
