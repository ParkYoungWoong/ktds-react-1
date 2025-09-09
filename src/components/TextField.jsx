export default function TextFeild({ label, ...restProps }) {
  return (
    <label className="flex flex-col gap-1">
      {label && (
        <span className="block text-[11px] text-gray-400">{label}</span>
      )}
      <input
        className="h-[32px] rounded-md border-1 border-gray-400 px-2"
        {...restProps}
      />
    </label>
  )
}
