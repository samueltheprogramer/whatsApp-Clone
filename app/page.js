"use client";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import HomeFeeds from "./components/HomeFeeds";
import BottomNav from "./components/BottomNav";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  m-2">
      <Navbar />
      <SearchBar />
      <HomeFeeds />
      <BottomNav />
    </main>
  );
}
