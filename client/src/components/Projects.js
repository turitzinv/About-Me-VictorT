import React from "react";
import FamilyRecipes from "../Images/FamilyRecipes.jpeg";
import GymView from "../Images/GymView.jpeg";
import PersonalLibrary from "../Images/PersonalLibrary.jpeg"

const Projects = () => {
  return (
    <div>
      <h1>Projects</h1>
      <p>
        I've worked on a variety of projects during my time at Flatiron, some of
        which include areas of personal interest.
      </p>
      <h2>Capstone Project - Family Recipes</h2>
      <h4>Ruby on Rails and React</h4>
      <img src={FamilyRecipes} height="500" width="700" alt="Family Recipes" />
      <p className="projects-p">
        I had the idea to have a place to store family recipes and share them
        with the world. I was helping family clean out old items and I came
        across a recipe book. It was written with a pencil and the lead was
        fading. I thought to myself that a family passdown like this should be
        preserved.
        <p>
          The following deployed website link will open a new tab and may take a
          moment to load.
        </p>
        <a href="https://family-recipes.onrender.com">Deployed Website </a>
      </p>
      <h2>GymView</h2>
      <h4>Ruby on Rails and React</h4>
      <img id="GymView-image" src={GymView} alt="GymView" />
      <p className="projects-p">
        This project is inspired by my love for fitness. At the time of this
        project I was in the process of finding a new gym. The idea was born to
        create GymView, your view into all gyms! Users can read, post, and edit
        their own reviews on gyms.
      </p>
      <a href="https://github.com/turitzinv/gym-review-project">Github Link </a>
      <h2>Personal Library</h2>
      <h4>Sinatra and React</h4>
      <img id="PersonalLibrary-image" src={PersonalLibrary} alt="Personal Library" />
      <p className="copyright">
        Copyright © 2023 Victor Turitzin. All rights reserved This website and
        its contents are protected by copyright law. Any unauthorized use of
        this website or its contents may be a violation of copyright law. You
        may not reproduce, distribute, modify, transmit, or create derivative
        works from this website or its contents without the prior written
        permission of Victor Turitzin.
      </p>
    </div>
  );
};

//To do:
//Add Phase 3 Project
//Have links open a new tab, not leave website

export default Projects;
