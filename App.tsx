
import React, { useState, useMemo } from 'react';
import { HELP_CENTER_DATA } from './constants';
import { Category, SubCategory, Article, CategoryID } from './types';

// --- Subcomponents ---

const SidebarItem: React.FC<{
  category: Category;
  isOpen: boolean;
  onToggle: () => void;
  selectedSub: string | null;
  onSelectSub: (sub: SubCategory) => void;
}> = ({ category, isOpen, onToggle, selectedSub, onSelectSub }) => {
  return (
    <div className="mb-2">
      <button
        onClick={onToggle}
        className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors ${
          isOpen ? 'bg-blue-50 text-blue-700 font-semibold' : 'hover:bg-slate-100 text-slate-600'
        }`}
      >
        <div className="flex items-center gap-3">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={category.icon} />
          </svg>
          <span className="text-sm">{category.title}</span>
        </div>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-90' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="9 5l7 7-7 7" />
        </svg>
      </button>

      {isOpen && (
        <div className="mt-1 ml-4 border-l border-slate-200">
          {category.subCategories.map((sub) => (
            <button
              key={sub.title}
              onClick={() => onSelectSub(sub)}
              className={`w-full text-left py-2 px-4 text-xs transition-colors rounded-r-lg ${
                selectedSub === sub.title
                  ? 'bg-blue-100 text-blue-800 font-medium'
                  : 'text-slate-500 hover:text-slate-800 hover:bg-slate-50'
              }`}
            >
              {sub.title}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

const Header: React.FC<{
  searchTerm: string;
  setSearchTerm: (s: string) => void;
  filter: CategoryID | 'All';
  setFilter: (f: CategoryID | 'All') => void;
}> = ({ searchTerm, setSearchTerm, filter, setFilter }) => (
  <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-slate-200 px-8 py-4">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div className="flex-1 relative max-w-2xl">
        <svg
          className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          type="text"
          placeholder="Search articles across PLUS, Zoom, and Slack..."
          className="w-full pl-11 pr-4 py-2 bg-slate-100 border-none rounded-xl focus:ring-2 focus:ring-blue-500 transition-all outline-none"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0">
        {(['All', 'PLUS', 'Zoom', 'Slack'] as const).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-1.5 text-xs font-medium rounded-full transition-all whitespace-nowrap ${
              filter === f ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' : 'bg-slate-200 text-slate-600 hover:bg-slate-300'
            }`}
          >
            {f}
          </button>
        ))}
      </div>
    </div>
  </header>
);

