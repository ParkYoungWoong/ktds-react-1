import { useState, useEffect, useRef } from 'react'

export default function App() {
  const inputRef = useRef()
  const [isShow, setIsShow] = useState(false)
  const [isFocus, setIsFocus] = useState(false)

  // useEffect(() => {
  //   const inputEl = inputRef.current
  //   inputEl.focus()
  // }, [])

  function handleClick() {
    setIsShow(false)
  }

  useEffect(() => {
    setIsShow(isFocus)
    window.addEventListener('click', handleClick)
    return () => {
      window.removeEventListener('click', handleClick)
    }
  }, [isFocus])

  return (
    <>
      <input
        className="w-[200px] border-1 border-gray-400"
        ref={inputRef}
        type="text"
        onFocus={() => setIsFocus(true)}
        onClick={event => {
          event.stopPropagation()
        }}
      />
      {isShow && (
        <ul
          className="w-[200px] border-1 border-gray-400"
          onClick={event => {
            event.stopPropagation()
          }}>
          <li>메뉴1</li>
          <li>메뉴2</li>
          <li>메뉴3</li>
        </ul>
      )}
    </>
  )
}
