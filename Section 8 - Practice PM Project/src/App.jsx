import { useState } from 'react';

import Adder from './components/Adder';
import EmptyProject from './components/EmptyProject';
import ProjectEditor from './components/ProjectEditor';
import Sidebar from './components/Sidebar';

const sampleProject = {
  title: 'Learning React',
  description: 'Learn React from the ground up.\n\nStart with the basics and finish with advanced knowledge.',
  dueDate: '01-01-2025',
  tasks: ['Practice, practice, practice!', 'Learn advanced concepts', 'Learn the basics'],
};

export default function App() {
  const [projectsData, setProjectsData] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);

  function handleEditing(setValue) {
    setIsEditing(setValue);
  }
  function handleProjectAdd(projectData) {
    setProjectsData((previousProjects) => {
      const newProjects = [...previousProjects, projectData];
      return newProjects;
    });
    setIsEditing(false);
    setSelectedIndex(null);
  }

  function handleProjectSelect(projectIndex) {
    if (projectIndex === selectedIndex) {
      setSelectedIndex(null);
    } else {
      setSelectedIndex(projectIndex);
    }
  }

  function handleProjectDelete() {
    setProjectsData(prev => {
      const updated = prev.filter((_, index) => index !== selectedIndex);
      return updated;
    });
    setSelectedIndex(null);
  }

  //M.V.P.
  function handleTaskAdd(index, task) {
    setProjectsData(previousData => {
      const updatedProject = {
        // title: previousData[index].title,
        // description: previousData[index].description,
        // date: previousData[index].date,
        ...previousData[index],
        tasks: [task, ...previousData[index].tasks],
      };
      const newData = [...previousData];
      newData[index] = updatedProject;
      return newData;
    });
  }

  function handleTaskDelete(index, taskIndex) {
    setProjectsData(previousData => {
      const updatedProject = {
        ...previousData[index],
        tasks: previousData[index].tasks.filter((_, taskIdx) => taskIdx !== taskIndex),
      };
      const newData = [...previousData];
      newData[index] = updatedProject;
      return newData;
    });
  }

  console.log('Project State: ', projectsData);

  const emptyProject = (!isEditing && selectedIndex === null) && <EmptyProject onEdit={handleEditing} />;
  const editor = isEditing && <Adder onCancel={handleEditing} onSubmit={handleProjectAdd} />;
  const currentProject = (selectedIndex != undefined && !isEditing) && <ProjectEditor
    selectedProjectIndex={selectedIndex}
    projects={projectsData}
    onDelete={handleProjectDelete}
    onTaskAdd={handleTaskAdd}
    onTaskRemove={handleTaskDelete} />;

  return (
    <main className="flex min-h-screen bg-stone-100">
      <Sidebar projects={projectsData} onEdit={handleEditing} selected={selectedIndex} onProjectSelect={handleProjectSelect} />

      <div className='w-2/3 md:max-w-screen-md md:w-full mx-auto my-10 p-2 md:p-9'>
        {editor}
        {emptyProject}
        {currentProject}
      </div>
    </main>
  );
};
