import { Html } from "@react-three/drei";
import React from "react";

const Loader = () => {
  return (
    <Html>
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
        {/* need to change this to something better */}
        <div className="w-[10vw] h-[10vw] rounded-b-full">Loading...</div>
      </div>
    </Html>
  );
};

export default Loader;
