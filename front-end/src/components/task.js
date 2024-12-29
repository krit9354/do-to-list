import React from 'react'

const Task = (props) => {
  return (
    <div className='bg-white w-full h-[70px] flex items-center rounded-full px-8 justify-between'>
      <p>{props.children}</p>
      <div class="flex space-x-3 items-center">
        <button>🗑️</button>
        <button>✔️</button>
      </div>
    </div>
  )
}

export default Task
