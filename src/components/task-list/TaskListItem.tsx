import type { Task } from '@/types'

interface TaskListItemProps {
  task: Task
}

const getProgressCategory = (progressOrder: number): string => {
    switch (progressOrder) {
      case 1:
        return 'Not Started'
      case 2:
        return 'In Progress'
      case 3:
        return 'Waiting/In Review'
      case 4:
        return 'Completed'
      default:
        return 'Not Started'
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