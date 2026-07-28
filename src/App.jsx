import HeroSection from "./components/HeroSection.jsx";
import Navbar from "./components/Navbar.jsx";

const App = () => {
  return (
    <div className="flex flex-col h-screen w-full px-8 md:px-28 py-8 gap-16">
      <Navbar />
      <HeroSection />
    </div>
  );
};

export default App;
