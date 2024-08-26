'use client'
import {
  completedTasksSelector,
  inProgressTasksSelector,
  notStartedTasksSelector,
  waitingTasksSelector,
} from '@/features/taskSelector'
import type { Task } from '@/types'
import { useRecoilValue } from 'recoil'
import TaskColumn from './TaskColumn'
import { TASK_PROGRESS_ID, TASK_PROGRESS_STATUS } from '@/constants'



const TaskProgress = (): JSX.Element => {
  const notStartedTasks: Task[] = useRecoilValue(notStartedTasksSelector)

  const inProgressTasks: Task[] = useRecoilValue(inProgressTasksSelector)

  const waitingTasks: Task[] = useRecoilValue(waitingTasksSelector)

  const completedTasks: Task[] = useRecoilValue(completedTasksSelector)

  return (
    <div className="w-full p-10">
      <h1 className="text-green-500 mb-16 font-bold text-3xl">Task Progress</h1>
      <div className='grid grid-cols-4 gap-x-4'>
        <TaskColumn
          columnTitle={TASK_PROGRESS_STATUS.NOT_STARTED}
          tasks={notStartedTasks}
          columnId={TASK_PROGRESS_ID.NOT_STARTED}
        />
        <TaskColumn
          columnTitle={TASK_PROGRESS_STATUS.IN_PROGRESS}
          tasks={inProgressTasks}
          columnId={TASK_PROGRESS_ID.IN_PROGRESS}
        />
        <TaskColumn
          columnTitle={TASK_PROGRESS_STATUS.WAITING}
          tasks={waitingTasks}
          columnId={TASK_PROGRESS_ID.WAITING}

        />
        <TaskColumn
          columnTitle={TASK_PROGRESS_STATUS.COMPLETED}
          tasks={completedTasks}
          columnId={TASK_PROGRESS_ID.COMPLETED}
        />
      </div>
    </div>
  )
}

export default TaskProgress