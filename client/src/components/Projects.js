import React from "react";
import FamilyRecipes from "../Images/FamilyRecipes.jpeg"

const Projects = () => {
  return (
    <div>
      <h1>Projects</h1>
      <p>
        I've worked on a variety of projects during my time at Flatiron, some of
        which include areas of personal interest.
      </p>
      <h2>Capstone Project - Family Recipes</h2>
      <img src={FamilyRecipes} height="500" width="700" alt="Family Recipes" />
      <p className="projects-p">
        I had the idea to have a place to store family recipes and share them
        with the world. I was helping family clean out old items and I came
        across a recipe book. It was written with a pencil and the lead was
        fading. I thought to myself that a family passdown like this should be
        preserved.
      </p>
      <h3>Ruby on Rails and React Mix</h3>
    </div>
  );
};

export default Projects;
