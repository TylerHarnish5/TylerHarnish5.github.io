'use client';
import { useEffect } from "react";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Main from "@/components/main";
import Footer from "@/components/footer";
//import Chatbot from "@/components/ChatBot";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <Hero />
      <Main />
      {/*
      <div className="p-6 flex justify-center">
        <Chatbot /> 
      </div>
      */}
      <Footer />
    </div>
  );
}

//To add back in the chatbot, delete the import comment
// and delete line 19, {/*,
// and line 23, */}