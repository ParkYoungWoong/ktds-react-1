import Loader from '@/components/Loader.jsx'

export default function Button({ children, loading, ...restProps }) {
  return (
    <button
      className="relative block h-[32px] w-full rounded-md bg-blue-500 px-2 text-sm text-white"
      {...restProps}>
      {loading ? <Loader color="#fff" /> : children}
    </button>
  )
}
