import React from 'react'
import ParkImage from "../Images/Park.jpg"
import DeerImage from "../Images/Deer.jpg"
import Deer2Image from "../Images/Deer2.jpg"

const Hobbies = () => {
  return (
    <div>
      <h1>Hobbies</h1>
      <img src = {ParkImage} height="500" width="400" alt="Park" />
      <p>In my spare time I love to go for a run at my local park.</p>
      <img id= "deer-image" src = {DeerImage} height="500" width="400" alt="Park" />
      <img id = "deer-image2" src = {Deer2Image} height="500" width="400" alt="Park" />
      <p className="copyright">
        Copyright © 2023 Victor Turitzin. All rights reserved This website and
        its contents are protected by copyright law. Any unauthorized use of
        this website or its contents may be a violation of copyright law. You
        may not reproduce, distribute, modify, transmit, or create derivative
        works from this website or its contents without the prior written
        permission of Victor Turitzin.
      </p>
    </div>
  )
}

export default Hobbies