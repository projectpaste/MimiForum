'use client';
import { useState } from 'react';

export default function Home() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Добро пожаловать на Mimi Forum 34!",
      content: "Здесь мы обсуждаем всё, что связано с Mimi. Делитесь артами, теориями и идеями!",
      author: "Admin",
      date: "Сегодня"
    }
  ]);
  
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !content) return;

    const newPost = {
      id: Date.now(),
      title,
      content,
      author: author || "Аноним",
      date: "Только что"
    };

    setPosts([newPost, ...posts]);
    setTitle('');
    setContent('');
    setAuthor('');
  };

  return (
    <div className="space-y-8">
      {/* Форма создания поста */}
      <section className="bg-[#1a1625] border border-purple-900/30 p-6 rounded-2xl shadow-xl">
        <h2 className="text-lg font-semibold text-pink-300 mb-4 flex items-center gap-2">
          📝 Создать новый пост о Mimi
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Ваш никнейм (необязательно)"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="w-full bg-[#120f1d] border border-purple-900/50 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-pink-500 transition-colors"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Заголовок поста"
              value={title}
              required
              onChange={(e) => setTitle(e.target.value)}
              className="w-full bg-[#120f1d] border border-purple-900/50 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-pink-500 transition-colors"
            />
          </div>
          <div>
            <textarea
              placeholder="Текст вашего поста или ссылка на арт..."
              value={content}
              required
              rows={4}
              onChange={(e) => setContent(e.target.value)}
              className="w-full bg-[#120f1d] border border-purple-900/50 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-pink-500 transition-colors resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-medium py-2.5 rounded-xl transition-all shadow-lg shadow-pink-500/10 text-sm"
          >
            Опубликовать
          </button>
        </form>
      </section>

      {/* Лента постов */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-gray-200">Лента постов</h2>
        {posts.map((post) => (
          <article key={post.id} className="bg-[#1a1625] border border-purple-900/20 p-6 rounded-2xl hover:border-pink-500/30 transition-all duration-300">
            <div className="flex justify-between items-start gap-4 mb-2">
              <h3 className="text-lg font-semibold text-white hover:text-pink-300 transition-colors">
                {post.title}
              </h3>
              <span className="text-xs text-gray-500 whitespace-nowrap">{post.date}</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-4 whitespace-pre-wrap">
              {post.content}
            </p>
            <div className="flex items-center justify-between border-t border-purple-900/20 pt-3 text-xs text-gray-400">
              <span>Автор: <strong className="text-purple-300">{post.author}</strong></span>
              <span className="text-pink-400 cursor-pointer hover:underline">💬 Обсудить</span>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
