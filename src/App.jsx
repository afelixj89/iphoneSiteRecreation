import { Routes, Route, Navigate } from "react-router-dom";
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Model from "./components/Model";
import Highlight from "./components/Highlight";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import LandingPage from "./components/LandingPage"; // New component for signed-out users
import * as Sentry from "@sentry/react";

const App = () => {
  return (
    <main className="bg-black">
<Routes>
    <Route
        path="/"
        element={
            <SignedOut>
                <LandingPage />
            </SignedOut>
        }
    />
    <Route
        path="/home"
        element={
            <SignedIn>
                <Navbar />
                <Hero />
                <Highlight />
                <Model />
                <Features />
                <HowItWorks />
            </SignedIn>
        }
    />
  
</Routes>
    </main>
  );
};

export default Sentry.withProfiler(App);
