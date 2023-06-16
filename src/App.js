import React from 'react';
import TaskList from './components/TaskList.js';
import './App.css';
import  { useState } from 'react';


const TASKS = [
  {
    id: 1,
    title: 'Mow the lawn',
    isComplete: false,
  },
  {
    id: 2,
    title: 'Cook Pasta',
    isComplete: true,
  },
];

const App = () => {
  const [taskData, setTaskData] = useState(TASKS);
  const updateTaskData = (id, isComplete) => {
    const newTask = taskData.map((task) => {
      if (task.id === id) {
        const updatedTask = { ...task };
        if (updatedTask.isComplete !== isComplete) {
          updatedTask.isComplete = isComplete;
        }
        return updatedTask;
      } else {
        return { ...task };
      }
    });
    setTaskData(newTask);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada&apos;s Task List</h1>
      </header>
      <main>
        <div><TaskList tasks={TASKS} updateTaskData={updateTaskData} /></div>
      </main>
    </div>
  );
};

export default App;
