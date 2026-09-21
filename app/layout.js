import './globals.css'

export const metadata = {
  title: 'Mimi Forum 34',
  description: 'Forum v1',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className="bg-[#120f1d] text-gray-100 min-h-screen">
        <header className="border-b border-purple-900/40 bg-[#1a1625]/80 backdrop-blur sticky top-0 z-50">
          <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              🎀 Mimi Forum 34
            </h1>
            <span className="text-xs bg-pink-500/20 text-pink-300 px-2 py-1 rounded-full border border-pink-500/30">
              Mimi Fan Club
            </span>
          </div>
        </header>
        <main className="max-w-4xl mx-auto px-4 py-8">
          {children}
        </main>
      </body>
    </html>
  )
}
