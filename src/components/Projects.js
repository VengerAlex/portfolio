import { projectsList } from "../utils/projects"
import { useEffect, useState } from "react"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

const Projects = () => {
    const [projects, setProjects] = useState([])
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setProjects(projectsList.slice((page - 1) * 6, page * 6))
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 500);
    }, [page])


    return (
        <div className="md:px-20 px-1">
            {
                loading
                    ? <Loader
                        type="TailSpin"
                        className="flex justify-center"
                        color="#00BFFF"
                        height={100}
                        width={100}
                        timeout={500} //3 secs
                    />
                    : <div>
                        <div className="ml-8 text-gray-300 text-xl">Projects</div>
                        <div className="flex flex-wrap py-5 justify-center">
                            {projects.map((project, idx) => (

                                <div className="w-80 m-3 bg-slate-700 rounded-md" key={idx}>
                                    <img className="max-h-48 rounded-t-md" src={require(`../assets/projects/${project.imgName}.jpg`)} alt="" />
                                    <div className="p-3">
                                        <div className="py-2 uppercase font-semibold text-lg">{project.name}</div>
                                        <div className="flex flex-wrap">
                                            {project.skills.map((skill, idx) => (
                                                <div key={idx} className="bg-gradient text-black text-sm p-2 mr-2 rounded-lg">{skill}</div>
                                            ))}
                                        </div>
                                        <div className="my-3">{project.description}</div>
                                        <a href={project.link} className="w-24 text-md flex justify-center items-center rounded-md bg-gradient text-black p-2 transition hover:cursor-pointer hover:scale-105 mx-auto">Visit</a>
                                    </div>

                                </div>
                            ))}
                        </div>
                        <div className="flex justify-center">
                            <button className="bg-gradient text-black font-bold rounded-md p-2" onClick={() => page === 1 ? setPage(1) : setPage(page - 1)}>Prev</button>
                            <div className="mx-3 bg-gradient text-black rounded-md p-2">{page}</div>
                            <button className="bg-gradient text-black font-bold rounded-md p-2" onClick={() => page > (Math.floor(projectsList.length / 6)) ? setPage(page) : setPage(page + 1)}>Next</button>
                        </div>
                    </div>
            }


        </div>
    )
}

export default Projects
