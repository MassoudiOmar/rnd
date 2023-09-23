import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './src/context/AuthContext'; // Import your AuthProvider
import AuthStack from './src/navigation/AuthStack'; // Import your AuthStack
import MainAppStack from './src/navigation/MainAppStack'; // Import your MainAppStack

const App = () => {
  const [user, setUser] = useState(null); // You can use a more robust authentication state here

  // Define a function to update the user state (e.g., after login)
  const updateUser = (userData) => {
    setUser(userData);
  };

  return (
    <NavigationContainer>
      <AuthProvider>
        {user ? <MainAppStack /> : <AuthStack />}
      </AuthProvider>
    </NavigationContainer>
  );
};

export default App;
