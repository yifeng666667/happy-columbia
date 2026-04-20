---
title: "CDS、利率互换与外汇互换"
order: 6
session: "6"
---

## 这节课在回答什么

1981年，IBM持有大量欧洲债务（德国马克和瑞士法郎计价），而世界银行需要欧洲融资但手头是美元债务。所罗门兄弟（Salomon Brothers）把他们撮合在一起——IBM把欧洲现金流换给世界银行，世界银行把美元现金流换给IBM。双方各取所需，没有任何资产转手。

这是**人类历史上第一笔货币互换（Currency Swap）**。

四十多年后，这个逻辑演化出了今天日均成交量超过 **5.2 万亿美元** 的互换市场——全球 Fortune 500 公司有 92% 在用这些工具，不是为了投机，而是为了**把自己不想要的现金流，换成自己想要的那种**。这节课讲三种最重要的形式：信用违约互换（CDS）、利率互换（IRS）、外汇互换（FX Swap）。

## 一、一个惊人的事实：发达国家大公司几乎都用衍生品

2022 年的一个统计显示，Fortune 500 公司里使用金融衍生品的比例：

| 国家 | 使用率 |
|---|---|
| 英国、法国、加拿大、荷兰、日本、瑞士 | **100%** |
| 德国 | 97% |
| 美国 | 92% |
| 韩国 | 87% |
| 中国 | 62% |

衍生品不是"投机工具"，而是现代公司风险管理的**标配**。BIS 三年期调查显示，2022 年全球利率衍生品日均成交量达到 **5.2 万亿美元**——每天就有 5 万多亿的利率互换在做。

## 二、CDS：把信用风险转手

可以把 CDS 理解成一种保险合同，只不过买保险的人不需要真的持有被保险的债券——就像你可以买邻居房子的火险一样。卖方收保费，发生"火灾"（违约）时赔款。

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/CDS-nodefault.PNG/500px-CDS-nodefault.PNG" alt="CDS 正常情况下的现金流" style="width:100%;max-width:500px;border-radius:8px;margin:1rem 0;" />

*CDS 在没有违约时：买方定期支付"保费"（spread），卖方无需支付任何款项。*

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/CDS-default.PNG/500px-CDS-default.PNG" alt="CDS 违约时的现金流" style="width:100%;max-width:500px;border-radius:8px;margin:1rem 0;" />

*CDS 发生违约时：卖方向买方支付（名义本金 × 违约损失率），合约随即终止。*

> **📖 故事：迈克尔·伯里——一个人发明了做空次贷的方法**
>
> 2005年，一位眼科医生转行的对冲基金经理，在车库改建的办公室里，花了几个月阅读几百份按揭债券的募股说明书——那些连华尔街分析师都从不去读的文件。他发现了一件令人震惊的事：大量评级"AAA"的按揭债券里，藏着成千上万笔"NINJA贷款"（No Income, No Job, No Assets——无收入、无工作、无资产的借款人）。
>
> 他确信这些债券将会崩塌，但当时根本没有工具可以做空它们。于是他跑去高盛、摩根士丹利、德意志银行，强烈要求它们给他**发明一种针对按揭债券的CDS**。银行家们觉得他疯了，但既然有钱赚，就同意了。
>
> 此后两年，他的基金每年支付高额保费，同事们认为他在烧钱，出资人要求他停止。然后2007年到了——然后2008年到了。
>
> 崩盘结束时，他的投资人获得了 **489% 的回报**，伯里本人从这笔交易中赚取了超过 **1亿美元**。
>
> *他的故事揭示了CDS的本质力量：任何人，只要真正理解了底层资产的风险，都可以用CDS来精确表达自己的判断——无论是做多还是做空。工具本身没有立场，有立场的是使用者的洞察力。*

### 2.1 基本机制

**CDS 是一份私下合同**：
- **保护买方（Protection Buyer）**——向卖方定期支付"保费"
- **保护卖方（Protection Seller）**——承诺在"参考实体"（如 Telecom Italia）发生信用事件时赔付

**"信用事件"** 包括：破产、拒付、债务重组。

**一个重要特征**：买方**不需要真的持有**参考实体的债券就能买 CDS——你可以纯粹为对冲或投机。卖方也不在意你为什么买。

### 2.2 一个具体例子：Telecom Italia（TIM）CDS

