import { useParams } from "react-router-dom";
import BtnGithub from "../components/BtnGithub/BtnGithub";
import { projectsList } from "../helpers/ProjectList";



const ProjectPage = () => {
    const { id } = useParams();
    const  project  = projectsList[id];
    return (
        <main className="section">
            <div className="container">
                <div className="project-details">

                    <h1 className="title-1">{project.title}</h1>

                    <img src={project.imgBig} alt={project.title} className="project-details__cover" />

                    <div className="project-details__desc">
                        <p>Skills: {project.skills}</p>
                    </div>
                    {project.gitHubLink &&(<BtnGithub link="https://docs.google.com/spreadsheets/d/1Xlp-6wvf0UCm1GhajtAzXZmqKFnKylOLJwJBHa25xlY/edit#gid=0" />)}



                </div>
            </div>
        </main>
    );
}

export default ProjectPage; 