import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./Logout";

export const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  console.log(user)
  if (isLoading) {
    return <div>Loading...</div>;
  }
  
  return (
    isAuthenticated && (

        <div class="card text-center">
  <div class="card-header">
    Usuario
  </div>
  <div class="card-body">
  <img src={user.picture} alt={user.name} />
    <h5 class="card-title">{user.name}</h5>
    <p class="card-text">{user.email}.</p>
    <a href="#" class="btn btn-primary"><LogoutButton/></a>
  </div>
      </div>
    )
  );
};