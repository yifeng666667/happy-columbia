---
title: "公开股票市场"
order: 10
session: "10"
---

## 本文概述

股票是最被大众熟知的资产类别，但"买股票"背后涉及的市场结构、定价逻辑和监管规则远比想象中复杂。这节课从公司上市的全流程讲起，拆解中国公司赴美上市的特殊架构，理解全球市场结构与交易机制，再深入到投资组合理论（CAPM）、指数化投资与估值判断，最终回答一个核心问题：股票应该怎么买、怎么定价？

---

## 一、公司如何进入公开市场

### 1.1 IPO 流程

IPO（首次公开募股）是私人公司通过发行新股、在交易所挂牌的过程。核心步骤：

1. **选择承销商**：投资银行（承销商）帮助定价、路演、分配股票
2. **注册文件**：向 SEC 提交 S-1（美国）或招股说明书
3. **路演（Roadshow）**：管理层向机构投资者展示公司，收集需求
4. **询价定价**：通过 Book Building 确定发行价
5. **上市首日交易**：股票在交易所正式流通

**承销商角色**：不仅是中介，还承担"包销"（Firm Commitment）风险——以固定价格买入全部股票再转卖；或"尽力销售"（Best Efforts）模式。

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/New_York_Stock_Exchange_Facade_2015.jpg/600px-New_York_Stock_Exchange_Facade_2015.jpg" alt="纽约证券交易所外景" style="width:100%;border-radius:8px;margin:1rem 0;" />

*纽约证券交易所（NYSE）建于1903年，是全球市值最大的交易所，也是大多数大型 IPO 的首选上市地。*

### 1.2 股票拆分与二次发行

**股票拆分（Stock Split）**：增加股本数量、等比降低股价，市值不变。目的是提升股票流动性和散户可及性。
- 案例：Apple 2020年8月实施 4:1 拆分，股价从约 $500 降至约 $125

**二次发行（Secondary Offering）**：已上市公司再次发行新股融资。会稀释现有股东，但补充公司资本。

**配股（Rights Offering）**：向现有股东按比例给予认购新股的权利，通常低于市价，保护现有股东不被稀释。

### 1.3 SPAC：另一条上市路径

SPAC（Special Purpose Acquisition Company，空白支票公司）是一种"反向并购"上市方式：
- 先设立一个壳公司上市融资
- 再在规定时间内（通常2年）寻找目标公司合并
- 目标公司借此完成上市，绕过传统 IPO 流程

**SPAC 热潮与崩盘**：
- 2021年顶峰：613个 SPAC IPO，融资 $162.5B
- 2022-2024年急剧萎缩：利率上升、SEC 加强监管、大量 SPAC 未能找到合适标的

---

## 二、中国公司赴美上市：VIE 架构

### 2.1 为什么需要特殊架构

中国法律禁止外资直接持有互联网、教育等"限制性行业"公司的股权。但这些公司又需要赴美上市融资。解决方案：**VIE（Variable Interest Entity，可变利益实体）架构**。

> **一句话理解 VIE：**
> 外国人在法律上买不了中国互联网公司的股权，但可以通过一堆合同协议，间接享有公司的经济利益。阿里巴巴、腾讯、百度在海外上市用的都是这个结构。投资者拿到的不是真正的公司股权，而是一张"合同凭证"。

### 2.2 VIE 架构结构

以网易（NetEase）为例，从底层到顶层：

```
中国个人股东（创始人）
        ↓ 持股
国内运营实体（OpCo，持有业务牌照）
        ↓ VIE合同控制（而非股权）
外商独资企业 WFOE（Wholly Foreign Owned Entity）
        ↓ 持股
香港特殊目的公司（HK SPV）
        ↓ 持股
开曼群岛控股公司（Cayman Holdco）
        ↓
纽交所/纳斯达克 ADS 持有人（美国投资者）
```

**关键点**：美国投资者通过 ADS（美国存托股票）持有的是开曼公司股权，而开曼公司通过**合同**（而非股权）控制国内运营实体。这些合同包括：独家服务协议、股权质押协议、股东表决权委托等。

