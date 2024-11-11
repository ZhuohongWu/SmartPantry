/* src/app/add-food/page.tsx */
'use client';

import { useContext, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AddFoodItem from '../../components/AddFoodItem';
import AuthContext from '../../context/AuthContext';

const AddFoodPage = () => {
  const authContext = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (!authContext?.isLoggedIn) {
      router.push('/login');
    }
  }, [authContext, router]);

  if (!authContext?.isLoggedIn) {
    return null;
  }

  return (
    <>
      <Header />
      <main>
        <AddFoodItem />
      </main>
      <Footer />
    </>
  );
};

export default AddFoodPage;
