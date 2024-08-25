import clsx from 'clsx'
import { Archive } from 'lucide-react'
import type { FC, PropsWithChildren } from 'react'
import { NavLink, type NavLinkRenderProps } from 'react-router-dom'

const navLinkClass = ({ isActive }: NavLinkRenderProps) => {
  return clsx(
    isActive && 'bg-white border border-line shadow-sm',
    'box-border flex items-center h-34 px-12 rounded-6 leading-[20px] text-14 font-medium',
  )
}

const Index: FC<PropsWithChildren> = (props) => {
  const { children } = props

  return (
    <main className="[--sidebar:220px] min-h-screen">
      <aside className="fixed left-0 top-0 w-[var(--sidebar)] h-full p-12 bg-muted">
        <div className="flex flex-col gap-y-4">
          <NavLink className={navLinkClass} to="/">
            <Archive className="svgr mr-8 text-16 text-red-500" />
            中文字符
          </NavLink>
          <NavLink className={navLinkClass} to="/page2">
            <Archive className="svgr mr-8 text-16 text-red-500" />
            中文字
          </NavLink>
        </div>
      </aside>
      <div className="h-full min-h-full pl-[var(--sidebar)]">{children}</div>
    </main>
  )
}

export default Index