**超过 80% 的中国美股上市公司采用 VIE 架构。**

### 2.3 中国公司在美市场的现状（2024）

- 在美上市中国公司：265家
- 合计市值：$8480亿
- 代表性事件：
  - **阿里巴巴 2014**：$250亿 IPO，史上最大 IPO 之一
  - **蚂蚁金服 2020**：IPO 前夕被叫停，马云消失数月；背后是监管收紧信号
  - **滴滴 2022**：赴美上市后被中国监管部门调查，罚款 $12亿，最终从纽交所退市
  - **SHEIN**：放弃美国上市计划，转赴英国伦敦

### 2.4 中美监管博弈：HFCAA

2021年《外国公司问责法》（HFCAA）要求在美上市外国公司允许 PCAOB（美国公众公司会计监督委员会）审查审计底稿，否则面临退市。2022年中美达成协议，允许 PCAOB 赴港检查，暂时化解退市危机。

---

## 三、全球股票市场格局

### 3.1 全球市值分布（2024年11月）

| 地区 | 占全球市值比例 |
|------|-------------|
| 美国 | **62.8%** |
| 西欧 | 10.7% |
| 日本 | 5.9% |
| 中国 | **3.14%** |
| 其余 | 约17.6% |

**中国的结构性困境**：中国 GDP 约占全球 18%，但股票市值仅占 3.14%。对比更鲜明的指标：
- 中国股市市值/GDP 约 **15%**
- 美国股市市值/GDP 约 **194%**

这反映了资本市场发展深度、投资者信心与监管环境的差异。

### 3.2 主要交易所

**纽约证券交易所（NYSE）**
- 成立于1792年，由 Alexander Hamilton 参与设计的美国金融体系的组成部分
- 采用"指定做市商"（Designated Market Maker）制度
- 以大型蓝筹股为主

**纳斯达克（NASDAQ）**
- 成立于1971年，全球第一家电子化交易所
- 以科技股为主（Apple、Microsoft、Google 等）

### 3.3 暗池与支付订单流

**暗池（Dark Pools）**：不公开报价、不透明的私下交易场所。主要是机构投资者用于大额交易，避免市场冲击。
- 暗池交易量占美国股市总成交量约 **46%**（通过 TRF，Trade Reporting Facility 报告）

**支付订单流（Payment for Order Flow, PFOF）**：
- 零售经纪商（如 Robinhood）将客户订单卖给做市商（如 Citadel Securities）
- 做市商支付回扣，同时在买卖价差中获利
- 争议：客户订单是否获得最优执行？SEC 曾考虑禁止但未实施

---

## 四、卖空机制

### 4.1 卖空流程

1. 向经纪商**借入**股票（支付借券费）
2. 在市场上**卖出**
3. 等待股价下跌后**买回**（回补）
4. **归还**股票，赚取差价

**风险**：理论上无限亏损（股价可以无限上涨）

### 4.2 监管限制

**上涨规则（Uptick Rule）**：规定只有在股价上涨时才能卖空，防止踩踏式下跌。美国1938年引入，2007年废除，2010年改良版重新引入（SSR，Alternative Uptick Rule）。

**裸卖空（Naked Short Selling）**：未借入股票就卖空，现已在大多数市场被禁止。

### 4.3 散户 vs 机构：GameStop 事件（2021）

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/GameStop_%2814666287269%29.jpg/500px-GameStop_%2814666287269%29.jpg" alt="GameStop 门店" style="width:100%;border-radius:8px;margin:1rem 0;" />

*GameStop 是一家实体游戏零售商，在数字游戏时代逐渐没落。2021年初，它却意外成为金融史上最著名的"散户对抗机构"事件的主角。*

Reddit 论坛 WallStreetBets 组织散户大规模买入 GameStop（GME），对抗机构空头（Melvin Capital 等）：
- GME 股价从 $20 涨至 $483（约25倍）
- 做空机构遭受数十亿美元损失
- 引发"轧空"（Short Squeeze）讨论与监管审查
- Melvin Capital 2022年清盘

