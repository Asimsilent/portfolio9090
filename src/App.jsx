import { useState } from "react";

import Header from "./ui/Header";
import Homepage from "./ui/Homepage";
import Footer from "./ui/Footer";
import About from "./ui/About";
import Skills from "./ui/Skills";
import Contact from "./ui/Contact";
import Work from "./ui/Work";

function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className={`app ${isDark ? "dark" : "light"}`}>
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
