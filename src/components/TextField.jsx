export default function TextFeild({ type, label }) {
  return (
    <label>
      {label && (
        <span className="block text-[11px] text-gray-400">{label}</span>
      )}
      <input
        type={type}
        className="rounded-md border-1 border-gray-400"
      />
    </label>
  )
}
