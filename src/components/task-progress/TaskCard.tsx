import { TASK_PROGRESS_ID } from '@/constants'
import type { Task } from '@/types'
import TaskIcon from '../TaskIcon'
import { useRecoilState } from 'recoil'
import { tasksState } from '@/features/taskAtoms'
import { useTasksAction } from '@/hooks/useTasksAction'


interface TaskCardProps {
  task: Task
}

const TaskCard = ({ task }: TaskCardProps): JSX.Element => {
  const { moveTaskCard } = useTasksAction()
  
  const isStarted = task.progressOrder === TASK_PROGRESS_ID.NOT_STARTED

  return (
    <div className="bg-green-200 p-6 rounded-xl my-2 flex flex-col gap-y-2 text-xl relative">
      <div className="flex justify-between">
      <TaskIcon task={task} />
        {/* <div className="material-icons">check_circle</div> */}
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
        {task.progressOrder !== TASK_PROGRESS_ID.NOT_STARTED && (
          <button className="material-icons" 
          onClick={(): void => {
            moveTaskCard(task.id, -1 ) // Ditambahkan
          }}
          >
            chevron_left
          </button>
        )}
        {task.progressOrder !== TASK_PROGRESS_ID.COMPLETED && (
          <button className="material-icons"
          onClick={(): void => {
            moveTaskCard(task.id, 1 ) // Ditambahkan
          }}>
            chevron_right
          </button>
        )}
      </div>
    </div>
  )
}

export default TaskCard