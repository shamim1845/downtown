export interface CategoryColor {
  category: string;
  color: string;
}

export const CATEGORY_COLORS: CategoryColor[] = [
  { category: 'Business', color: '#2979ff' },
  { category: 'Politics', color: '#d32f2f' },
  { category: 'Lifestyle', color: '#ff4081' },
  { category: 'Sports', color: '#26c0ef' },
  { category: 'Travel', color: '#7b1fa2' },
  { category: 'Opinion', color: '#ffba08' },
];

export interface Article {
  id: number;
  title: string;
  excerpt?: string;
  image: string;
  category: string;
  author?: string;
  coAuthors?: string;
  authorAvatar?: string;
  date?: string;
  comments?: number;
}

// Latest News (Left Sidebar)
export const LATEST_NEWS: Article[] = [
  {
    id: 1,
    title: 'Unconventional Workouts That Torch Fat And Sculpt Muscle',
    image: '/img/left/latest-1.jpg',
    category: 'Lifestyle',
  },
  {
    id: 2,
    title: 'Millions of Indigenous People May Lose Voting Rights: Alliance',
    image: '/img/left/latest-2.jpg',
    category: 'Politics',
  },
  {
    id: 3,
    title: "Crismonita Dwi Putri, RI's Track Cycling Athlete for Asian Games",
    image: '/img/left/latest-3.jpg',
    category: 'Sports',
  },
  {
    id: 4,
    title: 'President Joko "Jokowi" Widodo Refuses to Sign MD3 Law',
    image: '/img/left/latest-4.jpg',
    category: 'Politics',
  },
  {
    id: 5,
    title: 'Garuda operates larger planes for Jakarta-Palembang route',
    image: '/img/left/latest-5.jpg',
    category: 'Business',
  },
];

export interface SliderItem {
  id: number;
  image: string;
  title: string;
}

export const SLIDER_ITEMS: SliderItem[] = [
  {
    id: 1,
    image: '/img/center/slider/1.jpg',
    title: 'The Chinese smartphone upstarts taking on Apple and Samsung',
  },
  {
    id: 2,
    image: '/img/center/slider/2.jpg',
    title: 'Presidential Train Now Available For Jakartans Traveling To Bandung',
  },
  {
    id: 3,
    image: '/img/center/slider/3.jpg',
    title: 'A Digital Media Startup Growing Up With Millennial Women',
  },
  {
    id: 4,
    image: '/img/center/slider/4.jpg',
    title: 'Indonesia To Offer Infrastructure Projects At IMF-World Bank Meeting',
  },
  {
    id: 5,
    image: '/img/center/slider/5.jpg',
    title: 'Ngurah Rai International Airport To Close For 24 Hours For Nyepi',
  },

];

// Featured Article (Main Content)
export const FEATURED_ARTICLE: Article = {
  id: 100,
  title: "'Election was rigged' says opposition, police confirm three dead",
  excerpt: 'When we get out of the glass bottle of our ego and when we escape like the squirrels in the...',
  image: '/img/center/article/featured/1.jpg',
  category: 'Politics',
  author: 'JOHN DOE',
  coAuthors: '1 others',
  date: 'February 17, 2020',
  comments: 0,
};

// Secondary Articles (Main Content Grid)
export const SECONDARY_ARTICLES: Article[] = [
  {
    id: 101,
    title: "Grab tackles Jakarta's odd-even license plate policy with special algorithm",
    image: '/img/center/article/2.jpg',
    category: 'Business',
    date: 'February 17, 2020',
  },
  {
    id: 102,
    title: 'Jokowi supporters try to prevent anti-Jokowi activist from entering Batam',
    image: '/img/center/article/3.jpg',
    category: 'Politics',
    date: 'August 10, 2018',
  },
];

// Right Sidebar Articles
export const RIGHT_SIDEBAR_ARTICLES: Article[] = [
  {
    id: 200,
    title: "Democratic Party politician calls Prabowo 'cardboard general'",
    excerpt: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life...',
    image: '/img/right/right-1.jpg',
    category: 'Opinion',
    author: 'JOHN DOE',
    date: 'August 10, 2018',
  },
  {
    id: 201,
    title: 'Google tracks location data even when users turn service off',
    excerpt: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life...',
    image: '/img/right/right-2.jpg',
    category: 'Lifestyle',
    author: 'JOHN DOE',
    date: 'August 14, 2018',
  },
  {
    id: 202,
    title: 'The Chinese smartphone upstarts taking on Apple and Samsung',
    excerpt: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life...',
    image: '/img/right/right-3.jpg',
    category: 'Business',
    author: 'JOHN DOE',
    date: 'August 10, 2018',
  },
];

interface OpinionArticle {
  id: number;
  title: string;
  href: string;
}

// Opinion Articles (Left Sidebar)
export const OPINION_ARTICLES: OpinionArticle[] = [
  {
    id: 1,
    title: 'Tour showcases shared art history of Indonesia and Singapore',
    href: '#',
  },
  {
    id: 2,
    title: 'Finland Has An Education System The Other Country Should Learn From',
    href: '#',
  },
  {
    id: 3,
    title: 'Women in Politics: Urgency of Quota System For Women In Regional Elections',
    href: '#',
  },
  {
    id: 4,
    title: "China's Peng banned and fined for Wimbledon corruption attempt",
    href: '#',
  },
  {
    id: 5,
    title: "Democratic Party politician calls Prabowo 'cardboard general'",
    href: '#',
  },
  {
    id: 6,
    title: 'Millions of Indigenous People May Lose Voting Rights: Alliance',
    href: '#',
  },
  {
    id: 7,
    title: 'President Joko "Jokowi" Widodo Refuses to Sign MD3 Law',
    href: '#',
  },
  {
    id: 8,
    title: 'Garuda operates larger planes for Jakarta-Palembang route',
    href: '#',
  },
  {
    id: 9,
    title: "'Election was rigged' says opposition, police confirm three dead",
    href: '#',
  },
  {
    id: 10,
    title: 'Annual open water swim returns to Western Australia in February',
    href: '#',
  },
];
