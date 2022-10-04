import React from "react";
import { authService } from "fbase";

export const Profile = ({isLoggedIn}) => {
    const onLogOutClick = () => {
        authService.signOut();
    }

    return <button onClick={onLogOutClick}>Log Out</button>;
}
export default Profile;