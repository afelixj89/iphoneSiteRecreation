import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Highlight from "./components/Highlight";
import Model from "./components/Model";
import Highlights from "./components/Highlight";
import * as Sentry from '@sentry/react'

const App = () => {


  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlight />
      <Model />
    </main>
  );
};

export default Sentry.withProfiler(App);
