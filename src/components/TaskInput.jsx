import React from 'react'

const TaskInput = () => {
  return (
    <div className='flex flex-col gap-y-4'>
      <input type='text' name='text'/>
      <button>Add</button>
    </div>
  )
}

export default TaskInput