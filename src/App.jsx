// hooks
import { useState, useEffect } from "react";

// style
import { GlobalStyle } from "./Style/Global.Style";

// router
import { BrowserRouter, Routes, Route } from "react-router";

// components
import Homepage from "./Pages/Home";
import Shopping from "./Pages/Shopping";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

// context
import DataContext from "./Contexts/DataContext";

// main
function App() {
  // states
  const [isScrolled, setIsScrolled] = useState(false);
  const [selected, setSelected] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <GlobalStyle />
      <DataContext.Provider
        value={{ scroll: isScrolled, selected, setSelected }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/shop" element={<Shopping />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </DataContext.Provider>
    </>
  );
}

export default App;
