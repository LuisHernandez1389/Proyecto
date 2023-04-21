import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import '../App.css'
export const ProfileBar = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    isAuthenticated && (
      <div>
        <img class="img" src={user.picture}  width="60" height="60" />
        
        
      </div>
    )
  );
};