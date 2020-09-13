import React from 'react';


const ProjectsContext = React.createContext()

export const projectsData = ProjectsContext.Provider
export const Projects = ProjectsContext.Consumer

export default ProjectsContext