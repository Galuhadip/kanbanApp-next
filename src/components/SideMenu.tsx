'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const SideMenu = (): JSX.Element => {
  const pathname = usePathname()
  return (
    <div className="min-w-64 bg-cyan-500 min-h-screen p-6">
      <Link
        href="/"
        className={`flex my-3 items-center ${pathname === '/' ? 'text-cyan-800' : 'text-white'}`}
      >
        <span className="material-icons">home</span>
        <p className="text-2xl ml-2">Home</p>
      </Link>
      <Link
        href="/task-list"
        className={`flex my-3 items-center ${pathname === '/task-list' ? 'text-cyan-800' : 'text-white'}`}
      >
        <span className="material-icons">list</span>
        <p className="text-2xl ml-2">Task List</p>
      </Link>
      <Link
        href="/task-progress"
        className={`flex my-3 items-center ${pathname === '/task-progress' ? 'text-cyan-800' : 'text-white'}`}
      >
        <span className="material-icons">check_box</span>
        <p className="text-2xl ml-2">Task Progress</p>
      </Link>
    </div>
  )
}

export default SideMenu