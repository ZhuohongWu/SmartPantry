/* src/app/signup/page.tsx */
'use client';

import { useContext } from 'react';
import { useRouter } from 'next/navigation';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AuthContext from '../../context/AuthContext';
import styles from './Signup.module.css';

const SignupPage = () => {
  const authContext = useContext(AuthContext);
  const router = useRouter();

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate successful signup
    authContext?.setIsLoggedIn(true);
    router.push('/');
  };

  return (
    <>
      <Header />
      <main className={styles.main}>
        <h2>Signup</h2>
        <form onSubmit={handleSignup} className={styles.form}>
          <input
            type="text"
            placeholder="Username"
            required
            className={styles.input}
          />
          <input
            type="email"
            placeholder="Email"
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
            Signup
          </button>
        </form>
      </main>
      <Footer />
    </>
  );
};

export default SignupPage;
