import React, {Component} from 'react';

export const Projects = ({project_name}) => {
  console.log(project_name)
  return(
    <section>
      <h3>{project_name}</h3>
    </section>
  )
}

export default Projects;