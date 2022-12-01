import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Service from "./pages/Services/Service";
import Blog from "./pages/Blog/Blog";
import Contact from "./pages/Contact/Contact";
import Pictures from "./pages/Pictures/Pictures";
import Videos from "./pages/Videos/Videos";
import Footer from "./components/Footer/Footer";
import BeefHunters from "./pages/BeefHunters/BeefHunters";
import ChickHunters from "./pages/ChickHunters/ChickHunters";
import Careers from "./pages/Careers/Careers";
import Complains from "./pages/Complains/Complains";
import CharityEvents from "./pages/CharityEvents/CharityEvents";
import ComingSoon from "./pages/ComingSoon/ComingSoon";
import PageNotFound from "./pages/404/PageNotFound";

function App() {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/what-we-do" element={<Service />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery/pictures" element={<Pictures />} />
        <Route path="/gallery/videos" element={<Videos />} />
        <Route path="/beef-hunter-careers" element={<BeefHunters />} />
        <Route path="/chick-hunter-careers" element={<ChickHunters />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/complains" element={<Complains />} />
        <Route path="/charity-events" element={<CharityEvents />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
