export default function TextFeild({ label, ...restProps }) {
  return (
    <label>
      {label && (
        <span className="block text-[11px] text-gray-400">{label}</span>
      )}
      <input
        className="rounded-md border-1 border-gray-400"
        {...restProps}
      />
    </label>
  )
}
