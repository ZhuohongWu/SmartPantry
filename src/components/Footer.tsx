/* src/components/Footer.tsx */
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} Pantry App. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
