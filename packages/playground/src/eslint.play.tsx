import { type FC, forwardRef, type PropsWithChildren, useEffect, useState } from 'react'

export const enum Status {
  Enabled = 1,
  Disabled = 0,
}

// @ts-expect-error
const a1 = 1
Number.parseInt('11')

export const foo = () => Status.Disabled

export const bar = () => ({ bar: 0 })

export const App: FC<PropsWithChildren<{ disabled?: boolean }>> = (props) => {
  const { disabled } = props
  const [val] = useState(1)
  const [a, setA] = useState(0)
  const [b] = useState(0)

  useEffect(() => {
    console.log(val, a)
    ;[1, 2, 3].reduce((result, item) => {
      result.push(item.toString())
      return result
    }, [] as string[])
  }, [])

  if (disabled) {
    return props.children
  }

  return (
    <>
      <button
        type="button"
        disabled
        onClick={(_e) => {
          setA(() => b + 1)
        }}
      >
        {a}
      </button>
      <p>1</p>
      <p>2</p>
    </>
  )
}

export const App2 = forwardRef<string, PropsWithChildren>((props, ref) => {
  if (window.Array.toString() == null) {
    return 1
  }

  const [val] = useState(1)

  useEffect(() => {}, [])

  console.log(Number.parseInt('10'))

  return props.children
})
