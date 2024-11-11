/* src/app/login/page.tsx */
'use client';

import { useContext } from 'react';
import { useRouter } from 'next/navigation';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AuthContext from '../../context/AuthContext';
import styles from './Login.module.css';

const LoginPage = () => {
  const authContext = useContext(AuthContext);
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate successful login
    authContext?.setIsLoggedIn(true);
    router.push('/');
  };

  return (
    <>
      <Header />
      <main className={styles.main}>
        <h2>Login</h2>
        <form onSubmit={handleLogin} className={styles.form}>
          <input
            type="text"
            placeholder="Username"
            required
            className={styles.input}
          />
          <input
            type="password"
            placeholder="Password"
            required
            className={styles.input}
          />
          <button type="submit" className={styles.button}>
            Login
          </button>
        </form>
      </main>
      <Footer />
    </>
  );
};

export default LoginPage;
