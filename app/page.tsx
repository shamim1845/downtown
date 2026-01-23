import LatestNewsSidebar from "./components/LatestNewsSidebar";
import OpinionSidebar from "./components/OpinionSidebar";
import TopSlider from "./components/TopSlider";
import FeaturedArticle from "./components/FeaturedArticle";
import ArticleCard from "./components/ArticleCard";
import RightSidebar from "./components/RightSidebar";
import { SECONDARY_ARTICLES } from "./constants/news-constants";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main className="max-w-[1380px] mx-auto my-7 px-5">
        {/* Three Column Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_30%] lg:grid-cols-[25%_1fr_25%] gap-7">

          {/* Left Sidebar */}
          <div className="hidden lg:flex flex-col gap-7 lg:order-1 md:order-2">
            <LatestNewsSidebar />
            <OpinionSidebar />
          </div>

          {/* Main Content */}
          <div className="flex flex-col gap-7 lg:order-2 md:order-1 overflow-hidden">
            <TopSlider />
            <FeaturedArticle />

            {/* Secondary Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {SECONDARY_ARTICLES.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:order-3 md:order-3">
            <RightSidebar />
          </div>

        </div>
      </main>
    </div>
  );
}
