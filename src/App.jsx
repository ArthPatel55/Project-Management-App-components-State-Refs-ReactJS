import { useState } from "react";
import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import ProjectsSidebar from "./components/ProjectsSidebar.jsx";

function App() {
  const[projectState,setProjectState] = useState({
    // currentAction:'nothing-selected',
    selectedProjectId: undefined,
    project:[]
  });
  function handleStartAddProject(){
    setProjectState(prevState=>{
      return {
        ...prevState,
        selectedProjectId: null,
      }
    });
  }
  function handleAddProject(projectData){
    setProjectState(prevState=>{
      const newProject = {
        ...projectData,
        id: Math.random()
      }
      return{
        ...prevState,
        project:[...prevState.project,newProject]
      }
    })
  }
  console.log(projectState);
  let content; 
  if(projectState.selectedProjectId=== null){
    content=<NewProject onAdd={handleAddProject} />;
  }else if(projectState.selectedProjectId===undefined){
    content=<NoProjectSelected onStartAddProject={handleStartAddProject}/>;
  }
  return (
    <main className="h-screen my-8 flex gap-8 " >
      {/* <h1 className="my-8 text-center text-5xl font-bold">Hello World</h1> */}
      <ProjectsSidebar onStartAddProject={handleStartAddProject} />
      {content}
      {/* <NewProject/> */}
    </main>
  );
}

export default App;
