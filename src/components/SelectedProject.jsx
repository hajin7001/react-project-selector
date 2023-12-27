import Tasks from "./Tasks";

export default function SelectedProject({project, onDelete}){

  const formattedDate = new Date(project.dueDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });

  return (
    <div className="w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-green-800">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-green-700 mb-2">{project.title}</h1>
          <button 
            className="text-green-700 hover:text-green-800"
            onClick={onDelete}>DELETE</button>
        </div>
        <p className="mb-4 text-green-800">{formattedDate}</p>
        <p className="text-green-800 whitespace-pre-wrap">{project.description}</p>
      </header>
      <Tasks/>
    </div>
  )
}