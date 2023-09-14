import { useTheme } from '@/hooks/use-theme'

export default function Item() {
  // 為什麼還要再宣告一次useTheme()
  const { color } = useTheme()
  return (
    <>
      {/* what does style={{ color }} means ! ! ? */}
      <div style={{ color: color }}>測試</div>
    </>
  )
}
