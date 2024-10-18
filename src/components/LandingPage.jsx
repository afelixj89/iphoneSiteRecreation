import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  SignedOut,
  SignInButton,
  SignUpButton,
  useUser,
} from "@clerk/clerk-react";

const LandingPage = () => {
  const navigate = useNavigate();
  const { user, isSignedIn } = useUser();

  useEffect(() => {
    if (isSignedIn) {
      console.log("Navigation triggered to /home");
      navigate("/home"); // This should be called when signed in
    } else {
      console.log("User not signed in, staying on /");
    }
  }, [isSignedIn, navigate]);
  

  return (
    <div className="landing-page">
      <h1>Welcome to iPhone Showcase</h1>
      <p>Sign up or log in to access all features.</p>
      <SignedOut>
        <SignUpButton mode="modal" />
        <SignInButton mode="modal" />
      </SignedOut>
    </div>
  );
};

export default LandingPage;
