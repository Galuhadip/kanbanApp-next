'use client'
import { tasksState } from '@/features/taskAtoms'
import type { Task } from '@/types'
import { useRecoilValue } from 'recoil'
import TaskListItem from './TaskListItem'
import { TASK_MODAL_TYPE, TASK_PROGRESS_ID } from '@/constants'
import TaskModal from '../TaskModal'
import { useState } from 'react'

const TaskList = (): JSX.Element => {
  const tasks: Task[] = useRecoilValue(tasksState)
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  return (
    <div className="w-full p-10">
      <h1 className="text-green-500 mb-16 font-bold text-3xl">Your Tasks</h1>
      <div className='flex mb-8 gap-x-4'>
        <button className='p-4 flex items-center bg-cyan-500 text-white gap-x-2 relative'
        onClick={(): void => {
                    setIsModalOpen(true) // Ditambahkan
                    }}>
          <span className="material-icons">add</span>Add task
        </button>
        <button className='p-4 flex items-center bg-cyan-500 text-white gap-x-2 relative'>
          <span className="material-icons">sort</span>Filter tasks
        </button>
      </div>
      {isModalOpen && (
        <TaskModal
          headingTitle="Add your task"
          type={TASK_MODAL_TYPE.ADD} // Ditambahkan
          setIsModalOpen={setIsModalOpen}
          defaultProgressOrder={TASK_PROGRESS_ID.NOT_STARTED}
        />
      )}
      <div>
        <div className='flex text-2xl border-b border-b-gray-300 *:p-4'>
          <div className='w-1/4'>Task Name</div>
          <div className='w-[30%]'>Detail</div>
          <div className='w-1/5'>Due Date</div>
          <div className='w-[15%]'>Progress</div>
        </div>
        {tasks.map((task: Task) => {
          return <TaskListItem task={task} key={task.id} />
        })}
      </div>
    </div>
  )
}

export default TaskList