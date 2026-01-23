import Image from 'next/image';
import Link from 'next/link';
import { LATEST_NEWS } from '../constants/news-constants';

export default function LatestNewsSidebar() {
  return (
    <aside className="bg-white p-5" style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, .08)' }}>

      {/* Card Title */}
      <h2 className="inline-block text-base font-bold leading-9 mb-0 pb-0 antialiased whitespace-nowrap">
        The Latest
      </h2>
      {/* Divider */}
      <div className="relative w-full h-0.5 bg-[#eeeeee] -bottom-0.5 mb-5">
        <span className="absolute left-0 top-0 w-[30px] h-full bg-[#000000] z-10"></span>
      </div>

      {/* Card Content */}
      <div className="flex flex-col gap-5">
        {LATEST_NEWS.map((article) => (
          <article key={article.id} className="flex gap-3 group">
            <div className="flex-shrink-0 w-[100px] overflow-hidden">
              <Image
                src={article.image}
                alt={article.title}
                width={100}
                height={100}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-sm leading-tight font-bold">
                <Link href="#" className="text-black">
                  {article.title}
                </Link>
              </h3>
            </div>
          </article>
        ))}
      </div>
    </aside>
  );
}
