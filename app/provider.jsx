"use client";
import { UserDetailContext } from "../context/UserDetailContext";
import { useUser } from "@clerk/nextjs"; 
import axios from "axios";
import React, { useEffect, useState } from "react";

function Provider({ children }) {
  const { user } = useUser();
  const [userDetail, setUserDetail] = useState();

  useEffect(() => {
    const createNewUser = async () => {
      try {
        const result = await axios.post("/api/user", {
          name: user?.fullName,
          email: user?.primaryEmailAddress?.emailAddress
        });
        console.log("result", result.data);
        setUserDetail(result.data);
      } catch (error) {
        console.error("Error creating user:", error);
      }
    };

    if (user) {
      createNewUser();
    }
  }, [user]);

  return (
    <UserDetailContext.Provider value={{ userDetail, setUserDetail }}>
      <div>{children}</div>
    </UserDetailContext.Provider>
  );
}

export default Provider;
