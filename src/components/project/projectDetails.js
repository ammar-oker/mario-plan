import React from 'react'
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import moment from 'moment';


const ProjectDetails = (props) => {
    let { project } = props;
    if (project) {
        return (
            <div className="project-details container section">
                <div className="card z-depth-0">
                    <div className="card-content">
                        <span className="card-title">{project.title}</span>
                        <p>{project.content}</p>
                    </div>
                    <div className="footer crard-actions grey lighten-4 grey-text">
                        <div>Posted by {project.authorFirstName} {project.authorLastName}</div>
                        <div>{moment(project.createdIn.toDate().toString()).calendar()}</div>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className="container center">
            <div className="preloader-wrapper big active">
                <div className="spinner-layer spinner-blue">
                    <div className="circle-clipper left">
                        <div className="circle"></div>
                    </div><div className="gap-patch">
                        <div className="circle"></div>
                    </div><div className="circle-clipper ">
                        <div className="circle"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.id;
    let projects = state.firestore.data.projects
    let project = projects ? projects[id] : null
    return {
        project
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'projects' }
    ])
)(ProjectDetails)
