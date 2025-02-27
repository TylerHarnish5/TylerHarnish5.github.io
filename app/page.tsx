// app/page.tsx
import Chatbot from "@/components/ChatBot";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Main from "@/components/main";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <Hero />
      <Main />

      {/* Add Chatbot component */}
      <div className="p-6 flex justify-center">
        <Chatbot />
      </div>

      <Footer />
    </div>
  );
}
