import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Smart Astronomy Discord Bot",
          "Astronomy-database",
          "Science Bot",
          "Advanced Astronomy bot",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
