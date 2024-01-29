import { useState } from "react";
import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import ProjectsSidebar from "./components/ProjectsSidebar.jsx";

function App() {
  const[projectState,setProjectState] = useState({
    // currentAction:'nothing-selected',
    selectedProjectId: undefined,
    projects:[]
  });
  function handleStartAddProject(){
    setProjectState(prevState=>{
      return {
        ...prevState,
        selectedProjectId: null,
      }
    });
  }
  function handleCancelAddProject(){
    setProjectState(prevState=>{
      return {
        ...prevState,
        selectedProjectId: undefined,
      }
    });
  }
  function handleAddProject(projectData){
    setProjectState(prevState=>{
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId
      }
      return{
        ...prevState,
        selectedProjectId : undefined,
        projects:[...prevState.projects,newProject]
      }
    })
  }
  // console.log(projectState);
  let content; 
  if(projectState.selectedProjectId=== null){
    content=<NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />;
  }else if(projectState.selectedProjectId===undefined){
    content=<NoProjectSelected onStartAddProject={handleStartAddProject}/>;
  }
  return (
    <main className="h-screen my-8 flex gap-8 " >
      {/* <h1 className="my-8 text-center text-5xl font-bold">Hello World</h1> */}
      <ProjectsSidebar onStartAddProject={handleStartAddProject} 
      projects={projectState.projects} />
      {content}
      {/* <NewProject/> */}
    </main>
  );
}

export default App;
