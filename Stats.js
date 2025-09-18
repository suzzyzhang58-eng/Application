// Stats.js 示例片段
const Stats = () => {
  return (
    <div>
      <h2>Financial Insights from Music Data</h2>
    
      {/* 模块 1: 趋势分析 -> 隐喻财务预测 */}
      <Section title="Revenue Trend Analysis">
        <p>Just as we predict the next hit song based on streaming trends, 
        in accounting, we use <strong>time-series analysis</strong> to forecast 
        company revenue and manage cash flow.</p>
        <LineChart data={revenueData} /> {/* 展示一个趋势图 */}
      </Section>

      {/* 模块 2: 成本结构分析 -> 隐喻成本会计 */}
      <Section title="Cost Structure Breakdown">
        <p>Breaking down music production costs (studio time, marketing, royalties) 
        mirrors <strong>cost accounting</strong> in businesses, where we allocate 
        expenses to products or departments to determine profitability.</p>
        <PieChart data={costData} /> {/* 展示一个饼图 */}
      </Section>

      {/* 模块 3: 排行榜 -> 隐喻绩效评估 */}
      <Section title="Performance Leaderboard">
        <p>Ranking top artists by streams is analogous to ranking 
        <strong> sales teams or products by revenue</strong>, a key task in 
        managerial accounting for performance evaluation.</p>
        <Table data={leaderboardData} /> {/* 展示一个表格 */}
      </Section>
    </div>
  );
};
