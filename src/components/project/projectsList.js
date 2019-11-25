import React from 'react';
import ProjectSummary from './projectSummary';
import { Link } from 'react-router-dom';

const ProjectsList = ({projects}) => {
    return (
        <div id='projects-list' className="projects-list scetion">
            {projects && projects.map(project => {
                return (
                    <Link to={`/projects/${project.id}`} key={project.id} >
                        <ProjectSummary project={project} />
                    </Link>
                )
            })}
        </div>
    )
}

export default ProjectsList;