**韩国案例**：2023-2025年韩国监管部门短暂禁止卖空，以回应散户对市场操纵的投诉。

---

## 五、ADR：跨境投资工具

**ADR（American Depositary Receipt，美国存托凭证）**：允许美国投资者在国内市场买卖外国公司股票的金融工具。

- 全球超过 **2300个** ADR 项目，来自 **60多个国家**
- 占纽交所市值约 **21.5%**

**运作机制**：外国公司将股票存入美国托管银行，银行发行代表这些股票的凭证在美国交易所上市。1个 ADR 可代表1股或多股外国股票。

**交叉上市的"债券机制"（Bonding Mechanism）**：外国公司在美国上市，相当于自愿接受 SEC 更严格的信息披露要求，向投资者传递"我们治理透明"的信号，从而降低融资成本。

---

## 六、投资组合理论与 CAPM

### 6.1 有效前沿与市场组合

马科维茨在1952年证明了一件反直觉的事：把两个风险资产放在一起，整体风险有时会比任何一个单独的资产还要低。这就是分散化的魔法。只要两个资产不是完全正相关，组合起来总能在同等收益下降低风险，或在同等风险下提高收益。

**有效前沿（Efficient Frontier）**：在给定风险水平下，能达到最高预期收益率的投资组合集合。

**资本市场线（Capital Market Line, CML）**：连接无风险利率与切点组合（Tangency Portfolio M）的直线。切点组合就是**市场组合**，按市值加权持有所有风险资产。

**核心结论**：每个投资者都应持有同样的风险资产组合（市场组合），仅通过调整无风险资产与市场组合的比例来调节风险偏好。

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Capital_market_line_of_CAPM.svg/500px-Capital_market_line_of_CAPM.svg.png" alt="资本市场线（CML）" style="width:100%;border-radius:8px;margin:1rem 0;" />

*图：资本市场线（CML）。横轴是风险（标准差），纵轴是预期收益率。所有理性投资者的最优选择都落在这条线上：通过调整持有无风险资产和市场组合的比例，可以到达线上任意一点。*

### 6.2 CAPM 公式

CAPM 的核心思想是：在一个所有信息公开的市场里，投资者只应该为"无法分散掉的风险"要求补偿。能通过分散化消除的风险，不值得额外定价。所以 CAPM 用 Beta（系统性风险）来衡量一个资产应该获得多少超额收益。

> **CAPM 公式：**
> `预期收益率 = 无风险利率 + β × 市场风险溢价`
> 其中：市场风险溢价 = 市场预期收益率 - 无风险利率

- 无风险利率（$r_f$）：通常用美国国债收益率代替
- Beta（$\beta$）：资产相对市场的系统性风险，通过协方差/市场方差计算
- 市场风险溢价（$E[R_m] - r_f$）：历史约 3-6%

**Beta 的解读**：
- Beta = 1：资产与市场同步波动
- Beta > 1：放大市场波动（进攻型，如科技股）
- Beta < 1：波动小于市场（防守型，如公用事业股）

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Security_market_line_of_CAPM.svg/500px-Security_market_line_of_CAPM.svg.png" alt="证券市场线（SML）" style="width:100%;border-radius:8px;margin:1rem 0;" />

*图：证券市场线（SML）。横轴是 Beta，纵轴是预期收益率。CAPM 认为所有资产应落在这条线上，落在线上方的资产被低估（Alpha > 0），落在线下方的资产被高估。*

### 6.3 市场组合的近似：S&P 500

S&P 500 是美国大盘股的代表性指数，包含500家公司，按市值加权。

**行业结构演变**：
| 时间 | 第一大行业 | 第二大行业 |
|------|----------|----------|
| 2006年 | 金融（22.3%） | 信息技术（15.1%） |
| 2024年 | **信息技术（31.7%）** | 金融（约13%） |

