"use client";
import React, { FC, ReactNode, useEffect, useState } from "react";
import scss from "./LayoutSite.module.scss";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Loader from "../ui/loader/Loader";

interface LayoutSiteProps {
  children: ReactNode;
}
const LayoutSite: FC<LayoutSiteProps> = ({ children }) => {
  const [isLoader, setIsLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoader(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {isLoader ? (
        <>
          <Loader />
        </>
      ) : (
        <>
          <div className={scss.LayoutSite}>
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </>
      )}
    </>
  );
};

export default LayoutSite;
