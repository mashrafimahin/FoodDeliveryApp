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
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import Dashboard from "./Pages/Dashboard";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";

// context
import DataContext from "./Contexts/DataContext";

// buttons
import TopButton from "./Components/TopButton";

// main
function App() {
  // states
  const [isScrolled, setIsScrolled] = useState(false);
  const [selected, setSelected] = useState("");
  const [ShowTopButton, setShowTopButton] = useState(false);

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

  useEffect(() => {
    const handleButton = () => {
      if (window.scrollY > 500) {
        setShowTopButton(true);
      } else {
        setShowTopButton(false);
      }
    };

    window.addEventListener("scroll", handleButton);

    return () => {
      window.removeEventListener("scroll", handleButton);
    };
  }, []);

  return (
    <>
      <GlobalStyle />
      {ShowTopButton && <TopButton />}
      <DataContext.Provider
        value={{ scroll: isScrolled, selected, setSelected }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/shop" element={<Shopping />} />
            <Route path="/about" element={<About />} />
            <Route path="/blogs" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </BrowserRouter>
      </DataContext.Provider>
    </>
  );
}

export default App;
