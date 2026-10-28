export default function Scallop({
  color = 'var(--desk)',
  bumps = 10,
  dir = 'down',
}: {
  color?: string
  bumps?: number
  dir?: 'up' | 'down'
}) {
  const w = 1200
  const r = w / bumps / 2

  return (
    <svg
      className="scallop"
      viewBox={`0 0 ${w} ${r}`}
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
    >
      {dir === 'down' ? (
        <>
          <rect x="0" y="0" width={w} height={r / 2} fill={color} />
          {Array.from({ length: bumps }).map((_, i) => (
            <circle key={i} cx={r + i * 2 * r} cy={r / 2} r={r / 2} fill={color} />
          ))}
        </>
      ) : (
        <>
          <rect x="0" y={r / 2} width={w} height={r / 2} fill={color} />
          {Array.from({ length: bumps }).map((_, i) => (
            <circle key={i} cx={r + i * 2 * r} cy={r} r={r / 2} fill={color} />
          ))}
        </>
      )}
    </svg>
  )
}
