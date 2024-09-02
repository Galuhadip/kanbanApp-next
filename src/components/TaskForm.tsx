import React, { Dispatch, SetStateAction, useState } from 'react'
import { TASK_MODAL_TYPE, TASK_PROGRESS_ID, TASK_PROGRESS_STATUS } from '@/constants'
import type { Task } from '@/types'
import { useTasksAction } from '@/hooks/useTasksAction'

interface TaskFormProps {
    task?: Task
    type: string
    defaultProgressOrder: number
    setIsModalOpen: Dispatch<SetStateAction<boolean>> // Ditambahkan
}

const TaskForm = ({ type, defaultProgressOrder, setIsModalOpen, task }: TaskFormProps): JSX.Element => {
    const [title, setTitle] = useState<string>(task?.title as string)
    const [detail, setDetail] = useState<string>(task?.detail as string)
    const [dueDate, setDueDate] = useState<string>(task?.dueDate as string)
    const [progressOrder, setProgressOrder] = useState<number>(defaultProgressOrder)

    const { addTask, editTask, } = useTasksAction()
    const handleSubmit = (): void => {
            if (type === TASK_MODAL_TYPE.ADD) {
              addTask(title, detail, dueDate, progressOrder)
              setIsModalOpen(false)
            } else if (type === TASK_MODAL_TYPE.EDIT && task) {
            editTask(task.id, title, detail, dueDate, progressOrder)
            setIsModalOpen(false)
          }
    }

    return (
        <form className="text-2xl flex flex-col gap-y-4">
        <div className='flex flex-col'>
        <label>Title：</label>
            <input
            type="text"
            value={title}
            onChange={(e): void => {
                setTitle(e.target.value)
            }}
            className='border border-gray-500 h-10 text-xl'
            />
        </div>
        <div className='flex flex-col'>
        <label>Detail：</label>
        <textarea
            value={detail}
            onChange={(e): void => {
            setDetail(e.target.value)
            }}
            className='border border-gray-500 h-20 text-xl'
        />
        </div>
        <div className='flex flex-col'>
        <label>Due Date：</label>
        <input
            type="date"
            value={dueDate}
            onChange={(e): void => {
            setDueDate(e.target.value)
            }}
            className='border border-gray-500 h-10 text-xl'
        />
        </div>
        <div className='flex flex-col'>
        <label>Progress：</label>
        <select
            className='border border-gray-500 h-10 text-xl'
            defaultValue={progressOrder}
            onChange={(e): void => {
            setProgressOrder(Number(e.target.value))
            }}
        >
            <option value={TASK_PROGRESS_ID.NOT_STARTED}>{TASK_PROGRESS_STATUS.NOT_STARTED}</option>
            <option value={TASK_PROGRESS_ID.IN_PROGRESS}>{TASK_PROGRESS_STATUS.IN_PROGRESS}</option>
            <option value={TASK_PROGRESS_ID.WAITING}>{TASK_PROGRESS_STATUS.WAITING}</option>
            <option value={TASK_PROGRESS_ID.COMPLETED}>{TASK_PROGRESS_STATUS.COMPLETED}</option>
        </select>
        </div>
        <button
            type="button"
            className='self-start bg-green-500 text-white text-xl py-3 px-6 rounded'
            onClick={(): void => {
                          handleSubmit() // Ditambahkan
                        }}
        >
            Submit
        </button>
        </form>
    )
}

export default TaskForm