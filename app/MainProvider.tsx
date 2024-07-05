"use client";
import { SessionProvider } from "next-auth/react";
import React, { FC, ReactNode } from "react";

interface iProvider {
  children: ReactNode;
}

const MainProvider: FC<iProvider> = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default MainProvider;
