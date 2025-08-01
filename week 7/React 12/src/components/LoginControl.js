// src/components/LoginControl.js
import React, { useState } from 'react';
import GuestPage from './GuestPage';
import UserPage from './UserPage';

export default function LoginControl() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => setIsLoggedIn(true);
  const handleLogoutClick = () => setIsLoggedIn(false);

  return (
    <div>
      {isLoggedIn ? (
        <>
          <UserPage />
          <button onClick={handleLogoutClick}>Logout</button>
        </>
      ) : (
        <>
          <GuestPage />
          <button onClick={handleLoginClick}>Login</button>
        </>
      )}
    </div>
  );
}