const ArticleView: React.FC<{
  article: Article;
  onClose: () => void;
  relatedArticles: Article[];
  onSelectArticle: (a: Article) => void;
}> = ({ article, onClose, relatedArticles, onSelectArticle }) => {
  return (
    <div className="flex flex-col lg:flex-row gap-8">
      {/* Content */}
      <div className="flex-grow">
        <nav className="flex mb-6 text-sm text-slate-500 gap-2 items-center">
          <button onClick={onClose} className="hover:text-blue-600">Help Center</button>
          <span>/</span>
          <span>{article.category}</span>
          <span>/</span>
          <span className="text-slate-800 font-medium truncate">{article.subCategory}</span>
        </nav>

        <h1 className="text-4xl font-bold text-slate-900 mb-2">{article.title}</h1>
        <div className="flex items-center gap-3 text-sm text-slate-500 mb-8 border-b border-slate-200 pb-6">
          <span className="bg-slate-100 px-2 py-0.5 rounded text-slate-700 font-medium">{article.category}</span>
          <span>•</span>
          <span>{article.estimatedReadTime}</span>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl mb-10">
          <h3 className="text-blue-800 font-semibold mb-2 flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Summary
          </h3>
          <p className="text-blue-900 text-sm leading-relaxed">{article.summary}</p>
        </div>

        {article.sections.map((section) => (
          <section key={section.id} id={section.id} className="mb-12 scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">{section.title}</h2>
            <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed">
              <p>{section.content}</p>
              <div className="h-20 bg-slate-50 rounded-lg mt-4 border border-dashed border-slate-300 flex items-center justify-center italic text-slate-400">
                [Detailed procedural content placeholder]
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Right Rail */}
      <aside className="lg:w-72 flex-shrink-0">
        <div className="sticky top-24 space-y-8">
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">On this page</h4>
            <nav className="flex flex-col gap-3">
              {article.sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="text-sm text-slate-500 hover:text-blue-600 transition-colors border-l-2 border-transparent hover:border-blue-600 pl-4"
                >
                  {s.title}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Related Articles</h4>
            <div className="flex flex-col gap-3">
              {relatedArticles.map((ra) => (
                <button
                  key={ra.id}
                  onClick={() => onSelectArticle(ra)}
                  className="group text-left p-3 rounded-lg border border-slate-200 hover:border-blue-200 hover:bg-blue-50 transition-all"
                >
                  <p className="text-sm font-medium text-slate-800 group-hover:text-blue-700 transition-colors">
                    {ra.title}
                  </p>
                  <p className="text-[10px] text-slate-400 mt-1 uppercase font-bold tracking-tighter">
                    {ra.subCategory}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

// --- Main App Component ---

export default function App() {
  const [openCategories, setOpenCategories] = useState<Set<string>>(new Set(['PLUS']));
  const [selectedSub, setSelectedSub] = useState<SubCategory | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState<CategoryID | 'All'>('All');

  const toggleCategory = (id: string) => {
    const next = new Set(openCategories);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    setOpenCategories(next);
  };

  const handleSubSelect = (sub: SubCategory) => {
    setSelectedSub(sub);
    setSelectedArticle(null);
    setSearchTerm('');
  };

  const handleArticleSelect = (art: Article) => {
    setSelectedArticle(art);
    setSearchTerm('');
  };

  // Filter and Search Logic
  const allArticles = useMemo(() => {
    const arts: Article[] = [];
    HELP_CENTER_DATA.forEach(cat => {
      cat.subCategories.forEach(sub => {
        arts.push(...sub.articles);
      });
    });
    return arts;
  }, []);

  const searchResults = useMemo(() => {
    if (!searchTerm && filter === 'All') return null;
    return allArticles.filter(a => {
      const matchesSearch = !searchTerm || 
        a.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        a.summary.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesFilter = filter === 'All' || a.category === filter;
      return matchesSearch && matchesFilter;
    });
  }, [searchTerm, filter, allArticles]);

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Sidebar - Persistent Nav */}
      <aside className="w-full md:w-80 bg-white border-r border-slate-200 flex-shrink-0 flex flex-col h-screen sticky top-0 overflow-y-auto">
        <div className="p-6 flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-200">
            P
          </div>
          <div>
            <h1 className="font-bold text-slate-900 leading-tight">PLUS Help</h1>
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Tutor Center</p>
          </div>
        </div>

        <nav className="flex-grow px-4 pb-8">
          <p className="px-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Resources</p>
          {HELP_CENTER_DATA.map((cat) => (
            <SidebarItem
              key={cat.id}
              category={cat}
              isOpen={openCategories.has(cat.id)}
              onToggle={() => toggleCategory(cat.id)}
              selectedSub={selectedSub?.title || null}
              onSelectSub={handleSubSelect}
            />
          ))}
        </nav>

        <div className="p-6 border-t border-slate-100">
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Live Status</p>
            <div className="flex items-center gap-2 text-sm text-green-600 font-medium">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              All systems operational
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-grow flex flex-col min-h-screen">
        <Header 
          searchTerm={searchTerm} 
          setSearchTerm={setSearchTerm} 
          filter={filter} 
          setFilter={setFilter} 
        />

        <div className="p-8 md:p-12 max-w-6xl mx-auto w-full flex-grow">
          {searchResults ? (
            <div>
              <div className="mb-8 flex items-center justify-between">
                <h2 className="text-2xl font-bold text-slate-900">
                  {searchTerm ? `Search results for "${searchTerm}"` : `${filter} Articles`}
                </h2>
                <p className="text-sm text-slate-500">{searchResults.length} articles found</p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {searchResults.map((art) => (
                  <button
                    key={art.id}
                    onClick={() => handleArticleSelect(art)}
                    className="group text-left p-6 bg-white border border-slate-200 rounded-2xl hover:border-blue-400 hover:shadow-xl hover:shadow-blue-50 transition-all flex flex-col h-full"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded uppercase tracking-widest">
                        {art.category}
                      </span>
                      <span className="text-xs text-slate-400">{art.estimatedReadTime}</span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-800 group-hover:text-blue-700 transition-colors mb-2">
                      {art.title}
                    </h3>
                    <p className="text-sm text-slate-500 line-clamp-2 leading-relaxed mb-4">
                      {art.summary}
                    </p>
                    <div className="mt-auto flex items-center gap-2 text-sm font-semibold text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                      Read article
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </button>
                ))}
                {searchResults.length === 0 && (
                  <div className="col-span-2 text-center py-20 bg-slate-100 rounded-3xl border-2 border-dashed border-slate-300">
                    <p className="text-slate-400 font-medium">No articles found matching your criteria.</p>
                  </div>
                )}
              </div>
            </div>
          ) : selectedArticle ? (
            <ArticleView 
              article={selectedArticle} 
              onClose={() => setSelectedArticle(null)}
              onSelectArticle={handleArticleSelect}
              relatedArticles={allArticles.filter(a => a.category === selectedArticle.category && a.id !== selectedArticle.id).slice(0, 4)}
            />
          ) : selectedSub ? (
            <div>
              <div className="mb-10">
                <nav className="flex mb-4 text-sm text-slate-500 gap-2 items-center">
                  <button onClick={() => setSelectedSub(null)} className="hover:text-blue-600">Help Center</button>
                  <span>/</span>
                  <span className="text-slate-800 font-medium">{selectedSub.title}</span>
                </nav>
                <h2 className="text-4xl font-bold text-slate-900 mb-2">{selectedSub.title}</h2>
                <p className="text-slate-500 text-lg border-b border-slate-100 pb-8 mb-8">Operational index and procedural documentation.</p>
              </div>
              
              {/* Vertical Index List Format */}
              <div className="flex flex-col border border-slate-200 rounded-xl bg-white overflow-hidden">
                {selectedSub.articles.map((art, idx) => (
                  <button
                    key={art.id}
                    onClick={() => handleArticleSelect(art)}
                    className={`text-left p-5 hover:bg-slate-50 transition-colors flex items-center justify-between gap-6 group ${
                      idx !== selectedSub!.articles.length - 1 ? 'border-b border-slate-100' : ''
                    }`}
                  >
                    <div className="flex-grow">
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="text-base font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                          {art.title}
                        </h3>
                        <span className="text-[10px] bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded font-bold uppercase tracking-tighter">
                          {art.estimatedReadTime}
                        </span>
                      </div>
                      <p className="text-sm text-slate-500 line-clamp-1 max-w-2xl">
                        {art.summary}
                      </p>
                    </div>
                    <div className="flex-shrink-0 text-slate-300 group-hover:text-blue-500 transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center text-center py-20 max-w-2xl mx-auto">
              <div className="w-20 h-20 bg-blue-100 rounded-3xl flex items-center justify-center text-blue-600 mb-8">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Welcome to the PLUS Help Center</h2>
              <p className="text-slate-500 mb-10 leading-relaxed">
                Choose a category from the sidebar or search above to find detailed guides on the PLUS application, Zoom session management, and Slack communication protocols.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
                {HELP_CENTER_DATA.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => toggleCategory(cat.id)}
                    className="p-6 bg-white border border-slate-200 rounded-2xl hover:border-blue-400 hover:shadow-lg transition-all text-center flex flex-col items-center"
                  >
                    <svg className="w-8 h-8 text-blue-600 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={cat.icon} />
                    </svg>
                    <span className="font-bold text-slate-800">{cat.title}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Floating Action Button for Urgent Support */}
        <div className="fixed bottom-8 right-8">
          <button className="flex items-center gap-3 px-6 py-3 bg-red-600 text-white rounded-full font-bold shadow-xl shadow-red-200 hover:bg-red-700 transition-all hover:scale-105 active:scale-95 group">
            <span className="w-2 h-2 rounded-full bg-white animate-ping"></span>
            Report Live Issue
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </main>
    </div>
  );
}
