import { TASK_PROGRESS_ID, TASK_PROGRESS_STATUS } from '@/constants'
import type { Task } from '@/types'

interface TaskListItemProps {
  task: Task
}

const getProgressCategory = (progressOrder: number): string => {
    switch (progressOrder) {
      case TASK_PROGRESS_ID.NOT_STARTED:
        return TASK_PROGRESS_STATUS.NOT_STARTED
      case TASK_PROGRESS_ID.IN_PROGRESS:
        return TASK_PROGRESS_STATUS.IN_PROGRESS
      case TASK_PROGRESS_ID.WAITING:
        return TASK_PROGRESS_STATUS.WAITING
      case TASK_PROGRESS_ID.COMPLETED:
        return TASK_PROGRESS_STATUS.COMPLETED
      default:
        return TASK_PROGRESS_STATUS.NOT_STARTED
    }
  }

const TaskListItem = ({ task }: TaskListItemProps): JSX.Element => {
  return (
    <div className="flex items-stretch border-b border-b-gray-300 text-xl relative *:p-4 *:flex *:items-center  *:border-r-gray-300">
      <div className="w-1/4 border-r">
        <span className="material-icons">check_circle</span>
        {task.title}
      </div>
      <div className="w-[30%] border-r">{task.detail}</div>
      <div className="w-1/5 border-r">{task.dueDate}</div>
      <div className="w-[15%] border-r-0">{getProgressCategory(task.progressOrder)}</div>
      <div>
        <span className="material-icons">more_horiz</span>
      </div>
    </div>
  )
}

export default TaskListItem