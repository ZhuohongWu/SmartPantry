// src/app/layout.tsx
import './globals.css';
import { AuthProvider } from '../context/AuthContext';
import { FoodItemsProvider } from '../context/FoodItemsContext';

export const metadata = {
  title: 'Pantry App',
  description: 'A pantry app to manage your food items',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <FoodItemsProvider>{children}</FoodItemsProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
