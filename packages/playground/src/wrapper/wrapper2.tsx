import type { FC, PropsWithChildren } from 'react'

const Wrapper2: FC<PropsWithChildren> = (props) => {
  const { children } = props
  return <div className="wrapper2">{children}</div>
}

export default Wrapper2
