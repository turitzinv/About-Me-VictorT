import React from "react";
import FamilyRecipes from "../Images/FamilyRecipes.jpeg";
import GymView from "../Images/GymView.jpeg"

const Projects = () => {
  return (
    <div>
      <h1>Projects</h1>
      <p>
        I've worked on a variety of projects during my time at Flatiron, some of
        which include areas of personal interest.
      </p>
      <h2>Capstone Project - Family Recipes</h2>
      <h3>Ruby on Rails and React</h3>
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
        <a href="https://family-recipes.onrender.com" target="_blank">
          Deployed Website{" "}
        </a>
      </p>
      <h2>GymView</h2>
      <img 
      id = "GymView-image"
      src={GymView}
      alt="GymView"
      />
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

export default Projects;