| 参数 | 值 |
|---|---|
| 参考信用 | Telecom Italia SpA |
| 期限 | 5 年 |
| 名义本金 | €10,000,000 |
| 信用事件 | 破产、拒付、重组 |
| 价格 | 193 bps |

**运作方式**：
- **正常时期**：买方每季度支付 193 bps × €10M / 4 = €48,250
- **信用事件发生后**：卖方支付 €10M × (1 - 回收率)，例如回收率 40%，卖方付 €6M

### 2.3 CDS 市场的规模演变

| 时间 | 名义存量（万亿美元） |
|---|---|
| 1997 年 12 月 | 0.2 |
| 2007 年 12 月 | **61.2**（峰值） |
| 2010 年 12 月 | 30.7 |
| 2015 年 12 月 | 12.4 |
| **2023 年 12 月** | **8.5** |

峰值的 61.2 万亿美元有部分是**重复计算**（A 从 B 买，B 从 C 买，实际上是一条链）——2009 年危机后通过**三方净额清算**，名义存量减少了约 3 倍。

**今天的 CDS 市场构成**（2023 年 12 月）：

- 非金融公司 29%
- 金融公司 18%
- 多行业篮子（index CDS）37%
- 主权 13%
- 证券化产品 3%

### 2.4 "Running Spread"与"Upfront Payment"

**合约标准化**：大多数今天的 CDS 使用 **"running spread"**（固定票息）为 100、250、500 或 1000 bps（欧洲）或 100、500 bps（美国）。

**Telecom Italia 的例子**：市场价 193 bps，但合约约定运行 spread 100 bps。差额 93 bps 怎么办？
- 买方**事先一次性支付** PV(93 bps × 5 年) 给卖方
- 然后每季度只支付 100 bps 的运行 spread

这种设计让 CDS 合约极其标准化，交易效率很高。

### 2.5 如何在信用事件后确定赔付金额

**问题**：信用事件发生后，到底应该赔多少？全额名义本金显然不公平——例如 2008 年 Northern Rock 违约后债权人最终**全额回收**，按名义本金赔付就离谱了。

**解决方案：ISDA CDS Protocol**——标准化的现金清算流程。

**流程**：
1. ISDA **决议委员会**（由主要 CDS 交易商组成）决定是否发生了信用事件
2. Markit / S&P Global 组织**拍卖**
3. 一组银行投标参考实体的债券价格（"最终价格"）
4. 卖方支付买方 (100% - 最终价格) × 名义本金

### 2.6 实战案例：2022 年乌克兰 CDS 拍卖

**2022 年 9 月 28 日**，乌克兰冻结海外债务支付，CDS 拍卖结果：
- 最终价格 = **17.875%**
- 保护卖方支付 (100% - 17.875%) × 名义本金 = **82.125% × 名义本金**

### 2.7 Europcar 的"零赔付"奇闻

**2020 年末**，法国租车公司 Europcar 违约。CDS 拍卖却**给出了 100 的价格——也就是保护买方一分钱赔付都没拿到**。

原因：
- 债务重组条款阻止了大多数债券持有人参加拍卖
- 投标的债券面值 €7.4M 超过卖盘
- 按规则最终价格自动变为 100

**教训**：**人心的惰性和疫情居家办公让行业人错过了这个消息**。"这是我们最害怕的事情：大家都指望别人提供流动性，结果没人出手。"

### 2.8 一份历年重要 CDS 拍卖结果表

| 实体 | 拍卖日期 | 最终价格 |
|---|---|---|
| Avon Products | 2024 年 9 月 | **34** |
| Rite Aid | 2023 年 11 月 | 2 |
| Diamond Sports | 2023 年 4 月 | 1.75 |
| Ukraine | 2022 年 9 月 | 17.875 |
| Russian Federation | 2022 年 9 月 | 56.125 |
| Europcar | 2021 年 1 月 | 100 ⚠️ |
| Hertz | 2020 年 6 月 | 26.375 |
| Argentine Rep | 2020 年 6 月 | 31.5 |
| JC Penney | 2020 年 6 月 | 0.125 |
| Frontier Communications | 2020 年 5 月 | 28.75 |
| Lebanese Republic | 2020 年 4 月 | 14.125 |
| Puerto Rico Commonwealth | 2016 年 8 月 | 58.5 |
| Hellenic Republic | 2012 年 3 月 | 21.5 |
| Lehman Brothers | 2008 年 10 月 | 8.625 |

### 2.9 从 CDS 看真实的信用状况

