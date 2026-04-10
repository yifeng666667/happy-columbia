// 专题元信息。新增专题：在下面 courses 数组加一项，并在
// src/content/notes/<slug>/ 下放置 markdown 文件即可。无需改其他代码。
//
// 新增分类：在 categories 里加一项即可，首页会自动出现新分组。

export type CategoryId = 'finance' | 'economics' | 'geopolitics';

export interface Category {
  id: CategoryId;
  title: string;
  subtitle: string;
  description: string;
}

export const categories: Category[] = [
  {
    id: 'finance',
    title: '金融投资',
    subtitle: 'Finance & Investment',
    description: '资本市场、公司金融、投资逻辑与风险管理的知识整理。',
  },
  {
    id: 'economics',
    title: '经济发展',
    subtitle: 'Economics & Development',
    description: '宏观经济、新兴市场、发展理论与国际货币体系。',
  },
  {
    id: 'geopolitics',
    title: '地缘政治',
    subtitle: 'Geopolitics & Policy',
    description: '全球权力格局、制裁与贸易、地缘政治对市场的影响。',
  },
];

export interface CourseMeta {
  slug: string;
  category: CategoryId;
  title: string;
  titleEn: string;
  description: string;
  heroImage?: string; // Unsplash photo URL, falls back to category default
}

export const courses: CourseMeta[] = [
  {
    slug: 'international-capital-markets',
    category: 'finance',
    title: '国际资本市场',
    titleEn: 'International Capital Markets',
    description:
      '系统梳理全球资本市场的运作机制——从货币市场、债券、衍生品到信用、股权与另类投资，理解利率曲线、风险管理工具与 2008 危机的来龙去脉。',
    heroImage: 'https://images.unsplash.com/photo-1604594849809-dfedbc827105?auto=format&fit=crop&w=2560&q=95',
  },
  {
    slug: 'macro-policy-global-finance',
    category: 'finance',
    title: '宏观政策与全球金融市场',
    titleEn: 'Macroeconomic Policy and Global Financial Markets',
    description:
      '以1989年柏林墙倒塌为起点，通过七大历史危机案例，理解宏观政策与全球金融市场的相互作用——兼顾政策制定者与投资者的双重视角。',
    heroImage: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=2560&q=95',
  },
  {
    slug: 'emerging-capital-markets',
    category: 'economics',
    title: '新兴资本市场',
    titleEn: 'Emerging Capital Markets',
    description:
      '从 180 年全球资本流动周期的视角，理解新兴市场的脆弱性、危机模式与投资逻辑。',
    heroImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2560&q=95',
  },
  {
    slug: 'microeconomics',
    category: 'economics',
    title: '微观经济学',
    titleEn: 'Microeconomics',
    description:
      '从供需到市场结构，用经济学的眼光理解价格、选择与激励——个人与企业决策背后的底层逻辑。',
    heroImage: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=2560&q=95',
  },
  {
    slug: 'political-risk-analysis',
    category: 'geopolitics',
    title: '政治风险分析',
    titleEn: 'Political Risk Analysis',
    description:
      '用三层框架（G-Zero、J-Curve、国家资本主义）与五种分析工具，系统解读当下的中美博弈、俄乌战争、中东与伊朗冲突——让地缘政治可分析、可比较、可定价。',
    heroImage: 'https://images.unsplash.com/photo-1541726260-e6b6d4e94285?auto=format&fit=crop&w=2560&q=95',
  },
  {
    slug: 'macroeconomics',
    category: 'economics',
    title: '宏观经济学',
    titleEn: 'Macroeconomics',
    description:
      'GDP、通胀、利率、汇率——搞懂这些大词，你就能读懂新闻里 90% 的经济分析。',
    heroImage: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=2560&q=95',
  },
];

export const getCourse = (slug: string): CourseMeta | undefined =>
  courses.find((c) => c.slug === slug);

export const getCategory = (id: CategoryId): Category | undefined =>
  categories.find((c) => c.id === id);
