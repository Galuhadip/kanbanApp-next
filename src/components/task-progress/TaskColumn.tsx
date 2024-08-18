import TaskCard from './TaskCard'
import type { Task } from '@/types'

interface TaskColumnProps {
  columnTitle: string
  columnId: number
  tasks: Task[]
}

const TaskColumn = ({ columnTitle, tasks, columnId }: TaskColumnProps): JSX.Element => {
  return (
    <div className='max-w-[400px]'>
      <div className='flex justify-between items-center p-1'>
        <h2 className='font-bold text-xl'>{columnTitle}</h2>
        <div className="material-icons cursor-pointer">add</div>
      </div>
      <div>
        {tasks.map((task: Task) => {
          return <TaskCard key={task.id} task={task} />
        })}
      </div>
    </div>
  )
}

export default TaskColumn