import Button from "./Button";
import noProjectSelected from "../assets/no-projects.png";

export default function NoProjectSelected({onStartAddProject}){
  return(
    <div className="mt-24 text-center w-2/3">
      <img className="w-16 h-16 object-contain mx-auto" src={noProjectSelected} alt="No Project"/>
      <h2 className="text-green-800 text-2xl font-semibold my-4">No Project Selected</h2>
      <p>Select a project or get started with a new one</p>
      <div className="">
        <button 
        className="text-green-800 px-[5px] py-[5px] rounded-lg justify-center ring-1 ring-green-800 hover:ring-[1.5px] mt-6"
        onClick={onStartAddProject}>Create new project</button>
      </div>
    </div>
  )
}