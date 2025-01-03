import clsx from 'clsx'
import type { FC, PropsWithChildren } from 'react'
import { NavLink } from 'react-router-dom'

const Index: FC<PropsWithChildren> = (props) => {
  const { children } = props
  return (
    <main className="[--sidebar:210px] min-h-screen">
      <aside className="fixed left-0 top-0 w-[var(--sidebar)] h-full p-[12px] border-r">
        <NavLink
          className={({ isActive }) => clsx(
            isActive && 'text-red-500 bg-red-50',
            'block px-[8px] h-[32px] leading-[32px] rounded-[8px]',
          )}
          to="/page1"
        >
          Page1
        </NavLink>
        <NavLink
          className={({ isActive }) => clsx(
            isActive && 'text-red-500 bg-red-50',
            'block px-[8px] h-[32px] leading-[32px] rounded-[8px]',
          )}
          to="/page2"
        >
          Page2
        </NavLink>
      </aside>
      <div className="h-full pl-[var(--sidebar)]">{children}</div>
    </main>
  )
}

export default Index
