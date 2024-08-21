import type { FC } from 'react'

const Foo = () => {
  console.log('Foo')
  return null
}

const Page2: FC = () => {
  console.log('Page2')

  return (
    <h2 onClick={() => {}}>
      <Foo />
      Page2
    </h2>
  )
}

export default Page2
