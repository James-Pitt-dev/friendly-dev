import ProjectCard from "~/components/ProjectCard";
import type {Route} from "./+types/index" // loader requires this route type
import type {Project} from '~/types';


export async function loader({request}:Route.LoaderArgs): Promise<{projects: Project[]}> { // must be lowercase. our request will be in the shape of route.loaderargs, and the function will return a promise object with an array of project objects
    const res = await fetch('http://localhost:8000/projects')
    const data = await res.json();
    return {projects: data} //make a new object with the data
}

const ProjectsPage = ({loaderData}: Route.ComponentProps) => {

    const {projects} = loaderData as {projects: Project []};

    return ( <>
        <h2 className="text-3xl text-white font-bold pb-5">
            🚀 Projects
        </h2>
        <div className="grid gap-6 sm:grid-cols-2">
            {projects.map((project) => (
                <ProjectCard key={project.id} project={project}/>
            ))}
        </div>
    </> );
}
 
export default ProjectsPage;