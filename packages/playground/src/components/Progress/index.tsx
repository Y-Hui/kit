import './index.css'

import NProgress from 'nprogress'
import { type FC, useEffect, useRef } from 'react'

const Progress: FC = () => {
  const timerId = useRef<number>()

  useEffect(() => {
    window.clearTimeout(timerId.current)
    timerId.current = window.setTimeout(() => {
      NProgress.start()
    }, 300)

    return () => {
      window.clearTimeout(timerId.current)
      NProgress.done()
    }
  }, [])

  return null
}

export default Progress
