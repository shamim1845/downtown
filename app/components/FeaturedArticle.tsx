import Image from 'next/image';
import Link from 'next/link';
import { FEATURED_ARTICLE } from '../constants/news-constants';

export default function FeaturedArticle() {
  return (
    <article className="bg-white" style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, .08)' }}>
      {/* Container for image and overlapping content */}
      <div className="relative">
        {/* Image Section */}
        <div className="relative w-full overflow-hidden">
          <Image
            src={FEATURED_ARTICLE.image}
            alt={FEATURED_ARTICLE.title}
            width={750}
            height={375}
            priority
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Content Section - Overlapping bottom of image */}
        <div className="relative -mt-24 mx-4 bg-white pt-[15px] pb-[20px] px-[30px]">
          {/* Category */}
          <div className="mb-2">
            <Link href='#' >
              <span className="text-[11px] font-normal text-[#a0a0a0] hover:text-foreground transition-colors duration-300 uppercase tracking-wide">
                {FEATURED_ARTICLE.category}
              </span>
            </Link>
          </div>

          {/* Title */}
          <h3 className="mb-2 text-base md:text-lg lg:text-2xl leading-tight font-bold font-condensed tracking-tight">
            <Link href="#" className="text-black">
              {FEATURED_ARTICLE.title}
            </Link>
          </h3>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-3 text-[11px] max-[480px]:text-[10px] font-normal text-[#a0a0a0] mb-4">
            <div className="flex items-center gap-1.5">
              <span className='italic'>by</span>
              <Link href="#" className="font-semibold text-black uppercase">
                {FEATURED_ARTICLE.author}
              </Link>
              {FEATURED_ARTICLE.coAuthors && (
                <>
                  <span className='italic'>and</span>
                  <span className='italic'>{FEATURED_ARTICLE.coAuthors}</span>
                </>
              )}
            </div>
            <div className="flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              <span>{FEATURED_ARTICLE.date}</span>
            </div>
            {FEATURED_ARTICLE.comments !== undefined && (
              <div className="flex items-center gap-1.5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
                <span>{FEATURED_ARTICLE.comments}</span>
              </div>
            )}
          </div>

          {/* Excerpt */}
          <p className="mb-0 !mt-[15px] text-sm leading-[1.6] text-[#666666] font-serif">
            {FEATURED_ARTICLE.excerpt}
          </p>

          {/* Read More Button */}
          <Link
            href="#"
            className="inline-block mt-[15px] mb-[15px] max-[480px]:mt-[10px] px-[18px] py-[6px] border border-[#e0e0e0] text-[#53585c] text-[11px] font-normal uppercase tracking-wider shadow-sm transition-all duration-300 ease-in-out hover:bg-foreground hover:text-white whitespace-nowrap"
          >
            Read more<span className="sr-only">Details</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