特别值得关注的是：**CDS spread 是市场对信用风险的"实时定价"，比信用评级机构灵敏得多**。

**一些 2024 年典型的 5 年 CDS spread**（越高表示市场认为风险越高）：

| 实体 | 行业 | CDS spread (bps) |
|---|---|---|
| Sony | 消费电子 | 20 |
| General Electric | 工业 | 31 |
| Marriott | 酒店 | 53 |
| TEPCO | 电力 | 55 |
| BP | 能源 | 63 |
| Credit Suisse（被 UBS 收购前） | 银行 | 1000+（峰值）→ 80 |
| Turkey Isbank | 银行 | 383 |
| Ford | 汽车 | 168 |
| Volkswagen | 汽车 | 112 |
| United Airlines | 航空 | 303 |
| Softbank | 综合 | 196 |
| Pemex | 能源（墨西哥国企） | 515 |
| Greentown China | 中国地产 | 810 |

**市场不太尊重评级机构**——欧洲 BBB 评级的公司 CDS spread 差异巨大，从 29 bps（Wolters Kluwer）到 116 bps（Smiths Group）。评级机构有影响力，但市场自有判断。

### 2.10 Index CDS：一篮子 CDS

**Index CDS = 一组 CDS 的组合**。2024 年最活跃的几个：

| 指数 | 成分 |
|---|---|
| **iTraxx Europe Main** | 125 家欧洲投资级公司 |
| iTraxx Europe Crossover | 75 家欧洲次投资级公司 |
| iTraxx Asia Japan | 50 家亚洲投资级 |
| iTraxx SovX | 西欧最活跃的 15 个主权 |
| **CDX.NA.IG** | 125 家北美投资级 |
| **CDX.NA.HY** | 100 家北美高收益 |

**每 6 个月"rolls"一次**——发布新的一期，按最活跃的成分重新打包。

**机制**：
- 买方定期支付 100 bps running spread 加 / 减 upfront
- 任一成分发生信用事件，卖方按 1/125（或 1/100）× 名义本金赔付

**iTraxx Europe 典型水平**：
- 2012 年欧债危机 ≈ 200 bps
- 2020 年疫情初期 ≈ 138 bps
- 2022 年能源危机 ≈ 138 bps
- 2024 年平稳期 ≈ 53 bps

如果 iTraxx Europe 在 138 bps，假设 50% 回收率，买方需要 1.38% ÷ (50% × 0.80%) ≈ **3.4 次违约/年**才能打平——意味着 5 年内需要 17 家高评级欧洲公司违约才能回本。要**赚 2 倍**需要 34 家违约。这种事"一般不会发生"，所以 CDS 卖方是稳赚的生意？——**并不**，因为尾部风险：一旦发生大规模违约，损失呈指数级。

## 三、利率互换（IRS）：把固定换成浮动

<img src="https://upload.wikimedia.org/wikipedia/commons/9/96/IRSflows.png" alt="利率互换现金流示意图" style="width:100%;max-width:600px;border-radius:8px;margin:1rem 0;" />

*利率互换：两方交换利率现金流，但本金不发生转移。一方付固定，一方付浮动。*

利率互换的本质其实很简单——想象两个人交换贷款条件：一个人有固定利率贷款但想要浮动，另一个人有浮动利率贷款但想要固定，互换之后两人都满足了需求，本金一分钱都不动。

### 3.1 一个真实问题：Lockheed Martin 想借浮动利率

**背景**：Lockheed Martin 需要 **1 亿美元、5 年、浮动利率**融资。

**直接发行 FRN 的问题**：
- Lockheed 最出名的是其固定利率债券（美国投资者偏好）
- 它的业务（国防）和欧洲 ESG 政策冲突
- 直接发 FRN 可能要 **SOFR + 100 bps** ≈ 约 4.4% → 太贵

**更好的策略**：**发行固定利率债 + 进入 IRS**
- 5 年国债 3.48%
- Lockheed 发行 5 年固定利率债 T + 37 bps = **3.85%**
- 同时签订一份 IRS 把 3.85% 换成浮动

### 3.2 IRS 的条款

与 Citibank 的 5 年 USD IRS：

| 参数 | 值 |
|---|---|
| 固定利率支付方 | **Citibank** |
| 浮动利率支付方 | **Lockheed** |
| 开始 | 2024-09-30 |
| 结束 | 2029-09-30 |
| 固定利率 | 3.40% p.a.，半年付息（30/360） |
| 浮动利率 | 3 个月 SOFR，每日重置，季度付息 |
| 名义本金 | $100,000,000 |
| 币种 | USD |

