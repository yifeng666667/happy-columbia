---
title: "SESSION 8：产品开发与产品-市场契合——怎么知道你做对了？"
order: 8
session: "8"
---

## 这节课在回答什么

**2010 年，Slack 的前身是一个叫 Glitch 的多人在线游戏，开发了 3 年，投入了数百万美元，最终失败关闭。**

**但在 Glitch 的开发过程中，团队为了内部沟通做了一个内部工具。**

**2013 年，Stewart Butterfield 和团队决定把 Glitch 关掉，但把那个内部工具单独做成产品卖给外部——这就是 Slack。**

**Slack 2019 年直接上市，市值 230 亿美元。**

Glitch 是一个典型的"做了不该做的产品"的故事；Slack 是一个"在做错误事情的过程中，偶然发现了真正该做的产品"的故事。

产品开发不是一条从 A 到 B 的直线，而是一个不断寻找信号、不断重新定向的过程。

![产品开发与迭代](https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&q=80)
*产品路线图（Roadmap）是一张关于未来的猜想清单，不是承诺。最好的产品团队每隔 6 周就会大幅调整路线图——因为他们从用户行为中学到了足够多，知道之前的假设有哪些需要更新。*

## 一、什么是真正的"产品-市场契合"（PMF）？

Marc Andreessen 2007 年在他的博客文章中定义了 PMF 的概念：

> "You can always feel when product-market fit isn't happening. The customers aren't quite getting value out of the product, word of mouth isn't spreading, usage isn't growing that fast, press reviews are kind of 'blah', the sales cycle takes too long, and lots of deals never close. And you can always feel product-market fit when it is happening. The customers are buying the product just as fast as you can make it — or usage is growing just as fast as you can add more servers. Money from customers is piling up in your company's checking account."

**PMF 的直观感受：** 产品在"被拉着"增长，而不是"被推着"增长。当你达到 PMF 时，增长的问题变成"怎么满足需求"，而不是"怎么让人来用"。

**Slack 的 PMF 时刻：** 推出第一天，Slack 就有 8000 家企业申请测试账号；第一周结束时有 15000 家。Butterfield 后来回忆，"我们原本准备了大量销售材料，结果根本用不上——人们主动来找我们。"

**Facebook 的 PMF 信号：** 上线第一周就有 1200 名哈佛学生注册（当时哈佛有 19000 名学生），而且大多数注册用户在第一周内来回了七次——这种使用频率信号，告诉扎克伯格这不是"好奇心驱动"的一次性尝试。

## 二、敏捷开发与产品迭代

**敏捷开发（Agile Development）** 是目前软件产品开发的主流方法论——它的本质是：用短周期（Sprint，通常 1-2 周）的迭代取代"大版本发布"，以便快速响应用户反馈和市场变化。

**Scrum 框架（最常用的敏捷实践）：**
- **Sprint（冲刺）：** 1-2 周为一个周期，每个 Sprint 有明确目标
- **每日站会（Daily Standup）：** 15 分钟，每人三个问题：昨天做了什么/今天做什么/有没有阻碍
- **Sprint 回顾（Retrospective）：** 每个 Sprint 结束后，团队讨论什么做对了、什么需要改进
- **产品待办列表（Product Backlog）：** 所有待做功能的优先级列表，由产品负责人（Product Owner）维护

**敏捷对创业公司的意义：** 创业公司的核心竞争优势之一是"速度"——在大公司里需要三个月讨论才能立项的功能，创业公司可以三周内上线并拿到真实用户反馈。敏捷方法是保持这种速度的系统性工具。

## 三、产品优先级：如何决定先做什么

早期产品团队（通常 2-5 人）面临的最大挑战不是"想出新功能"，而是"如何在几百个可能有价值的功能中，找到最值得现在做的那几个"。

**几种常用的优先级框架：**

**RICE 框架：**  
- **R（Reach）：** 这个功能影响多少用户？（每季度触达的用户数）
- **I（Impact）：** 对每个用户的影响力有多大？（1-3 评分：1=低，2=中，3=高）
- **C（Confidence）：** 对 Reach 和 Impact 估算的置信度？（百分比）
- **E（Effort）：** 需要多少工程工作量？（人月数）
- **RICE 分数 = (R × I × C) / E**
- 分数越高，越优先

**Impact/Effort 矩阵：**  
把所有待做功能按"影响力"（高/低）× "工作量"（高/低）排进四个象限：
- 高影响力 + 低工作量 → 立刻做（Quick Wins）
- 高影响力 + 高工作量 → 认真规划（Big Bets）
- 低影响力 + 低工作量 → 可考虑但非优先（Fill-Ins）
- 低影响力 + 高工作量 → 永远不做（Time Sinks）

**用户故事（User Stories）：**  
把所有功能需求写成"作为[用户类型]，我希望[做某件事]，这样我能[获得某个结果]"的格式，强迫产品团队从用户角度而非技术角度思考功能。

## 四、何时该在产品上做大赌注（Big Bets）？

早期产品开发存在一个张力：**过于小步快跑，可能永远无法做出真正差异化的产品；过于追求大功能，可能在方向错误上浪费大量时间。**

**经验法则：**

- 在找到 PMF 之前，**一切都是实验**，保持小步快跑，快速学习
- 找到 PMF 之后，**有选择地做大赌注**——围绕你已经验证的核心价值，深度投入能建立竞争壁垒的功能

Figma 的故事是一个很好的例子：在 2013-2016 年间，Figma 的创始人 Dylan Field 花了大量时间在一个技术赌注上——把专业设计软件搬到浏览器里（当时业界主流观点是"浏览器无法做专业设计工具"）。这是一个花了三年、投入大量工程资源的大赌注，但这个赌注成为了 Figma 最核心的竞争壁垒，让 Adobe 都无法简单复制。2022 年 Adobe 以 200 亿美元试图收购 Figma（后因监管被否）。

## 为什么重要

产品开发不是"把想要的功能做出来"——而是"持续地发现什么是真正有价值的，快速地做到，快速地验证，然后根据反馈重新定向"。

最危险的状态是：团队非常努力地在构建没有人想要的东西。精益创业和敏捷方法的本质，是把"发现我们做错了"的成本从"6 个月 + 几百万美元"降低到"2 周 + 工程时间"。

**Slack、Instagram、YouTube、Twitter——这些公司的最终成功形态，和它们第一天的想法几乎都完全不同。** 保持开放，持续从用户那里学习，是产品开发最核心的能力。

## 延伸阅读 / 公开资源

- **Wikipedia - [Slack (software)](https://en.wikipedia.org/wiki/Slack_(software))**：Slack 从游戏公司内部工具到协作软件巨头的完整进化历程
- **Wikipedia - [Agile software development](https://en.wikipedia.org/wiki/Agile_software_development)**：敏捷开发的原则、框架和与传统瀑布开发的对比
- **YouTube - ["Product market fit how to know"](https://www.youtube.com/watch?v=7SnqmMfZ3Q4)**：Marc Andreessen 和其他 VC 关于如何识别 PMF 的讨论
- **Wikipedia - [Scrum (software development)](https://en.wikipedia.org/wiki/Scrum_(software_development))**：Scrum 框架的详细介绍和实践指南
- **YouTube - ["Product prioritization RICE framework"](https://www.youtube.com/watch?v=NLdzE2Qw37A)**：RICE 优先级框架的实操应用和案例
