/* src/components/Header.tsx */
'use client';

import Link from 'next/link';
import { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import styles from './Header.module.css';

const Header = () => {
  const authContext = useContext(AuthContext);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <h1>
          <Link href="/">Pantry App</Link>
        </h1>
      </div>
      <nav className={styles.nav}>
        <Link href="/">Home</Link>
        {authContext?.isLoggedIn ? (
          <>
            <Link href="/add-food">Add Food</Link>
            <button
              onClick={() => authContext.setIsLoggedIn(false)}
              className={styles.logoutButton}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link href="/login">Login</Link>
            <Link href="/signup">Signup</Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
