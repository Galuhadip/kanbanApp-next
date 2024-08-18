import type { Task } from '@/types'

interface TaskCardProps {
  task: Task
}

const TaskCard = ({ task }: TaskCardProps): JSX.Element => {
  const isStarted = task.progressOrder === 1
  return (
    <div className="bg-green-200 p-6 rounded-xl my-2 flex flex-col gap-y-2 text-xl relative">
      <div className="flex justify-between">
        <div className="material-icons">check_circle</div>
        <div className="material-icons cursor-pointer">
          more_vert
        </div>
      </div>
      <p className="text-3xl font-medium mt-2">{task.title}</p>
      <div>
        <p>{task.detail}</p>
      </div>
      <div>
        <p>Due on {task.dueDate}</p>
      </div>
      <div className={`flex ${isStarted ? 'justify-end' : 'justify-between'}`}>
        {task.progressOrder !== 1 && (
          <button className="material-icons">
            chevron_left
          </button>
        )}
        {task.progressOrder !== 4 && (
          <button className="material-icons">
            chevron_right
          </button>
        )}
      </div>
    </div>
  )
}

export default TaskCard