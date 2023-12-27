export default function ProjectsSidebar({onStartAddProject, projects, onSelectProject, selectedProjectId}){

  // project들을 list할 수 있어야 한다. 
  return (
    <aside className="top-2 left-0 h-screen w-40 m-0 flex flex-col bg-green-800 text-white shadow items-center rounded-tr-[6px] rounded-br-[6px]">
      <h2 className="text-center mt-10 mb-8 text-[1.25rem]">Your Projects</h2>
      <div className="box bg-green-900 p-2 rounded-lg mb-4 pl-3 pr-3 hover:bg-green-950">
        <button onClick={onStartAddProject}>+ Add Projects</button>
      </div>
      <ul>
        {projects.map((project) => {
          let cssClasses = "w-full text-left px-2 py-1 rounded-sm my-1"

          if(project.id === selectedProjectId){
            cssClasses += ' bg-green-800 text-green-200'
          }
          else{
            cssClasses += ' text-green-400'
          }

          return (
            <li key={project.id}>
            <button onClick={() => onSelectProject(project.id)}
              className={cssClasses}>{project.title}</button>
          </li>);
          })}
      </ul>
    </aside>
  );
}