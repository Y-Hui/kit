import type { FC, PropsWithChildren } from 'react'

const Wrapper1: FC<PropsWithChildren> = (props) => {
  const { children } = props
  return <div className="wrapper1">{children}</div>
}

export default Wrapper1
