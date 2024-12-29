import React from "react";
import Home from "./pages/Home/Home";
import Test from "./components/Test/Test";
import Test2 from "./components/Test/Test2";
import Hero from "./components/AnotherPage/Hero";




import AnotherPage from "./pages/AnotherPage";
import HeroText from "./components/AnotherPage/HeroText";
import May9 from "./pages/AnotherPagePages/May9";
import July7 from "./pages/AnotherPagePages/July7";

function App() {
  return (
    <div className="h-screen  w-[1024px] mx-auto">
      {/* <AnotherPage/> */}
      <Hero/>
      {/* <May9 /> */}
      {/* <July7 /> */}
    </div>
  );
}

export default App;
