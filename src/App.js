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
    isComplete: false,
  },
  {
    id: 3,
    title: 'Doctor\'s Appointment',
    isComplete: false,
  },
  {
    id: 4,
    title: 'Go to Trader Joe\'s',
    isComplete: false,
  },
];

const App = () => {
  const [taskData, setTaskData] = useState(TASKS);

  const updateTaskData = (id) => {
    const newTask = taskData.map((task) => {
      if (task.id === id) {
        const updatedTask = { ...task };
        updatedTask.isComplete = !task.isComplete;
        return updatedTask;
      } else {
        return { ...task };
      }
    });
    console.log(newTask)
    setTaskData(newTask);
  };

  const deleteTask = (id) => {
    const newTask = taskData.filter((task) => {
      if (task.id !== id) {
        return {...task};
      }
    });
    console.log(newTask)
    setTaskData(newTask);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada&apos;s Task List</h1>
      </header>
      <main>
        <div><TaskList tasks={taskData} updateTaskData={updateTaskData} deleteTask={deleteTask}/></div>
      </main>
    </div>
  );
};

export default App;
