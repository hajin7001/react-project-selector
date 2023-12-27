import { useState } from "react";

import ProjectsSidebar from "./components/ProjectsSidebar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import SelectedProject from "./components/SelectedProject";

function App(){
  // ID: undefined이면 비어있는, null이면 비어있지 않은
  const [projectsState, setProjectsState] = useState({
    selectedProjectID: undefined,
    projects: []
  });

  // projects를 이제 표시 
  function handleStartAddProject(){
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectID: null
      }
    })
  }

  function handleAddProject(newData){
    const newProject = {
      ...newData,
      // project별로 고유 id가 하나씩 필요해서 
      id: Math.random()
    }
    setProjectsState(prevState => {
      return {
        ...prevState,
        projects: [...projectsState.projects, newProject]
      }
    })
  }

  function handleSelectProject(id){
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectID:id,
      };
    });
  }

  function handleDeleteProject(){
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectID: undefined,
        projects: prevState.projects.filter((project) => project.id !== prevState.selectedProjectID)
      };
    });
  }
  const selectedProject = 
    projectsState.projects.find(project => project.id === projectsState.selectedProjectID);

  let content = <SelectedProject project={selectedProject} onDelete={handleDeleteProject}/>;

// NoProjectSelected에서는 button을 누르면 이제 추가가 될 수 있는 형태 
// NewProject에서는 save button을 누르면 저장이 되는 형태 
  if(projectsState.selectedProjectID === undefined){
    content = <NoProjectSelected onStartAddProject={handleStartAddProject}/>
  }
  else if(projectsState.selectedProjectID === null){
    content = <NewProject onAdd={handleAddProject}/>
  }

  return(
    <div className="h-screen my-8 flex gap-8">
      <ProjectsSidebar 
        onStartAddProject={handleStartAddProject} 
        projects={projectsState.projects}
        onSelectProject={handleSelectProject}/>
      {content}
    </div>
  )
}

export default App;