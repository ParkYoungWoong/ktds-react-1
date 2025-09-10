import { create } from 'zustand'
import { persist, subscribeWithSelector, devtools } from 'zustand/middleware'

export const useCountStore = create(
  devtools(
    subscribeWithSelector(
      persist(
        (set, get) => {
          return {
            count: 0,
            double: 0,
            increase() {
              const { count } = get()
              set({
                count: count + 1
              })
            },
            decrease() {
              const { count } = get()
              set({
                count: count - 1
              })
            }
          }
        },
        { name: 'countStore' }
      )
    )
  )
)

// useCountStore.subscribe(선택자함수, 실행할함수)
useCountStore.subscribe(
  state => state.count, // 선택자함수
  count => {
    useCountStore.setState({
      double: count * 2
    })
  } // 실행할함수
)
