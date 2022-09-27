import React from "react";
import { authService } from "fbase";
import { Redirect } from "react-router-dom";

export const Profile = ({isLoggedIn}) => {
    const onLogOutClick = () => {
        authService.signOut();
    }

    console.log(isLoggedIn);

    return (
      <>
        {isLoggedIn ? (
          <button onClick={onLogOutClick}>Log Out</button>
        ) : (
          <Redirect to="/" />
        )}
      </>
    );
}
export default Profile;