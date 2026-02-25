"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useUser } from "@clerk/nextjs";
import axios from "axios";
import { useEffect } from "react";
import { UserDetailContext } from "@/context/UserDetailContext";

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  const { user } = useUser();

  const [userDetail, setUserDetail] = React.useState();

  const CreateNewUser = async () => {
    const result = await axios.post("/api/user", {});
    console.log(result.data);
    setUserDetail(result?.data);
  };

  useEffect(() => {
    user && CreateNewUser();
  }, [user]);

  return (
    <NextThemesProvider {...props}>
      <UserDetailContext.Provider value={{ userDetail, setUserDetail }}>
        {children}
      </UserDetailContext.Provider>
    </NextThemesProvider>
  );
}
