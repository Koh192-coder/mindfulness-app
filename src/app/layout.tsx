import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'MINDFULNESS — 自分に合ったマインドフルネスを見つける',
  description: 'みんなのマインドフルネス行動を共有・発見するサービス',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}
