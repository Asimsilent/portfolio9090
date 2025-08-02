import Header from "./ui/Header";
import Homepage from "./Homepage";
import Footer from "./ui/Footer";
import { useState } from "react";
import About from "./ui/About";
import Skills from "./ui/Skills";
import Contact from "./ui/Contact";
import Work from "./ui/Work";

function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div
      className="p-5"
      style={
        isDark
          ? {
              backgroundColor: "rgba(30, 30, 40, 0.95)",
              color: "rgba(190, 230, 255, 0.9)",
            }
          : {
              backgroundColor: "rgba(250, 255, 270, 1)",
              color: "rgba(40, 40, 60, 0.85)",
            }
      }
    >
      <Header isDark={isDark} setIsDark={setIsDark} />
      <Homepage isDark={isDark} />
      <About />
      <Skills />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
