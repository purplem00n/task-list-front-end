import React from 'react';
import TaskList from './components/TaskList.js';
import './App.css';
import  { useState, useEffect } from 'react';
import axios from 'axios';

// // const TASKS = [
//   {
//     id: 1,
//     title: 'Mow the lawn',
//     isComplete: false,
//   },
//   {
//     id: 2,
//     title: 'Cook Pasta',
//     isComplete: false,
//   },
//   {
//     id: 3,
//     title: 'Doctor\'s Appointment',
//     isComplete: false,
//   },
//   {
//     id: 4,
//     title: 'Go to Trader Joe\'s',
//     isComplete: false,
//   },
// ];

const App = () => {
  const [taskData, setTaskData] = useState([]);
  const API = 'https://ariel-task-list-1.onrender.com/tasks';

  useEffect(() => {
    axios
    .get(API)
    .then((result) => {
      console.log(result.data);
      setTaskData(result.data);
    })
    .catch(err => {
      console.log(err);
    });
  }, []);

  const updateTaskData = (id, isComplete) => {

    const patchPath = isComplete ? 'mark_incomplete' : 'mark_complete';
      
    console.log(id)
    // console.log(changedTask.is_complete)
    axios
      .patch(`${API}/${id}/${patchPath}`)
      .then((result) => {
        const newTask = taskData.map((task) => {
          if (task.id === id) {
            const updatedTask = { ...task };
            updatedTask['is_complete'] = !isComplete;
            return updatedTask;
          } else {
            return { ...task };
          }
        });
        console.log(newTask)
        setTaskData(newTask);
      }
      )
      .catch((err) => {
        console.log(err);
      });
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