**头部集中度**（2024年11月）：
- Apple 市值 $3.43万亿，占指数权重 **7.1%**
- 前7大科技股（Magnificent 7）合计权重超30%

**S&P 500 水平**（2024年11月）：5782.76点，对应 EPS $234.33，P/E = **24.68倍**

---

## 七、指数化投资与 ETF

### 7.1 ETF 的崛起

ETF（Exchange-Traded Fund，交易所交易基金）是在交易所实时交易的指数基金。

**市场规模**（2024年9月）：全球 ETF AUM = **$9.97万亿**

**美国最大 ETF**（2024年）：
| ETF | 跟踪指数 | AUM |
|-----|---------|-----|
| SPY | S&P 500 | $3630亿 |
| IVV | S&P 500 | $3000亿 |
| VTI | 全美市场 | $2890亿 |
| VOO | S&P 500 | $2870亿 |

**ETF vs 主动基金**：长期来看，大多数主动基金跑不赢指数，ETF 以低费率（通常0.03%-0.20%）成为个人投资者的主流选择。

### 7.2 本土偏差（Home Bias）

CAPM 理论预测投资者应持有**全球市场组合**，但现实中投资者严重超配本国资产。原因：
- 交易成本与预提税（Withholding Tax）
- 信息不对称
- 汇率风险
- 行为因素（熟悉感、爱国情绪）

---

## 八、股票估值

### 8.1 P/E 估值法

**市盈率（P/E Ratio）** = 股价 / 每股收益（EPS）

当前水平（2024年11月）：
- S&P 500 P/E = **24.68倍**
- 对应股票收益率（Earnings Yield）= 1/24.68 = **4.05%**
- 10年期国债收益率 = **4.31%**

**股债比较**：股票收益率低于债券收益率，表面看股票"贵"。但若考虑 TIPS 实际收益率约 2%，通过 Gordon Growth Model 反推，P/E 公允价值可能在 **46-51倍**。

### 8.2 市场效率与技术分析

**有效市场假说（EMH）**：
- 弱式有效：价格已反映所有历史价格信息，技术分析无效
- 半强式有效：价格已反映所有公开信息，基本面分析长期无超额收益
- 强式有效：价格已反映所有信息（含内幕），内幕交易也无法持续获利

**实证检验**：
- 股息率能否预测收益？统计检验 t 值仅为 **0.90**，不显著
- 技术指标（均线、RSI 等）在学术研究中未发现稳定超额收益

---

## 延伸阅读

**Wikipedia**
- [Initial public offering](https://en.wikipedia.org/wiki/Initial_public_offering)
- [Variable interest entity](https://en.wikipedia.org/wiki/Variable_interest_entity)
- [American depositary receipt](https://en.wikipedia.org/wiki/American_depositary_receipt)
- [Capital asset pricing model](https://en.wikipedia.org/wiki/Capital_asset_pricing_model)
- [Efficient-market hypothesis](https://en.wikipedia.org/wiki/Efficient-market_hypothesis)
- [Exchange-traded fund](https://en.wikipedia.org/wiki/Exchange-traded_fund)
- [Short (finance)](https://en.wikipedia.org/wiki/Short_(finance))
- [GameStop short squeeze](https://en.wikipedia.org/wiki/GameStop_short_squeeze)
- [Special-purpose acquisition company](https://en.wikipedia.org/wiki/Special-purpose_acquisition_company)
- [Dark pool](https://en.wikipedia.org/wiki/Dark_pool)

**YouTube**
- [How does an IPO work? — Wall Street Survivor](https://www.youtube.com/watch?v=5qlSCj-lKDE)
- [What is CAPM? — Investopedia](https://www.youtube.com/watch?v=YoqmHCYC3K0)
- [VIE Structure Explained — China Law Translate](https://www.youtube.com/watch?v=5ufFZrI0hn8)
- [How ETFs Work — Patrick Boyle](https://www.youtube.com/watch?v=3x_FoRxmQYs)
- [GameStop Short Squeeze Explained — CNBC](https://www.youtube.com/watch?v=SktGiPL29X0)
