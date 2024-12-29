import './App.css';
import Task from './components/task';
import React, { useState } from 'react';

function App() {
  const [isAdding, setIsAdding] = useState(false);
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState(['hello', 'homework', 'wash disk']);

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
      setIsAdding(false);
    }
  };
  const taskList = tasks.map((task, index) => (
    <Task key={index}>{task}</Task>
  ));

  return (
    <div className="flex bg-gradient-to-br from-Pink to-Purple w-screen h-screen justify-center">
      <div className="flex flex-col items-center w-1/2 h-screen">
        {/* title */}
        <div className="flex justify-center items-center bg-Yellow w-full h-20 rounded-full mt-20">
          <p className="text-white font-delius text-5xl">To Do List</p>
        </div>
        <div className="relative w-full mt-14 flex flex-col items-center">
          {/* to do */}
          <div className="gap-1 space-y-3 justify-items-center bg-LightPink w-full h-96 rounded-[32px] p-5 overflow-y-auto scrollbar-hide">
            {/* Task Items */}
            {taskList}
          </div>
          {!isAdding ? (
            <button
              onClick={() => setIsAdding(true)}
              className="absolute -bottom-6 bg-Purple w-1/4 h-12 text-white font-delius text-2xl rounded-full hover:scale-105"
            >
              new task
            </button>
          ) : (
            <div   className={`absolute -bottom-10 w-3/4 bg-Purple rounded-lg p-3 shadow-lg flex items-center space-x-2 ${isAdding ? 'animate-expand' : 'animate-collapse'}`}>
            <input
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              placeholder="Enter new task"
              className="flex-1 p-2 border rounded-md"
            />
            <button
              onClick={handleAddTask}
              className="bg-white text-Purple px-4 py-2 rounded-md hover:scale-105"
            >
              Add
            </button>
            <button
              className="text-white hover:scale-150"
              onClick={() => setTimeout(() => setIsAdding(false), 500)}
            >
              x
            </button>
          </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
