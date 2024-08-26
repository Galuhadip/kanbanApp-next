import { useState } from 'react'
import TaskCard from './TaskCard'
import type { Task } from '@/types'
import { TASK_MODAL_TYPE, TASK_PROGRESS_ID } from '@/constants'
import TaskModal from '../TaskModal'

interface TaskColumnProps {
  columnTitle: string
  columnId: number
  tasks: Task[]
}

const TaskColumn = ({ columnTitle, tasks, columnId }: TaskColumnProps): JSX.Element => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  
  return (
    <div className='max-w-[400px]'>
      <div className='flex justify-between items-center p-1'>
        <h2 className='font-bold text-xl'>{columnTitle}</h2>
        <div className="material-icons cursor-pointer"
        onClick={(): void => {
                      setIsModalOpen(true) // Ditambahkan
                    }}
        >add</div>
      </div>
      {isModalOpen && (
        <TaskModal
          headingTitle="Add your task"
          type={TASK_MODAL_TYPE.ADD} // Ditambahkan
          setIsModalOpen={setIsModalOpen} 
          defaultProgressOrder={columnId} 
          
        />
      )}
      <div>
        {tasks.map((task: Task) => {
          return <TaskCard key={task.id} task={task} />
        })}
      </div>
    </div>
  )
}

export default TaskColumn