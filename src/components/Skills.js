import { skillsList } from "../utils/skills"

const Skills = () => {
    return (
        <div className="md:px-20 px-1">
            <div className="ml-8 text-gray-300 text-xl">My skills</div>
            <div className="mx-8 flex flex-wrap py-5 justify-around">
                {skillsList.map((skill, idx) => (
                    <div className="text-center w-48 flex flex-col justify-center items-center my-3" key={idx}>
                        <img className="max-h-24" src={require(`../assets/skills/${skill.imgName}.svg`)} alt="" />
                        <div className="py-2 uppercase text-gray-300">{skill.name}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Skills
