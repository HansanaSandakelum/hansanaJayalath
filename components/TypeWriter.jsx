import React from "react";
import { Typewriter } from "react-simple-typewriter";

const TypeWriter = () => {
  return (
    <div>
      <Typewriter
        loop={true}
        words={["Frontend Developer", "Backend Developer"]}
        cursor=''
        typeSpeed={100}
      ></Typewriter>
    </div>
  );
};

export default TypeWriter;