**每半年**，Citibank 付 Lockheed：3.40% × $100M × 1/2 = **$1,700,000**
**每季度**，Lockheed 付 Citibank：SOFR × $100M × 1/4

**本金不交换**——只有利差现金流。

### 3.3 组合后的净效果

```
Lockheed → 债券投资者：3.85% 固定（每半年）
Lockheed ← Citibank：3.40% 固定（IRS）
Lockheed → Citibank：SOFR 浮动（IRS）
```

**净效果**：Lockheed 每年净支付 **SOFR + 45 bps**（= 3.85% - 3.40% + SOFR）

**相比直接发 FRN（SOFR + 100 bps）**，每年**节省 55 bps × $100M = $550,000**，五年总共节省 $2.75M。

> 一个核心洞察：**套利让所有的融资形式最终收敛到同一水平**。Lockheed 的信用成本是"一维的"——无论它借固定、借浮动、借 USD、借 EUR，最终的信用差额大致相同。

### 3.4 Swap rate 是怎么决定的

**Swap rate = 市场对未来 SOFR 平均值的预期**。

如果交易员相信未来 5 年 SOFR 平均会是 3.5%，他们会要求 5 年 swap rate 接近 3.5%。如果大家预期降息，swap rate 就会低于当前 SOFR；反之亦然。

**Citibank 的 bid-ask 报价**：5 年 USD swap：3.40% bid / 3.42% ask
- 如果 Lockheed 想**收固定**付浮动：Citibank 付 3.42%
- 如果 Lockheed 想**付固定**收浮动：Citibank 付 3.40%
- 差额 2 bps = Citibank 的做市利润

Citibank 作为 **做市商**，它的 book 大致对冲——一头做多，一头做空，靠 bid-ask spread 赚钱，不赌利率方向。

### 3.5 Swap 曲线：利率的"时间结构"

不同期限的 swap rate 画出来就是 **swap curve（互换曲线）**，也被称为"收益率曲线"的一种。

**2024 年 9 月 16 日 swap 曲线**：

| 期限 | USD | EUR | GBP |
|---|---|---|---|
| 3M | 5.20% | 3.29% | 5.06% |
| 2Y | 3.65% | 2.31% | 3.97% |
| 5Y | 3.40% | 2.28% | 3.66% |
| 10Y | 3.45% | 2.37% | 3.78% |
| 30Y | 3.41% | 2.25% | 3.82% |

**看形状**：
- USD 倒挂（市场预期美联储降息）
- EUR 中间凹下（近期已降息，远期稍回升）
- GBP 类似 USD 倒挂
- JPY：**严格上行**（日本利率刚开始正常化）

### 3.6 对手方信用风险

**IRS 双方都面临对手方信用风险**：
- 固定利率付款方（Citibank）承担 Lockheed 违约风险
- 浮动利率付款方（Lockheed）承担 Citibank 违约风险

**一个重要观察**：对手方暴露**在合约生命中期最大**。
- 开始时：利率没怎么变，双方都不欠对方太多
- 中期：利率累计变化最大，暴露峰值
- 接近到期：剩余支付时间短，暴露减小

### 3.7 ISDA 主协议的作用

**ISDA Master Agreement** 是全球 OTC 衍生品交易的法律基础：
- 定义标准术语
- 允许**信用净额结算（close-out netting）**——如果一方违约，所有未平仓合约可以一次性净额结算
- **Credit Support Annex (CSA)** 定义抵押品要求（类似期货的保证金）

### 3.8 监管透明化

**Dodd-Frank（2013 年起）** 要求美国活跃交易商**实时报告**所有 swap 交易到 DTCC。这让以前完全不透明的 OTC 市场变得几乎完全可观察。

**类似规则**：欧盟 EMIR、日本 FSA、中国（习近平时代强化）。

## 四、外汇互换（FX Swap / Currency Swap）

### 4.1 机制：和 IRS 最大的区别

外汇互换最关键的地方在于：**本金会在开始和结束时真实交换**。想象一下，一家法国公司想借美元，一家美国公司想借欧元，双方通过互换"分享"各自在本国市场的融资优势，一手换一手，利息也跟着换，到期再换回来。

**FX Swap 交换本金**（IRS 不交换）：

