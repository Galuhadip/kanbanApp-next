import { selector } from 'recoil'
import { tasksState } from './taskAtoms'
import type { Task } from '@/types'

export const uncompletedTasksSelector = selector<Task[]>({
  key: 'uncompleted_tasks',
  get: ({ get }) => {
    return get(tasksState).filter((task) => {
      return task.progressOrder !== 4
    })
  },
})

export const completedTasksSelector = selector<Task[]>({
  key: 'completed_tasks',
  get: ({ get }) => {
    return get(tasksState).filter((task) => {
      return task.progressOrder === 4
    })
  },
})

export const inProgressTasksSelector = selector<Task[]>({
    key: 'inprogress_tasks',
    get: ({ get }) => {
      return get(tasksState).filter((task) => {
        return task.progressOrder === 2
      })
    },
  })

  export const notStartedTasksSelector = selector<Task[]>({
    key: 'notstarted_tasks',
    get: ({ get }) => {
      return get(tasksState).filter((task) => {
        return task.progressOrder === 1
      })
    },
  })

  export const waitingTasksSelector = selector<Task[]>({
    key: 'waiting_tasks',
    get: ({ get }) => {
      return get(tasksState).filter((task) => {
        return task.progressOrder === 3
      })
    },
  })