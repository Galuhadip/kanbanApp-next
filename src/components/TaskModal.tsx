import React from 'react'
import type { Dispatch, SetStateAction } from 'react'
import TaskForm from './TaskForm'

type TaskModalProps = {
  headingTitle: string
  type: string // Ditambahkan
  setIsModalOpen: Dispatch<SetStateAction<boolean>>
  defaultProgressOrder: number
}

const TaskModal = ({
  headingTitle,
  type,
  setIsModalOpen,
  defaultProgressOrder,
}: TaskModalProps): JSX.Element => {
  return (
    <div className='fixed top-1/4 left-[40%] p-8 border border-gray-500 w-1/4 z-10 bg-white'>
        <div className='flex justify-between mb-4'>
            <h1 className='font-bold text-2xl'>{headingTitle}</h1>
        <span
            className="material-icons cursor-pointer"
            onClick={(): void => {
            setIsModalOpen(false)
            }}
        >
          close
        </span>
        </div>
        <TaskForm 
        type={type}
        defaultProgressOrder={defaultProgressOrder}
        setIsModalOpen={setIsModalOpen} // ditambahkan
        />
    </div>
  )
}

export default TaskModal