import { OPINION_ARTICLES } from '../constants/news-constants';

export default function OpinionSidebar() {
  return (
    <aside className="bg-white p-5" style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, .08)' }}>
      {/* Card Title */}
      <h2 className="inline-block text-base font-bold leading-9 mb-0 pb-0 antialiased whitespace-nowrap">
        Opinion
      </h2>
      {/* Divider */}
      <div className="relative w-full h-0.5 bg-[#eeeeee] -bottom-0.5 mb-5">
        <span className="absolute left-0 top-0 w-[30px] h-full bg-[#000000] z-10"></span>
      </div>

      {/* Card Content */}
      <div className="space-y-0">
        {OPINION_ARTICLES.map((article) => (
          <article key={article.id} className="!mb-2.5 !pb-2.5 border-b border-[#eeeeee] last:border-b-0 last:!pb-0">
            <div className="relative pl-5">
              <svg className="absolute left-0 top-[6px] w-3.5 h-3.5 antialiased" viewBox="0 0 14 14" fill="#000000">
                <path d="M4 2 L11 7 L4 12 Z" />
              </svg>
              <h3 className="m-0">
                <a
                  href={article.href}
                  className="text-black text-sm font-normal font-condensed leading-[1.4] antialiased"
                >
                  {article.title}
                </a>
              </h3>
            </div>
          </article>
        ))}
      </div>
    </aside>
  );
}
