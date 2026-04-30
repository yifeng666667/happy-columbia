// 专题元信息。新增专题：在下面 courses 数组加一项，并在
// src/content/notes/<slug>/ 下放置 markdown 文件即可。无需改其他代码。
//
// 新增分类：在 categories 里加一项即可，首页会自动出现新分组。

export type CategoryId = 'finance' | 'economics' | 'geopolitics';
export type Level = 'beginner' | 'intermediate' | 'advanced';

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
  subcat?: 'markets' | 'investing' | 'impact'; // finance sub-group
  level: Level;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn?: string; // English course description (for /en/ pages)
  heroImage?: string; // Unsplash photo URL, falls back to category default
  city?: string;      // City name shown on card
}

export const courses: CourseMeta[] = [
  {
    slug: 'international-capital-markets',
    category: 'finance',
    subcat: 'markets',
    level: 'advanced',
    title: '国际资本市场',
    titleEn: 'International Capital Markets',
    description:
      '系统梳理全球资本市场的运作机制——从货币市场、债券、衍生品到信用、股权与另类投资，理解利率曲线、风险管理工具与 2008 危机的来龙去脉。',
    heroImage: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=1400&q=85',
    city: 'New York',
  },
  {
    slug: 'macro-policy-global-finance',
    category: 'finance',
    subcat: 'markets',
    level: 'advanced',
    title: '宏观政策与全球金融市场',
    titleEn: 'Macroeconomic Policy and Global Financial Markets',
    description:
      '以1989年柏林墙倒塌为起点，通过七大历史危机案例，理解宏观政策与全球金融市场的相互作用——兼顾政策制定者与投资者的双重视角。',
    heroImage: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1400&q=85',
    city: 'London',
  },
  {
    slug: 'emerging-capital-markets',
    category: 'economics',
    level: 'intermediate',
    title: '新兴资本市场',
    titleEn: 'Emerging Capital Markets',
    description:
      '从 180 年全球资本流动周期的视角，理解新兴市场的脆弱性、危机模式与投资逻辑。',
    heroImage: 'https://images.unsplash.com/photo-1474181487882-5abf3f0ba6c2?auto=format&fit=crop&w=1400&q=85',
    city: 'Shanghai',
  },
  {
    slug: 'microeconomics',
    category: 'economics',
    level: 'beginner',
    title: '微观经济学',
    titleEn: 'Microeconomics',
    description:
      '从供需到市场结构，用经济学的眼光理解价格、选择与激励——个人与企业决策背后的底层逻辑。',
    heroImage: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1400&q=85',
    city: 'Chicago',
  },
  {
    slug: 'political-risk-analysis',
    category: 'geopolitics',
    level: 'intermediate',
    title: '政治风险分析',
    titleEn: 'Political Risk Analysis',
    description:
      '用三层框架（G-Zero、J-Curve、国家资本主义）与五种分析工具，系统解读当下的中美博弈、俄乌战争、中东与伊朗冲突——让地缘政治可分析、可比较、可定价。',
    heroImage: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=1400&q=85',
    city: 'Beijing',
  },
  {
    slug: 'macroeconomics',
    category: 'economics',
    level: 'beginner',
    title: '宏观经济学',
    titleEn: 'Macroeconomics',
    description:
      'GDP、通胀、利率、汇率、财政——从教科书框架到 2026 年中美经济拆解，搞懂这些你就能读懂新闻里 90% 的经济分析。',
    heroImage: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1400&q=85',
    city: 'Tokyo',
  },
  {
    slug: 'corporate-finance',
    category: 'finance',
    subcat: 'investing',
    level: 'beginner',
    title: '公司金融',
    titleEn: 'Corporate Finance',
    description:
      '从财务报表分析到 DCF 估值，系统掌握公司金融的五大核心模块：历史绩效分析、现金流预测、最优资本结构、WACC 与 DCF 估值——写给零基础同学的完整笔记。',
    heroImage: 'https://images.unsplash.com/photo-1536599018102-9f803c140fc1?auto=format&fit=crop&w=1400&q=85',
    city: 'Hong Kong',
  },
  {
    slug: 'global-payments',
    category: 'finance',
    subcat: 'markets',
    level: 'intermediate',
    title: '全球支付体系',
    titleEn: 'The Global Payments Ecosystem',
    description:
      '每天数以万亿计的资金在全球流转——SWIFT、CHIPS、CLS、央行数字货币、孟加拉国10亿网络盗窃案、俄罗斯制裁、人民币国际化……读懂支付体系，就读懂了现代金融的底层管道。',
    heroImage: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1400&q=85',
    city: 'Singapore',
  },
  {
    slug: 'deglobalization',
    category: 'geopolitics',
    level: 'intermediate',
    title: '逆全球化',
    titleEn: 'Deglobalisation: Trade, Politics and the Retreat from Integration',
    description:
      '从19世纪自由贸易的黄金年代到2025年的关税战——全球化为什么兴起、为什么放缓、又为什么正在倒退？以英国脱欧和特朗普关税为核心案例，理解贸易、政治与国家主权之间不可调和的张力。',
    heroImage: 'https://images.unsplash.com/photo-1559113513-d5e09c78b9dd?auto=format&fit=crop&w=1400&q=85',
    city: 'Brussels',
  },
  {
    slug: 'china-foreign-relations',
    category: 'geopolitics',
    level: 'beginner',
    title: '中国对外关系史',
    titleEn: "China's Foreign Relations: 1949 to the Present",
    description:
      '从1949年建国到习近平时代——系统梳理中华人民共和国对外政策的演变逻辑：中苏同盟与大分裂、朝鲜战争、万隆精神、尼克松破冰、改革开放外交、天安门后的重建、和平崛起，直到今日的大国博弈。',
    heroImage: 'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?auto=format&fit=crop&w=1400&q=85',
    city: 'Beijing',
  },
  {
    slug: 'inside-situation-room',
    category: 'geopolitics',
    level: 'beginner',
    title: '权力密室：国际危机决策学',
    titleEn: 'Inside the Situation Room',
    description:
      '从总统危机决策室出发，解剖领导人在战争、外交与信息战中的心理博弈——政治心理学、权力生态、外交谈判与贸易战全景，读懂今天世界格局的底层逻辑。',
    heroImage: 'https://images.unsplash.com/photo-1501466044931-62695aada8e9?auto=format&fit=crop&w=1400&q=85',
    city: 'Washington D.C.',
  },
  {
    slug: 'value-investing',
    category: 'finance',
    subcat: 'investing',
    level: 'beginner',
    title: '价值投资',
    titleEn: 'Value Investing: From Graham to the Global Stage',
    description:
      '从 Ben Graham 的三大基石到巴菲特-芒格的质量革命，再到李录的文明视角——系统理解价值投资的理论框架、估值方法与实践智慧，学会在全球最有活力的经济体中寻找被低估的优质公司。',
    heroImage: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=1400&q=85',
    city: 'New York',
  },
  {
    slug: 'international-trade',
    category: 'economics',
    level: 'beginner',
    title: '国际贸易：理论与政策',
    titleEn: 'International Trade: Theory and Policy',
    description:
      '从 David Ricardo 的比较优势到特朗普关税战——系统梳理国际贸易的三大理论支柱与政策工具，并直面"自由贸易是否伤害普通工人"这个当代最尖锐的政治经济学问题。',
    descriptionEn:
      'From Ricardo\'s comparative advantage to the modern tariff wars — a systematic survey of trade theory, policy instruments, and the political economy of globalization. Covers the distributional effects of trade and why economists and voters disagree so fundamentally.',
    heroImage: 'https://images.unsplash.com/photo-1562184552-997c461abbe6?auto=format&fit=crop&w=1400&q=85',
    city: 'Geneva',
  },
  {
    slug: 'trade-financial-markets',
    category: 'finance',
    subcat: 'markets',
    level: 'advanced',
    title: '国际贸易与金融市场',
    titleEn: 'International Trade and Financial Markets',
    description:
      '贸易战打响的那一天，债券收益率涨了、股市跌了——为什么？这门课打通宏观贸易政策与金融市场定价，从关税理论到跨国公司战略，理解贸易与资本之间的深层互动。',
    heroImage: 'https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?auto=format&fit=crop&w=1400&q=85',
    city: 'Amsterdam',
  },
  {
    slug: 'international-finance-monetary',
    category: 'finance',
    subcat: 'markets',
    level: 'advanced',
    title: '国际金融与货币理论',
    titleEn: 'International Finance and Monetary Theory',
    description:
      '汇率是怎么决定的？美联储加息为什么会让发展中国家货币崩溃？从外汇市场微观结构到 AA-DD 模型，建立分析开放经济体货币与金融现象的完整理论框架。',
    heroImage: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=1400&q=85',
    city: 'Zurich',
  },
  {
    slug: 'emerging-financial-systems',
    category: 'finance',
    subcat: 'markets',
    level: 'advanced',
    title: '新兴市场金融体系',
    titleEn: 'Emerging Financial Systems: Brazil, India, Indonesia and Mexico',
    description:
      '以巴西为锚，横向比较印度、印尼、墨西哥的金融体系——从银行结构、金融科技到主权债评级、国际债券市场，解读新兴经济体金融系统的演变逻辑与投资含义。',
    heroImage: 'https://images.unsplash.com/photo-1553532434-5ab5b6b84993?auto=format&fit=crop&w=1400&q=85',
    city: 'São Paulo',
  },
  {
    slug: 'topics-in-corporate-finance',
    category: 'finance',
    subcat: 'investing',
    level: 'advanced',
    title: '公司金融专题',
    titleEn: 'Topics in Corporate Finance',
    description:
      '融资工具箱、另类数据、资产泡沫、生物科技估值、股东积极主义、ESG、财务造假、私募股权、私募信贷、资本配置、数字资产——15 个公司金融实战专题，案例驱动，理解 CFO 和投资人最核心的博弈现场。',
    heroImage: 'https://images.unsplash.com/photo-1517090504586-fde19ea6066f?auto=format&fit=crop&w=1400&q=85',
    city: 'Toronto',
  },
  {
    slug: 'economic-financial-statecraft',
    category: 'geopolitics',
    level: 'intermediate',
    title: '经济与金融制裁',
    titleEn: 'Economic and Financial Statecraft',
    description:
      '美国如何把美元、SWIFT 和芯片出口管制变成战略武器？从制裁伊朗到将俄罗斯踢出 SWIFT，从华为禁令到 2022 年芯片管制——解读"金融武器化"时代的底层逻辑与投资含义。',
    heroImage: 'https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?auto=format&fit=crop&w=1400&q=85',
    city: 'Washington D.C.',
  },
  {
    slug: 'navigating-china',
    category: 'economics',
    level: 'intermediate',
    title: '解码中国经济',
    titleEn: 'Navigating China',
    description:
      '中国是全球最大制造业国——但对大多数全球投资者来说依然充满谜题。用数据打破刻板印象：储蓄率为什么这么高？人口老龄化有多严重？性别失衡如何影响贸易顺差？关税战真正的赢家和输家是谁？',
    heroImage: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1400&q=85',
    city: 'Shenzhen',
  },
  {
    slug: 'impact-investing',
    category: 'finance',
    subcat: 'impact',
    level: 'beginner',
    title: '影响力投资',
    titleEn: 'Impact Investing I: Foundations',
    description:
      '"用投资解决社会问题"——1997 年这个想法被主流金融界嗤之以鼻，2024 年全球影响力投资规模已超 1.5 万亿美元。什么是影响力投资？它真的能改变世界，还是另一种漂绿包装？从债券到股权，从评估工具到批评声音，一门诚实的入门课。',
    heroImage: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1400&q=85',
    city: 'Mumbai',
  },
  {
    slug: 'esg-equity-investing',
    category: 'finance',
    subcat: 'impact',
    level: 'intermediate',
    title: 'ESG 股票投资',
    titleEn: 'ESG Investing in Equity Markets',
    description:
      '特斯拉被踢出 S&P 500 ESG 指数，而埃克森美孚还留在里面——这说明 ESG 评级体系有多混乱。从 MSCI 评级方法到 Engine No.1 对埃克森的代理权之战，读懂 ESG 投资的真相、局限与未来。',
    heroImage: 'https://images.unsplash.com/photo-1509356843151-3e7d96241e11?auto=format&fit=crop&w=1400&q=85',
    city: 'Stockholm',
  },
  {
    slug: 'foundations-of-entrepreneurship',
    category: 'finance',
    subcat: 'impact',
    level: 'beginner',
    title: '创业学基础',
    titleEn: 'Foundations of Entrepreneurship',
    description:
      '为什么 99% 的创业公司会死？为什么那 1% 能成为下一个 Airbnb？从最小可行产品到风险融资，从联合创始人选择到公司关闭决策——把创业神话拆解成可操作框架，无论你想创业还是在大公司里做创新。',
    heroImage: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=1400&q=85',
    city: 'San Francisco',
  },
];

export const getCourse = (slug: string): CourseMeta | undefined =>
  courses.find((c) => c.slug === slug);

export const getCategory = (id: CategoryId): Category | undefined =>
  categories.find((c) => c.id === id);
