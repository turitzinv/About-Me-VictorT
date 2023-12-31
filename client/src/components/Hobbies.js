import React from "react";
import ParkImage from "../Images/Park.jpg";
import DeerImage from "../Images/Deer.jpg";
import Deer2Image from "../Images/Deer2.jpg";
import SnowRun from "../Images/SnowRun.jpg";

const Hobbies = () => {
  return (
    <div>
      <h1>Hobbies</h1>
      <h3>Fitness, Videogames, Learning, and Horrible Puns</h3>
      <img src={ParkImage} height="500" width="400" alt="Park" />
      <p>
        One of my favorite hobbies is to go for a run at my favorite park, no
        matter the weather!
      </p>
      <img
        id="deer-image"
        src={DeerImage}
        height="500"
        width="400"
        alt="Park"
      />
      <img
        id="deer-image2"
        src={Deer2Image}
        height="500"
        width="400"
        alt="Park"
      />
      <img
        id="snow-run-image"
        src={SnowRun}
        height="500"
        width="400"
        alt="Snow Run"
      />
      <p>
        If I'm not running or at the gym, I find myself looking for new things
        to learn, playing videogames, and losing friends with my puns.
      </p>
      <p className="copyright">
        Copyright © 2023-2024 Victor Turitzin. All rights reserved This website and
        its contents are protected by copyright law. Any unauthorized use of
        this website or its contents may be a violation of copyright law. You
        may not reproduce, distribute, modify, transmit, or create derivative
        works from this website or its contents without the prior written
        permission of Victor Turitzin.
      </p>
    </div>
  );
};

export default Hobbies;
