'use client';
import { useState } from 'react';

export default function Home() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: 'Admin_Mimi',
      title: 'Добро пожаловать на главную базу Mimi Forum 34!',
      content: 'Здесь мы собираем лучшие арты, обсуждаем лор, теории и делимся контентом с нашей любимой Mimi. Выкладывайте свои находки, пишите комменты и соблюдайте правила!',
      date: 'Сегодня',
      tag: 'Объявление'
    },
    {
      id: 2,
      author: 'NeonSlayer',
      title: 'Новый пак официальных артов с Mimi',
      content: 'Ребята, зацените новые концепт-арты! Она выглядит просто потрясающе, особенно детализация костюма. Кто-нибудь уже пробовал её косплеить?',
      date: '1 час назад',
      tag: 'Арты'
    }
  ]);

  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tag, setTag] = useState('Обсуждение');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;

    const newPost = {
      id: Date.now(),
      author: author.trim() || 'Анонимная Mimi',
      title: title,
      content: content,
      date: 'Только что',
      tag: tag
    };

    setPosts([newPost, ...posts]);
    setTitle('');
    setContent('');
    setAuthor('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f0c20] to-[#06070d] pb-12">
      {/* Шапка форума */}
      <header className="border-b border-[#1f2833]/40 bg-[#0b0c10]/80 backdrop-blur-md sticky top-0 z-50 transition-all">
        <div className="max-w-4xl mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3 group">
            <span className="text-2xl animate-pulse">🎀</span>
            <h1 className="text-xl font-bold font-['Unbounded'] bg-gradient-to-r from-[#ff007f] via-[#ec4899] to-[#66fcf1] bg-clip-text text-transparent uppercase tracking-wider drop-shadow-[0_0_15px_rgba(255,0,127,0.3)]">
              Mimi Forum 34
            </h1>
          </div>
          <p className="text-xs uppercase tracking-widest text-[#66fcf1] font-bold border border-[#66fcf1]/30 px-3 py-1 rounded bg-[#66fcf1]/5 shadow-[0_0_10px_rgba(102,252,241,0.1)]">
            Mimi Fan Club // v1.0
          </p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Левая колонка: Форма создания */}
        <section className="md:col-span-1">
          <div className="bg-[#12141c] border border-[#1f2833] rounded-xl p-5 shadow-2xl relative overflow-hidden sticky top-24">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#ff007f] to-[#66fcf1]"></div>
            
            <h2 className="text-sm uppercase font-['Unbounded'] font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-[#ff007f]">●</span> Создать пост
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[10px] uppercase tracking-wider text-[#c5c6c7] mb-1">Ваш Никнейм</label>
                <input
                  type="text"
                  placeholder="Например, MimiLover"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  className="w-full bg-[#1a1d29] border border-[#1f2833] rounded-lg px-3 py-2 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#ff007f] transition-colors"
                />
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-wider text-[#c5c6c7] mb-1">Заголовок темы *</label>
                <input
                  type="text"
                  required
                  placeholder="О чем хотите рассказать?"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full bg-[#1a1d29] border border-[#1f2833] rounded-lg px-3 py-2 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#ff007f] transition-colors"
                />
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-wider text-[#c5c6c7] mb-1">Категория</label>
                <select
                  value={tag}
                  onChange={(e) => setTag(e.target.value)}
                  className="w-full bg-[#1a1d29] border border-[#1f2833] rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-[#ff007f] transition-colors appearance-none cursor-pointer"
                >
                  <option value="Обсуждение">💬 Обсуждение</option>
                  <option value="Арты">🎨 Арты / Медиа</option>
                  <option value="Лор">📖 Лор / Теории</option>
                  <option value="Мемы">✨ Мемы</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-wider text-[#c5c6c7] mb-1">Текст поста *</label>
                <textarea
                  required
                  rows="4"
                  placeholder="Ваши мысли, ссылки на арты с Mimi..."
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="w-full bg-[#1a1d29] border border-[#1f2833] rounded-lg px-3 py-2 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#ff007f] transition-colors resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#ff007f] to-[#ec4899] hover:from-[#ff1a8c] hover:to-[#f43f5e] text-white font-['Unbounded'] font-bold text-xs uppercase py-3 rounded-lg shadow-[0_0_15px_rgba(255,0,127,0.4)] hover:shadow-[0_0_25px_rgba(255,0,127,0.6)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                Опубликовать
              </button>
            </form>
          </div>
        </section>

        {/* Правая колонка: Лента постов */}
        <section className="md:col-span-2 space-y-4">
          <div className="flex items-center justify-between border-b border-[#1f2833] pb-2">
            <h2 className="text-xs uppercase tracking-widest text-[#66fcf1] font-bold">
              Активные обсуждения ({posts.length})
            </h2>
            <span className="text-[10px] text-gray-500">Сортировка: Свежие</span>
          </div>

          {posts.length === 0 ? (
            <div className="bg-[#12141c] border border-dashed border-[#1f2833] rounded-xl p-8 text-center text-gray-500 text-sm">
              Постов пока нет. Станьте первым, кто напишет про Mimi!
            </div>
          ) : (
            posts.map((post) => (
              <article key={post.id} className="bg-[#12141c] border border-[#1f2833] hover:border-[#ff007f]/50 rounded-xl p-5 shadow-lg transition-all group relative overflow-hidden">
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#1f2833] text-[#66fcf1] border border-[#66fcf1]/20">
                    {post.tag}
                  </span>
                  <span className="text-[11px] text-gray-500">{post.date}</span>
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-[#ff007f] transition-colors mb-2 font-['Unbounded'] leading-snug">
                  {post.title}
                </h3>

                <p className="text-sm text-[#c5c6c7] leading-relaxed mb-4 whitespace-pre-wrap">
                  {post.content}
                </p>

                <div className="flex items-center justify-between border-t border-[#1f2833]/60 pt-3 text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#66fcf1] to-[#ff007f] flex items-center justify-center text-[9px] font-bold text-white uppercase">
                      {post.author[0]}
                    </div>
                    <span className="text-gray-400 font-medium">@{post.author}</span>
                  </div>

                  <button className="flex items-center gap-1.5 text-gray-500 hover:text-[#66fcf1] font-bold transition-colors uppercase text-[10px] tracking-wider bg-[#1a1d29] px-2.5 py-1 rounded border border-[#1f2833]">
                    💬 Обсудить
                  </button>
                </div>
              </article>
            ))
          )}
        </section>
      </main>
    </div>
  );
}
