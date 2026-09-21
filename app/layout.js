import './globals.css'

export const metadata = {
  title: 'Mimi Forum 34',
  description: 'Форум о Mimi',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  )
}
