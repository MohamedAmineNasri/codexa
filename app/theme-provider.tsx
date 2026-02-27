"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useUser } from "@clerk/nextjs";
import axios from "axios";
import { useEffect } from "react";
import { UserDetailContext } from "@/context/UserDetailContext";
import Header from "./_components/Header";

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
        {/* Header / Navbar  */}
        <div className="flex flex-col items-center">
          <Header />
        </div>
        {children}
      </UserDetailContext.Provider>
    </NextThemesProvider>
  );
}
