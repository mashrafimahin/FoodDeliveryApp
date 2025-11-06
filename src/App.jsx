// hooks
import { useState, useEffect, Suspense, lazy } from "react";

// style
import { GlobalStyle } from "./Style/Global.Style";

// router
import { BrowserRouter, Routes, Route } from "react-router";

// Lazy load components for better performance
const Homepage = lazy(() => import("./Pages/Home"));
const Shopping = lazy(() => import("./Pages/Shopping"));
const About = lazy(() => import("./Pages/About"));
const Blog = lazy(() => import("./Pages/Blog"));
const Contact = lazy(() => import("./Pages/Contact"));
const Dashboard = lazy(() => import("./Pages/Dashboard"));
const Order = lazy(() => import("./Pages/Order"));
const Login = lazy(() => import("./Components/Login"));
const SignUp = lazy(() => import("./Components/SignUp"));
const HelpCenter = lazy(() => import("./Pages/HelpCenter"));
const Terms = lazy(() => import("./Pages/Terms"));
const Privacy = lazy(() => import("./Pages/Privacy"));
const FAQ = lazy(() => import("./Pages/FAQ"));
const Career = lazy(() => import("./Pages/Careers"));

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
          <Suspense
            fallback={
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100vh",
                  fontSize: "1.2rem",
                  color: "#e74124",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                Loading FoodieHub...
              </div>
            }
          >
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/shop" element={<Shopping />} />
              <Route path="/about" element={<About />} />
              <Route path="/blogs" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/order" element={<Order />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/career" element={<Career />} />
              <Route path="/help" element={<HelpCenter />} />
              <Route path="/terms&policy" element={<Terms />} />
              <Route path="/privacypolicy" element={<Privacy />} />
              <Route path="/faq" element={<FAQ />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </DataContext.Provider>
    </>
  );
}

export default App;
