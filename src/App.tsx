import { useState } from "react";
import Sidebar from "./components/Sidebar";
import type { Project, Screen } from "./types";

// Mock project
const mockProject: Project = {
  id: "1",
  name: "E-commerce Legacy Migration",
  legacyPath: "/legacy/ecommerce",
  newPath: "/new/ecommerce",
  createdAt: new Date("2024-01-15"),
}

function App() {
  const [currentProject, setCurrentProject] = useState<Project | null>(mockProject)  
  const [currentScreen, setCurrentScreen] = useState<Screen>("generated-tests")
  const [isGenerating, setIsGenerating] = useState(false)
  const [isRunning, setIsRunning] = useState(false)

  const handleRegisterProject = () => {
    // Simulate project registration
    alert("Project registration modal would open here")
  }

  const handleGenerateTests = () => {
    setCurrentScreen("generated-tests")
    setIsGenerating(true)
  }

  const handleRunTests = () => {
    setCurrentScreen("test-results")
    setIsRunning(true)
  }
  
  
  return(
    <Sidebar
    currentProject={currentProject}
    currentScreen={currentScreen}
    onRegisterProject={handleRegisterProject}
    onGenerateTests={handleGenerateTests}
    onRunTests={handleRunTests}
    />
  )
}
export default App;