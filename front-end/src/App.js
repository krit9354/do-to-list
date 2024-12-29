import './App.css';
import Task from './components/task';

function App() {
  return (
    <div className="flex bg-gradient-to-br from-Pink to-Purple w-screen h-screen justify-center">
      <div className="flex flex-col items-center w-1/2 h-screen">
        {/* title */}
        <div className="flex justify-center items-center bg-Yellow w-full h-20 rounded-full mt-20">
          <p className="text-white font-delius text-5xl">To Do List</p>
        </div>
        <div className='relative w-full mt-14 flex flex-col items-center'>
          {/* to do */}
          <div className=" gap-1 space-y-3 justify-items-center bg-LightPink w-full h-96 rounded-[32px] p-5 overflow-y-auto scrollbar-hide ">

            {/* Task Items */}
            <Task />
            <Task />
            <Task />
            <Task />
            <Task />
            <Task />

          </div>

          <button className="absolute -bottom-6 bg-Purple w-1/4 h-12 text-white font-delius text-2xl rounded-full hover:scale-105">
            new task
          </button>
        </div>
        {/* add task */}

      </div>

    </div>
  );
}

export default App;
