import React, { createContext, useContext, useState } from "react";

const UserProfileContext = createContext();

const UserProfileProvider  = ({ children }) => {
    const [profile, setProfile] = useState(null);

    return (
      <UserProfileContext.Provider value={{ profile, setProfile }}>
        {children}
      </UserProfileContext.Provider>
    );
}

export default UserProfileProvider

export const useUserProfile = () => useContext(UserProfileContext);