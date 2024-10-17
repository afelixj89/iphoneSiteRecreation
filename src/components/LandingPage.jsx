import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  SignedOut,
  SignInButton,
  SignUpButton,
  useAuth,
  useUser,
} from "@clerk/clerk-react";

const LandingPage = () => {
  const navigate = useNavigate();
  const { user, isSignedIn } = useUser()

  useEffect(() => {
    if (isSignedIn) {
        console.log("User data:", user); // Log user data for debugging
        navigate("/home"); // Automatically redirect to /home when signed in
    } else {
        console.log("User is not signed in");
    }
}, [isSignedIn, user, navigate]);

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
