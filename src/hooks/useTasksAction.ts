import { useRecoilState } from 'recoil'
import type { Task } from '@/types'
import { tasksState } from '@/features/taskAtoms'
import { TASK_PROGRESS_ID } from '@/constants'

interface useTaskActionType {
  completeTask: (taskId: number) => void
  moveTaskCard: (taskId: number, directionNumber: 1 | -1) => void

  addTask: (
    title: string,
    detail: string,
    dueDate: string,
    progressOrder: number,
  ) => void

  editTask: (
    taskId: number,
    title: string,
    detail: string,
    dueDate: string,
    progressOrder: number,
  ) => void

  deleteTask: (
    taskId: number,
  ) => void
}



export const useTasksAction = (): useTaskActionType => {
  const [tasks, setTasks] = useRecoilState<Task[]>(tasksState)

  const addTask = (
    title: string,
    detail: string,
    dueDate: string,
    progressOrder: number,
  ): void => {
    const newTask: Task = {
      id: (tasks[tasks.length - 1].id || 0) + 1,
      title,
      detail,
      dueDate,
      progressOrder,
    }
    setTasks([...tasks, newTask])
  }

  const editTask = (
    taskId: number,
    title: string,
    detail: string,
    dueDate: string,
    progressOrder: number,
  ): void => {
    const updatedTask: Task[] = tasks.map((task) =>
      task.id === taskId ? { ...task, title, detail, dueDate, progressOrder } : task,
    )
    setTasks([ ...updatedTask])
  }

  const deleteTask = (taskId: number): void => {
    const deleteTasks = tasks.filter((task) => {
      if (task.id === taskId) {
        return false
      }
      return true
    })
    setTasks(deleteTasks)
  }



  const completeTask = (taskId: number): void => {
    const updatedTasks: Task[] = tasks.map((task) =>
      task.id === taskId ? { ...task, progressOrder: TASK_PROGRESS_ID.COMPLETED } : task,
    )
    setTasks(updatedTasks)
  }

  const moveTaskCard = (taskId: number, directionNumber: 1 | -1): void => {
    const updatedTasks: Task[] = tasks.map((item) =>
      item.id === taskId ? { ...item, progressOrder: item.progressOrder + directionNumber } : item,
    )
    setTasks(updatedTasks)
  }


  return {
    completeTask,
    moveTaskCard,
    addTask,
    editTask,
    deleteTask,
  }
}