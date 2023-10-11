import Project from "../components/projects/Project";
import { projectsList } from "./../helpers/ProjectList";


const Projects = () => {
    return (<main className="section">
        <div className="container">
            <h2 className="title-1">Projects</h2>
            <ul className="projects">
                {projectsList.map((project, index) => {
                    return <Project key={index} title={project.title} img={project.img} index ={index}/>;
                })}

            </ul>
        </div>
    </main>);
}

export default Projects;