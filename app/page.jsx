// import { About } from "./components/About";
import { Navbar } from "./components/Navbar";
import Speakers from "./components/Speaker";
import Hero from "./components/Hero";
import Ticket from "./components/Ticket";
import Finalist from "./components/Finalist";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <main className="w-full">
        <div className="bg-hero">
          <Navbar />
          <Hero />
        </div>
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          {/* <About /> */}
          <Finalist />
          <Speakers />
          <Ticket />
        </div>
      </main>
      <Footer />
    </>
  );
}
