import Image from 'next/image';
import Link from 'next/link';
import { CATEGORY_COLORS, RIGHT_SIDEBAR_ARTICLES } from '../constants/news-constants';

export default function RightSidebar() {
  return (
    <aside className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-5 md:gap-7">
      {RIGHT_SIDEBAR_ARTICLES.map((article) => (
        <article key={article.id} className="bg-white overflow-hidden antialiased" style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.08)' }}>
          {/* Image with Category Badge */}
          <div className="relative w-full h-[196px] overflow-hidden group">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover absolute inset-0 transition-opacity duration-400 ease-in-out opacity-100 antialiased"
              style={{ aspectRatio: 'auto 350 / 250' }}
            />
            <span className="absolute top-3 left-3 text-white px-2 py-1 text-[10px] font-bold uppercase tracking-wide"
              style={{
                backgroundColor: CATEGORY_COLORS.find((color) => color.category === article.category)?.color,
              }}>
              {article.category}
            </span>
          </div>

          {/* Content */}
          <div className="p-5">
            <h3 className="mb-3 text-xl leading-[1.4] font-bold font-condensed antialiased" style={{ letterSpacing: '-0.4px' }}>
              <Link href="#" >
                {article.title}
              </Link>
            </h3>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-3 text-[11px] max-[480px]:text-[10px] font-normal text-[#a0a0a0] mb-3 antialiased">
              <div className="flex items-center gap-1.5">
                <span className='italic'>by</span>
                <Link href="#" className="font-semibold text-black uppercase">
                  {article.author}
                </Link>
              </div>
              <div className="flex items-center gap-1.5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                <span>{article.date}</span>
              </div>
            </div>

            {/* Excerpt */}
            {article.excerpt && (
              <p className="text-sm leading-[1.6] text-[#666666] font-serif antialiased m-0">
                {article.excerpt}
              </p>
            )}
          </div>
        </article>
      ))}
    </aside>
  );
}
