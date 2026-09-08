import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Home } from "./pages/Home";
import { Project } from "./pages/Project";

function Scroll() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const node = document.querySelector(location.hash);
      if (node) {
        node.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [location.pathname, location.hash]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <Scroll />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work/:slug" element={<Project />} />
      </Routes>
    </BrowserRouter>
  );
}
