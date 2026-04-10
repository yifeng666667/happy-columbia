---
title: "第一步：历史绩效分析——用 DuPont 拆解 ROE"
order: 1
session: "1"
---

## 引入：为什么要看历史？

在做任何预测之前，你必须先搞清楚：这家公司过去是靠什么赚钱的。

同样是 ROE（股东权益回报率）= 20%，背后可能完全不同：
- **苹果**：靠超高利润率（Profit Margin）——卖得贵
- **沃尔玛**：靠极高资产周转（Asset Turnover）——卖得快
- **金融机构**：靠高杠杆（Financial Leverage）——借了很多钱

如果你不知道 ROE 是从哪里来的，就无法判断它能不能持续——这正是 **DuPont 分析**的价值。

---

## 核心框架：DuPont 公式

ROE 可以拆解成三个驱动因素：

```
ROE = 利润率 × 资产周转率 × 财务杠杆

     Net Income     Sales      Assets
   = ────────── × ──────── × ──────────────
       Sales        Assets    Shareholders' Equity

     (盈利能力)    (效率)      (杠杆)
```

### 三个维度的含义

**① 盈利能力（Profitability）——NI/Sales**

公司每赚 100 块钱的收入，能留下多少净利润？

| 指标 | 公式 | 含义 |
|---|---|---|
| 毛利率（Gross Margin） | (Sales − COGS) / Sales | 产品本身的定价能力 |
| 营业利润率（OPM） | EBIT / Sales | 扣掉所有运营成本后的效率 |
| 净利率（Net Margin） | Net Income / Sales | 最终到股东口袋的比例 |

> **EBIT vs EBIAT vs NOPLAT**：三个都是衡量「不含利息的经营利润」的指标，区别在于是否扣税。EBIAT = EBIT × (1 − 税率)，也叫 NOPLAT（Net Operating Profit Less Adjusted Taxes）。在预测现金流时，我们用 EBIAT。

**② 效率（Efficiency）——Sales/Assets**

公司每投入 1 块钱的资产，能产生多少收入？

| 指标 | 公式 | 含义 |
|---|---|---|
| 资产周转率（Asset Turnover） | Sales / Total Assets | 资产使用效率，越高越好 |
| 存货天数（DOH） | Inventory / (COGS/365) | 存货压了多少天才卖出去 |
| 应收账款天数（DSO） | AR / (Sales/365) | 收款有多慢 |

**③ 杠杆（Leverage）——Assets/Equity**

公司用了多少借来的钱来放大股东回报？

| 指标 | 公式 | 含义 |
|---|---|---|
| D/C 比率（Debt to Capital） | Debt / (Debt + Equity) | 债占总资本的比例 |
| D/E 比率（Debt to Equity） | Debt / Equity | 每 1 块自有资金配了多少债 |
| 利息保障倍数（Interest Coverage） | EBIT / Interest | 利润能覆盖利息几倍 |

---

## 案例：资本结构练习题

看一家公司的财务数据：

**利润表**

| 项目 | 金额 |
|---|---|
| Sales | 100 |
| COGS | 60 |
| SG&A | 22 |
| **EBIT** | **18** |
| Interest | 6 |
| EBT | 12 |
| Tax (25%) | 3 |
| **Net Income** | **9** |

**资产负债表**

| 资产 | 金额 | 负债 & 权益 | 金额 |
|---|---|---|---|
| Cash | 5 | Automatic Sources | 50 |
| Inventory | 20 | Debt | 50 |
| AR | 25 | Shareholders' Equity | 50 |
| Current Assets | 50 | Total L&SE | 150 |
| Net Fixed Assets | 100 | | |
| **Total Assets** | **150** | | |

市值（MV of Equity）= 150

### 计算关键指标

**1. D/C 比率**（注意：账面值 vs 市值 结果不同）

```
@ 账面价值（Book Value）：
  Capital = Debt + BV Equity = 50 + 50 = 100
  D/C = 50 / 100 = 50%
  D/E = 50 / 50 = 100%

@ 市场价值（Market Value）：
  Capital = Debt + MV Equity = 50 + 150 = 200
  D/C = 50 / 200 = 25%
  D/E = 50 / 150 = 33%
```

> **关键提示**：评级机构使用账面价值（BV）计算 D/C，因为市值会随股价波动。但在 WACC 计算中，用市值权重更准确。

**2. 利息保障倍数（Interest Coverage）**

```
= EBIT / Interest = 18 / 6 = 3.0x
```

3.0x 意味着：就算 EBIT 下降 2/3，公司仍然勉强能支付利息。

**3. 营业利润率（OPM）**

```
= EBIT / Sales = 18 / 100 = 18%
```

---

## 三大回报率指标

除了 ROE，课程中还会用到两个更全面的回报率：

| 指标 | 公式 | 使用场景 |
|---|---|---|
| ROE（股权回报率） | Net Income / Shareholders' Equity | 衡量股东的回报 |
| ROA（资产回报率） | Net Income / Total Assets | 衡量资产利用效率 |
| ROIC（投入资本回报率） | EBIAT / Invested Capital | **跨公司比较**，剔除资本结构差异 |

**Invested Capital（投入资本）** = 所有付息债务（Notes Payable、短期债、长期债、可转债）+ 账面股权

ROIC 的好处是：它是在税后、剔除利息的基础上计算的，不受公司融资方式（用债还是用股）影响，可以直接对比不同杠杆率的公司。

---

## 核心结论

> 分析历史绩效的目的，不是为了「记住数字」，而是为了**找到合理的预测假设**。历史数据中的平均利润率、周转率、杠杆水平，将直接成为你在第二步中预测未来利润表和资产负债表的基准。
