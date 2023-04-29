"use client";
import Image from "next/image";
import Header from "../components/Header";
import SideBar from "@/components/SideBar";

const Home = () => {
  return (
    <main className="p-3">
      <Header className="z-20 fixed top-0 left-0 w-full h-14" />
      <SideBar className="z-10 h-20 fixed left-0 top-0 pt-14" />
    </main>
  );
};
export default Home;
