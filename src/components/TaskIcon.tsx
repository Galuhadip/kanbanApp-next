import { TASK_PROGRESS_ID } from "@/constants"
import { tasksState } from "@/features/taskAtoms"
import { Task } from "@/types"
import { useRecoilState } from "recoil"

interface TaskIconProps {
  task: Task
}

const TaskIcon = ({ task }: TaskIconProps) => {
  const isProgressCompleted = task.progressOrder === TASK_PROGRESS_ID.COMPLETED

  const [tasks, setTasks] = useRecoilState<Task[]>(tasksState)
  

  const completeTask = (taskId: number): void => {
    const updatedTasks: Task[] = tasks.map((task) =>
      task.id === taskId ? { ...task, progressOrder: TASK_PROGRESS_ID.COMPLETED } : task,
    )
    setTasks(updatedTasks)
  }

  


  return (
    <span
      className={`material-icons mr-4 text-3xl ${isProgressCompleted ? 'text-green-500 cursor-default' : 'text-gray-400 cursor-pointer'}`}
      onClick={(): void => {
        completeTask(task.id) // Ditambahkan
      }}
    >
      check_circle
    </span>

  )
}

export default TaskIcon