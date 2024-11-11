/* src/components/FoodList.tsx */
import FoodItem from './FoodItem';
import styles from './FoodList.module.css';

interface FoodListProps {
  items: {
    title: string;
    imgSrc: string;
  }[];
}

const FoodList: React.FC<FoodListProps> = ({ items }) => {
  return (
    <div className={styles.foodList}>
      {items.map((item, index) => (
        <FoodItem key={index} item={item} />
      ))}
    </div>
  );
};

export default FoodList;
