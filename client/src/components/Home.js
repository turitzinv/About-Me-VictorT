import React from "react";
import PalmTree from "../Images/PalmTree.jpg";

const Home = () => {
  return (
    <div>
      <h1>About Me - Victor Turitzin</h1>
      <p>Welcome to my Personal Website!</p>
      <p>
        Please use the navigation bar on the left to learn about me and my
        projects.
      </p>
      <img src={PalmTree} height="500" width="400" alt="Palm Tree" />
      <p id="copyright-home">
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

export default Home;