**初始交换**：
```
Investor → 买 €5M 欧元债券
Investor ← $5.5M USD ← Swap 对手方
Investor → €5M EUR → Swap 对手方
```

**定期支付**：
```
Investor ← Euribor × €5M ← 债券
Investor ← SOFR × $5.5M ← Swap 对手方
Investor → Euribor × €5M → Swap 对手方
```

**终极交换**：
```
Investor ← €5M ← 债券（到期）
Investor ← $5.5M ← Swap 对手方
Investor → €5M → Swap 对手方
```

### 4.2 为什么这是公平交易？

**EUR 侧**：对手方预付 €5M，每期收 Euribor，到期收回 €5M——**等价于按面值计价的 EUR FRN**。

**USD 侧**：对手方收到 $5.5M，每期付 SOFR，到期归还 $5.5M——**等价于按面值计价的 USD FRN**。

**两边都等价于 FRN**，所以交易公平——双方只是把一种货币的 FRN 换成另一种货币。

### 4.3 谁在用 FX Swap

- **跨境融资**：一家法国公司在美国发美元债（更便宜），然后通过 FX swap 换回 EUR
- **跨境投资**：一位美国投资者想买日本 JGB，但不想承担日元风险——FX swap 把 JGB 的现金流换成 USD
- **全球银行**：管理其全球资产负债表的货币风险

### 4.4 Kering（Gucci 母公司）的套利套装

**一个优雅的例子**：Kering 有多种发行形式，经过各种互换后，**信用风险都是同一个**。

**Kering 5 年 CDS = 75 bps**（市场认为其 5 年内违约概率极低）。

**5 年 swap rates**：
- JPY: 0.60%
- USD: 3.40%
- EUR: 2.28%

**它可以发行的组合**：

| 类型 | 票息 | 币种 | 价格 |
|---|---|---|---|
| FRN | SOFR + 0.75% | USD | 100 |
| FRN | Euribor + 0.75% | EUR | 100 |
| FRN | TONA + 0.75% | JPY | 100 |
| FRN | SOFR + 1.25% | USD | **102.5** |
| Fixed | 4.15% | USD | 100 |
| Fixed | 5.25% | USD | **104.5** |
| Fixed | 3.50% | USD | 97.3 |
| Fixed | 1.35% | JPY | 100 |
| Fixed | 3.03% | EUR | 100 |

**观察**：所有浮动利率版本都是 "基准 + 75 bps"，**这个 75 bps 正好等于 Kering 的 5 年 CDS**。

**套利确保这些都统一**——如果某一个便宜，套利者会借便宜的、卖贵的，直到价格回到统一。

## 五、核心要点回顾

1. **衍生品是现代公司风险管理的标配**——Fortune 500 的 92-100% 都在用
2. **CDS 是"信用保险"**，但不是法律意义上的保险——买方不必持有底层资产
3. **CDS spread 是市场对信用风险的实时定价**，比信用评级灵敏得多
4. **ISDA Protocol + 拍卖机制** 让 CDS 清算标准化
5. **IRS 是全球最大的衍生品市场**（日均 5.2 万亿美元）——核心用途是把固定换浮动，或反之
6. **Lockheed 例子** 展示 IRS 如何节省 55 bps 的融资成本
7. **Swap rate = 市场对未来短期利率的预期** + 信用风险 spread
8. **FX Swap 交换本金**（IRS 不交换），是跨币种融资和投资的核心工具
9. **信用风险是一维的**——套利确保无论以哪种形式呈现，同一发行人的信用成本相同
10. **Dodd-Frank 后所有 swap 交易都要报告 DTCC**——OTC 市场几乎完全透明了

## 延伸阅读

- [Wikipedia：Credit default swap](https://en.wikipedia.org/wiki/Credit_default_swap)
- [Wikipedia：Interest rate swap](https://en.wikipedia.org/wiki/Interest_rate_swap)
- [Wikipedia：Currency swap](https://en.wikipedia.org/wiki/Currency_swap)
- [Wikipedia：ISDA Master Agreement](https://en.wikipedia.org/wiki/ISDA_Master_Agreement)
- [Wikipedia：CDX (index)](https://en.wikipedia.org/wiki/Credit_default_swap_index)
- [What is a Credit Default Swap? — Patrick Boyle](https://www.youtube.com/watch?v=X_FaPuqG_PU)
- [Interest Rate Swap — Khan Academy](https://www.youtube.com/watch?v=PLjyj1FJqig)
