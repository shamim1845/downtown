import Image from 'next/image';
import Link from 'next/link';
import { CATEGORY_COLORS, type Article } from '../constants/news-constants';

interface ArticleCardProps {
  article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <article className="bg-white overflow-hidden antialiased" style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.08)' }}>
      {/* Image with Category Badge */}
      <div className="relative w-full h-[200px] overflow-hidden group">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2  text-white px-2 py-1 text-[10px] font-bold uppercase tracking-wide"
          style={{
            backgroundColor: CATEGORY_COLORS.find((color) => color.category === article.category)?.color,
          }}>
          {article.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 text-center">
        <h3 className="mb-3 text-lg leading-[1.4] font-bold font-condensed antialiased" style={{ letterSpacing: '-0.36px' }}>
          <Link href="#" className="text-foreground ">
            {article.title}
          </Link>
        </h3>

        {/* Date */}
        {article.date && (
          <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#a0a0a0] antialiased">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            <span>{article.date}</span>
          </div>
        )}
      </div>
    </article>
  );
}
