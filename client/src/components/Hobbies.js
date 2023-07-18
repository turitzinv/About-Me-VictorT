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
      <img src = {DeerImage} height="500" width="400" alt="Park" />
      <img src = {Deer2Image} height="500" width="400" alt="Park" />
    </div>
  )
}

export default Hobbies