'use client'
import { useRecoilValue } from 'recoil'
import type { Task } from '@/types'
import { completedTasksSelector, uncompletedTasksSelector } from '@/features/taskSelector'
import Link from 'next/link'

const TaskSummary = (): JSX.Element => {
    const completedTasks = useRecoilValue<Task[]>(completedTasksSelector)
    const uncompletedTasks = useRecoilValue<Task[]>(uncompletedTasksSelector)

  return (
    <div className="w-full p-10">
      <h1 className="text-green-500 mb-16 font-bold text-3xl">Summary of Your Tasks</h1>
      <div className='text-white bg-green-500 flex items-center justify-center mb-10 p-4 gap-x-2'>
        <span className="material-icons">check_circle</span>
        <h2>You have completed {completedTasks.length} {completedTasks.length <= 1 ? "task" : 'tasks'}</h2>
      </div>

      <div className='text-white bg-green-500 flex items-center justify-center mb-10 p-4 gap-x-2'>
        <span className="material-icons">list</span>
        <h2>
          You still have {uncompletedTasks.length} {uncompletedTasks.length <= 1 ? 'task' : 'tasks'}
          left
        </h2>
      </div>

      <div className='flex gap-x-6'>
        <Link href="/task-list" className='p-4 bg-cyan-600 text-white rounded-lg'>
          See Your Task List
        </Link>
        <Link href="/progress-management" className='p-4 bg-cyan-600 text-white rounded-lg'>
          Manage Your Task Progress
        </Link>
      </div>
    </div>
  )
}

export default TaskSummary