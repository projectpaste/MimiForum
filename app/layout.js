import './globals.css'

export const metadata = {
  title: 'Mimi Forum 34',
  description: 'Форум посвященный персонажу Mimi',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        <link rel="preconnect" href="https://googleapis.com" />
        <link rel="preconnect" href="https://gstatic.com" crossOrigin="anonymous" />
        <link href="https://googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&family=Unbounded:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-[#0b0c10] text-[#c5c6c7] font-mono selection:bg-[#1f2833] selection:text-[#66fcf1]">
        {children}
      </body>
    </html>
  )
}
