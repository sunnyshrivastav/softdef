import { useState } from "react";
import "./App.css";
import Footer from "./components/layout/Footer";
import Hero from "./components/layout/Hero";
import Navbar from "./components/layout/Navbar";
import PopularProducts from "./components/layout/PopularProducts";
import Sidebar from "./components/Siedbar/Sidebar";
import { Button } from "./components/Common";
import {arrowRight} from "./assets/icons"

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main>
      {/* Navbar */}
      <Navbar />
      {/* Main Grid */}
      <div className="xl:padding-l wide:padding-r padding-b flex gap-6">
        {/* Sidebar Desktop */}
        <aside className="hidden md:block w-64 flex-shrink-0 py-24">
          <Sidebar />
        </aside>

        {/* Right column */}
        <div className="flex-1 flex flex-col gap-12">
          <section>
            <Hero />
          </section>
           <div className="md:hidden mt-6 ml-4">
        <Button onClick={()=>{setIsOpen(true)}} label='Filter by' iconURL={arrowRight} className='mt-14 py-28' />
      </div>
          <section>
            <PopularProducts />
          </section>
        </div>
      </div>

      {/* Mobile Sidebar Drawer */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex">
          {/* Drawer panel */}
          <div className="w-64 bg-white p-4 h-full transform transition-transform duration-300 ease-in-out translate-x-0">
            <button
              onClick={() => setIsOpen(false)}
              className="mb-4 text-red-500 font-semibold"
            >
              Close ✕
            </button>
            <Sidebar />
          </div>

          {/* Click outside closes */}
          <div
            className="flex-1"
            onClick={() => setIsOpen(false)}
          ></div>
        </div>
      )}

      {/* Footer */}
      <section className="bg-black padding-x padding-t pb-8">
        <Footer />
      </section>
    </main>
  );
}

export default App;
